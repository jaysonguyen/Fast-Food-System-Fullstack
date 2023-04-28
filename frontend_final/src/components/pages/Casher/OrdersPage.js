import React from "react";
import { Outlet } from "react-router-dom";
import { CasherSideBar } from "../../Layout/SideMenu/SideBar";
import { OrderSubHeader } from "../../Layout/Header";
import { Link } from "react-router-dom";

export const OrderManagement = () => {
  return (
    <>
      <div className="main-header row">
        <div className="col left d-flex flex-row gap-3 align-items-center">
          <button className="btn btn-clr-normal">
            <ArrowBendDownLeft size={22} color="#ffffff" weight="fill" />
          </button>
          <div className="breadcumb d-flex flex-row gap-3 align-items-center">
            <Link to="/" className="prev">
              Dashboard
            </Link>
            <div className="curr">Sales statistics</div>
          </div>
        </div>
        <div className="col right d-flex flex-row gap-3 align-items-center">
          <div className="noti">
            <Bell size={30} color="#3a3a3a" weight="fill" />
          </div>
          <div className="time">
            <Clock size={30} color="#3a3a3a" weight="fill" />
          </div>
          <div className="search">
            <i className="fa fa-search"></i>
            <input type="text" />
          </div>
        </div>
      </div>
      <div id="myMain" class="scrolly">
        <div className="content py-3 px-5">
          <div className="title fs-2">Orders List</div>
          <OrderSubHeader />
          <Outlet />
        </div>
      </div>
    </>
  );
};
