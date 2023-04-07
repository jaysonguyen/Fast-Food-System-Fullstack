import React, { useState, useEffect, useContext, useReducer } from "react";
import { OrderContext } from "../../../Context/OrderContext";

import { TabPane, NavLink } from "reactstrap";
import { FoodByTypeData } from "../../../../api/callApi";
import { FoodDT } from "../../../../api/tempApi";

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
      } else setFoods(data.DT);
    } catch (error) {
      setFoods(FoodDT);
    }
  };

  useEffect(() => {
    getFoodDataTest();
  }, [foods]);

  return (
    <TabPane tabId={foodtype.ID}>
      <div className="row ">
        {foods.map((food, idx) => {
          return (
            <div key={idx} className="dz-col col m-b30">
              <div className="item-box shop-item style2">
                <div className="item-img">
                  <img src={require("../../../../images/pic1.png")} alt="" />
                </div>
                <div className="item-info text-center">
                  <h4 className="item-title">
                    {food.Name}
                  </h4>
                  <p className="price text-primary">
                    <del>45</del>
                    {food.Price.toLocaleString("de-DE")}
                    <sup>&#8363;</sup>
                  </p>
                  <div className="cart-btn ">
                    <button
                      className="order-btn btn"
                      onClick={() => addToOrder(food)}
                    >
                      <i className="ti-shopping-cart"></i> Add to order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </TabPane>
  );
}
