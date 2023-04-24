import React, { useState, useEffect } from "react";
import {
  getOrderByID,
  getOrderProcessing,
  getOrderCompleted,
} from "../../services/orderServices";
import { getFoodData } from "../../services/foodServices";

export const Orders = () => {
  const [food, setFood] = useState([]);
  const [orderNew, setOrderNew] = useState([]);
  const [orderCompleted, setOrderCompleted] = useState([]);

  const getAllFood = async () => {
    let data = await getFoodData();
    setFood(data);
  };

  const getAllOrderNew = async () => {
    let data = await getOrderProcessing();
    const newData = data.DT.map((item) =>
      item.Details.map((d, idx) => {
        const foodItem = food.find((f) => f.ID === d.FoodID);
        if (foodItem) {
          item.Details[idx] = { ...d, FoodName: foodItem.Name };
        }
      })
    );
    setOrderNew(data.DT);
  };

  const getAllOrderCompleted = async () => {
    let data = await getOrderCompleted();
    setOrderCompleted(data.DT);
  };

  useEffect(() => {
    getAllFood();
    getAllOrderNew();
    getAllOrderCompleted();
  }, [orderNew, orderCompleted]);

  return (
    <>
      <div className="order-title">New</div>
      <div className="d-flex flex-col">
        {orderNew.map((order, idx) => (
          <div className="order-card">
            <div className="row order-list-title mb-2">
              <div className="col order-code">Order {order.ID}</div>
              <div className="col-3">
                <button className="btn btn-clr-normal">Done</button>
              </div>
            </div>
            {order.Details.map((d) => (
              <div className="row order-table">
                <div className="row order-table-title">
                  <div className="col ">Food Name</div>
                  <div className="col-lg-4 ">Quantity</div>
                </div>
                <div className="row order-table-item">
                  <div className="col ">{d.FoodName}</div>
                  <div className="col-lg-4 ">{d.Quantity}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="order-title">Completed</div>
    </>
  );
};
