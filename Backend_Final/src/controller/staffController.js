const {
  getStaffList,
  updateStaffList,
  deleteStaff,
  createStaff,
  getStaffByUser,
  updateStaffUserID,
  getFeedBack,
  insertFeedBack,
} = require("../services/staffServices");

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
    console.log(req.body, req.params.id);
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
    const id = req.params.id;
    const data = await updateStaffUserID(id);
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
    const data = await getStaffByUser(id);
    if (data && data.EC != -1) {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    } else {
      return res.status(200).json({
        EM: data.EM,
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

const readFeedBack = async (req, res) => {
  try {
    const data = await getFeedBack();
    if (data && data.EC != -1) {
      return res.status(200).json({
        EM: "Get feedBack list successfully",
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

const createFeedBack = async (req, res) => {
  try {
    const { name, contact, content } = req.body;
    const data = await insertFeedBack(name, contact, content);
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

module.exports = {
  getStaffByUserID,
  readStaffList,
  updateStaff,
  removeStaff,
  addStaff,
  updateStaffUser,
  readFeedBack,
  createFeedBack
};
