import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Production from "../Production/Production";
import AdminSideBar from "../Admin_side_bar/AdminSideBar";

const Admin_Routes = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/production" element={<Production />} />
        <Route path="/production" element={<Production />} />
        <Route path="/production" element={<Production />} />
        <Route path="/production" element={<Production />} />
      </Routes>
    </Router>
  );
};

export default Admin_Routes;
