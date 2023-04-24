import React from "react";
import { Link } from "react-router-dom";
import { ProductionSB, StoreSB } from "./AdminSideBar";

const pathname = window.location.pathname;

export function AdminSideBar() {
  console.log(pathname);
  if (pathname.includes("/production")) return <ProductionSB />;
  else if (pathname.includes("/store")) return <StoreSB />;
}

export function CasherSideBar() {
  return (
    <ul className="nav-list">
      <li className="nav-item">
        <Link to="/orders/all" className="nav-link">
          <b>Orders</b>
        </Link>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          <b>Notify</b>
        </a>
      </li>
    </ul>
  );
}
