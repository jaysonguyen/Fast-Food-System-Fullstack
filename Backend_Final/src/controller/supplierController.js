const {
  readSupplier,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} = require("../services/supplierServices");

const getSupplier = async (req, res) => {
  try {
    const data = await readSupplier();
    if (data && data.EC === 1) {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    } else {
      return res.status(200).json({
        EM: "Get data success",
        EC: 0,
        DT: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
};

const addSupplier = async (req, res) => {
  try {
    const { name, contact, note } = req.body;
    const data = await createSupplier(name, contact, note);
    if (data && data.EC != -1) {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    } else {
      return res.status(200).json({
        EM: "Create data failed",
        EC: 0,
        DT: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
};

const removeSupplier = async (req, res) => {
  try {
    let id = req.params.id;
    let data = deleteSupplier(id);
    if (data && data.EC != -1) {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
      });
    } else {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
};

const editSupplier = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await updateSupplier(id, req.body);
    if (data && +data.EC != 1) {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
      });
    } else {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
};

module.exports = { getSupplier, addSupplier, removeSupplier, editSupplier };
