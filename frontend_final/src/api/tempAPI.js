import axios from "../setup/axios"

const FoodData = () => {
  return axios.get(`api/food`);
}

export { FoodData };
