import React, { useState, StrictMode } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";

// casher
import OrderPage from "./components/pages/Casher/MakeOrderPage";
import { MenuManagementPage } from "./components/pages/Casher/MenuManagementPage";
import { OrderManagement } from "./components/pages/Casher/OrdersPage";
import { OrderHistory } from "./components/pages/Casher/OrderHistory";
import { OrderProcessing } from "./components/pages/Casher/OrderProcessing";
import { OrderCompleted } from "./components/pages/Casher/OrderCompleted";
import { LoginPage } from "./components/pages/Auth/LoginPage";

// admin
import { FoodList } from "./components/pages/FoodList";

import "./css/plugins.css";

function App() {
  return (
    <StrictMode>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route path="/order" element={<OrderPage />} />
          <Route path="/menu" element={<MenuManagementPage />} />
          <Route path="/orders" element={<OrderManagement />}>
            <Route path="/orders/all" element={<OrderHistory />} />
            <Route path="/orders/processing" element={<OrderProcessing />} />
            <Route path="/orders/completed" element={<OrderCompleted />} />
          </Route>

          <Route path="/admin/food" element={<FoodList />} />
        </Routes>
      </Router>
    </StrictMode>
  );
}

export default App;
