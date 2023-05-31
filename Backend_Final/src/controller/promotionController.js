const {
  readPromotion,
  createPromotion,
  updatePromotion,
  deletePromotion,
} = require("../services/promotionServices");

const getPromotion = async (req, res) => {
  try {
    const data = await readPromotion();
    console.log(data);
    if (data && data.EC != -1) {
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

const addPromotion = async (req, res) => {
  try {
    const { name, price, status, dateStart, dateExp } = req.body;
    const data = await createPromotion(name, price, status, dateStart, dateExp);
    if (data && data.EC != -1) {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
      });
    } else {
      return res.status(200).json({
        EM: "create data success",
        EC: 0,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
    });
  }
};

const removePromotion = async (req, res) => {
  try {
    let id = req.params.id;
    let data = deletePromotion(id);
    if (data && data.EC != -1) {
      return res.status(200).json({
        EM: "Delete data success",
        EC: 0,
        DT: "",
      });
    } else {
      return res.status(200).json({
        EM: "Delete data success",
        EC: 0,
        DT: "",
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

const editPromotion = async (req, res) => {
  try {
    let { id, status } = req.body;
    let data = updatePromotion(id, status);
    if (data && data.EC != -1) {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: "",
      });
    } if(data && +data.EC != 1) {
      return res.status(200).json({
        EM: "update data failed",
        EC: 0,
        DT: "",
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

module.exports = { getPromotion, addPromotion, editPromotion, removePromotion };
