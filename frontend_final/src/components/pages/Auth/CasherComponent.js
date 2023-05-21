import React from "react";
import { Route } from "react-router-dom";

import OrderPage from "../../pages/Casher/MakeOrderPage";
import { CasherLayout } from "../../Layout/CasherLayout";
import { OrderComplete } from "../../Element/Order/OrderComplete";
import { MenuManagementPage } from "../../pages/Casher/MenuManagementPage";
import { OrderManagement } from "../../pages/Casher/OrdersPage";

const CasherComponent = () => {
  return (
    <>
      <Route path="/casher/makeOrder" element={<OrderPage />} />
      <Route path="/order_complete" element={<OrderComplete />} />
      <Route path="/casher" element={<CasherLayout />}>
        <Route path="/casher/menu" element={<MenuManagementPage />} />
        <Route path="/casher/orders" element={<OrderManagement />}></Route>
      </Route>
    </>
  );
};

export default CasherComponent;
