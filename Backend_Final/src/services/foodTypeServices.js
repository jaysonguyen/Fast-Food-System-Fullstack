const sql = require("mssql");
const config = require("../config/configDatabase");

console.log("Starting..");

const getAllFoodTypes = async () => {
  try {
    let poolConnection = await sql.connect(config);
    let data = await poolConnection.request().query("exec getAllFoodType");
    poolConnection.close();

    if (data) {
      return {
        EM: "Get all food type success",
        EC: 1,
        DT: data.recordset,
      };
    } else {
      return {
        EM: "Get all food type success",
        EC: 1,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error.message);
    return {
      EM: "Get all food type failed",
      EC: 0,
      DT: [],
    };
  }
};

const getFoodTypeById = async (req, res) => {
  try {
    let poolConnection = await sql.connect(config);
    let { id } = req.body;
    let data = await poolConnection
      .request()
      .query(`exec getFoodTypeById ${id}`);
    poolConnection.close();

    if (data) {
      return {
        EM: "Get all food type success",
        EC: 1,
        DT: data.recordset,
      };
    } else {
      return {
        EM: "Get all food type success",
        EC: 1,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error.message);
    return {
      EM: "Get all food type failed",
      EC: 0,
      DT: [],
    };
  }
};

const createFoodType = async (name) => {
  try {
    const poolConnection = await sql.connect(config);
    const data = await poolConnection.query(
      `exec sp_insertFoodType N'${name}'`
    );
    poolConnection.close();
    if (data) {
      return {
        EM: "Create food type success",
        EC: 1,
      };
    } else {
      return {
        EM: "Create food type success",
        EC: 1,
      };
    }
  } catch (error) {
    console.log(error.message);
    return {
      EM: "Create food type failed",
      EC: -1,
    };
  }
};

const deleteFoodTypeOnly = async (id) => {
  try {
    let poolConnection = await sql.connect(config);
    let data = await poolConnection
      .request()
      .query(`exec sp_deleteFoodTypeOnly ${id}`);
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

const deleteFoodTypeAndFood = async (id) => {
  try {
    let poolConnection = await sql.connect(config);
    let data = await poolConnection
      .request()
      .query(`exec sp_deleteFoodTypeAndFood ${id}`);
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
      DT: error.message,
    };
  }
};

const updateTypeFood = async (id, name) => {
  try {
    let poolConnection = await sql.connect(config);
    let data = await poolConnection
      .request()
      .query(`exec sp_update_foodtype ${id}, N'${name}'`);
    poolConnection.close();

    if (data) {
      return {
        EM: "Update food type success",
        EC: 1,
        DT: data.recordset,
      };
    } else {
      return {
        EM: "Update food type success",
        EC: 1,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error.message);
    return {
      EM: "Update food type failed",
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
  getAllFoodTypes,
  getFoodTypeById,
  createFoodType,
  getFoodByType,
  updateTypeFood,
};
