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

export const getUserByEmail = async (email) => {
  try {
    const data = await axios.get(`/api/user/get/email/`, { email });
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

export const insertUser = async (email, password, isAdmin) => {
  try {
    let data = await axios.post(`/api/user/`, { email, password, isAdmin });
    if (data) {
      return {
        EM: data.EM,
        EC: data.EC,
      };
    }
  } catch (error) {
    console.log(error);
  }
};
