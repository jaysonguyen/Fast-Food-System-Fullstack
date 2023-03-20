const {
  getAllFoodTypes,
  getFoodTypeById,
  createFoodType,
} = require("../services/foodTypeServices");

const { getFoodByType } = require("../services/foodServices");

const getFoodTypeList = async (req, res) => {
  try {
    console.log("food type running");
    let data = await getAllFoodTypes();
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

const getFoodByT = async (req, res) => {
  try {
    let data = await getFoodByType(req.params.id);
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

const createNewFoodT = async (req, res) => {
  try {
    let data = await createFoodType(req.body.Name);
    if (data.DT)
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });

    return res.status(200).json({
      message: "Create Food Type Success",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error: " + error.message,
    });
  }
};

module.exports = { getFoodTypeList, getFoodByT, createNewFoodT };
