import React, { useState, useEffect } from "react";
import { TabPane } from "reactstrap";
import { ActiveContext } from "../../Context/ActiveContext";
import { useContext } from "react";
// import { FoodData } from "../../../api/tempAPI";
import CallApi from "../../../utils/callApi";

export default function FoodCart({ foodtype }) {
  const [food, setFood] = useState([]);

  // useEffect(() => {
  //   const fetchApi = async () => {
  //     try {
  //       const response = await CallApi.get("/Food");
  //       const data = (await response).DT;
  //       console.log(data);
  //       setFood(data.DT);
  //     } catch (error) {
  //       setFood(FoodData);
  //     }
  //   };

  //   fetchApi();
  // }, []);

  const context = useContext(ActiveContext);

  return (
    <TabPane tabId={foodtype.id}>
      <div className="row">
        {food.map((food) => {
          if (food.type === context.activeTab)
            return (
              <div className="dz-col col m-b30">
                <div className="item-box shop-item style2">
                  <div className="item-img">
                    <img
                      src={require("../../../images/product/pizza/pic1.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="item-info text-center">
                    <h4 className="item-title">
                      {/* <Link to={"/shop-product-details"}>{food.name}</Link> */}
                      {food.name}
                    </h4>
                    <h5 className="price text-primary">
                      <del>45</del>
                      <span>$40</span>
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
          else return "";
        })}
      </div>
    </TabPane>
  );
}
