import { useState, useEffect } from "react";
import FoodTypeCart from "../Card/FoodTypeCart/FoodTypeCart";
import { Nav } from "reactstrap";
import { FoodTypeData } from "../../../api/tempAPI";


export default function FoodType() {
  const [FoodType, setFoodType] = useState([]);

  const getFoodDataTest = async () => {
    let data = await FoodTypeData();
    setFoodType(data.DT);
  };

  useEffect(() => {
    getFoodDataTest();
  }, []);

  return (
    <Nav tabs className="nav nav-tabs pizza-items filters bg-primary">
      {FoodType.map((foodtype, idx) => {
        return <FoodTypeCart key={idx} foodtype={foodtype} />;
      })}
    </Nav>
  );
}
