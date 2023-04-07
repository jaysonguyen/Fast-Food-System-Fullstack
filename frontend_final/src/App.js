import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import OrderPage from "./components/pages/OrderPage";
import {OrderHistoryPage} from "./components/pages/OrderHistoryPage";
import {MenuManagementPage} from "./components/pages/MenuManagementPage";

import "./css/plugins.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/order" element={<OrderPage />} />
        <Route path="/orderhistory" element={<OrderHistoryPage />} />
        <Route path="/menumanagement" element={<MenuManagementPage />} />
      </Routes>
    </Router>
  );
}

export default App;
