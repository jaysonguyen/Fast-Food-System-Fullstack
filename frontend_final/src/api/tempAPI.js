import axios from "../setup/axios";

const FoodData = () => {
  return axios.get(`api/food`);
};

const FoodTypeData = () => {
  return axios.get(`api/foodtype`);
};

const FoodByTypeData = (id) => {
  return axios.get(`api/foodtype/${id}`);
};

export { FoodData, FoodTypeData, FoodByTypeData };
