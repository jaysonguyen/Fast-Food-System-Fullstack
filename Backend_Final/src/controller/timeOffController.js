const { addTimeOff, getAllTimeOff } = require("../services/timeOffServices");

const readTimeoffList = async (req, res) => {
  try {
    const data = await getAllTimeOff();
    if (data && data.EC != -1) {
      return res.status(200).json({
        EM: "Get time off list successfully",
        EC: data.EC,
        DT: data.DT,
      });
    } else {
      return res.status(200).json({
        EM: "Empty List",
        EC: 0,
        DT: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
};

const createTimeOff = async (req, res) => {
  try {
    const { timeStart, timeEnd, reason, idEm } = req.body;
    console.log(timeStart, timeEnd, reason, idEm);
    const data = await addTimeOff(timeStart, timeEnd, reason, idEm);
    if (data && data.EC != -1) {
      return res.status(200).json({
        EM: "create time off list successfully",
        EC: data.EC,
        DT: data.DT,
      });
    } else {
      return res.status(200).json({
        EM: "Empty List",
        EC: 0,
        DT: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
};

module.exports = {
  createTimeOff,
  readTimeoffList,
};
