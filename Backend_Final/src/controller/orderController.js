const {
  getAllBill,
  getBillById,
  addBillDetails,
  addBill,
  getBillIDByDate,
  getAllBillByDay,
  deleteBillByID,
  updateBillStatus,
  getBillUnfinished,
  getBillFinished,
  getBillDetails,
} = require("../services/orderServices");
const tools = require("../tool");
const moment = require("moment");

const getBillList = async (req, res) => {
  try {
    console.log("get bill list");
    let data = await getAllBill();
    data.DT.forEach((item) => {
      item.Date = moment(moment(item.Date).toDate()).format(
        "DD/MM/YYYY hh:mm:ss"
      );
    });
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(200).json({
      EM: "Error from server", //error message
      EC: -1, //error code
      DT: error.message, //data
    });
  }
};

const createBill = async (req, res) => {
  try {
    const { StaffID } = req.body;
    const { BillDetails } = req.body; //array
    const today = tools.getCurrentDateTime();
    console.log(today);
    //create bill
    let bill = await addBill(StaffID, today);

    //get bill id by date
    let billID = await getBillIDByDate(today);
    if (billID != -1) {
      //create bill details (array)
      console.log(BillDetails);
      BillDetails.map(async (detail) => {
        let billdetails = await addBillDetails(
          billID,
          StaffID,
          detail.ID,
          detail.Quantity,
          detail.Price
        );
        if (billdetails.EM.includes("Error")) {
          return {
            EM: billdetails.EM,
            EC: 1,
            DT: [],
          };
        }
      });
      return request.status(200).json({
        EM: "Success",
        EC: bill.EC,
        DT: bill.DT,
      });
    } else {
      return res.status(500).json({
        EM: bill.EM,
        EC: bill.EC,
        DT: bill.DT,
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      EM: "Error at create bill", //error message
      EC: -1, //error code
      DT: error.message, //data
    });
  }
};

const getLevel0 = async (req, res) => {
  try {
    console.log("order controller is running..");
    let id = req.params.id;
    // console.log(id);
    let check = tools.isNumberic(id);
    let data = [];
    if (check) {
      data = await getBillDetails(id);
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    } else {
      //get bill with status = 0
      if (id == "unfinished") data = await getBillUnfinished();
      else if (id == "finished") data = await getBillFinished();
    }
    data.DT.forEach((item) => {
      item.Date = moment(moment(item.Date).toDate()).format(
        "DD/MM/YYYY hh:mm:ss"
      );
    });
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    return res.status(500).json({
      EM: "Error at Controller",
      EC: -1,
      DT: "",
    });
  }
};

const deleteBill = async (req, res) => {
  try {
    const id = req.params.id;
    const check = tools.isNumberic(id);
    let data = [];
    if (check) {
      data = await deleteBillByID(id);
    }

    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      EM: "Error at Controller",
      EC: -2,
      DT: error.message,
    });
  }
};

const updateBill = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await updateBillStatus(id);
    console.log("data: ", data);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    return res.status(500).json({
      EM: "Error at Controller",
      EC: -1,
      DT: error.message,
    });
  }
};

module.exports = {
  getBillList,
  createBill,
  getLevel0,
  deleteBill,
  updateBill,
};
