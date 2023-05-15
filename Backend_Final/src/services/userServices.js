const sql = require("mssql");
const config = require("../config/configDatabase");
const sha256 = require("js-sha256");

const getAllUser = async () => {
  try {
    const poolConnection = await sql.connect(config);
    const data = await poolConnection.request().query(`select * from [User]`);
    poolConnection.close();

    if (data) {
      return {
        EM: "Successfully",
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
    return {
      EM: "Error",
      EC: 1,
      DT: error.message,
    };
  }
};

const getUserByID = async (id) => {
  try {
    const poolConnection = await sql.connect(config);
    const data = await poolConnection.request().query(`
      exec getUserByID ${id}
    `);
    poolConnection.close();
    return {
      EM: "success",
      EC: 1,
      DT: data.recordset,
    };
  } catch (error) {
    return {
      EM: "error",
      EC: -1,
      DT: error.message,
    };
  }
};

const getUserByEmail = async (email) => {
  try {
    const poolConnection = await sql.connect(config);
    const data = await poolConnection.request().query(`
      exec getUserByEmail '${email}'
    `);
    poolConnection.close();
    return {
      EM: "success",
      EC: 1,
      DT: data.recordset,
    };
  } catch (error) {
    return {
      EM: "error",
      EC: -1,
      DT: error.message,
    };
  }
};

const createUser = async ({ email, password, isAdmin }) => {
  try {
    const poolConnection = await sql.connect(config);
    const psw = sha256(password);
    console.log(psw);
    const data = await poolConnection.request().query(`
            exec sp_createUser '${email}', '${psw}', ${isAdmin} 
        `);
    poolConnection.close();
    return {
      EM: "Successfully",
      EC: 1,
      DT: data.recordset,
    };
  } catch (error) {
    return {
      EM: "Error",
      EC: -1,
      DT: data.recordset,
    };
  }
};

const getUserWithoutStaffRef = async () => {
  try {
    const poolConnection = await sql.connect(config);
    const data = await poolConnection.request().query(`
      exec getUserWithoutStaffRef
    `);
    poolConnection.close();
    return {
      EM: "success",
      EC: 1,
      DT: data.recordset,
    };
  } catch (error) {
    return {
      EM: "error",
      EC: -1,
      DT: error.message,
    };
  }
};

module.exports = {
  getUserByID,
  getUserWithoutStaffRef,
  getAllUser,
  createUser,
  getUserByEmail,
};
