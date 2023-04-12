import axios from "../setup/axios";

const getAllPromotion = () => {
  return axios.get(`/api/promotion/get`);
};

const InsertPromotion = (name, price, status, dateStart, dateExp) => {
  return axios.post(`api/promotion/create`, {
    name,
    price,
    status,
    dateStart,
    dateExp,
  });
};

export { getAllPromotion, InsertPromotion };
