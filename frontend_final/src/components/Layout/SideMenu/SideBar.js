import React from "react";
import { Link } from "react-router-dom";

export function AdminSideBar() {
  return (
    <div id="sidebar">
      <ul className="nav-list">
        <li className="nav-item has-submenu">
          <a
            className="nav-link active"
            data-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Product
          </a>
          <ul id="collapseExample" className="collapse show">
            <li>
              <a className="nav-link active" href="#">
                Product
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Promotion
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Recipe
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Ingredients
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item has-submenu">
          <a className="nav-link" href="#">
            Categories
          </a>
          <ul className="submenu collapse">
            <li>
              <a className="nav-link" href="#">
                Category List
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                item 5
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                item 6
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                item 7
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Brand
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Import
          </a>
        </li>
      </ul>
    </div>
  );
}

export function CasherSideBar() {
  return (
    <div id="sidebar" className="col-2">
      <ul className="nav-list">
        {/* <li className="nav-item has-submenu">
          <a
            className="nav-link active"
            data-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Order
          </a>
          <ul id="collapseExample" className="collapse show">
            <li>
              <a className="nav-link active" href="#">
                Product
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Promotion
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Recipe
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Ingredients
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item has-submenu">
          <a className="nav-link" href="#">
            Categories
          </a>
          <ul className="submenu collapse">
            <li>
              <a className="nav-link" href="#">
                Category List
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                item 5
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                item 6
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                item 7
              </a>
            </li>
          </ul>
        </li> */}
        <li className="nav-item">
          <a href="#" className="nav-link">
            Live Order
          </a>
        </li>
        <li className="nav-item">
          <Link to="/orders/all" className="nav-link">
            Order History
          </Link>
        </li>
      </ul>
    </div>
  );
}
