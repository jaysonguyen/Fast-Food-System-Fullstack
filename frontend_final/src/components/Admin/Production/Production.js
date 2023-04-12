import React, { useState } from "react";
import "../css/root.css";
import "../css/main.css";
import ProductModal from "./ProductModal";

const Production = (props) => {
  const [showModal, setShowModal] = useState(false);

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
                <div className="main-content rounded-3 border border-2 py-4 px-3">
                  <div className="table-header row">
                    <div className="col-3">
                      <h3 className="title">Product List</h3>
                      <p>sub title</p>
                    </div>
                    <div className="col text-end me-2">
                      <button className="btn btn-clr-normal">
                        <a onClick={() => handleShowModal()} className="nav-link">
                          Add product
                        </a>
                      </button>
                    </div>
                  </div>
                  <div className="text-white">
                    <div className="bg-white">
                      <table className="table align-middle mb-0">
                        <thead className="">
                          <tr>
                            <th>Product name</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="">
                                  <p className="fw-bold mb-1">Iphone X ProMax</p>
                                  <p className="text-muted mb-0">
                                    john.doe@gmail.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="fw-normal mb-1">Software engineer</p>
                              <p className="text-muted mb-0">IT department</p>
                            </td>
                            <td>
                              <span className="badge badge-success rounded-pill d-inline">
                                Active
                              </span>
                            </td>
                            <td>Senior</td>
                            <td>
                              <div className="d-flex flex-row gap-1">
                                <a href="./edit.html" className="nav-link">
                                  <i className="fa-solid fa-pen"></i>
                                </a>
                                <a href="#" className="nav-link">
                                  <i className="fa-solid fa-trash"></i>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="">
                                  <p className="fw-bold mb-1">Alex Ray</p>
                                  <p className="text-muted mb-0">
                                    alex.ray@gmail.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="fw-normal mb-1">Consultant</p>
                              <p className="text-muted mb-0">Finance</p>
                            </td>
                            <td>
                              <span className="badge badge-primary rounded-pill d-inline">
                                Onboarding
                              </span>
                            </td>
                            <td>Junior</td>
                            <td>
                              <div className="d-flex flex-row gap-1">
                                <a href="./edit.html" className="nav-link">
                                  <i className="fa-solid fa-pen"></i>
                                </a>
                                <a href="#" className="nav-link">
                                  <i className="fa-solid fa-trash"></i>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="">
                                  <p className="fw-bold mb-1">Kate Hunington</p>
                                  <p className="text-muted mb-0">
                                    kate.hunington@gmail.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="fw-normal mb-1">Designer</p>
                              <p className="text-muted mb-0">UI/UX</p>
                            </td>
                            <td>
                              <span className="badge badge-warning rounded-pill d-inline">
                                Awaiting
                              </span>
                            </td>
                            <td>Senior</td>
                            <td>
                              <div className="d-flex flex-row gap-1">
                                <a href="./edit.html" className="nav-link">
                                  <i className="fa-solid fa-pen"></i>
                                </a>
                                <a href="#" className="nav-link">
                                  <i className="fa-solid fa-trash"></i>
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
        {<ProductModal show={showModal} onHide={handleShowModal} />}
      </div>
    </>
  );
};

export default Production;
