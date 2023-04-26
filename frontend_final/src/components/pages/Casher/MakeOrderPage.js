import React from "react";
import Tab from "../../Element/Tab/Tab";
import Order from "../../Element/Order/Order";
import { ActiveProvider } from "../../Context/ActiveContext";
import { OrderProvider } from "../../Context/OrderContext";

import "../../../css/style.css";
import "../../../css/templete.css";
import "../../../css/skin/skin-1.css";

export default function OrderPage() {
  // const { orderDetails, removeFromOrder } = useContext(OrderContext);

  return (
    <ActiveProvider>
      <OrderProvider>
        <div className="main-body row">
          <div className="col-6 row food-list">
            <Tab />
          </div>
          <div id="orderArea" className="make-order col-6">
            <div className="order-area text-center">
              <div className="order-header row">
                <div className="col-3">Food Name</div>
                <div className="col-2">Quantity</div>
                <div className="col-2">Unit Price</div>
                <div className="col-2">Total</div>
              </div>
              <Order />
            </div>
          </div>
        </div>
      </OrderProvider>
    </ActiveProvider>
  );
}
