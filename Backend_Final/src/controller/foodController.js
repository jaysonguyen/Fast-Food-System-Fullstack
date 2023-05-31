const {
  getAllFood,
  createOneFood,
  updateFood,
  getOneFood,
  deleteFood,
  deleteList,
  getFoodByName,
  updateFoodStatus,
} = require("../services/foodServices");

const tools = require("../tool");

const getFoodList = async (req, res) => {
  try {
    let data = await getAllFood();
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
    const { name, price, image, type, recipe } = req.body;

    const data = await createOneFood(name, price, image, type, recipe);
    if (data) {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
      });
    } else {
      return res.status(200).json({
        EM: "Food exsits or invalid value",
        EC: -1,
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

const updateF = async (req, res) => {
  try {
    // const { id, nameFood } = req.query;
    // console.log(req.params.id, req.body.nameFood
    const data = await updateFood(
      //update full food
      req.params.id,
      req.body
    );

    if (data && +data.EC == 1) {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
      });
    }
    if (data && +data.EC != 1) {
      return res.status(500).json({
        EM: data.EM,
        EC: data.EC,
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Error at controller: " + error.message,
    });
  }
};

const getFoodById = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await getOneFood(id);
    if (data.DT)
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });

    return res.status(404).json({
      message: "Cannot get Food Type",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error: " + error.message,
    });
  }
};

const deteleF = async (req, res) => {
  try {
    // set status of food = 0 (hidden)
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
    let { id } = req.params.id;
    let check = tools.isNumberic(req.params.id);
    console.log(req.query);
    // console.log(check);
    let data = "";
    if (check) {
      // get Food by ID
      data = await getOneFood(id);
    } else if (id == "delete") {
      //get deleted food (status = 0)
      data = await deleteList();
    } else if (req.query.name) {
      //get food by name
      data = await getFoodByName(req.query.name);
    }
    return res.status(200).json({
      EM: data.EM,
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
  getFoodById,
  getLevel0,
};
