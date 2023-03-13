const sql = require("mssql");
const config = require("../config/configDatabase");

console.log("Starting.. ");

const getAllUser = async () => {
  try {
    const poolConnection = await sql.connect(config);
    console.log("Readline rows from user table.. ");
    let data = await poolConnection.request().query("Select * from [User]");
    poolConnection.close();
    if (data) {
      return {
        EM: "Get data success",
        EC: 1,
        DT: data.recordset,
      };
    } else {
      return {
        EM: "Get data success, data is empty",
        EC: 1,
        DT: [],
      };
    }
  } catch (err) {
    console.log(err);
    return {
      EM: "Get data failed",
      EC: -1,
      DT: [],
    };
  }
};

module.exports = { getAllUser };
