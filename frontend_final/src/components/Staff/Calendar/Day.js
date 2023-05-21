import React, { useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import moment from "moment";

import { Shift } from "./Shift";

import { getShiftList } from "../../../services/shiftServices";

export const Day = (props) => {
  const [list, setList] = useState(props.data.Shifts);
  const [shifts, setShifts] = useState([]);

  const init = async () => {
    const data = await getShiftList();
    if (data && data.EC != -1) {
      setShifts(data.DT);
    } else {
      setShifts([]);
    }
  };

  const [{ isOver1 }, dropToAdd] = useDrop({
    accept: "shift",
    drop: (item) => addShift(item.id),
    collect: (monitor) => ({
      isOver1: !!monitor.isOver(),
    }),
  });

  const addShift = (id) => {
    //check if item is already exists in list or not?
    let check = list.filter((s) => s[0].ID === id);
    if (check.length == 0) {
      //if not then add
      const getShift = shifts.filter((shift) => id === shift.ID);
      setList((shift) => [...shift, getShift]);
      props.incCount();
    }
  };

  const removeShift = (id) => {
    //remove item from list
    setList(list.filter((s) => s[0].ID !== id));
    props.decCount();
  };

  useEffect(() => {
    init();
  }, []);
  console.log("data: ", props.data);

  return (
    <div
      className={isOver1 ? "day drop" : "day"}
      ref={dropToAdd}
      style={{ backgroundColor: `var(--clr-${props.index + 1})` }}
    >
      <div className=" day-title">
        <div>{props.data && props.data.Name}</div>
        <div className="day-time">
          {props.data && moment(props.data.Day).format("DD/MM/yy")}
        </div>
      </div>
      <div className=" drop-area">
        {list &&
          list.map((s, idx) => (
            <Shift key={idx} shift={s[0]} onClick={removeShift} />
          ))}
      </div>
    </div>
  );
};
