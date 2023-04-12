import React from "react";
import Admin_Routes from "./Admin_Routes/Admin_Routes";


const Admin = (props) => {
  return (
    <div>
      <div id="body">
        <div class="container">
          <div class="container-fluid main-body">
            <div class="d-flex flex-col">
              <div class="col-2">
                <div id="sidebar">
                  <ul class="nav-list">
                    <li class="nav-item has-submenu">
                      <a class="nav-link active" href="#">
                        {" "}
                        Product{" "}
                      </a>
                      <ul class="submenu collapse show">
                        <li>
                          <a class="nav-link active" href="#">
                            Product
                          </a>
                        </li>
                        <li>
                          <a class="nav-link " href="#">
                            Promotion{" "}
                          </a>
                        </li>
                        <li>
                          <a class="nav-link" href="../Recipe/index.html">
                            Recipe
                          </a>
                        </li>
                        <li>
                          <a class="nav-link" href="../Ingredients/index.html">
                            Ingredients
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="../Categories/index.html">
                        Categories
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Brand
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Import
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col ms-4">
                <div class="add-inline-form main-content rounded-3 border border-2 py-4 px-3 mb-3">
                  <div class="table-header row">
                    <div class="col-3">
                      <h3 class="title">Add Category</h3>
                    </div>
                  </div>
                  <form class="create-form">
                    <div class="row">
                      <div class="col-10">
                        <div class="form-outline mb-4">
                          <input
                            type="text"
                            id="form6Example3"
                            class="form-control"
                          />
                          <label class="form-label" for="form6Example3">
                            Category name
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col-2 mt-4">
                      <button
                        type="submit"
                        class="btn btn-clr-normal btn-block mb-4 w-50"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
                <div class="main-content rounded-3 border border-2 py-4 px-3">
                  <div class="table-header row">
                    <div class="col-3">
                      <h3 class="title">Categories</h3>
                      <p>sub title</p>
                    </div>
                  </div>
                  <div class="text-white">
                    <div class="bg-white">
                      <table class="table align-middle mb-0">
                        <thead class="">
                          <tr>
                            <th>Category Name</th>
                            <th>Created at</th>
                            <th>Updated at</th>
                            <th>Products</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div class="d-flex align-items-center">
                                <div class="">
                                  <p class="fw-bold mb-1">Iphone X ProMax</p>
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
                              <p class="fw-normal mb-1">Software engineer</p>
                              <p class="text-muted mb-0">IT department</p>
                            </td>
                            <td>100</td>
                            <td>
                              <div class="d-flex flex-row gap-1">
                                <a href="./edit.html" class="nav-link">
                                  <i class="fa-solid fa-pen"></i>
                                </a>
                                <a href="#" class="nav-link">
                                  <i class="fa-solid fa-trash"></i>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="d-flex align-items-center">
                                <div class="">
                                  <p class="fw-bold mb-1">Alex Ray</p>
                                  <p class="text-muted mb-0">
                                    alex.ray@gmail.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p class="fw-normal mb-1">Consultant</p>
                              <p class="text-muted mb-0">Finance</p>
                            </td>
                            <td>
                              <p class="fw-normal mb-1">Software engineer</p>
                              <p class="text-muted mb-0">IT department</p>
                            </td>
                            <td>100</td>
                            <td>
                              <div class="d-flex flex-row gap-1">
                                <a href="./edit.html" class="nav-link">
                                  <i class="fa-solid fa-pen"></i>
                                </a>
                                <a href="#" class="nav-link">
                                  <i class="fa-solid fa-trash"></i>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="d-flex align-items-center">
                                <div class="">
                                  <p class="fw-bold mb-1">Kate Hunington</p>
                                  <p class="text-muted mb-0">
                                    kate.hunington@gmail.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p class="fw-normal mb-1">Designer</p>
                              <p class="text-muted mb-0">UI/UX</p>
                            </td>
                            <td>
                              <p class="fw-normal mb-1">Software engineer</p>
                              <p class="text-muted mb-0">IT department</p>
                            </td>
                            <td>101</td>
                            <td>
                              <div class="d-flex flex-row gap-1">
                                <a href="./edit.html" class="nav-link">
                                  <i class="fa-solid fa-pen"></i>
                                </a>
                                <a href="#" class="nav-link">
                                  <i class="fa-solid fa-trash"></i>
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
      </div>
    </div>
  );
};

export default Admin;
