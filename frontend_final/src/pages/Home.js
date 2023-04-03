import React from "react";
import Tab from "../components/Element/Tab/Tab";
import Order from "../components/Element/Order/Order";

import "../css/style.css";
import "../css/templete.css";
import "../css/skin/skin-1.css";

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Tab />
        <Order />
      </div>
    </div>
  );
}
