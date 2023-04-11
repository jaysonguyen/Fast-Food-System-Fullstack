import { FoodData, FoodByTypeData } from "../api/callApi";
//import { FoodDT } from "../api/tempApi";

const getFoodData = async () => {
  let data = [];
  try {
    data = await FoodData();
    return data.DT;
  } catch (error) {
    return FoodDT;
  }
};

const getFoodByTypeData = async (id) => {
  let data = [];
  try {
    data = await FoodByTypeData(id);
    return data.DT;
  } catch (error) {
    return FoodDT;
  }
}

export { getFoodData, getFoodByTypeData };
