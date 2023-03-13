const { getAllFood, createOneFood } = require("../services/foodServices");

const getFoodList = async (req, res) => {
  try {
    const data = await getAllFood();
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
};

const createFood = async (req, res) => {
  try {
    const { MaMB, nameMB } = req.body;
    if (!MaMB || !nameMB) {
      throw new Error("Error from record");
    }
    const data = await createOneFood(MaMB, nameMB);
    return res.status(201).json({
      EM: "Create success",
      EC: 1,
      DT: "",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(data);
  }
};

module.exports = { getFoodList, createFood };
