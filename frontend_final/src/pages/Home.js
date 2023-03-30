import React from "react";
import Tab from "../components/Element/Tab/Tab";
import Order from "../components/Element/Order/Order";

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
