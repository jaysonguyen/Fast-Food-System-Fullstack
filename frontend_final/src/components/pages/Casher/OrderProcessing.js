import React, { useState, useEffect } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { getDateTime } from "../../../js/tool";

import { getOrderProcessing } from "../../../services/orderServices";

export const OrderProcessing = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getOrderProcessingData = async () => {
    let data = [];
    try {
      data = await getOrderProcessing();
      console.log("đang lấy data..");
      setOrders(data.DT);
    } catch (error) {
      console.log(error.message);
      // SetOrders(FoodTypeDT);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("đang gọi hàm..");
    getOrderProcessingData();
  }, [orders]);

  if (isLoading) {
    return <p>Đang tải dữ liệu...</p>; // Hiển thị thông báo đang tải
  }

  return (
    <div class="">
      <div class="form-list">
        <div class="table-wrapper mb-0 ">
          <div class="row row-header">
            <th className="col-2">ID</th>
            <th className="col-3">Date</th>
            <th className="col-2">Quantity</th>
            <th className="col-2">Total</th>
            <th className="col-3">Actions</th>
          </div>
          <div className="seperate"></div>
          <div class="table-body">
            {orders &&
              orders.map((order, key) => {
                return (
                  <div key={key} class="row item-list">
                    <div class="col-lg-2">
                      <div class="d-flex align-items-center">
                        <div class="">
                          <p class="mb-1">{order.ID}</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <p class="fw-normal mb-1">{order.Date}</p>
                    </div>
                    <div class="col-lg-2">{order.Quantity}</div>
                    <div class="col-lg-2">
                      {order.Total.toLocaleString("de-DE")} <span>&#8363;</span>
                    </div>
                    <div class="col-lg-3">
                      <div className="d-flex flex-row gap-1">
                        <a className="nav-link">
                          <CiEdit
                            className="edit-icon"
                            id={order.ID}
                            onClick={(e) => handleAction(e.target.id)}
                          />
                        </a>
                        <a href="#" className="nav-link">
                          <AiOutlineDelete
                            className="del-icon"
                            id={order.ID}
                            onClick={async (e) =>
                              await handleDeleteFood(e.target.id)
                            }
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
