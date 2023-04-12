// import { Link } from "react-router-dom";
import { useContext } from "react";
import { ActiveContext } from "../../../Context/ActiveContext";
import classnames from "classnames";
import { NavItem, NavLink } from "reactstrap";

export default function FoodTypeCart({ foodtype }) {
  const context = useContext(ActiveContext);
  const active = context.activeTab === foodtype.ID ? "active" : "";
  let icon = `/images/icon/${foodtype.icon}`;

  return (
    <NavItem className="nav-item item">
      <input type="radio" />
      <NavLink
        className={classnames({ active }, "item-icon-box nav-link")}
        onClick={() => context.toggle(foodtype.ID)}
      >
        <img src={icon} />
        <span>{foodtype.Name}</span>
      </NavLink>
    </NavItem>
  );
}
