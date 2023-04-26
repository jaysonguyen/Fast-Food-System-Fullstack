import React, { useState, useEffect, useContext, useReducer } from "react";
import { OrderContext } from "../../../Context/OrderContext";

import { TabPane, NavLink } from "reactstrap";
import { FoodByTypeData } from "../../../../api/callApi";
//import { FoodDT } from "../../../../api/tempApi";

export default function FoodCart({ foodtype }) {
  const [foods, setFoods] = useState([]);

  const { addToOrder } = useContext(OrderContext);

  // const addToOrder = (food) => {
  //   dispatch({ type: "ADD_TO_ORDER", payload: food });
  // };

  const getFoodDataTest = async () => {
    try {
      let data = await FoodByTypeData(foodtype.ID);
      if (data.EM.includes("Error")) {
        setFoods(FoodDT);
      } else {
        setFoods(data.DT);
        console.log(data.DT);
      }
    } catch (error) {
      setFoods(FoodDT);
    }
  };

  useEffect(() => {
    getFoodDataTest();
  }, [foods]);

  return (
    <TabPane
      className="food-list"
      tabId={foodtype.ID}
      style={{ overflowY: "scroll" }}
    >
      {foods.map((food, idx) => {
        return (
          <div
            class=" mx-2 food-card float-start"
            onClick={() => addToOrder(food)}
          >
            <div class="food-img">
              <img src="../images/default.jpg" alt="food image" />
            </div>
            <div class="food-name">{food.Name}</div>
            <div class="food-price">{food.Price}</div>
          </div>
        );
      })}
    </TabPane>
  );
}
