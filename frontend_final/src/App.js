import React, { useState, StrictMode } from "react";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "./css/plugins.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ToastContainer } from "react-toastify";

//admin
import { AdminLayout } from "./components/Layout/AdminLayout";
import { FoodList } from "./components/pages/FoodList";
import { AdminDB } from "./components/pages/admin/AdminDB";
import AdminHeader from "./components/Admin/Admin_Header/AdminHeader";
// import AdminSideBar from "./components/Admin/Admin_Header/AdminSideBar";
import { AdminSideBar } from "./components/Layout/SideMenu/SideBar";
import Production from "./components/Admin/Production/Production";
import AllOder from "./components/Kitchen/AllOder/AllOder";

// casher
import { CasherLayout } from "./components/Layout/CasherLayout";
import OrderPage from "./components/pages/Casher/MakeOrderPage";
import { MenuManagementPage } from "./components/pages/Casher/MenuManagementPage";
import { OrderManagement } from "./components/pages/Casher/OrdersPage";
import { OrderHistory } from "./components/pages/Casher/OrderHistory";
import { OrderProcessing } from "./components/pages/Casher/OrderProcessing";
import { OrderCompleted } from "./components/pages/Casher/OrderCompleted";
import { OrderReady } from "./components/pages/Casher/OrderReady";
import { LoginPage } from "./components/pages/Auth/LoginPage";

import Admin from "./components/Admin/Admin";
import Promotion from "./components/Admin/Promotion/Promotion";
import Catagories from "./components/Admin/Catagories/Catagories";
import Supplier from "./components/Admin/Supplier/Supplier";
import Staff from "./components/Admin/Store/Staff/Staff";

// kitchen
import { KitchenLayout } from "./components/Layout/KitchenLayout";
import { OrderPage as KitchenOrder } from "./components/pages/Kitchen/OrderPage";

import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./js/main.js";
import FoodType from "./components/Element/FoodType/FoodType";
import Order from "./components/Element/Order/Order";

function App() {
  const pathname = window.location.pathname;
  let flag = false;
  if (pathname == "/admin") {
    flag = true;
  }
  return (
    <StrictMode>
      <Router>
        {/* {pathname.includes("/admin") ? <AdminHeader /> : <NavBar />} */}
        {/* <NavBar /> */}
        <Routes>
          <Route path="/kitchen" element={<AllOder />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/" element={<OrderPage />} />
          <Route path="/casher" element={<CasherLayout />}>
            <Route path="/casher/menu" element={<MenuManagementPage />} />
            <Route path="/casher/orders" element={<OrderManagement />}>
              <Route path="/casher/orders/all" element={<OrderHistory />} />
              <Route
                path="/casher/orders/processing"
                element={<OrderProcessing />}
              />
              <Route
                path="/casher/orders/completed"
                element={<OrderCompleted />}
              />
              <Route path="/casher/orders/ready" element={<OrderReady />} />
            </Route>
          </Route>

          {/* admin */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<AdminDB />}></Route>
            {/* production */}
            <Route path="/admin/production" element={<Production />}></Route>
            <Route
              path="/admin/production/promotion"
              element={<Promotion />}
            ></Route>
            <Route
              path="/admin/production/catagories"
              element={<Catagories />}
            ></Route>
            <Route
              path="/admin/production/supplier"
              element={<Supplier />}
            ></Route>
            {/* store */}
            <Route path="/admin/store/staff" element={<Staff />}></Route>
          </Route>
          {/* kitchen */}
          <Route path="/kitchen" element={<KitchenLayout />}>
            <Route path="/kitchen/orders" element={<KitchenOrder />}></Route>
          </Route>
        </Routes>
      </Router>

      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </StrictMode>
  );
}

export default App;
