const { getAllUser } = require("../services/userServices");

const getUserList = async (req, res) => {
  try {
    //call user list from user services;
    const dt = await getAllUser();
    return res.status(200).json({
      EM: dt.EM,
      EC: dt.EC,
      DT: dt.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
};

module.exports = { getUserList };
