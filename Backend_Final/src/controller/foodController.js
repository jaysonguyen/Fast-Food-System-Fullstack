const {
  getAllFood,
  createOneFood,
  deleteFood,
  getOneFood,
  updateFood,
} = require("../services/foodServices");

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
    const { id, nameFood } = req.query;
    console.log(id, nameFood);
    if (!id || !nameFood) {
      throw new Error("Error from record");
    }
    const data = await createOneFood(id, nameFood);
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

const updateF = async (req, res) => {
  try {
    // const { id, nameFood } = req.query;
    // console.log(req.params.id, req.body.nameFood);
    const data = await updateFood(req.params.id, req.body.nameFood);
    return res.status(200).json({
      EM: "Update success",
      EC: 1,
      DT: [],
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json();
  }
};

const deteleF = async (req, res) => {
  try {
    const { id } = req.query;
    const data = await deleteFood(id);
    return res.status(200).json({
      EM: "Detele success",
      EC: 1,
      DT: "",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(data);
  }
};

const getFoodById = async (req, res) => {
  try {
    const data = await getOneFood(req.params.id);
    console.log(req.params.id);
    return res.status(200).json({
      EM: "Get data by id",
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {}
};

module.exports = { getFoodList, createFood, updateF, deteleF, getFoodById };
