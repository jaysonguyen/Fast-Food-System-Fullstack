const sql = require("mssql");
const config = require("../config/configDatabase");

const readPromotion = async () => {
  try {
    const poolConnection = await sql.connect(config);
    let data = await poolConnection.request().query(`exec sp_get_discount`);
    poolConnection.close();
    if (data) {
      return {
        EM: "Get promotion success",
        EC: 1,
        DT: data.recordset,
      };
    } else {
      return {
        EM: "Get promotion success",
        EC: 1,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Error from services",
      EC: -1,
      DT: "",
    };
  }
};

const createPromotion = async (name, price, status, dateStart, dateExp) => {
  try {
    const poolConnection = await sql.connect(config);
    const data = await poolConnection.query(
      `exec sp_insert_discount N'${name}', ${price}, ${status}, '${dateStart}', '${dateExp}'`
    );
    poolConnection.close();
    if (data) {
      console.log(data);
      return {
        EM: "Create promotion Success",
        EC: 1,
      };
    } else {
      return {
        EM: "Create promotion Success",
        EC: 1,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Create promotion failed",
      EC: -1,
      DT: "",
    };
  }
};

const deletePromotion = async (id) => {
  try {
    const poolConnection = await sql.connect(config);
    let data = await poolConnection.query(`exec sp_delete_discount ${id}`);
    poolConnection.close();

    if (data) {
      return {
        EM: "Delete promotion success",
        EC: 1,
        DT: "",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Delete promotion failed",
      EC: -1,
      DT: "",
    };
  }
};

const updatePromotion = async (id, status) => {
  try {
    const poolConnection = await sql.connect(config);
    const data = poolConnection.query(
      `exec sp_update_status_discount ${id} ${status}`
    );
    if (data) {
      return {
        EM: "Update promotion success",
        EC: 1,
        DT: "",
      };
    } else {
      return {
        EM: "Update promotion success",
        EC: 0,
        DT: "",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Update promotion failed",
      EC: -1,
      DT: "",
    };
  }
};

module.exports = {
  readPromotion,
  createPromotion,
  updatePromotion,
  deletePromotion,
};
