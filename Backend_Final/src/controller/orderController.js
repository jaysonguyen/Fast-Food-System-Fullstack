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

const {
  accessKey,
  secretKey,
  endpoint,
  orderInfo,
  partnerCode,
  redirectUrl,
  ipnUrl,
  requestType,
  amount,
  orderId,
  requestId,
  extraData,
  paymentCode,
  orderGroupId,
  autoCapture,
  lang,
} = require("../config/configMoMoPayment");

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
    if ((StaffID, BillDetails)) {
      console.log("staffID ne:", StaffID, "Bill ne", BillDetails);
    }
    const today = tools.getCurrentDateTime();
    //create bill
    let bill = await addBill(StaffID, today);
    //get bill id by date
    let billID = await getBillIDByDate(today);
    if (bill && +bill.EC == 1) {
      //create bill details (array)
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
            EC: billdetails.EC,
          };
        }
      });
      return res.status(200).json({
        EM: bill.EM,
        EC: bill.EC,
      });
    }
    if (bill && bill != 1) {
      return res.status(500).json({
        EM: bill.EM,
        EC: bill.EC,
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

const makePayment = (total) => {
  return new Promise((resolve, reject) => {
    try {
      if (total) {
        var rawSignature =
          "accessKey=" +
          accessKey +
          "&amount=" +
          total +
          "&extraData=" +
          extraData +
          "&ipnUrl=" +
          ipnUrl +
          "&orderId=" +
          orderId +
          "&orderInfo=" +
          orderInfo +
          "&partnerCode=" +
          partnerCode +
          "&redirectUrl=" +
          redirectUrl +
          "&requestId=" +
          requestId +
          "&requestType=" +
          requestType;
        const crypto = require("crypto");
        var signature = crypto
          .createHmac("sha256", secretKey)
          .update(rawSignature)
          .digest("hex");

        //json object send to MoMo endpoint
        const requestBody = JSON.stringify({
          partnerCode: partnerCode,
          partnerName: "Fast Bite",
          storeId: "Fast Bite Store",
          requestId: requestId,
          amount: total,
          orderId: orderId,
          orderInfo: orderInfo,
          redirectUrl: redirectUrl,
          ipnUrl: ipnUrl,
          lang: lang,
          requestType: requestType,
          autoCapture: autoCapture,
          extraData: extraData,
          orderGroupId: orderGroupId,
          signature: signature,
        });

        //Create the HTTPS objects
        const https = require("https");
        const options = {
          hostname: "test-payment.momo.vn",
          port: 443,
          path: "/v2/gateway/api/create",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(requestBody),
          },
        };

        //Send the request and get the response
        const req = https.request(options, (res) => {
          console.log(`Status: ${res.statusCode}`);
          console.log(`Headers: ${JSON.stringify(res.headers)}`);
          res.setEncoding("utf8");
          res.on("data", (body) => {
            resolve(JSON.parse(body));
          });
          res.on("end", () => {
            console.log("No more data in response.");
          });
        });

        req.on("error", (e) => {
          console.log(`problem with request: ${e.message}`);
          reject(e);
        });
        // write data to request body
        console.log("Sending....");
        req.write(requestBody);
        req.end();
      }
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

const paymentBill = async (req, res) => {
  let total = req.params.total;
  let result = "";
  await makePayment(total)
    .then((response) => {
      result = response.payUrl;
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      return res.status(200).json({
        EM: "Get QR code success",
        EC: 1,
        DT: result,
      });
    });
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
  paymentBill,
  updateBill,
};
