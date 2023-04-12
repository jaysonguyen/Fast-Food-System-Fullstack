import axios from "../setup/axios";
import { deleteStaff
  } from "../api/callApi";

const getAllStaff = () => {
    return axios.get(`/api/staff/list`)
};



const removeStaff = async (id) => {
    try {
      let data = await deleteStaff(id);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
export { getAllStaff , removeStaff};