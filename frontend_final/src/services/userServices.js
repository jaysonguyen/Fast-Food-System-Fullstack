import { userListData } from "../api/callApi";

export const getUserList = async () => {
  try {
    const data = await userListData();
    return data;
  } catch (error) {
    return error.message;
  }
};

