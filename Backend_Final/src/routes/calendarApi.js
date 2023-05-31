const express = require("express");
const router = express.Router();
const {
  clearAssignCalendar,
  getAssignByStaffid,
  deleteAssignByStaffid,
  insertAssign,
  getAllAssign,
  getAllCalendar,
  insertCalendar,
} = require("../controller/calendarController");

// api/calendar
router.route("/assign/list").get(getAllAssign);
router.route("/assign/").post(insertAssign);
router.route("/assign/get/:id").get(getAssignByStaffid);
router.route("/assign/add").post(insertAssign);

router.route("/list").get(getAllCalendar);
router.route("/add").post(insertCalendar);

module.exports = router;
