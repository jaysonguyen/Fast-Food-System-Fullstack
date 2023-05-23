import React, { createContext, useReducer } from "react";
import moment from "moment";

import { getAssignByStaffID } from "../../services/calendarService";

const AssignShiftContext = createContext();

function shiftReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_ASSIGN":
      return [...state, ...action.payload];
    case "REMOVE_FROM_ASSIGN":
      console.log(action.payload[0].ShiftID, action.payload[0].Date);
      return state.filter(
        (item) =>
          item.ShiftID !== action.payload[0].ShiftID ||
          item.Date !== action.payload[0].Date
      );
    case "INCREMENT_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, Quantity: item.Quantity + 1 }
          : item
      );
    case "DECREMENT_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, Quantity: item.Quantity - 1 }
          : item
      );
    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, Quantity: action.payload.Quantity }
          : item
      );
    case "EMPTY_ORDER":
      return [];
    default:
      return state;
  }
}

const days = [
  {
    Name: "Sunday",
    Day: "",
    Shifts: [],
  },
  {
    Name: "Monday",
    Day: "",
    Shifts: [],
  },
  {
    Name: "Tuesday",
    Day: "",
    Shifts: [],
  },
  {
    Name: "Wednesday",
    Day: "",
    Shifts: [],
  },
  {
    Name: "Thursday",
    Day: "",
    Shifts: [],
  },
  {
    Name: "Friday",
    Day: "",
    Shifts: [],
  },
  {
    Name: "Saturday",
    Day: "",
    Shifts: [],
  },
];

const getNextWeekDays = () => {
  const today = moment();
  const nextWeek = today.clone().add(1, "weeks");

  for (let i = 0; i < 7; i++) {
    const day = nextWeek.clone().add(i, "days");
    days[i].Day = day.format("YYYY-MM-DD");
  }
};
const initData = async () => {
  getNextWeekDays();
  const staffid = JSON.parse(sessionStorage.getItem("User")).StaffID;
  if (staffid != undefined) {
    const result = await getAssignByStaffID(staffid);
    if (result && result.EC != -1) {
      days.map((d) => {
        //get shift that have same Date and then add to Day
        const shiftList = result.DT.filter(
          (r) => r.Date.substring(0, 10) == d.Day
        );
        d.Shifts = shiftList;
      });
    }
  }
  // console.log("days: ", days);
};
initData();

const AssignShiftProvider = ({ children }) => {
  const [assignmentDetails, dispatch] = useReducer(shiftReducer, []);

  const addToAssign = (item) => {
    dispatch({ type: "ADD_TO_ASSIGN", payload: item });
  };

  const removeFromAssign = (item) => {
    dispatch({ type: "REMOVE_FROM_ASSIGN", payload: item });
  };

  const values = { days, assignmentDetails, addToAssign, removeFromAssign };

  return (
    <AssignShiftContext.Provider value={values}>
      {children}
    </AssignShiftContext.Provider>
  );
};

export { AssignShiftProvider, AssignShiftContext };
