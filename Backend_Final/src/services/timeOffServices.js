const sql = require("mssql/msnodesqlv8");
const config = require("../config/configDatabase");

console.log("Starting...");
//
const addTimeOff = async (timeStart, timeEnd, reason, idEm) => {
  try {
    const poolConnection = await sql.connect(config);
    let data = await poolConnection
      .request()
      .query(
        `EXEC sp_insert_timeOff '${timeStart}', '${timeEnd}', N'${reason}', ${idEm}`
      );
    poolConnection.close();
    if (data) {
      console.log(data);
      return {
        EM: "Insert all time off success",
        EC: 1,
      };
    } else {
      return {
        EM: "Insert all time off success but time off is empty",
        EC: 0,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Insert data failed",
      EC: -1,
    };
  }
};

const getAllTimeOff = async () => {
  try {
    const poolConnection = await sql.connect(config);
    let data = await poolConnection.request().query("exec sp_get_timeOff");
    poolConnection.close();
    if (data) {
      console.log(data);
      return {
        EM: "Get all time off success",
        EC: 1,
        DT: data.recordset,
      };
    } else {
      return {
        EM: "Get all time off success but time off is empty",
        EC: 0,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Get data failed",
      EC: -1,
      DT: error.message,
    };
  }
};

module.exports = {
  addTimeOff,
  getAllTimeOff,
};
