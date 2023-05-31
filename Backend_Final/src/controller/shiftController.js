const { getShiftList } = require("../services/shiftServices");

const getAllShift = async (req, res) => {
  try {
    const data = await getShiftList();
    if (data && data.EC != -1) {
      return res.status(200).json({
        EM: "Get all shift successfully",
        EC: data.EC,
        DT: data.DT,
      });
    } else {
      return res.status(500).json({
        EM: "Error at services",
        EC: data.EC,
        DT: data.DT,
      });
    }
  } catch (error) {
    return res.status(500).json({
      EM: "Error at controllers",
      EC: -1,
      DT: error.message,
    });
  }
};

module.exports = { getAllShift };
