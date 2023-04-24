import axios from "../setup/axios";

//Promotion
export const deletePromotion = (id) => {
  return axios.delete(`/api/promotion/remove/${id}`);
};

// Supplier
export const deleteSupplier = (id) => {
  return axios.delete(`/api/supplier/remove/${id}`);
};
// Staff
export const deleteStaff = (id) => {
  return axios.delete(`/api/staff/delete/${id}`);
};
// Product
export const FoodData = () => {
  return axios.get(`api/food`);
};

export const FoodDelete = (id) => {
  return axios.delete(`api/food/delete/${id}`);
};

export const FoodTypeData = () => {
  return axios.get(`api/foodtype`);
};

export const FoodByTypeData = (id) => {
  return axios.get(`api/foodtype/${id}`);
};

// order

export const OrderData = () => {
  return axios.get("api/order");
};

export const OrderProcessingData = () => {
  return axios.get("api/order/unfinished");
};

export const OrderCompletedData = () => {
  return axios.get("api/order/finished");
};

// insert

export const InsertFood = (name, price, image, type, recipe, status) => {
  return axios.post(`api/food`, {
    name,
    price,
    image,
    type,
    recipe,
    status,
  });
};

export const InsertFoodTyppe = (name) => {
  return axios.post(`api/foodtype`, { name });
};

export const InsertStaff = (name, dob, gender, startAt, position, address) => {
  return axios.post(`api/staff/create`, {
    name,
    dob,
    gender,
    startAt,
    position,
    address,
  });
};

export const InsertSupplier = (name, contact, note) => {
  return axios.post(`/api/supplier/create`, { name, contact, note });
};

export const AddNewOrderData = (orders) => {
  axios
    .post("api/order", orders)
    .then((response) => {
      // Xử lý phản hồi từ server nếu cần
      console.log(response.data);
      return 1;
    })
    .catch((error) => {
      // Xử lý lỗi nếu có
      console.log(error);
      return -1;
    });
};

// update
export const UpdateFood = (id, name, price, type, status) => {
  return axios.put(`api/food/${id}`, {
    id,
    name,
    price,
    type,
    status,
  });
};
