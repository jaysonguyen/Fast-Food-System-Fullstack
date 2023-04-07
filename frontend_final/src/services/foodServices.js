import { FoodData } from "../api/callApi";
import { Food } from "../api/tempApi";

const getFoodData = async () => {
  let data = [];
  try {
    data = await FoodData();
    return data.DT;
  } catch (error) {
    return Food;
  }
};

export { getFoodData };
