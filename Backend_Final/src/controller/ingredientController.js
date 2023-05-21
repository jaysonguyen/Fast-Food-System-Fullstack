const { AsyncQuery } = require("../config/configDatabase");

const getAllIngredients = async (req, res) => {
  try {
    const proc = "exec getAllIngredients";
    const input = [];

    const ingre = await AsyncQuery(proc, input, true);
    if (ingre.success) {
      return res.status(200).json({
        EM: "Get position list successfully!!",
        EC: 1,
        DT: ingre.data.recordset,
      });
    } else {
      return res.status(500).json({
        EM: ingre.data,
        EC: -1,
        DT: [],
      });
    }
  } catch (error) {
    return res.status(500).json({
      EM: error.message,
      EC: -1,
      DT: [],
    });
  }
};

module.exports = { getAllIngredients };
