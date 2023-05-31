const {
  getStaffList,
  updateStaffList,
  deleteStaff,
  createStaff,
  getStaffByUser,
  updateStaffUserID,
  getStaffWithoutUserAccount,
} = require("../services/staffServices");
const { AsyncQuery } = require("../config/configDatabase");

const readStaffList = async (req, res) => {
  try {
    const data = await getStaffList();
    if (data && data.EC != -1) {
      return res.status(200).json({
        EM: "Get staff list successfully",
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

const updateStaff = async (req, res) => {
  try {
    const { name, birth, gender, address, startAt, position } = req.body;
    const id = req.params.id;
    const data = await updateStaffList(
      id,
      name,
      birth,
      gender,
      address,
      startAt,
      position
    );
    if (data) {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        data: [],
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

const updateStaffUser = async (req, res) => {
  try {
    const staffid = req.params.staffid;
    const { userid } = req.body;
    const data = await updateStaffUserID(staffid, userid);
    if (data && data.EC != -1) {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        data: data.DT,
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

const removeStaff = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await deleteStaff(id);
    if (data) {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      EM: "Error from server",
      EC: -1,
      data: "",
    });
  }
};

const addStaff = async (req, res) => {
  try {
    const { name, dob, gender, startAt, position, address } = req.body;
    console.log(req.body);
    const data = await createStaff(
      name,
      dob,
      gender,
      startAt,
      position,
      address
    );
    if (data) {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        data: data.DT,
      });
    } else {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        data: "",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      EM: "Error from server",
      EC: -1,
      data: "",
    });
  }
};

const getStaffByUserID = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    proc = "exec getStaffByUserID";
    input = [["userID", id]];
    const result = await AsyncQuery(proc, input, true);

    if (!result.success) {
      return res.status(500).json({
        EM: result.data,
        EC: -1,
        DT: [],
      });
    } else {
      return res.status(200).json({
        EM: "Get user successfully",
        EC: 1,
        DT: result.data.recordset[0],
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

const getStaffWithoutUserRef = async (req, res) => {
  try {
    const data = await getStaffWithoutUserAccount();
    if (data && data.EC != -1) {
      return res.status(200).json({
        EM: "get staff without user account successfully!!",
        EC: data.EC,
        DT: data.DT,
      });
    } else {
      return res.status(500).json({
        EM: "get staff without user account failed at services!!",
        EC: -1,
        DT: data.DT,
      });
    }
  } catch (error) {
    return res.status(500).json({
      EM: "get staff without user account failed at controller!!",
      EC: -1,
      DT: error.message,
    });
  }
};

module.exports = {
  getStaffByUserID,
  readStaffList,
  updateStaff,
  removeStaff,
  addStaff,
  updateStaffUser,
  getStaffWithoutUserRef,
};
