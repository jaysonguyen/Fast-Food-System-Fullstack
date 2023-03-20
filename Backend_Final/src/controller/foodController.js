const {
  getAllFood,
  createOneFood,
  updateFood,
  getOneFood,
  deleteFood,
  deleteList,
} = require("../services/foodServices");

const { getAllFoodTypes } = require("../services/foodTypeServices");
const tools = require("../tool");

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
    const { Name, Price, Type } = req.body;

    const data = await createOneFood(Name, Price, Type);
    if (data.EM.includes("Success")) {
      return res.status(201).json({
        EM: "Create success",
        EC: 1,
        DT: "",
      });
    } else if (data.EM.includes("Error")) {
      return res.status(500).json({
        EM: "Error",
        EC: 1,
        DT: data.DT,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};

const updateF = async (req, res) => {
  try {
    // const { id, nameFood } = req.query;
    // console.log(req.params.id, req.body.nameFood);
    const data = await updateFood(
      req.params.id,
      req.body.Name,
      req.body.Price,
      req.body.Type,
      req.body.Status
    );
    if (data.EM.includes("Success")) {
      return res.status(201).json({
        EM: "Update success",
        EC: 1,
        DT: data.DT,
      });
    } else if (data.EM.includes("Error")) {
      return res.status(500).json({
        EM: "Error at service",
        EC: 1,
        DT: data.DT,
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Error at controller: " + error.message,
    });
  }
};

const deteleF = async (req, res) => {
  try {
    let data = await deleteFood(req.params.id);
    if (data.EM.includes("Success")) {
      return res.status(201).json({
        EM: "Success",
        EC: 1,
        DT: data.DT,
      });
    } else if (data.EM.includes("Error")) {
      return res.status(500).json({
        EM: "Error at service",
        EC: 1,
        DT: data.DT,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Error at controller",
      EC: 1,
      DT: error.message,
    });
  }
};

const getLevel0 = async (req, res) => {
  try {
    // const data = await getOneFood(req.params.id);
    console.log("food running");
    let check = tools.isNumberic(req.params.id);
    console.log(check);
    let data = "";
    if (check) {
      data = await getOneFood(req.params.id);
    } else if (req.params.id == "delete") {
      data = await deleteList();
    } 
    return res.status(200).json({
      EM: "Success",
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {}
};

module.exports = {
  getFoodList,
  createFood,
  updateF,
  deteleF,
  getLevel0,
};
