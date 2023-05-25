import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillGolden, AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { MdFastfood, MdDiscount } from "react-icons/md";
import { CiShoppingBasket } from "react-icons/ci";
import { BiImport } from "react-icons/bi";

import "./AdminSideBar.css";

export const AdminSB = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndexSub, setActiveIndexSub] = useState(null);
  const [flag, setFlag] = useState(false);

  return (
    <div className="sideBar_container">
      <h4 className="sidbar_container_name_com">FastBite</h4>
      <div className="sideBar_body_container">
        <h6>Main Navigation</h6>
        <ul className="nav-list nav flex-column">
          <li
            className="nav-item has-submenu"
            onClick={() => setActiveIndex(0)}
          >
            <a
              href="#product"
              data-bs-toggle="collapse"
              className={activeIndex === 0 ? "nav-link active" : "nav-link"}
            >
              <AiFillGolden className="nav-link_icon" />
              <b>Product</b>
              <AiOutlineDown className="nav-link_icon nav-link_icon--down" />
            </a>
            <ul id="product" className="submenu ms-3 collapse">
              <li
                className="submenu_sidebar"
                onClick={() => setActiveIndexSub(0)}
              >
                <Link
                  className={
                    activeIndex === 0 && activeIndexSub === 0
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/admin/production"
                >
                  <MdFastfood className="nav-link_icon" />
                  Product
                </Link>
              </li>
              <li
                className="submenu_sidebar"
                onClick={() => setActiveIndexSub(1)}
              >
                <Link
                  className={
                    activeIndex === 0 && activeIndexSub === 1
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/admin/production/catagories"
                >
                  <BiCategory className="nav-link_icon" />
                  Categories
                </Link>
              </li>
              <li
                className="submenu_sidebar"
                onClick={() => setActiveIndexSub(2)}
              >
                <a
                  className={
                    activeIndex === 0 && activeIndexSub === 2
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="#"
                >
                  <BsFillJournalBookmarkFill className="nav-link_icon" />
                  Recipe
                </a>
              </li>
              <li
                className="submenu_sidebar"
                onClick={() => setActiveIndexSub(3)}
              >
                <a
                  className={
                    activeIndex === 0 && activeIndexSub === 3
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="#"
                >
                  <CiShoppingBasket className="nav-link_icon" />
                  Ingredients
                </a>
              </li>
              <li
                className="submenu_sidebar"
                onClick={() => setActiveIndexSub(4)}
              >
                <Link
                  className={
                    activeIndex === 0 && activeIndexSub === 4
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/admin/production/promotion"
                >
                  <MdDiscount className="nav-link_icon" />
                  Promotion
                </Link>
              </li>
            </ul>
          </li>

          <li
            className="nav-item has-submenu"
            onClick={() => setActiveIndex(6)}
          >
            <a
              href="#product"
              data-bs-toggle="collapse"
              className={activeIndex === 6 ? "nav-link active" : "nav-link"}
            >
              <AiFillGolden className="nav-link_icon" />
              <b>Human Resource</b>
              <AiOutlineDown className="nav-link_icon nav-link_icon--down" />
            </a>
            <ul id="product" className="submenu ms-3 collapse">
              <li
                className="submenu_sidebar"
                onClick={() => setActiveIndexSub(0)}
              >
                <Link
                  className={
                    activeIndex === 6 && activeIndexSub === 0
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/staff/timeoff"
                >
                  <MdFastfood className="nav-link_icon" />
                  Time Off
                </Link>
              </li>
              <li
                className="submenu_sidebar"
                onClick={() => setActiveIndexSub(1)}
              >
                <Link
                  className={
                    activeIndex === 6 && activeIndexSub === 1
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/admin/production/catagories"
                >
                  <BiCategory className="nav-link_icon" />
                  Shift
                </Link>
              </li>
              <li
                className="submenu_sidebar"
                onClick={() => setActiveIndexSub(2)}
              >
                <a
                  className={
                    activeIndex === 6 && activeIndexSub === 2
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="#"
                >
                  <BsFillJournalBookmarkFill className="nav-link_icon" />
                  Calendar
                </a>
              </li>
            </ul>
          </li>
          <li
            className="nav-item has-submenu"
            onClick={() => setActiveIndex(7)}
          >
            <a
              href="#product"
              data-bs-toggle="collapse"
              className={activeIndex == 7 ? "nav-link active" : "nav-link"}
            >
              <AiFillGolden className="nav-link_icon" />
              <b>Cusomter</b>
              <AiOutlineDown className="nav-link_icon nav-link_icon--down" />
            </a>
            <ul id="product" className="submenu ms-3 collapse">
              <li
                className="submenu_sidebar"
                onClick={() => setActiveIndexSub(0)}
              >
                <Link
                  className={
                    activeIndex === 7 && activeIndexSub === 0
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/admin/feedback"
                >
                  <MdFastfood className="nav-link_icon" />
                  FeedBack
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item" onClick={() => setActiveIndex(1)}>
            <Link
              className={activeIndex === 1 ? "nav-link active" : "nav-link"}
              to="/admin/production/supplier"
            >
              <FaCartArrowDown className="nav-link_icon" />
              <b>Supplier </b>
            </Link>
          </li>
          <li className="nav-item" onClick={() => setActiveIndex(2)}>
            <a
              href="#"
              className={activeIndex === 2 ? "nav-link active" : "nav-link"}
            >
              <BiImport className="nav-link_icon" />
              <b>Import</b>
            </a>
          </li>
          <li
            className="nav-item has-submenu"
            onClick={() => setActiveIndex(3)}
          >
            <a
              href="#store"
              data-bs-toggle="collapse"
              className={activeIndex === 3 ? "nav-link active" : "nav-link"}
            >
              <AiFillGolden className="nav-link_icon" />
              <b>Store</b>
              <AiOutlineDown className="nav-link_icon nav-link_icon--down" />
            </a>
            <ul id="store" className="submenu ms-3 collapse">
              <li
                className="submenu_sidebar"
                onClick={() => setActiveIndexSub(0)}
              >
                <Link
                  className={
                    activeIndex === 0 && activeIndexSub === 0
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/admin/store/user"
                >
                  <MdFastfood className="nav-link_icon" />
                  User
                </Link>
              </li>
              <li
                className="submenu_sidebar"
                onClick={() => setActiveIndexSub(1)}
              >
                <Link
                  className={
                    activeIndex === 1 && activeIndexSub === 1
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/admin/store/staff"
                >
                  <MdFastfood className="nav-link_icon" />
                  Staff
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const StaffSB = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndexSub, setActiveIndexSub] = useState(null);
  const [flag, setFlag] = useState(false);

  return (
    <div className="sideBar_container">
      <h4 className="sidbar_container_name_com">FastBite</h4>
      <div className="sideBar_body_container">
        <h6>Main Navigation</h6>
        <ul className="nav-list nav flex-column">
          <li
            className="nav-item has-submenu"
            onClick={() => setActiveIndex(0)}
          >
            <a
              href="#product"
              data-bs-toggle="collapse"
              className={activeIndex === 0 ? "nav-link active" : "nav-link"}
            >
              <AiFillGolden className="nav-link_icon" />
              <b>Calendar</b>
              <AiOutlineDown className="nav-link_icon nav-link_icon--down" />
            </a>
            <ul id="product" className="submenu ms-3 collapse">
              <li
                className="submenu_sidebar"
                onClick={() => setActiveIndexSub(0)}
              >
                <Link
                  className={
                    activeIndex === 0 && activeIndexSub === 0
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/staff/assignment"
                >
                  <MdFastfood className="nav-link_icon" />
                  Shift Assignment
                </Link>
              </li>
              <li
                className="submenu_sidebar"
                onClick={() => setActiveIndexSub(1)}
              >
                <Link
                  className={
                    activeIndex === 0 && activeIndexSub === 1
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/admin/production/catagories"
                >
                  <BiCategory className="nav-link_icon" />
                  Calendar
                </Link>
              </li>
              <li
                className="submenu_sidebar"
                onClick={() => setActiveIndexSub(5)}
              >
                <Link
                  className={
                    activeIndex === 0 && activeIndexSub === 5
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/staff/timeoff"
                >
                  <BiCategory className="nav-link_icon" />
                  Time off
                </Link>
              </li>
              <li
                className="submenu_sidebar"
                onClick={() => setActiveIndexSub(2)}
              >
                <a
                  className={
                    activeIndex === 0 && activeIndexSub === 2
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="#"
                >
                  <BsFillJournalBookmarkFill className="nav-link_icon" />
                  Shift
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item" onClick={() => setActiveIndex(1)}>
            <Link
              className={activeIndex === 1 ? "nav-link active" : "nav-link"}
              to="/admin/production/supplier"
            >
              <FaCartArrowDown className="nav-link_icon" />
              <b>Supplier </b>
            </Link>
          </li>
          <li className="nav-item" onClick={() => setActiveIndex(2)}>
            <a
              href="#"
              className={activeIndex === 2 ? "nav-link active" : "nav-link"}
            >
              <BiImport className="nav-link_icon" />
              <b>Import</b>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
