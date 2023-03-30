const sql = require("mssql");
const config = require("../config/configDatabase");

console.log("staffServices is running..");

const getAllStaff = async (req, res) => {
  try {
    const poolConnection = await sql.connect(config);
    console.log("Reading rows from Bill Table..");
    let data = await poolConnection.request().query(`
                  exec getAllStaff
              `);
    poolConnection.close();
    if (data) {
      return {
        EM: "Get all staff success",
        EC: 1,
        DT: data.recordset,
      };
    } else {
      return {
        EM: "Get all staff success but staff is empty",
        EC: 0,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error.message);
    return {
      EM: "Get staff failed",
      EC: -1,
      DT: error.message,
    };
  }
};

module.exports = { getAllStaff };
