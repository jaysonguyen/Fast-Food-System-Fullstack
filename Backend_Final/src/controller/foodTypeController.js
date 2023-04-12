const {
  getAllFoodTypes,
  getFoodTypeById,
  createFoodType,
  getFoodByType,
} = require("../services/foodTypeServices");

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
      message: "Error: " + error.status,
    });
  }
};

const createNewFoodT = async (req, res) => {
  try {
    let data = await createFoodType(req.body.Name);
    if (data && data.EC != -1) {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: "",
      });
    } else {
      return res.status(200).json({
        EM: "Insert khong than công",
        EC: -1,
        DT: "",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error: " + error.message,
    });
  }
};

module.exports = { getFoodTypeList, getFoodByT, createNewFoodT };
