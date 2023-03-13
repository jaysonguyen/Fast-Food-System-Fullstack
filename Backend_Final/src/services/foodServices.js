const e = require("express");
const sql = require("mssql");
const config = require("../config/configDatabase");

console.log("Starting...");

const getAllFood = async () => {
  try {
    const poolConnection = await sql.connect(config);
    console.log("Reading rows from the Table...");
    // let data = await poolConnection.request().query("Select* from FoodNew");
    let data = await poolConnection.request().query("exec getAllFood");
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

const deleteFood = async (id) => {
  try {
    const poolConnection = await sql.connect(config);
    await poolConnection.query(`Delete from FoodNew where MaMB like ${id}`);
    poolConnection.close();
  } catch (error) {
    console.log("Delete new food error: " + error);
  }
};

const updateFood = async (id, name) => {
  try {
    console.log(id, name);
    const poolConnection = await sql.connect(config);
    await poolConnection.query(
      `UPDATE FoodNew SET nameFood = '${name}' WHERE id like '${id}'`
    );
    poolConnection.close();
    return {
      EM: "Get data updated",
      EC: 1,
      DT: [],
    };
  } catch (error) {
    console.log(`Update failed: ${error}`);
  }
};

const getOneFood = async (id) => {
  try {
    const poolConnection = await sql.connect(config);
    const data = await poolConnection.query(`
      exec getFoodByID ${id}
    `);
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
        EC: 1,
        DT: [],
      };
    }
  } catch (error) {
    console.log(`Get one food error: ${error}`);
  }
};

module.exports = {
  getAllFood,
  createOneFood,
  deleteFood,
  updateFood,
  getOneFood,
};
