const sql = require("mssql");
const config = require("../config/configDatabase");

console.log("orderServices is running..");

const getAllBillByDay = async (date) => {
  try {
    const poolConnection = await sql.connect(config);
    let data = await poolConnection.request().query(`
            exec getBillByDay ${date}
        `);
    poolConnection.close();
    if (data) {
      return {
        EM: "Get all food success",
        EC: 1,
        DT: data.recordset,
      };
    } else {
      return {
        EM: "Get all food success but food is empty",
        EC: 0,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error.message);
    return {
      EM: "Get data failed",
      EC: -1,
      DT: error.message,
    };
  }
};

const getBillById = async (id) => {
  try {
    const poolConnection = await sql.connect(config);
    let data = await poolConnection.request().query(`
            exec getBillById ${id}
        `);

    poolConnection.close();
    // det bill details
    let details = [];
    try {
      details = await getBillDetails(id);
    } catch (error) {
      console.log(error.message);
    }
    data.recordset[0].Details = await details;
    if (data) {
      return {
        EM: "Get bill by id success",
        EC: 1,
        DT: data.recordset,
      };
    } else {
      return {
        EM: "Get bill by id success but bill is empty",
        EC: 0,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error.message);
    return {
      EM: "Get data failed",
      EC: -1,
      DT: error.message,
    };
  }
};

const getBillIDByDate = async (date) => {
  try {
    const poolConnection = await sql.connect(config);
    console.log("Get bill id by date..");
    console.log("date: ", date);
    let data = await poolConnection.request().query(`
      exec getBillIDByDate '${date}'
    `);
    poolConnection.close();
    console.log(data.recordset[0].ID);
    return data.recordset[0].ID;
  } catch (error) {
    console.log(error.message);
    return -1;
  }
};

const getAllBill = async () => {
  try {
    const poolConnection = await sql.connect(config);
    let data = await poolConnection.request().query(`
              exec getAllBill
          `);
    poolConnection.close();
    if (data) {
      return {
        EM: "Get all bill success",
        EC: 1,
        DT: data.recordset,
      };
    } else {
      return {
        EM: "Get all bill success but bill is empty",
        EC: 0,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error.message);
    return {
      EM: "Get bill failed",
      EC: -1,
      DT: error.message,
    };
  }
};

const getBillDetails = async (billid) => {
  try {
    const poolConnection = await sql.connect(config);
    let data = await poolConnection.request().query(`
            exec getBillDetails ${billid}
        `);
    poolConnection.close();
    if (data) {
      return data.recordset;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error.message);
    return {
      EM: "Get bill details failed",
      EC: -1,
      DT: error.message,
    };
  }
};

const getBillUnfinished = async () => {
  try {
    const poolConnection = await sql.connect(config);
    const data = await poolConnection.request().query(`
      exec getBillByStatus 0
    `);
    poolConnection.close();

    return {
      EM: "Get bill unfinished successfully",
      EC: 1,
      DT: data.recordset,
    };
  } catch (error) {
    return {
      EM: "Error at order services",
      EC: -2,
      DT: error.message,
    };
  }
};

const getBillFinished = async () => {
  try {
    const poolConnection = await sql.connect(config);
    const data = await poolConnection.request().query(`
      exec getBillByStatus 1
    `);
    poolConnection.close();

    return {
      EM: "Get bill finished successfully",
      EC: 1,
      DT: data.recordset,
    };
  } catch (error) {
    return {
      EM: "Error at order services",
      EC: -2,
      DT: error.message,
    };
  }
};

const addBill = async (staffid, today) => {
  try {
    const poolConnection = await sql.connect(config);
    console.log("Add bill..");
    console.log(`exec sp_insertBill ${staffid}, '${today}'`);
    let data = await poolConnection.request().query(`
      exec sp_insertBill ${staffid}, '${today}'
    `);
    poolConnection.close();
    if (data) {
      return {
        EM: "Add bill success",
        EC: 0,
        DT: data.recordset,
      };
    }
  } catch (error) {
    return {
      EM: "Add bill failed at services",
      EC: -1,
      DT: error.message,
    };
  }
};

const addBillDetails = async (billid, staffid, foodid, quantity, price) => {
  try {
    const poolConnection = await sql.connect(config);
    const data = await poolConnection.request().query(`
    exec sp_insertBillDetails ${billid}, ${staffid}, ${foodid}, ${quantity},${price}
    `);
    poolConnection.close();
    if (data) {
      console.log("Added bill detail success..");
      return {
        EM: "Add bill details success",
        EC: 0,
        DT: data.recordset,
      };
    }
  } catch (error) {
    console.log(error.message);
    return {
      EM: "Error at create bill details", //error message
      EC: -1, //error code
      DT: error.message, //data
    };
  }
};

const deleteBillByID = async (id) => {
  try {
    const poolConnection = await sql.connect(config);
    await poolConnection.request().query(`
      exec sp_deleteBill ${id}
    `);
    poolConnection.close();
    return {
      EM: "delete bill successfully",
      EC: 1,
      DT: [],
    };
  } catch (error) {
    return {
      EM: "Error at OrderServices",
      EC: -1,
      DT: error.message,
    };
  }
};

const updateBillStatus = async (id) => {
  try {
    const poolConnection = await sql.connect(config);
    const data = await poolConnection.request().query(`
      exec sp_updateBillStatus ${id}
    `);
    poolConnection.close();
    return {
      EM: "update bill status successfully",
      EC: 1,
      DT: [],
    };
  } catch (error) {
    return {
      EM: "Error at bill status services",
      EC: -1,
      DT: error.message,
    };
  }
};

module.exports = {
  getAllBillByDay,
  getBillById,
  getAllBill,
  addBillDetails,
  addBill,
  getBillIDByDate,
  getBillDetails,
  deleteBillByID,
  updateBillStatus,
  getBillUnfinished,
  getBillFinished,
};
