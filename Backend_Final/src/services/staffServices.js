const sql = require("mssql");
const config = require("../config/configDatabase");

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
    console.log(error);
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
    const poolConnection = await sql.connect(config);
    await poolConnection.query(
      `EXEC sp_update_staff ${id}, N'${name}', '${birth}', ${gender}, N'${address}', '${startAt}', ${position}`
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
    const data = await poolConnection.query(
      `Exec sp_insertStaff N'${name}', '${dob}', ${gender}, '${startAt}', ${position}, N'${address}'`
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

module.exports = { getStaffList, updateStaffList, deleteStaff, createStaff };
