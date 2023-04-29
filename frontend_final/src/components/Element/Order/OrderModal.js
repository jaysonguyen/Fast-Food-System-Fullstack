import React, { useState, useEffect } from "react";

import { getOrderByID } from "../../../services/orderServices";

export const OrderModal = (props) => {
  const [show, setShow] = useState(props.show);

  const [dataOrder, setDataOrder] = useState({});
  const [dataOrderDetails, setDataOrderDetails] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowDetails = async () => {
    if (props.order) {
      setDataOrder(props.order);
      if (dataOrderDetails) {
        const detailsData = await getOrderByID(dataOrder.ID);
        if (detailsData && detailsData.DT) {
          setDataOrderDetails(detailsData);
        } else {
          //error
          console.log(detailsData.EM);
        }
      }
    }
  };

  useEffect(() => {
    handleShowDetails();
  }, [props.order]);

  return (
    <>
      <Modal
        size="lg"
        show={props.show}
        className="modal-user"
        onHide={props.onHide}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="title">Order #{dataOrder.ID}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="">
            <div class="form-list">
              <div class="table-wrapper mb-0 ">
                <div class="row row-header">
                  <th className="col-5">Food Name</th>
                  <th className="col-3">Quantity</th>
                  <th className="col-4">Total</th>
                </div>
                <div className="seperate"></div>
                <div class="table-body">
                  {dataOrderDetails &&
                    dataOrderDetails.map((detail, key) => {
                      return (
                        <div key={key} class="row item-list">
                          <div class="col-lg-2">
                            <div class="d-flex align-items-center">
                              <div class="">
                                <p class="mb-1">{detail.FoodName}</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-3">
                            <p class="fw-normal mb-1">{detail.Quanity}</p>
                          </div>
                          <div class="col-lg-2">
                            {detail.Total.toLocaleString("de-DE")}{" "}
                            <span>&#8363;</span>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
