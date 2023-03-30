import React, { useState, useEffect } from "react";
import { TabPane } from "reactstrap";
import { FoodByTypeData } from "../../../../api/tempAPI";

export default function FoodCart({ foodtype }) {
  const [food, setFood] = useState([]);

  const getFoodDataTest = async () => {
    let data = await FoodByTypeData(foodtype.ID);
    console.log(data);
    setFood(data.DT);
  };

  useEffect(() => {
    getFoodDataTest();
  }, []);

  return (
    <TabPane tabId={foodtype.ID}>
      <div className="row">
        {food.map((food) => {
          return (
            <div className="dz-col col m-b30">
              <div className="item-box shop-item style2">
                <div className="item-img">
                  <img src={require("../../../../images/pic1.png")} alt="" />
                </div>
                <div className="item-info text-center">
                  <h4 className="item-title">
                    {/* <Link to={"/shop-product-details"}>{food.name}</Link> */}
                    {food.Name}
                  </h4>
                  <h5 className="price text-primary">
                    <del>45</del>
                    <span>{food.Price}</span>
                  </h5>
                  <div className="cart-btn">
                    {/* <Link
                    to={"/shop-product-details"}
                    className="btn btnhover radius-xl"
                  >
                    <i className="ti-shopping-cart"></i> Add To Cart
                  </Link> */}
                    <i className="ti-shopping-cart"></i> Add to order
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </TabPane>
  );
}
