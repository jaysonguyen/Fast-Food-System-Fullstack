import React, { useEffect, useState } from "react";
import "../css/root.css";
import "../css/main.css";
import ProductModal from "./ProductModal";

import { getAllProduct } from "../../../services/productList";
import { getAllProductType } from "../../../services/productType";
import { removeFood } from "../../../services/foodServices";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const Production = (props) => {
  const [product, setProduct] = useState([]);
  const [proType, setProType] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [idFood, setIdFood] = useState(1);

  const [action, setAction] = useState("CREATE");

  const fetchProType = async () => {
    let dataProType = await getAllProductType();
    setProType(dataProType.DT);
  };

  const handleDeleteFood = async (id) => {
    let data = await removeFood(id);
    if (data && +data.EC === 1) {
      toast.success(data.EM);
    }
    console.log(id);
  };


  const fetchProduct = async () => {
    let dataProduct = await getAllProduct();
    console.log(dataProduct.DT);
    setProduct(dataProduct.DT);
  };

  useEffect(() => {
    fetchProduct();
    fetchProType();
  }, []);

  const handleShowModal = () => {
    let flag = !showModal;
    setShowModal(flag);
  };

  return (
    <>
      <div class="table-header row">
        <div class="col-3">
          <h3 class="title">Product List</h3>
        </div>
        <div className="col text-end me-2">
          <button className="btn btn-clr-normal">
            <a onClick={() => handleShowModal()} className="nav-link">
              Add product
            </a>
          </button>
        </div>
      </div>
      <div class="">
        <div class="form-list">
          <table class="table-wrapper mb-0">
            <div class="row row-header">
              <div class="col-lg-3">Product Name</div>
              <div class="col-lg-2">Category</div>
              <div class="col-lg-2">Price</div>
              <div class="col-lg-2">Image</div>
              <div class="col-lg-1">Status</div>
              <div class="col-lg-2">Actions</div>
            </div>
            <div class="table-body">
              {product.map((product, key) => {
                return (
                  <div key={key} class="row item-list">
                    <div class="col-lg-3">
                      <div class="d-flex align-items-center">
                        <div class="">
                          <p class="fw-bold mb-1">{product.Name}</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-2">
                      <p class="fw-normal mb-1">{product.Type}</p>
                    </div>
                    <div class="col-lg-2">
                      {product.Price.toLocaleString("de-DE")}{" "}
                      <span>&#8363;</span>
                    </div>
                    <div class="col-lg-2">
                      <img src={product.Image} className="image-product" />
                    </div>
                    <div class="col-lg-1">
                      <div
                        className={
                          product.Status == 1
                            ? "text-center px-1 w-75 btn-sml btn-clr-success rounded-1"
                            : "text-center px-1 w-75 btn-sml btn-clr-danger rounded-1"
                        }
                      >
                        {product.Status == 1 ? "ON" : "OFF"}
                      </div>
                    </div>
                    <div class="col-lg-2">
                      <div className="d-flex flex-row gap-1">
                        <a href="./edit.html" className="nav-link">
                          <AiOutlineEdit className="edit-icon" />
                        </a>
                        <a href="#" className="nav-link">
                          <AiOutlineDelete
                            className="del-icon"
                            id={product.ID}
                            onClick={async (e) =>
                              await handleDeleteFood(e.target.id)
                            }
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </table>
        </div>
      </div>
      {<ProductModal show={showModal} onHide={handleShowModal} />}
    </>
  );
};

export default Production;
