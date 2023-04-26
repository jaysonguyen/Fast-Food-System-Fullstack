import { useState, useEffect } from "react";
import FoodTypeCart from "../Card/FoodTypeCart/FoodTypeCart";
import { Nav } from "reactstrap";
import { getFoodTypeService } from "../../../services/foodTypeServices";
import "./FoodType.css";
import { useContext } from "react";
import { FoodTypeIDContext } from "../Card/FoodTypeCart/FoodTypeCart";
import { NavItem, NavLink } from "reactstrap";
import { BiCaretRightCircle } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import "../Card/FoodTypeCart/FoodTypeCart.css";
import { FoodData } from "../../../api/callApi";

export default function FoodType() {
  const [FoodType, setFoodType] = useState([]);
  const [idType, setidType] = useState("");
  const foodTypeID = useContext(FoodTypeIDContext);
  const [foodList, setFoodList] = useState([]);

  const getFoodTypeData = async () => {
    let data = [];
    try {
      data = await getFoodTypeService();
      setFoodType(data);
    } catch (error) {
      setFoodType(FoodTypeDT);
    }
  };

  const handleShowFood = async (id) => {
    if (id) {
      const data = await FoodData();
      if (data && +data.EC == 1) {
        setFoodList(data.DT);
      }
    }
  };

  useEffect(() => {
    getFoodTypeData();
  }, []);

  return (
    <>
      <div className="food_feed_container">
        <div className="row">
          <div className="col col-3 food_feed_item_container">
            <div className="image_food_feed">
              <img src="https://content.jdmagicbox.com/comp/jaipur/r6/0141px141.x141.170124113438.h4r6/catalogue/burger-farm-mahapura-jaipur-fast-food-restaurants-00x5rykmqj.jpg" />
            </div>
            <h4 className="food_feed_item_name">Burger ngon</h4>
            <p className="food_feed_item_price">$14.00</p>
            <div className="food_feed_add_cart_btn">
              <AiOutlinePlus className="food_feed_add_cart_btn--icon" />
            </div>
          </div>
          <div className="col col-3 food_feed_item_container">
            <div className="image_food_feed">
              <img src="https://content.jdmagicbox.com/comp/jaipur/r6/0141px141.x141.170124113438.h4r6/catalogue/burger-farm-mahapura-jaipur-fast-food-restaurants-00x5rykmqj.jpg" />
            </div>
            <h4 className="food_feed_item_name">Burger ngon</h4>
            <p className="food_feed_item_price">$14.00</p>
            <div className="food_feed_add_cart_btn">
              <AiOutlinePlus className="food_feed_add_cart_btn--icon" />
            </div>
          </div>
          <div className="col col-3 food_feed_item_container">
            <div className="image_food_feed">
              <img src="https://content.jdmagicbox.com/comp/jaipur/r6/0141px141.x141.170124113438.h4r6/catalogue/burger-farm-mahapura-jaipur-fast-food-restaurants-00x5rykmqj.jpg" />
            </div>
            <h4 className="food_feed_item_name">Burger ngon</h4>
            <p className="food_feed_item_price">$14.00</p>
            <div className="food_feed_add_cart_btn">
              <AiOutlinePlus className="food_feed_add_cart_btn--icon" />
            </div>
          </div>
          <div className="col col-3 food_feed_item_container">
            <div className="image_food_feed">
              <img src="https://content.jdmagicbox.com/comp/jaipur/r6/0141px141.x141.170124113438.h4r6/catalogue/burger-farm-mahapura-jaipur-fast-food-restaurants-00x5rykmqj.jpg" />
            </div>
            <h4 className="food_feed_item_name">Burger ngon</h4>
            <p className="food_feed_item_price">$14.00</p>
            <div className="food_feed_add_cart_btn">
              <AiOutlinePlus className="food_feed_add_cart_btn--icon" />
            </div>
          </div>
          <div className="col col-3 food_feed_item_container">
            <div className="image_food_feed">
              <img src="https://content.jdmagicbox.com/comp/jaipur/r6/0141px141.x141.170124113438.h4r6/catalogue/burger-farm-mahapura-jaipur-fast-food-restaurants-00x5rykmqj.jpg" />
            </div>
            <h4 className="food_feed_item_name">Burger ngon</h4>
            <p className="food_feed_item_price">$14.00</p>
            <div className="food_feed_add_cart_btn">
              <AiOutlinePlus className="food_feed_add_cart_btn--icon" />
            </div>
          </div>
          <div className="col col-3 food_feed_item_container">
            <div className="image_food_feed">
              <img src="https://content.jdmagicbox.com/comp/jaipur/r6/0141px141.x141.170124113438.h4r6/catalogue/burger-farm-mahapura-jaipur-fast-food-restaurants-00x5rykmqj.jpg" />
            </div>
            <h4 className="food_feed_item_name">Burger ngon</h4>
            <p className="food_feed_item_price">$14.00</p>
            <div className="food_feed_add_cart_btn">
              <AiOutlinePlus className="food_feed_add_cart_btn--icon" />
            </div>
          </div>
          <div className="col col-3 food_feed_item_container">
            <div className="image_food_feed">
              <img src="https://content.jdmagicbox.com/comp/jaipur/r6/0141px141.x141.170124113438.h4r6/catalogue/burger-farm-mahapura-jaipur-fast-food-restaurants-00x5rykmqj.jpg" />
            </div>
            <h4 className="food_feed_item_name">Burger ngon</h4>
            <p className="food_feed_item_price">$14.00</p>
            <div className="food_feed_add_cart_btn">
              <AiOutlinePlus className="food_feed_add_cart_btn--icon" />
            </div>
          </div>
          <div className="col col-3 food_feed_item_container">
            <div className="image_food_feed">
              <img src="https://content.jdmagicbox.com/comp/jaipur/r6/0141px141.x141.170124113438.h4r6/catalogue/burger-farm-mahapura-jaipur-fast-food-restaurants-00x5rykmqj.jpg" />
            </div>
            <h4 className="food_feed_item_name">Burger ngon</h4>
            <p className="food_feed_item_price">$14.00</p>
            <div className="food_feed_add_cart_btn">
              <AiOutlinePlus className="food_feed_add_cart_btn--icon" />
            </div>
          </div>
          <div className="col col-3 food_feed_item_container">
            <div className="image_food_feed">
              <img src="https://content.jdmagicbox.com/comp/jaipur/r6/0141px141.x141.170124113438.h4r6/catalogue/burger-farm-mahapura-jaipur-fast-food-restaurants-00x5rykmqj.jpg" />
            </div>
            <h4 className="food_feed_item_name">Burger ngon</h4>
            <p className="food_feed_item_price">$14.00</p>
            <div className="food_feed_add_cart_btn">
              <AiOutlinePlus className="food_feed_add_cart_btn--icon" />
            </div>
          </div>
          <div className="col col-3 food_feed_item_container">
            <div className="image_food_feed">
              <img src="https://content.jdmagicbox.com/comp/jaipur/r6/0141px141.x141.170124113438.h4r6/catalogue/burger-farm-mahapura-jaipur-fast-food-restaurants-00x5rykmqj.jpg" />
            </div>
            <h4 className="food_feed_item_name">Burger ngon</h4>
            <p className="food_feed_item_price">$14.00</p>
            <div className="food_feed_add_cart_btn">
              <AiOutlinePlus className="food_feed_add_cart_btn--icon" />
            </div>
          </div>
        </div>
      </div>
      <div tabs className="casher-nav">
        {FoodType.map((foodtype, idx) => {
          let icon = `/images/icon/${foodtype.Image}`;
          return (
            <NavItem
              onClick={() => handleShowFood(foodtype.ID)}
              className="nav_item_margin_top nav-item item"
            >
              <NavLink className="foodtype_cart_container item-icon-box nav-link">
                <img className="foodtype_cart_image" src={icon} />
                <span className="foodType_cart_name">{foodtype.Name}</span>
                <BiCaretRightCircle className="foodType_cart_name_icon" />
              </NavLink>
            </NavItem>
          );
        })}
      </div>
    </>
  );
}
