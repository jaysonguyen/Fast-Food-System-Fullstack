import axios from "../setup/axios";
import { getShiftListData } from "../api/callApi";

export const getShiftList = async () => {
  try {
    const data = await getShiftListData();
    return data;
  } catch (error) {
    console.log(error.message);
    return -1;
  }
};
