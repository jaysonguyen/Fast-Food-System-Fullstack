// import { Link } from "react-router-dom";
import { useContext } from "react";
import { ActiveContext } from "../../Context/ActiveContext";
import classnames from "classnames";
import { NavItem, NavLink } from "reactstrap";

export default function FoodTypeCart({ foodtype }) {
  const context = useContext(ActiveContext);
  const active = context.activeTab === foodtype.id ? "active" : "";

  return (
    <NavItem className="nav-item item">
      <input type="radio" />
      <NavLink
        className={classnames({ active }, "item-icon-box nav-link")}
        onClick={() => context.toggle(foodtype.id)}
      >
        <i className="flaticon-pizza-slice"></i>
        <span>{foodtype.name}</span>
      </NavLink>
    </NavItem>
  );
}
