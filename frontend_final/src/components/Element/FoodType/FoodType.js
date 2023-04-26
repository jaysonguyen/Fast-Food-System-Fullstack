import { useState, useEffect } from "react";
import FoodTypeCart from "../Card/FoodTypeCart/FoodTypeCart";
import { Nav } from "reactstrap";
import { FoodTypeData } from "../../../api/callApi";
//import { FoodTypeDT } from "../../../api/tempApi";

import { getFoodTypeService } from "../../../services/foodTypeServices";

export default function FoodType() {
  const [FoodType, setFoodType] = useState([]);

  const getFoodTypeData = async () => {
    let data = [];
    try {
      data = await getFoodTypeService();
      setFoodType(data);
    } catch (error) {
      setFoodType(FoodTypeDT);
    }
  };

  useEffect(() => {
    getFoodTypeData();
  }, []);

  return (
    <Nav tabs className="nav nav-tabs pizza-items filters bg-gr-primary">
      {FoodType &&
        FoodType.map((foodtype, idx) => (
          <FoodTypeCart key={idx} foodtype={foodtype} />
        ))}
    </Nav>
  );
}
