const sql = require("mssql");
const config = require("../config/configDatabase");

console.log("Starting...");

const getAllFood = async () => {
  try {
    const poolConnection = await sql.connect(config);
    let data = await poolConnection.request().query("exec sp_get_food_infor");
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
    console.log(error);
    return {
      EM: "Get data failed",
      EC: -1,
      DT: error.message,
    };
  }
};

const createOneFood = async (name, price, image, type, recipe) => {
  try {
    const poolConnection = await sql.connect(config);
    let data = await poolConnection.query(
      `exec sp_insertFood N'${name}', ${price}, '${image}', ${type}, ${recipe}, 1`
    );
    poolConnection.close();
    if (data) {
      return {
        EM: "Create one food success",
        EC: 1,
      };
    } else {
      return {
        EM: "food get empty, create successfully",
        EC: 0,
      };
    }
  } catch (error) {
    console.log("Create new food error from service: " + error.message);
    return {
      EM: "Error",
      EC: 0,
      DT: error.message,
    };
  }
};

const deleteFood = async (id) => {
  try {
    const poolConnection = await sql.connect(config);
    let data = await poolConnection.query(`
      exec sp_delete_food ${id}
    `);
    poolConnection.close();
    if (data) {
      return {
        EM: "Delete Success",
        EC: 1,
        DT: [],
      };
    } else {
      return {
        EM: "Empty",
        EC: 0,
        DT: [],
      };
    }
  } catch (error) {
    console.log("Delete new food error: " + error);
    return {
      EM: "Error at service",
      EC: 0,
      DT: error.message,
    };
  }
};

//show food with status = 0
const deleteList = async () => {
  try {
    const poolConnection = await sql.connect(config);
    let data = await poolConnection.query(`
      exec getAllFoodDeleted
    `);
    poolConnection.close();
    if (data.recordset != []) {
      return {
        EM: "Get deleted food list Success",
        EC: 1,
        DT: data.recordset,
      };
    } else {
      return {
        EM: "Deleted food list is empty",
        EC: 0,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error.message);
    return {
      EM: "Error at service",
      EC: 0,
      DT: error.message,
    };
  }
};

//using typeid to delete all food in that food type
const deleteFoodByFoodType = async (id) => {
  try {
    let poolConnection = await sql.connect(config);
    let data = await poolConnection
      .request()
      .query(`exec sp_deleteAllFoodByFoodType ${id}`);
    poolConnection.close();

    if (data) {
      return {
        EM: "Delete food by food type success",
        EC: 1,
        DT: data.recordset,
      };
    } else {
      return {
        EM: "Delete food by food type success",
        EC: 1,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error.message);
    return {
      EM: "Delete food type failed",
      EC: 0,
      DT: eror.message,
    };
  }
};

//delete from database
const deleteFoodPermanently = async (id) => {
  try {
    const poolConnection = await sql.connect(config);
    let data = await poolConnection.query(`
      exec sp_deleteFoodPermanent ${id}
    `);
    poolConnection.close();
    if (data) {
      return {
        EM: "Delete Food Permanently Success",
        EC: 1,
        DT: [],
      };
    } else {
      return {
        EM: "Delete Success",
        EC: 0,
        DT: [],
      };
    }
  } catch (error) {
    console.log("Delete new food error: " + error);
    return {
      EM: "Error at service",
      EC: 0,
      DT: error.message,
    };
  }
};

const updateFood = async (id, rawdata) => {
  try {
    const poolConnection = await sql.connect(config);
    console.log("log ra coi: ", typeof +rawdata.type)
    let data = await poolConnection.query(
      `exec sp_updateFood ${id}, N'${rawdata.name}', '${rawdata.image}', ${rawdata.price}, ${rawdata.type}, ${rawdata.status}, ${rawdata.recipe}`
    );
    poolConnection.close();
    if (data) {
      return {
        EM: "Update Success",
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
    console.log(`Update failed: ${error}`);
    return {
      EM: "Error at service",
      EC: 0,
      DT: error.message,
    };
  }
};

const updateFoodStatus = async (id, status) => {
  try {
    const poolConnection = await sql.connect(config);
    let data = await poolConnection.query(
      `exec sp_updateFoodStatus ${id}, ${status}`
    );
    poolConnection.close();
    if (data) {
      return {
        EM: "Update Success",
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
    console.log(`Update failed: ${error}`);
    return {
      EM: "Error at service",
      EC: 0,
      DT: error.message,
    };
  }
};

//get food by id
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
    return {
      EM: "Error",
      EC: 0,
      DT: error.message,
    };
  }
};

const getFoodByName = async (name) => {
  try {
    const poolConnection = await sql.connect(config);
    const data = await poolConnection.query(`
      exec getFoodByName N'${name}'
    `);
    poolConnection.close();
    if (Object.keys(data.recordset).length > 0) {
      return {
        EM: "Get food by name success",
        EC: 1,
        DT: data.recordset,
      };
    } else {
      return {
        EM: "Not found food",
        EC: 1,
        DT: [],
      };
    }
  } catch (error) {
    console.log(`Get food by name error: ${error}`);
    return {
      EM: "Error at service",
      EC: 0,
      DT: error.message,
    };
  }
};

module.exports = {
  getAllFood,
  createOneFood,
  deleteFood,
  getOneFood,
  updateFood,
  deleteList,
  getFoodByName,
  updateFoodStatus,
};
