import React, { useState, useEffect } from "react";

import { getAllOrder } from "../../../services/orderServices";
import { Pencil, Package } from "phosphor-react";

export const OrderHistory = () => {
  const [orders, SetOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllOrderData = async () => {
    let data = [];
    try {
      data = await getAllOrder();
      console.log(data.DT);
      SetOrders(data.DT);
    } catch (error) {
      console.log(error.message);
      SetOrders([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllOrderData();
  }, [orders]);

  if (isLoading) {
    return <p>Đang tải dữ liệu...</p>; // Hiển thị thông báo đang tải
  }

  return (
    <div className="text-white mt-4">
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
            { orders && 
              orders.map((item, idx) => (
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
                          <Pencil size={20} />
                        </a>
                        <a href="/" className="nav-link">
                          <Package size={20} />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))
              }
          </tbody>
        </table>
      </div>
    </div>
  );
};
