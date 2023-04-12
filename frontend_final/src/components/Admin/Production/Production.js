import React, { useEffect, useState } from "react";
import "../css/root.css";
import "../css/main.css";
import { getAllProduct } from "../../../services/productList";
import { getAllProductType } from "../../../services/productType";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";


const Production = (props) => {
  const [product, setProduct] = useState([]);
  const [proType, setProType] = useState([]);

  const fetchProType = async () => {
    let dataProType = await getAllProductType();
    console.log(dataProType.DT);
    setProType(dataProType.DT);
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

  return (
    <>
      <div id="body">
        <div class="container">
          <div class="container-fluid main-body">
            <div class="d-flex flex-col">
              <div class="col ms-4">
                <div class="information">
                  <div class="row">
                    <div class="col">
                      <div class="info-card d-flex flex-col gap-4">
                        <h4>20%</h4>
                        <div>sub title</div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="info-card d-flex flex-col gap-4">
                        <h4>20%</h4>
                        <div>sub title</div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="info-card d-flex flex-col gap-4">
                        <h4>20%</h4>
                        <div>sub title</div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="info-card d-flex flex-col gap-4">
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
                    <div class="col text-end me-2">
                      <button class="btn btn-clr-normal">
                        <a href="./create.html" class="nav-link">
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
                                <div className={ product.Status == 1 ? "text-center px-1 w-75 btn-sml btn-clr-success rounded-1" : "text-center px-1 w-75 btn-sml btn-clr-danger rounded-1"}>
                                  {product.Status == 1 ? "ON" : "OFF"}
                                </div>
                               </td>
                               <td>
                                <div className="d-flex flex-row gap-1">
                                  <a href="./edit.html" className="nav-link">
                                    <AiOutlineEdit className="edit-icon" />
                                  </a>
                                  <a href="#" className="nav-link">
                                    <AiOutlineDelete className="del-icon" />
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
      </div>
    </>
  );
};

export default Production;
