import React, { useState, useEffect } from "react";

export const DetailsOrder = ({ order }) => {
  const [details, setDetails] = useState([]);
  const [orderCurr, setOrderCurr] = useState({});
  const [loading, setLoading] = useState(true);

  console.log(order);
  const init = () => {
    if (order && order.Details != undefined) {
      console.log(order.Details);
    } else setDetails([]);

    if (order && order != undefined) setOrderCurr(order);
    else
      setOrderCurr({
        Total: 0,
      });
    if (order.Details != undefined) {
      setDetails(order.Details);
      setLoading(false);
    } else setDetails([]);
  };

  useEffect(() => {
    init();
  }, [details, orderCurr]);

  return (
    <>
      <div className="details-header d-flex flex-row align-items-center">
        <div className="title">Order #{order.ID}</div>
        <button className="btn btn-clr-normal">Finished</button>
      </div>
      <div className="info mt-4">
        <div className="row details-header">
          <div className="col-7">Food Name</div>
          <div className="col-2">Quantity</div>
          <div className="col-3">Price</div>
        </div>
        {/* loading spinner */}
        {loading && <div>Loading...</div>}
        {!loading &&
          order.Details &&
          order.Details.map((d, idx) => (
            <div key={idx} className="row details-item">
              <div className="col-7">{d.FoodName}</div>
              <div className="col-2">{d.Quantity}</div>
              <div className="col-3">{d.Price}</div>
            </div>
          ))}
      </div>
      <div className="checkout text-start">
        <div className="row">
          <div className="col-6 fs-5 my-auto px-4">Total: </div>
          <div className="col-6 order-total">{order.Total} </div>
        </div>
        {/* <div className="row mt-3 gap-2">
          <button className="col-5 btn btn-clr-normal">Clear</button>
          <button className="col-5 btn btn-clr-normal">Check Out</button>
        </div> */}
      </div>
    </>
  );
};
