const { getPositionList } = require("../services/positionServices");

const getAllPosition = async (req, res) => {
  try {
    const data = await getPositionList();

    if (data && data.EC != -1) {
      return res.status(200).json({
        EM: "get position list successfully",
        EC: 1,
        DT: data.DT,
      });
    } else {
      return res.status(500).json({
        EM: "error at services",
        EC: -1,
        DT: data.DT,
      });
    }
  } catch (error) {
    return res.status(500).json({
      EM: "error at controller",
      EC: -1,
      DT: error.message,
    });
  }
};

module.exports = { getAllPosition };
