const {
  getAllUser,
  createUser,
  getUserWithoutStaffRef,
  getUserByID,
} = require("../services/userServices");

const getUserList = async (req, res) => {
  try {
    const data = await getAllUser();
    if (data.EC != -1) {
      return res.status(200).json({
        EM: "Get All User Successfully",
        EC: data.EC,
        DT: data.DT,
      });
    } else {
      return res.status(500).json({
        EM: "Error at user services",
        EC: data.EC,
        DT: data.DT,
      });
    }
  } catch (error) {
    return res.status(500).json({
      EM: "Error at controller",
      EC: -1,
      DT: error.message,
    });
  }
};

const getUserByIDData = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await getUserByID(id);
    if (data && data.EC != -1) {
      return res.status(200).json({
        EM: "Get user by id successfully!!",
        EC: data.EC,
        DT: data.DT,
      });
    } else {
      return res.status(500).json({
        EM: "Get user by id failed, error from services!!",
        EC: -1,
        DT: [],
      });
    }
  } catch (error) {
    return res.status(500).json({
      EM: "Get user by id failed, error from services!!",
      EC: -1,
      DT: [],
    });
  }
};

const createNewUser = async (req, res) => {
  try {
    const params = req.body;
    console.log(params);
    const data = await createUser(params);

    if (data && data.EC != -1) {
      return res.status(200).json({
        EM: "Create new user successfully!!",
        EC: data.EC,
        DT: data.DT,
      });
    } else {
      return res.status(500).json({
        EM: "Create new user failed, error from services!!",
        EC: -1,
        DT: [],
      });
    }
  } catch (error) {
    return res.status(500).json({
      EM: "Error from controller",
      EC: -1,
      DT: error.message,
    });
  }
};

const getUserWithStaffRefData = async (req, res) => {
  try {
    const data = await getUserWithoutStaffRef();
    if (data && data.EC != -1) {
      return res.status(200).json({
        EM: "Get user without staff reference successfully!!",
        EC: data.EC,
        DT: data.DT,
      });
    } else {
      return res.status(500).json({
        EM: "Get user without staff reference failed, error from services!!",
        EC: -1,
        DT: [],
      });
    }
  } catch (error) {
    return res.status(500).json({
      EM: "Error at controller",
      EC: -1,
      DT: error.message,
    });
  }
};

module.exports = {
  getUserByIDData,
  getUserList,
  createNewUser,
  getUserWithStaffRefData,
};
