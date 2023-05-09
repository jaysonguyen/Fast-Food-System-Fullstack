const sql = require("mssql");
const config = require("../config/configDatabase");

const getPositionList = async () => {
  try {
    const poolConnection = await sql.connect(config);
    const data = await poolConnection.request().query(`
        exec getAllPosition
    `);
    poolConnection.close();
    return {
      EM: "success",
      EM: 1,
      DT: data.recordset,
    };
  } catch (error) {
    return {
      EM: "error",
      EM: -1,
      DT: error.message,
    };
  }
};

module.exports = { getPositionList };
