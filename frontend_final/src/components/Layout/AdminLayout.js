import React from "react";
import { Outlet } from "react-router-dom";
import { AdminSideBar } from "./SideMenu/SideBar";
import "../../css/AdminLayout.css";

export const AdminLayout = () => {
  return (
    <div className="container-fluid adminLayout_container">
      <div className="row">
        <div id="sidebar" className="sidebar py-4 px-0 col-lg-2">
          <AdminSideBar />
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
