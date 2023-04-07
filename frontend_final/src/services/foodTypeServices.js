import { FoodTypeData } from "../api/callApi";
import { FoodTypeDT } from "../api/tempApi";

const getFoodTypeService = async () => {
  let data = [];
  try {
    data = await FoodTypeData();
    return data.DT;
  } catch (error) {
    return FoodTypeDT;
  }
};

export { getFoodTypeService };
