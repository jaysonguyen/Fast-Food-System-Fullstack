import { FoodData, FoodByTypeData, InsertFood } from "../api/callApi";
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
};

const AddFood = async (name, price, image, type, recipe, status) => {
  try {
    let data = await InsertFood(name, price, image, type, recipe, status);
    if (data) {
      return {
        EM: data.EM,
        EC: data.EC
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export { getFoodData, getFoodByTypeData, AddFood };
