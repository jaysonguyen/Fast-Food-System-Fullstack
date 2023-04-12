import React, { useState, useEffect } from "react";

import { getOrderCompleted } from "../../../services/orderServices";

export const OrderCompleted = () => {
  const [orders, SetOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getOrderCompletedData = async () => {
    let data = [];
    try {
      data = await getOrderCompleted();
      SetOrders(data);
    } catch (error) {
      console.log(error.message);
      SetOrders([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getOrderCompletedData();
  }, [orders]);

  if (isLoading) {
    return <p>Đang tải dữ liệu...</p>; // Hiển thị thông báo đang tải
  }

  return (
    <div className="text-white">
      <div className="table-wrapper bg-white">
        <table className="table align-middle mb-0 ">
          <thead className="">
            <tr>
              <th className="id">ID</th>
              <th className="date">Date</th>
              <th className="quantity">Quantity</th>
              <th className="total">Total</th>
              <th className="actions">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {orders.length > 0
              ? orders.map((item, idx) => (
                  <tr key={idx}>
                    <td>
                      <div className="d-flex align-items-center">{item.ID}</div>
                    </td>
                    <td>{item.Date}</td>
                    <td>{item.Quantity}</td>
                    <td>{item.Total}</td>
                    <td>
                      <div className="d-flex flex-row gap-1">
                        <a href="/" className="nav-link">
                          <i className="fa-solid fa-pen"></i>
                        </a>
                        <a href="/" className="nav-link">
                          <i className="fa-solid fa-trash"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};
