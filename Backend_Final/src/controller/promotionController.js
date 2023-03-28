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
      const { name, price, status } = req.body;
      const data = await createPromotion(name, price, status);
      if (data && data.EC != -1) {
        return res.status(200).json({
          EM: data.EM,
          EC: data.EC,
          DT: data.DT,
        });
      } else {
        return res.status(200).json({
          EM: "create data success",
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
      let id = req.params.id;
      let { name, price, status } = req.body;
      let data = updatePromotion(id, name, price, status);
      if (data && data.EC != -1) {
        return res.status(200).json({
          EM: data.EM,
          EC: data.EC,
          DT: '',
        });
      } else {
        return res.status(200).json({
          EM: "update data success",
          EC: 0,
          DT: '',
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

  module.exports = {getPromotion, addPromotion, editPromotion, removePromotion};