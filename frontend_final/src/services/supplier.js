import { deleteSupplier } from "../api/callApi";
import axios from "../setup/axios";

const getAllSupplier = () => {
    return axios.get(`/api/supplier/get`)
};

const removeSupplier = async (id) => {
    try {
        let data = deleteSupplier(id);
        return data ;
    } catch (error) {
        console.log(error);
    }
}

export { getAllSupplier, removeSupplier};