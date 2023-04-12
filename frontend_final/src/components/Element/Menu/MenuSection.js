import React, { useEffect, useState } from "react";

import { MenuList } from "./MenuList";

import { getFoodTypeService } from "../../../services/foodTypeServices";

export const MenuSection = () => {
  const [foodType, setFoodType] = useState([]);
  const getFoodTypeData = async () => {
    let data = await getFoodTypeService();
    setFoodType(data);
  };

  useEffect(() => {
    getFoodTypeData();
  }, []);

  return (
    <div id="SliderContainer" className="container">
      {foodType.map((item, idx) => (
        <div className="item-container">
          <div className="title menu-title">{item.Name}</div>
          <MenuList key={idx} foodtype={item} />
        </div>
      ))}
    </div>
  );
};
