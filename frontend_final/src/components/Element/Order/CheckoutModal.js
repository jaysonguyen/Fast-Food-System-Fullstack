import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";

import { checkOutOrder } from "../../../api/callApi";
import { addNewOrder } from "../../../services/orderServices";

export const CheckoutModal = (props) => {
  const [method, setMethod] = useState("");

  const handleClose = () => {
    props.show = false;
  };

  const checkOut = async () => {
    console.log("total: ", props.total);
    if (props.total != 0) {
      const res = await checkOutOrder(props.total);
      if (res && +res.EC == 1) {
        location.href = res.DT;
        localStorage.setItem(
          "order",
          JSON.stringify({
            StaffID: props.userId,
            BillDetails: props.orderList,
          })
        );
        toast.success("Order completed successfully");
      }
    }
  };

  const addOrderToDB = async () => {
    orderData.BillDetails = props.orderList;
    console.log(orderData);
    const res = await addNewOrder(orderData);
    switch (res) {
      case 0:
        alert("Pending...");
        break;
      case 1:
        toast.success("Order completed successfully");
        break;
      case -1:
        toast.error("Error at api");
        break;
      case -2:
        toast.error("Error at services");
        break;
      default:
      // alert("Try again");
    }
  };

  const handleCheckout = () => {
    if (method == "") handleClose();
    else {
      console.log("method: ", method);
      switch (method) {
        case "momo":
          checkOut();
          break;
        case "cash":
          addOrderToDB();
          break;
      }
    }
  };

  return (
    <>
      <Modal
        size="lg"
        show={props.show}
        className="modal-user"
        onHide={props.onHide}
        centered
        id="paying-method"
      >
        <Modal.Header closeButton>
          {/* <Modal.Title className="title">Create Staff</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div className="row gap-3 text-center">
            <div
              className={
                method == "momo"
                  ? "col paying-btn paying-momo active"
                  : "col paying-btn paying-momo "
              }
              onClick={() => setMethod("momo")}
            >
              <div className="paying-type">MoMo</div>
              <div className="paying-img"></div>
            </div>
            <div
              className={
                method == "cash"
                  ? "col paying-btn paying-cash active"
                  : "col paying-btn paying-cash "
              }
              onClick={() => setMethod("cash")}
            >
              <div className="paying-type">Cash</div>
              <div className="paying-img"></div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className=""
            variant="primary"
            onClick={() => handleCheckout()}
          >
            Select
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
