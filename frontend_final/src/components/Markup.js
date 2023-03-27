import React, { useEffect, useState } from "react";
import Tab from "./UIElement/Tab/Tab";
import "../css/plugins.css";
import "../css/style.css";
import "../css/templete.css";
import "../css/skin/skin-1.css";
import { FoodData } from "../api/tempAPI";
require("bootstrap");

function Markup() {
  const [foodList, setFoodList] = useState([]);
  const getFoodDataTest = async () => {
    let data = await FoodData();
    console.log(data);
    setFoodList(data.DT);
  };

  useEffect(() => {
    getFoodDataTest();
  }, []);

  return (
    <div className="container">
      <Tab />
      <ul>
        {foodList.map((item) => {
          return (
            <li key={item.ID}>
              ID: {item.ID} - Name: {item.Name} - Price: {item.Price}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Markup;
