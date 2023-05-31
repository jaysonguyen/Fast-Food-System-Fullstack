const {
  getAllUser,
  createUser,
  getUserWithoutStaffRef,
  getUserByID,
  getUserByEmail,
} = require("../services/userServices");
const { AsyncQuery } = require("../config/configDatabase");
const sha256 = require("js-sha256");

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

const getUserByEmailData = async (req, res) => {
  try {
    const { email } = req.body;
    const data = await getUserByEmail(email);
    if (data && data.EC != -1) {
      return res.status(200).json({
        EM: "Get user by email successfully!!",
        EC: data.EC,
        DT: data.DT,
      });
    } else {
      return res.status(500).json({
        EM: "Get user by email failed, error from services!!",
        EC: -1,
        DT: [],
      });
    }
  } catch (error) {
    return res.status(500).json({
      EM: "Get user by email failed, error from services!!",
      EC: -1,
      DT: [],
    });
  }
};

const createNewUser = async (req, res) => {
  try {
    const params = req.body;
    //create user
    const proc = "exec sp_createUserAndUpdateStaff";
    const psw = sha256(params.password);
    const input = [
      ["email", params.email],
      ["password", psw],
      ["isAdmin", params.isAdmin],
      ["staffID", params.staffId],
    ];

    const user = await AsyncQuery(proc, input, true);
    if (user.success) {
      return res.status(200).json({
        EM: "Create new user successfully!!",
        EC: 1,
        DT: user.data.recordset,
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

const deleteUserAccount = async (req, res) => {
  try {
    const id = req.params.id;
    //create user
    const proc = "exec sp_deleteUserAccount";
    const input = [["id", id]];

    const user = await AsyncQuery(proc, input, true);
    if (user.success) {
      return res.status(200).json({
        EM: "Delete user successfully!!",
        EC: 1,
        DT: user.data.recordset,
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
  getUserByEmailData,
  deleteUserAccount,
};
