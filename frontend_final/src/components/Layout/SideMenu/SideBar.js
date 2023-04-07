import React from "react";

export function AdminSideBar() {
  return (
    <div id="sidebar">
      <ul class="nav-list">
        <li class="nav-item has-submenu">
          <a
            class="nav-link active"
            data-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Product
          </a>
          <ul id="collapseExample" class="collapse show">
            <li>
              <a class="nav-link active" href="#">
                Product
              </a>
            </li>
            <li>
              <a class="nav-link" href="#">
                Promotion
              </a>
            </li>
            <li>
              <a class="nav-link" href="#">
                Recipe
              </a>
            </li>
            <li>
              <a class="nav-link" href="#">
                Ingredients
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item has-submenu">
          <a class="nav-link" href="#">
            Categories
          </a>
          <ul class="submenu collapse">
            <li>
              <a class="nav-link" href="#">
                Category List
              </a>
            </li>
            <li>
              <a class="nav-link" href="#">
                item 5
              </a>
            </li>
            <li>
              <a class="nav-link" href="#">
                item 6
              </a>
            </li>
            <li>
              <a class="nav-link" href="#">
                item 7
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

export function CasherSideBar() {
  return (
    <div id="sidebar">
      <div class="vh-100 bg-dark text-light">
        <div class="logo bg-light text-dark">LOGO</div>
        <div id="menu">
          <ul class="p-0">
            <li class="nav-item">
              <a href="#" class="nav-link ">
                item
              </a>
            </li>
            <li class="nav-item">
              <a href="/" class="nav-link ">
                item
              </a>
            </li>
            <li class="nav-item">
              <a href="/" class="nav-link ">
                item
              </a>
            </li>
            <li class="nav-item">
              <a href="/" class="nav-link ">
                item
              </a>
            </li>
            <li class="nav-item">
              <a href="/" class="nav-link ">
                item
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
