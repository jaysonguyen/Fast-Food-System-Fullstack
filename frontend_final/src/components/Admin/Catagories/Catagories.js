import React, { useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { InsertFoodTyppe } from "../../../api/callApi";

const Catagories = (props) => {
  const [name, setName] = useState("");

  const handleAddTypeFood = async (e) => {
    e.preventDefault();
    try {
      let data = await InsertFoodTyppe(name);
      if (data && +data.EC == 1) {
        console.log("INSERT THANH CONG");
      }
      if (data && +data.EC != 1) {
        console.log("INSERT THAT BAI");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="body">
      <div class="container">
        <div class="container-fluid main-body">
          <div class="d-flex flex-col">
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
                          value={name}
                          onChange={(e) => setName(e.target.value)}
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
                      onClick={(e) => handleAddTypeFood(e)}
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
    </div>
  );
};

export default Catagories;
