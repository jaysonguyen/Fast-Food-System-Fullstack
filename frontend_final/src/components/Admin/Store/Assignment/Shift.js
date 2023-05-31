import React from "react";
import moment from "moment";

export const Shift = ({ data, clickToAddOrRemove }) => {
  return (
    <div
      className={`shift-container row s-${data.ShiftID - 1} ${
        data.Status ? "added" : ""
      }`}
      style={{
        backgroundColor: `var(--clr-s-${data.ShiftID - 1})`,
        color: data.ShiftID - 1 < 2 ? `` : `#fff`,
      }}
      onClick={() => clickToAddOrRemove(data.StaffID, data.ShiftID)}
    >
      <div className="shift-name col">{data.StaffID}</div>
    </div>
  );
};
