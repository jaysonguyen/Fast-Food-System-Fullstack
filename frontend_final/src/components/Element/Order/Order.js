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
  const { removeFromOrder, orderDetails, emptyOrder } =
    useContext(OrderContext);
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
    setOrderList([]);
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
    <>
      <div className="order-details">
        {/* render order list */}
        {orderList.map((item, idx) => (
          <div key={idx} className="w-100 row">
            <div className="col-3">{item.Name}</div>
            <div className="col-2">{item.Quantity}</div>
            <div className="col-2">
              {item.Price.toLocaleString("de-DE")}
              <sup>&#8363;</sup>
            </div>
            <div className="col-2">
              {(item.Price * item.Quantity).toLocaleString("de-DE")}
            </div>
            <div className="col-1" onClick={() => removeFromOrder(item)}>
              x
            </div>
          </div>
        ))}
      </div>
      <div className="checkout ms-4 text-start">
        <div className="row">
          <div className="col-6">Total: </div>
          <div className="col-6 order-total">
            {total.toLocaleString("de-DE")} <sup>&#8363;</sup>{" "}
          </div>
        </div>
        <div className="row mt-3 gap-2">
          <button className="col-5 btn btn-clr-normal" onClick={emptyOrder}>
            Clear
          </button>
          <button className="col-5 btn btn-clr-normal" onClick={addOrderData}>
            Check Out
          </button>
        </div>
      </div>
    </>
  );
}
