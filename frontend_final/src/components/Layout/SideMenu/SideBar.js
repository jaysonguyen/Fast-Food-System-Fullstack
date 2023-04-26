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

export function KitchenSideBar() {
  return (
    <>
      <ul className="nav main-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="fa fa-table-list"></i>
            <span className="d-none d-sm-inline">Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <Link to="/kitchen/orders" className="nav-link">
            <i className="fa fa-table-list"></i>
            <span className="d-none d-sm-inline">Order</span>
          </Link>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="fa fa-table-list"></i>
            <span className="d-none d-sm-inline">Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="fa fa-table-list"></i>
            <span className="d-none d-sm-inline">Dashboard</span>
          </a>
        </li>
      </ul>
      <div className="sub-title my-2 mx-3">Order</div>
      <ul className="nav main-nav">
        <li className="nav-item">
          <a href="#" className="nav-link active">
            <i className="fa fa-table-list"></i>
            <span className="d-none d-sm-inline">Notify</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="fa fa-table-list"></i>
            <span className="d-none d-sm-inline">Support</span>
          </a>
        </li>
      </ul>
    </>
  );
}
