import React, { useState, useEffect } from "react";
import { getShiftList } from "../../../services/shiftServices";
import { useDrop, useDrag } from "react-dnd";
import "./Calendar.css";

import { Shift } from "./Shift";

export const Calendar = () => {
  const [monday, setMonday] = useState([]);
  const [tuesday, setTuesday] = useState([]);
  const [wednesday, setWednesday] = useState([]);
  const [thursday, setThursday] = useState([]);
  const [friday, setFriday] = useState([]);
  const [saturday, setSaturday] = useState([]);
  const [sunday, setSunday] = useState([]);

  const [shifts, setShifts] = useState([]);

  const [{ isOver1 }, dropToAdd] = useDrop({
    accept: "shift",
    drop: (item) => addShift(item.id),
    collect: (monitor) => ({
      isOver1: !!monitor.isOver(),
    }),
  });

  const [{ isOver2 }, dropToRemove] = useDrop({
    accept: "shift",
    drop: (item) => {
      console.log("item Id: ", item.id);
      removeShift(item.id);
    },
    collect: (monitor) => ({
      isOver2: !!monitor.isOver(),
    }),
  });

  const removeShift = (id) => {
    console.log(id);
    console.log(monday);
    setMonday(monday.filter((s) => s.ID !== id));
  };

  const addShift = (id) => {
    let check = monday.filter((s) => s.ID === id);
    if (check == 0) {
      const mondayList = shifts.filter((shift) => id === shift.ID);
      setMonday((shift) => [...shift, mondayList[0]]);
    }
  };

  const init = async () => {
    const data = await getShiftList();
    if (data && data.EC != -1) {
      setShifts(data.DT);
    } else {
      setShifts([]);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <div className=" position-relative">
        <div ref={dropToRemove} className={isOver2 ? "trash drop" : "trash"}>
          <span></span>
          <i></i>
        </div>
        <div className="shift-wrapper">
          <div className="shift-list">
            {shifts &&
              shifts.map((s, idx) => {
                return <Shift key={idx} shift={s} />;
              })}
          </div>
        </div>
        <div className="calendar-wrapper">
          <div className="calendar-container">
            <div
              className={isOver1 ? "day drop" : "day"}
              ref={dropToAdd}
              style={{ backgroundColor: "var(--clr-1)" }}
            >
              <div className=" day-title">Sunday</div>
              <div className=" drop-area">
                {monday &&
                  monday.map((item, idx) => (
                    <Shift
                      key={idx}
                      shift={item}
                      onClick={removeShift}
                    />
                  ))}
              </div>
            </div>
            <div className="day" style={{ backgroundColor: "var(--clr-2)" }}>
              <div className=" day-title">Monday</div>
              <div className=" drop-area"></div>
            </div>
            <div className="day" style={{ backgroundColor: "var(--clr-3)" }}>
              <div className=" day-title">Tuesday</div>
              <div className=" drop-area"></div>
            </div>
            <div className="day" style={{ backgroundColor: "var(--clr-4)" }}>
              <div className=" day-title">Wednesday</div>
              <div className=" drop-area"></div>
            </div>
            <div className="day" style={{ backgroundColor: "var(--clr-5)" }}>
              <div className=" day-title">Thursday</div>
              <div className=" drop-area"></div>
            </div>
            <div className="day" style={{ backgroundColor: "var(--clr-6)" }}>
              <div className=" day-title">Friday</div>
              <div className=" drop-area"></div>
            </div>
            <div className="day" style={{ backgroundColor: "var(--clr-7)" }}>
              <div className=" day-title">Saturday</div>
              <div className=" drop-area"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
