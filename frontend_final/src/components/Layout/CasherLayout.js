import React from "react";
import { Outlet } from "react-router-dom";
import { CasherSideBar } from "./SideMenu/SideBar";

export const CasherLayout = () => {
  return (
    <div id="wapper" className="flex-wrapcontainer-fluid">
      <div className="row flex-nowrap">
        <div id="mySidebar" className="col-2 col-md-3 col-lg-2 min-vh-100">
          <div className="">
            <div className="logo">
              <div className="logo-img">
                <img src="../images/abstract-img.png" alt="logo image" />
              </div>
              <span>FoodiePos</span>
            </div>
            <CasherSideBar />
          </div>
          <div className="account my-3">
            <div className="account-card text-center">
              <div className="account-img">
                <img src="../images/default.jpg" alt="account image" />
              </div>
              <div className="my-2">Thao My</div>
              <div className="my-2">Casher</div>
              <button className="btn btn-clr-normal">Details</button>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
