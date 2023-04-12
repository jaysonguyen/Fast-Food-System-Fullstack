import React, { useEffect, useState } from "react";
import "../css/root.css";
import "../css/main.css";
import ProductModal from "./ProductModal";

import { getAllProduct } from "../../../services/productList";
import { getAllProductType } from "../../../services/productType";
import { removeFood } from "../../../services/foodServices";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const Production = (props) => {
  const [product, setProduct] = useState([]);
  const [proType, setProType] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchProType = async () => {
    let dataProType = await getAllProductType();
    setProType(dataProType.DT);
  };

  const handleDeleteFood = async (id) => {
    let data = await removeFood(id);
    if (data && +data.EC === 1) {
      alert("Xoa oke")
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
  }, [product]);

  const handleShowModal = () => {
    let flag = !showModal;
    setShowModal(flag);
  };

  return (
    <>
      <div id="body">
        <div className="container">
          <div className="container-fluid main-body">
            <div className="d-flex flex-col">
              <div className="col ms-4">
                <div className="information">
                  <div className="row">
                    <div className="col">
                      <div className="info-card d-flex flex-col gap-4">
                        <h4>20%</h4>
                        <div>sub title</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="info-card d-flex flex-col gap-4">
                        <h4>20%</h4>
                        <div>sub title</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="info-card d-flex flex-col gap-4">
                        <h4>20%</h4>
                        <div>sub title</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="info-card d-flex flex-col gap-4">
                        <h4>20%</h4>
                        <div>sub title</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="main-content rounded-3 border border-2 py-4 px-3">
                  <div class="table-header row">
                    <div class="col-3">
                      <h3 class="title">Product List</h3>
                    </div>
                    <div className="col text-end me-2">
                      <button className="btn btn-clr-normal">
                        <a
                          onClick={() => handleShowModal()}
                          className="nav-link"
                        >
                          Add product
                        </a>
                      </button>
                    </div>
                  </div>
                  <br></br>
                  <div class="text-white">
                    <div class="bg-white">
                      <table class="table align-middle mb-0">
                        <thead class="">
                          <tr>
                            <th>Product name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {product.map((product, key) => {
                            return (
                              <tr key={key}>
                                <td>
                                  <div class="d-flex align-items-center">
                                    <div class="">
                                      <p class="fw-bold mb-1">{product.Name}</p>
                                      <p class="text-muted mb-0">
                                        john.doe@gmail.com
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <p class="fw-normal mb-1">{product.Type}</p>
                                  <p class="text-muted mb-0">IT department</p>
                                </td>
                                <td>
                                  {product.Price.toLocaleString("de-DE")}{" "}
                                  <span>&#8363;</span>
                                </td>
                                <td>
                                  <img src={product.Image} />
                                </td>
                                <td>
                                  <div
                                    className={
                                      product.Status == 1
                                        ? "text-center px-1 w-75 btn-sml btn-clr-success rounded-1"
                                        : "text-center px-1 w-75 btn-sml btn-clr-danger rounded-1"
                                    }
                                  >
                                    {product.Status == 1 ? "ON" : "OFF"}
                                  </div>
                                </td>
                                <td>
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
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {<ProductModal show={showModal} onHide={handleShowModal} />}
      </div>
    </>
  );
};

export default Production;
