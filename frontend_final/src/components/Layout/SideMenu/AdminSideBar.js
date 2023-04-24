import React from "react";
import { Link } from "react-router-dom";

export const ProductionSB = () => {
  return (
    <ul className="nav-list nav flex-column">
      <li className="nav-item has-submenu">
        <a href="#product" data-bs-toggle="collapse" class="nav-link">
          <b>Product</b>
        </a>
        <ul id="product" className="submenu ms-3 collapse">
          <li>
            <Link className="nav-link" to="/admin/production">
              Product
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/admin/production/catagories">
              Categories
            </Link>
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
          <li>
            <Link className="nav-link active" to="/admin/production/promotion">
              Promotion
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/admin/production/supplier">
          <b>Supplier </b>
        </Link>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          <b>Import</b>
        </a>
      </li>
    </ul>
  );
};

export const StoreSB = () => {
  return (
    <ul className="nav-list nav flex-column">
      <li className="nav-item has-submenu">
        <a className="nav-link" data-bs-toggle="collapse" href="#staff">
          <b>Staff</b>
        </a>
        <ul id="staff" className="submenu collapse">
          <li>
            <a className="nav-link" href="#">
              Staff
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Calendar
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Shift
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#">
          <b>Leave </b>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#">
          <b>Salary </b>
        </Link>
      </li>
    </ul>
  );
};
