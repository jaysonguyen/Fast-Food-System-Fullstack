import React, { useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import SupplierModal from "./SupplierModal";

const Supplier = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    let flag = !showModal;
    setShowModal(flag);
  };

  return (
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
                    <h3 class="title">Supplier List</h3>
                  </div>
                  <div class="col text-end me-2">
                    <button class="btn btn-clr-normal">
                      <a onClick={() => handleShowModal()} class="nav-link">
                        Add supplier
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
                          <th>Supplier name</th>
                          <th>Category</th>
                          <th>Brand</th>
                          <th>Price</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                class="rounded-circle"
                              />
                              <div class="ms-3">
                                <p class="fw-bold mb-1">John Doe</p>
                                <p class="text-muted mb-0">
                                  john.doe@gmail.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="fw-normal mb-1">Software engineer</p>
                            <p class="text-muted mb-0">IT department</p>
                          </td>
                          <td>
                            <span class="badge badge-success rounded-pill d-inline">
                              Active
                            </span>
                          </td>
                          <td>Senior</td>
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
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SupplierModal show={showModal} onHide={handleShowModal} />
    </div>
  );
};

export default Supplier;
