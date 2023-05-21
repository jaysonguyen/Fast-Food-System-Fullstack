const sql = require("mssql");
const { config } = require("../config/configDatabase");

const getStaffList = async () => {
  try {
    const poolConnection = await sql.connect(config);
    const data = await poolConnection.request().query("Exec getAllStaff");
    poolConnection.close();
    if (data) {
      return {
        EM: "Get staff success",
        EC: 1,
        DT: data.recordset,
      };
    } else {
      return {
        EM: "Get staff success",
        EC: 0,
        DT: [],
      };
    }
  } catch (error) {
    return {
      EM: error.message,
      EC: -1,
      DT: [],
    };
  }
};

const getStaffWithoutUserAccount = async () => {
  try {
    const poolConnection = await sql.connect(config);
    const data = await poolConnection
      .request()
      .query("exec getUserWithoutStaffRef");
    poolConnection.close();
    if (data) {
      return {
        EM: "Get staff without user account success",
        EC: 1,
        DT: data.recordset,
      };
    } else {
      return {
        EM: "Get staff without user account success",
        EC: 0,
        DT: [],
      };
    }
  } catch (error) {
    return {
      EM: "error",
      EC: -1,
      DT: error.message,
    };
  }
};

const updateStaffList = async (
  id,
  name,
  birth,
  gender,
  address,
  startAt,
  position
) => {
  try {
    console.log(
      `EXEC updateStaff ${id}, N'${name}', '${birth}', ${gender}, N'${address}', '${startAt}', ${position}`
    );
    const poolConnection = await sql.connect(config);
    await poolConnection.query(
      `EXEC updateStaff ${id}, N'${name}', '${birth}', ${gender}, N'${address}', '${startAt}', ${position}`
    );
    poolConnection.close();
    return {
      EM: "Update Success",
      EC: 1,
      DT: [],
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Error from services",
      EC: 0,
      DT: [],
    };
  }
};

const updateStaffUserID = async (staffid, userid) => {
  try {
    const poolConnection = await sql.connect(config);
    console.log(`exec updateStaffUserID ${staffid}, ${userid}`);
    const data = await poolConnection.query(
      `exec updateStaffUserID ${staffid}, ${userid}`
    );
    poolConnection.close();
    if (data) {
      return {
        EM: "Delete Success",
        EC: 1,
        DT: "",
      };
    } else {
      return {
        EM: "Delete Success",
        EC: 0,
        DT: "",
      };
    }
  } catch (error) {
    return {
      EM: "",
      EC: -1,
      DT: error.message,
    };
  }
};

const deleteStaff = async (id) => {
  try {
    const poolConnection = await sql.connect(config);
    const data = await poolConnection.query(`Exec sp_delete_staff ${id}`);
    poolConnection.close();
    if (data) {
      return {
        EM: "Delete Success",
        EC: 1,
        DT: "",
      };
    } else {
      return {
        EM: "Delete Success",
        EC: 0,
        DT: "",
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

const createStaff = async (name, dob, gender, startAt, position, address) => {
  try {
    const poolConnection = await sql.connect(config);
    console.log(name, dob, gender, startAt, position, address);
    const data = await poolConnection.query(
      `Exec insertStaff N'${name}', '${dob}', ${gender}, '${startAt}', ${position}, N'${address}'`
    );
    poolConnection.close();
    if (data) {
      return {
        EM: "Create staff success",
        EC: 1,
        DT: data.recordset,
      };
    } else {
      return {
        EM: "Create staff success",
        EC: 1,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Error from services",
      EC: -1,
      DT: [],
    };
  }
};

const getStaffByUser = async (userid) => {
  try {
    const poolConnection = await sql.connect(config);
    const data = await poolConnection.request().query(`
      exec getStaffByUserID ${userid}
    `);
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
  getStaffByUser,
  getStaffList,
  updateStaffList,
  deleteStaff,
  createStaff,
  updateStaffUserID,
  getStaffWithoutUserAccount,
};
