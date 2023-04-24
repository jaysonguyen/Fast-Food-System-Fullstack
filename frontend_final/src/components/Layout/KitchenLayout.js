import React from "react";
import { Outlet } from "react-router-dom";
import { KitchenSideBar } from "./SideMenu/SideBar";

export const KitchenLayout = () => {
  return (
    <div className="container-fluid">
      <div className="container row mx-auto">
        <div id="sidebar" className="sidebar py-4 px-0 col-lg-2">
          <KitchenSideBar />
        </div>
        <div className="main-content px-0 col-lg-9">
          <div className="content py-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
