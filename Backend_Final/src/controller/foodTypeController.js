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
    const { name } = req.body;
    const data = await createFoodType(name);
    if (data && data.EC != -1) {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
      });
    } else {
      return res.status(200).json({
        EM: "Insert Data failed",
        EC: -1,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error: " + error.message,
    });
  }
};

module.exports = { getFoodTypeList, getFoodByT, createNewFoodT };
