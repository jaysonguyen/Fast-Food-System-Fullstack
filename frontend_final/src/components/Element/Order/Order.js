import React, { useContext, useEffect, useState } from "react";

import { OrderContext } from "../../Context/OrderContext";

import { Form } from "react-bootstrap";
import { NavLink } from "reactstrap";

export default function Order() {
  // const { orderDetails, removeFromOrder } = useContext(OrderContext);
  const { removeFromOrder, orderDetails } = useContext(OrderContext);
  const [orders, setOrders] = useState([]);

  //track and render order list
  useEffect(() => {
    console.log("rendering");
    setOrders([...orderDetails]);
    console.log(orders);
  }, [orderDetails]);

  return (
    <div className="col-4">
      <div className="">
        <div className="row position-relative">
          <div className="col-lg-12">
            <div className="table-responsive ">
              <table className="table check-tbl">
                <thead>
                  <tr>
                    <th className="w-25">Product name</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th className="w-25">Total</th>
                    <th className="w-25">Close</th>
                  </tr>
                </thead>
                <tbody>
                  {/* render order list */}
                  {orders.map((item) => (
                    <tr className="alert align-items-center">
                      <td className="product-item-name">{item.Name}</td>
                      <td className="product-item-price">{item.Price}</td>
                      <td className="product-item-quantity">
                        <div className="quantity btn-quantity max-w80">
                          <div className="d-flex flex-row form-control">
                            <input
                              className="w-100 border-0"
                              type="number"
                              id="quantity"
                              name="quantity"
                              value={item.quantity}
                              min="1"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="product-item-totle">
                        {item.Price * item.quantity}
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
          </div>
        </div>
      </div>
    </div>
  );
}
