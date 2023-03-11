const sql = require("mssql");
const config = require("../config/configDatabase");

console.log("Starting...");

const getAllFood = async () => {
  try {
    const poolConnection = await sql.connect(config);
    console.log("Reading rows from the Table...");
    let data = await poolConnection.request().query("Select* from FoodNew");
    poolConnection.close();
    if (data) {
      return {
        EM: "Get data success",
        EC: 1,
        DT: data.recordset,
      };
    } else {
      return {
        EM: "Get data success",
        EC: 0,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Get data failed",
      EC: -1,
      DT: "",
    };
  }
};

const createOneFood = async (id, name) => {
  try {
    const poolConnection = await sql.connect(config);
    await poolConnection.query(
      `Insert into FoodNew (id, nameFood) values('${id}', '${name}')`
    );
    poolConnection.close();
  } catch (error) {
    console.log("Create new mobile error: " + error);
  }
};

module.exports = { getAllFood, createOneFood };
