import {
  OrderData,
  OrderProcessingData,
  OrderCompletedData,
  AddNewOrderData,
  getOrderById,
  updateOrderStatus,
} from "../api/callApi";
import { getFoodData } from "./foodServices";

export const getAllOrder = async () => {
  let data = [];
  let food = await getFoodData();
  try {
    data = await OrderData();
    return data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

export const addNewOrder = async (data) => {
  try {
    return await AddNewOrderData(data);
  } catch (error) {
    console.log(error);
    return -2;
  }
};

export const getOrderProcessing = async () => {
  let data = [];
  try {
    data = await OrderProcessingData();
    return data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

export const getOrderCompleted = async () => {
  let data = [];
  try {
    data = await OrderCompletedData();
    return data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

export const getOrderByID = async (id) => {
  let data = [];
  try {
    data = await getOrderById(id);
    return data.DT;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

export const updateOrderStatusService = async (id) => {
  let data = [];
  try {
    data = await updateOrderStatus(id);
    return data.DT;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};
