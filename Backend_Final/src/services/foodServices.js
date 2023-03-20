const sql = require("mssql");
const config = require("../config/configDatabase");

console.log("Starting...");

const getAllFood = async () => {
  try {
    const poolConnection = await sql.connect(config);
    console.log("Reading rows from the Table...");
    let data = await poolConnection.request().query("Select * from Food");
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

const createOneFood = async (name, price, type) => {
  try {
    const poolConnection = await sql.connect(config);
    let data = await poolConnection.query(
      `exec sp_insertFood N'${name}', ${price}, ${type}, 1`
    );
    poolConnection.close();
    if (data) {
      return {
        EM: "Success",
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
      exec sp_deleteFood ${id}
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

const deleteFoodByFoodType = async (id) => {
  try {
    let poolConnection = await sql.connect(config);
    let data = await poolConnection
      .request()
      .query(`exec sp_deleteAllFoodByFoodType ${id}`);
    poolConnection.close();

    if (data) {
      return {
        EM: "Delete food type success",
        EC: 1,
        DT: data.recordset,
      };
    } else {
      return {
        EM: "Delete food type success",
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

const updateFood = async (id, name, price, type, status) => {
  try {
    console.log(typeof price);
    const poolConnection = await sql.connect(config);
    let data = await poolConnection.query(
      `exec sp_updateFood ${id}, N'${name}', ${price}, ${type}, ${status}`
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

    if (data.recordset != []) {
      return {
        EM: "Get food by name success",
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
    console.log(`Get food by name error: ${error}`);
    return {
      EM: "Error at service",
      EC: 0,
      DT: error.message,
    };
  }
};

const getFoodByType = async (typeid) => {
  try {
    const poolConnection = await sql.connect(config);
    const data = await poolConnection.query(`
      exec getFoodByType ${typeid}
    `);
    poolConnection.close();

    if (data) {
      return {
        EM: "Get food type success",
        EC: 1,
        DT: data.recordset,
      };
    } else {
      return {
        EM: "Get food type empty",
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

module.exports = {
  getAllFood,
  createOneFood,
  deleteFood,
  getOneFood,
  updateFood,
  deleteList,
  getFoodByType,
};
