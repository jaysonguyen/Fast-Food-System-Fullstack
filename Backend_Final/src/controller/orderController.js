const {
  getAllBill,
  getBillById,
  addBillDetails,
  addBill,
  getBillIDByDate,
  getAllBillByDay,
} = require("../services/orderServices");
const { getCurrentDateTime } = require("../tool");

const getBillList = async (req, res) => {
  try {
    console.log("get bill list");
    let data = await getAllBill();
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
    const today = getCurrentDateTime();
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
          detail.FoodID,
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

module.exports = {
  getBillList,
  createBill,
};
