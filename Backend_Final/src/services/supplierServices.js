const sql = require("mssql");
const config = require("../config/configDatabase");

const readSupplier = async () => {
  try {
    const poolConnection = await sql.connect(config);
    let data = await poolConnection.request().query(`exec getAllSupplier`);
    poolConnection.close();
    if (data) {
      return {
        EM: "Get data succeed",
        EC: 1,
        DT: data.recordset,
      };
    } else {
      return {
        EM: "Get data failed",
        EC: 0,
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

const createSupplier = async (name, contact, note) => {
  try {
    const poolConnection = await sql.connect(config);
    const data = await poolConnection.query(
      `exec sp_insert_supplier N'${name}', N'${contact}', N'${note}'`
    );
    poolConnection.close();
    if (data) {
      return {
        EM: "Create Supplier Success",
        EC: 1,
        DT: "",
      };
    } else {
      return {
        EM: "Create Supplier Success",
        EC: 1,
        DT: "",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Create Supplier failed",
      EC: -1,
      DT: "",
    };
  }
};

const deleteSupplier = async (id) => {
  try {
    const poolConnection = await sql.connect(config);
    let data = await poolConnection.query(`exec sp_delete_supplier ${id}`);
    poolConnection.close();

    if (data) {
      return {
        EM: "Delete Supplier success",
        EC: 1,
        DT: "",
      };
    } else {
      return {
        EM: "Delete Supplier failed",
        EC: 0,
        DT: "",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Delete Supplier failed",
      EC: -1,
      DT: "",
    };
  }
};

const updateSupplier = async (id, contact, note) => {
  try {
    const poolConnection = await sql.connect(config);
    let data = poolConnection.query(
      `exec sp_update_supplier ${id}, N'${contact}', N'${note}'`
    );

    if (data) {
      return {
        EM: "Update supplier success",
        EC: 1,
        DT: "",
      };
    } else {
      return {
        EM: "Update supplier success",
        EC: 0,
        DT: "",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Update supplier failed",
      EC: -1,
      DT: "",
    };
  }
};

module.exports = {
  readSupplier,
  createSupplier,
  updateSupplier,
  deleteSupplier,
};
