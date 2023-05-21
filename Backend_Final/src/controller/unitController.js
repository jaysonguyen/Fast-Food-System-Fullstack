const { AsyncQuery } = require("../config/configDatabase");

const getAllUnit = async (req, res) => {
  try {
    const query = "exec getAllUnit";
    const pr = [];

    const data = await AsyncQuery(query, pr);
    if (data.success) {
      return res.status(200).json({
        EM: "Get unit list successfully!!",
        EC: 1,
        DT: data.data.recordset,
      });
    } else {
      return res.status(500).json({
        EM: user.data,
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

module.exports = { getAllUnit };
