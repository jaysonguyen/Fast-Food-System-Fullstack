import {
  OrderData,
  OrderProcessingData,
  OrderCompletedData,
  AddNewOrderData,
} from "../api/callApi";

export const getAllOrder = async () => {
  let data = [];
  try {
    data = await OrderData();
    return data.DT;
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
    return data.DT;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

export const getOrderCompleted = async () => {
  let data = [];
  try {
    data = await OrderCompletedData();
    return data.DT;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};
