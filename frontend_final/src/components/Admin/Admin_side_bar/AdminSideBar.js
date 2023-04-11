import React from "react";
import { Link } from "react-router-dom";

const AdminSideBar = (props) => {
  return (
    <div id="auth-header" class="bg-gr-bg">
      <div class="container-fluid bg-gr-primary py-md-3">
        <div class="d-flex flex-column text-white">
          <div class="upper-nav pb-3">
            <div class="container">
              <div class="d-flex flex-col justify-content-between">
                <div class="d-flex flex-row">
                  <a class="logo nav-link me-3"> LOGO </a>
                  <form class="d-flex">
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button class="btn rounded-lg btn-clr-normal" type="submit">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </form>
                </div>
                <div class="d-flex flex-row">
                  <ul class="nav justify-content-end">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">
                        Feedback
                      </a>
                    </li>
                    <li class="nav-item ms-2">
                      <a class="nav-link setting" href="#">
                        <i class="fa-solid fa-gear"></i>
                      </a>
                    </li>
                  </ul>

                  <div class="user">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="main-nav">
            <div class="container">
              <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">
                    Admin
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav nav-list me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">
                          Dashboard
                        </a>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link active" to="/production">
                          Product
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" href="#">
                          Store
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" href="#">
                          Time
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" href="#">
                          Record
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" href="#">
                          Performance
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
