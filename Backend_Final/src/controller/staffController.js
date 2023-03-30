const { getAllStaff } = require("../services/staffServices");

const geStaffList = async (req, res) => {
  try {
    console.log("get staff list");
    let data = await getAllStaff();
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(200).json({
      EM: "Error from server", //error message
      EC: -1, //error code
      DT: "", //data
    });
  }
};

module.exports = { geStaffList };
