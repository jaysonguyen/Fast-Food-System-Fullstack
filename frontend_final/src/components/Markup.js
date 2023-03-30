import React from "react";
import Home from "../pages/Home";
import FoodList from "../pages/FoodList";

import "../css/plugins.css";
import "../css/style.css";
import "../css/templete.css";
import "../css/skin/skin-1.css";

require("bootstrap");

function Markup() {
  return (
    <div>
      {/* <FoodList /> */}
      <Home />
    </div>
  );
}

export default Markup;
