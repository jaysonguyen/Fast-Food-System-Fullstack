import React, { useState, useEffect } from "react";

import { Orders } from "../../Kitchen/Orders";
import {
  getOrderByID,
  getOrderProcessing,
  getOrderCompleted,
} from "../../../services/orderServices";
import { getFoodData } from "../../../services/foodServices";

export const OrderPage = () => {
  const [food, setFood] = useState([]);
  const [orderNew, setOrderNew] = useState([]);
  const [orderCompleted, setOrderCompleted] = useState([]);

  const getAllFood = async () => {
    let data = await getFoodData();
    setFood(data);
  };

  const getAllOrderNew = async () => {
    let data = await getOrderProcessing();
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
  }, []);

  return (
    <div>
      <Orders orderNewData={orderNew} />
    </div>
  );
};