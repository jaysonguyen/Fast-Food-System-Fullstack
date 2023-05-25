const sql = require("mssql/msnodesqlv8");
const config = require("../config/configDatabase");

const getShiftList = async () => {
  try {
    const poolConnection = await sql.connect(config);
    const data = await poolConnection.request().query(`
            select * from [Shift]
        `);
    if (data) {
      return {
        EM: "Successfully",
        EC: 1,
        DT: data.recordset,
      };
    } else {
      return {
        EM: "Empty",
        EC: 0,
        DT: [],
      };
    }
  } catch (error) {
    return {
      EM: "Error",
      EC: -1,
      DT: error.message,
    };
  }
};

module.exports = {getShiftList};
