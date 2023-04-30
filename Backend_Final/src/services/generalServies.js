const sql = require("mssql");
const config = require("../config/configDatabase");

const softRemove = async (id) => {
  try {
    const poolConnection = await sql.connect(config);
    const data = poolConnection.query(`exec softDelete ${id}`);
    if (data) {
      return {
        EM: "delete success",
        EC: 1,
        DT: "",
      };
    } else {
      return {
        EM: "delete failed",
        EC: 0,
        DT: "",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "delete failed",
      EC: -1,
      DT: "",
    };
  }
};

const softRemoveVendor = async (id) => {
  try {
    const poolConnection = await sql.connect(config);
    const data = poolConnection.query(`exec softDeleteVendor ${id}`);
    if (data) {
      return {
        EM: "delete success",
        EC: 1,
        DT: "",
      };
    } else {
      return {
        EM: "delete failed",
        EC: 0,
        DT: "",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "delete failed",
      EC: -1,
      DT: "",
    };
  }
};

module.exports = { softRemove, softRemoveVendor };
