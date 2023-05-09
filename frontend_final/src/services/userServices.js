import { userListData } from "../api/callApi";
import axios from "../setup/axios";

export const getUserList = async () => {
  try {
    const data = await userListData();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getUserByID = async (id) => {
  try {
    const data = await axios.get(`/api/user/get/${id}`);
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getUserWithoutStaff = async () => {
  try {
    const data = await axios.get("/api/user/nostaff");
    return data;
  } catch (error) {
    return error.message;
  }
};
