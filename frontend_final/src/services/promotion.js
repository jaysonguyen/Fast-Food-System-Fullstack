import axios from "../setup/axios";

const getAllPromotion = () => {
    return axios.get(`/api/promotion/get`)
};

export { getAllPromotion};