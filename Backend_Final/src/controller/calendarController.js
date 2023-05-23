const { AsyncQuery } = require("../config/configDatabase");

//get assignment by staffid
const getAssignByStaffid = async (req, res) => {
  try {
    const id = req.params.id;
    const proc = "exec sp_getAssignWithStaffID";
    const input = [["staffid", id]];

    const result = await AsyncQuery(proc, input, true);
    if (result.success) {
      return res.status(200).json({
        EM: "Get asignment by staffid successfully!!",
        EC: 1,
        DT: result.data.recordset,
      });
    } else {
      return res.status(500).json({
        EM: result.data,
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

//get all assignment
const getAllAssign = async (req, res) => {
  try {
    const proc = "exec sp_getAllAssign";
    const input = [];

    const result = await AsyncQuery(proc, input, true);
    if (result.success) {
      return res.status(200).json({
        EM: "Get all asignment successfully!!",
        EC: 1,
        DT: result.data.recordset,
      });
    } else {
      return res.status(500).json({
        EM: result.data,
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

//insert assignment
const insertAssign = async (req, res) => {
  try {
    //get a list of assignment shift by staffid
    const inputs = req.body;
    let proc = "";
    let input = [];

    //clear old if it exists
    proc = "exec sp_deleteAssignWithStaffID";
    input = [["StaffID", inputs[0].StaffID]];
    const clearAssign = await AsyncQuery(proc, input, true);

    //insert all it again
    inputs.map(async (assign) => {
      proc = "exec sp_insertAssign";
      input = [
        ["ShiftID", assign.ShiftID],
        ["StaffID", assign.StaffID],
        ["Date", assign.Date],
      ];
      const result = await AsyncQuery(proc, input, true);

      if (!result.success) {
        return res.status(500).json({
          EM: result.data,
          EC: -1,
          DT: [],
        });
      }
    });

    return res.status(500).json({
      EM: "Insert all assignment successfully",
      EC: 1,
      DT: [],
    });
  } catch (error) {
    return res.status(500).json({
      EM: error.message,
      EC: -1,
      DT: [],
    });
  }
};

//delete assignment by staffid
const deleteAssignByStaffid = async (req, res) => {
  try {
    const id = req.params.id;

    const proc = "exec sp_deleteAssignWithStaffID";
    const input = [["staffid", id]];

    const result = await AsyncQuery(proc, input, true);
    if (result.success) {
      return res.status(200).json({
        EM: "Delete asignment by staffid successfully!!",
        EC: 1,
        DT: result.data.recordset,
      });
    } else {
      return res.status(500).json({
        EM: result.data,
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

// clear all assignment
const clearAssignCalendar = async (req, res) => {
  try {
    const proc = "exec sp_clearAssign";
    const input = [];

    const result = await AsyncQuery(proc, input, true);
    if (result.success) {
      return res.status(200).json({
        EM: "Clear all asignment successfully!!",
        EC: 1,
        DT: result.data.recordset,
      });
    } else {
      return res.status(500).json({
        EM: result.data,
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

module.exports = {
  clearAssignCalendar,
  getAssignByStaffid,
  deleteAssignByStaffid,
  insertAssign,
  getAllAssign,
};
