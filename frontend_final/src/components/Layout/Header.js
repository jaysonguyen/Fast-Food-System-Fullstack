import React from "react";

import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export const DefaultHeader = () => {
  return <div>Header</div>;
};

export const CasherHeader = () => {
  return (
    <div id="casher-header" className="bg-gr-bg">
      <div className="container-fluid bg-gr-primary py-1 px-xxl-5 ">
        <div className="container d-flex flex-row justify-between text-white">
          <div className="main-nav">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                    Casher
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav nav-list me-auto mb-2 mb-lg-0">
                      {/* Order */}
                      <li className="nav-item">
                        <Link to={"/casher/order"} className="nav-link">
                          Make Order
                        </Link>
                      </li>
                      {/* <!-- Order history --> */}
                      <li className="nav-item">
                        <Link to={"/casher/orders"} className="nav-link">
                          Orders
                        </Link>
                      </li>
                      {/* <!-- menu management --> */}
                      <li className="nav-item">
                        <Link to={"/casher/menu"} className="nav-link">
                          Menu Management
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="profile">
            <div id="userNav" className="h-3">
              <img
                // src="../../../../images/user-default.jpg"
                className=""
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AuthHeader = () => {
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
                        <a class="nav-link active" href="#">
                          Production
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          Store
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          Time
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          Record
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          Performance
                        </a>
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

export const OrderSubHeader = () => {
  return (
    <>
      <div className="d-flex flex-row mt-3">
        <Link to="/casher/orders/all" className="nav-link mx-3">
          All Orders
        </Link>
        <Link to="/casher/orders/processing" className="nav-link mx-3">
          Processing
        </Link>
        <Link to="/casher/orders/completed " className="nav-link mx-3">
          Completed
        </Link>
        <Link to={"/casher/"} className="nav-link mx-3">
          Cancelled
        </Link>
      </div>
    </>
  );
};
