import React, { useContext, useEffect, useState } from "react";
import axios from "../../../setup/axios";

import { OrderContext } from "../../Context/OrderContext";
import { addNewOrder } from "../../../services/orderServices";

import { Form } from "react-bootstrap";
import { NavLink } from "reactstrap";
import { CaretCircleUp, CaretCircleDown } from "phosphor-react";
import { isNumberic } from "../../tool";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
import "./Order.css";

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
    console.log(res);
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
    <div
      className="col-3 stickyPosition overflowy_hidden"
      style={{ backgroundColor: "#fff" }}
    >
      <div className=" position-relative">
        {/* order details */}
        <div id="orderTable" className="table-responsive ">
          <div className="order_table_heading">
            <div className="order_table_employee_img">
              <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75a1736b-8ad6-4b3e-b47b-19f5987e9711/deigkx9-80dd0b0a-8d86-4292-9d51-db8524c6014c.jpg/v1/fill/w_670,h_1192,q_70,strp/dead_emoji_iphone_wallpaper___iphone_wallpapers_by_maxboosted_deigkx9-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMCIsInBhdGgiOiJcL2ZcLzc1YTE3MzZiLThhZDYtNGIzZS1iNDdiLTE5ZjU5ODdlOTcxMVwvZGVpZ2t4OS04MGRkMGIwYS04ZDg2LTQyOTItOWQ1MS1kYjg1MjRjNjAxNGMuanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.K_VIxJ25QayQUe1_8v-a2bca98Y2k70fU4ciB471jIc" />
            </div>
            <h6 className="order_table_staff_name">
              Dao My
              <h6 className="order_table_staff_job">Employee</h6>
            </h6>
            <div className="order_tabler_staff_icon">
              <MdOutlineKeyboardArrowDown className="order_tabler_staff_icon--icon" />
            </div>
          </div>
          <div className="order_table_body">
            <h6 className="order_table_body_heading">Order menu</h6>
            <div className="order_table_body_list_order">
              <div className="order_table_body_list_order_item">
                <div className="list_order_item_image">
                  <img src="https://content.jdmagicbox.com/comp/jaipur/r6/0141px141.x141.170124113438.h4r6/catalogue/burger-farm-mahapura-jaipur-fast-food-restaurants-00x5rykmqj.jpg" />
                </div>
                <div className="list_order_item_name_contaiter">
                  <p className="item_name_container_name_food">Buger king</p>
                  <div className="name_food_quantity">
                    <AiOutlineMinus className="quantity_icon" />
                    <span className="quantity">10</span>
                    <IoAdd className="quantity_icon" />
                  </div>
                </div>
                <div className="list_orderr_item_price_container">
                  <h6>
                    <span className="price_contaier_currency">$</span>
                    <span className="price_container_price">7.65</span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="order_table_body_list_order">
              <div className="order_table_body_list_order_item">
                <div className="list_order_item_image">
                  <img src="https://content.jdmagicbox.com/comp/jaipur/r6/0141px141.x141.170124113438.h4r6/catalogue/burger-farm-mahapura-jaipur-fast-food-restaurants-00x5rykmqj.jpg" />
                </div>
                <div className="list_order_item_name_contaiter">
                  <p className="item_name_container_name_food">Buger king</p>
                  <div className="name_food_quantity">
                    <AiOutlineMinus className="quantity_icon" />
                    <span className="quantity">10</span>
                    <IoAdd className="quantity_icon" />
                  </div>
                </div>
                <div className="list_orderr_item_price_container">
                  <h6>
                    <span className="price_contaier_currency">$</span>
                    <span className="price_container_price">7.65</span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="order_table_body_list_order">
              <div className="order_table_body_list_order_item">
                <div className="list_order_item_image">
                  <img src="https://content.jdmagicbox.com/comp/jaipur/r6/0141px141.x141.170124113438.h4r6/catalogue/burger-farm-mahapura-jaipur-fast-food-restaurants-00x5rykmqj.jpg" />
                </div>
                <div className="list_order_item_name_contaiter">
                  <p className="item_name_container_name_food">Buger king</p>
                  <div className="name_food_quantity">
                    <AiOutlineMinus className="quantity_icon" />
                    <span className="quantity">10</span>
                    <IoAdd className="quantity_icon" />
                  </div>
                </div>
                <div className="list_orderr_item_price_container">
                  <h6>
                    <span className="price_contaier_currency">$</span>
                    <span className="price_container_price">7.65</span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="order_table_body_list_order">
              <div className="order_table_body_list_order_item">
                <div className="list_order_item_image">
                  <img src="https://content.jdmagicbox.com/comp/jaipur/r6/0141px141.x141.170124113438.h4r6/catalogue/burger-farm-mahapura-jaipur-fast-food-restaurants-00x5rykmqj.jpg" />
                </div>
                <div className="list_order_item_name_contaiter">
                  <p className="item_name_container_name_food">Buger king</p>
                  <div className="name_food_quantity">
                    <AiOutlineMinus className="quantity_icon" />
                    <span className="quantity">10</span>
                    <IoAdd className="quantity_icon" />
                  </div>
                </div>
                <div className="list_orderr_item_price_container">
                  <h6>
                    <span className="price_contaier_currency">$</span>
                    <span className="price_container_price">7.65</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Checkout */}
        <div
          id="checkout"
          className="justify-content-between align-items-center"
        >
          <div className="total_order_container">
            <p className="total_order">Total: </p>
            <p className="total_order_amount">
              {total.toLocaleString("de-DE")}{" "}
              <sup className="price_contaier_currency">&#8363;</sup>
            </p>
          </div>
          <div className="d-flex flex-column gap-2 ">
            {/* <button
              className="btn btn-clr-danger px-5 py-2"
              onClick={clearOrder}
            >
              Clear
            </button> */}
            <button
              className="checkoutbtn"
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
