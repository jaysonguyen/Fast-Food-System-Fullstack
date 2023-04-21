import React, { useContext, useEffect, useState } from "react";
import axios from "../../../setup/axios";

import { OrderContext } from "../../Context/OrderContext";
import { addNewOrder } from "../../../services/orderServices";

import { Form } from "react-bootstrap";
import { NavLink } from "reactstrap";
import { CaretCircleUp, CaretCircleDown } from "phosphor-react";
import { isNumberic } from "../../tool";

export default function Order() {
  // const { orderDetails, removeFromOrder } = useContext(OrderContext);
  const { removeFromOrder, orderDetails } = useContext(OrderContext);
  let orderData = { StaffID: 3, BillDetails: [] };
  const [orderList, setOrderList] = useState([]);
  const [total, setTotal] = useState(0);

  const updateTotal = () => {
    let sum = 0;
    orderList.forEach((item) => {
      sum += item.Price * item.Quantity;
    });
    setTotal(sum);
  };

  const clearOrder = () => {
    setOrderList([]);
  };

  const addOrderData = async () => {
    orderData.BillDetails = orderList;
    console.log(orderData);
    const res = await addNewOrder(orderData);
    switch (res) {
      case 0:
        alert("Pending...");
        break;
      case 1:
        alert("Add order successfully!!");
        break;
      case -1:
        alert("Error at api");
        break;
      case -2:
        alert("Error at services");
        break;
      default:
      // alert("Try again");
    }
  };

  //track and render order list
  useEffect(() => {
    console.log("rendering");
    setOrderList([...orderDetails]);
    updateTotal();
  }, [orderDetails]);

  console.log(orderList);
  useEffect(() => {}, [total]);

  return (
    <div className="col-4 px-0">
      <div className=" position-relative">
        {/* order details */}
        <div id="orderTable" className="table-responsive ">
          <table className="table check-tbl">
            <thead className="sticky-top ">
              <tr>
                <th className="w-25">Product name</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th className="w-25">Total</th>
                <th className="w-25">Close</th>
              </tr>
            </thead>
            <tbody style={{ overflowY: "scroll" }}>
              {/* render order list */}
              {orderList.map((item, idx) => (
                <tr key={idx} className="alert align-items-center">
                  <td className="product-item-name">{item.Name}</td>
                  <td className="product-item-price">
                    {item.Price.toLocaleString("de-DE")}
                    <sup>&#8363;</sup>
                  </td>
                  <td className="product-item-quantity">
                    <div className="quantity btn-quantity max-w80 d-flex flex-row">
                      <div className=" form-control">
                        <input
                          className="w-100 border-0"
                          type="number"
                          id="quantity"
                          name="quantity"
                          value={item.Quantity}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="product-item-totle">
                    {(item.Price * item.Quantity).toLocaleString("de-DE")}
                    <sup>&#8363;</sup>
                  </td>
                  <td className="product-item-close">
                    <img
                      src="/images/icon/close.png"
                      className="d-block h-auto w-25"
                      onClick={() => removeFromOrder(item)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Checkout */}
        <div
          id="checkout"
          className="d-flex flex-row justify-content-between align-items-center"
        >
          <div className="total form-control me-2 fs-5">
            {total.toLocaleString("de-DE")} <sup>&#8363;</sup>
          </div>
          <div className="d-flex flex-row gap-2 ">
            <button
              className="btn btn-clr-danger px-5 py-2"
              onClick={clearOrder}
            >
              Clear
            </button>
            <button
              className="btn btn-clr-normal px-5 py-2"
              onClick={addOrderData}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
