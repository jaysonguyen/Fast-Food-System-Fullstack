import React from "react";
import { Link } from "react-router-dom";
import "../css/root.css"
import "../css/main.css"

const AdminSideBar = (props) => {
  return (
    <div>
      <div id="sidebar">
        <ul className="nav-list">
          <li className="nav-item has-submenu">
            <Link className="nav-link active" href="#">
              Product
            </Link>
            <ul className="submenu collapse show">
              <li>
                <Link className="nav-link" ex to="/admin/production">
                  Product
                </Link>
              </li>
              <li>
                <Link className="nav-link active" to="/admin/promotion">
                  Promotion
                </Link>
              </li>
              <li>
                <a className="nav-link" href="../Recipe/index.html">
                  Recipe
                </a>
              </li>
              <li>
                <a className="nav-link" href="../Ingredients/index.html">
                  Ingredients
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../Categories/index.html">
              Categories
            </a>
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
    </div>
  );
};

export default AdminSideBar;
