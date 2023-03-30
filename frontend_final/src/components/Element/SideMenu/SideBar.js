import React from "react";

export default function SideBar() {
  return (
    <div id="sidebar">
      <ul class="nav-list">
        <li class="nav-item has-submenu">
          <a class="nav-link active" href="#">
            {" "}
            Product{" "}
          </a>
          <ul class="submenu collapse show">
            <li>
              <a class="nav-link active" href="#">
                Product
              </a>
            </li>
            <li>
              <a class="nav-link" href="#">
                Promotion{" "}
              </a>
            </li>
            <li>
              <a class="nav-link" href="#">
                Recipe{" "}
              </a>
            </li>
            <li>
              <a class="nav-link" href="#">
                Ingredients{" "}
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item has-submenu">
          <a class="nav-link" href="#">
            {" "}
            Categories{" "}
          </a>
          <ul class="submenu collapse">
            <li>
              <a class="nav-link" href="#">
                Category List
              </a>
            </li>
            <li>
              <a class="nav-link" href="#">
                item 5{" "}
              </a>
            </li>
            <li>
              <a class="nav-link" href="#">
                item 6{" "}
              </a>
            </li>
            <li>
              <a class="nav-link" href="#">
                item 7{" "}
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            Brand
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            Import
          </a>
        </li>
      </ul>
    </div>
  );
}
