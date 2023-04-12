import React, { useEffect, useState } from "react";
import "../css/main.css";
import "../css/root.css";
import { getAllPromotion, removePromotion, InsertPromotion } from "../../../services/promotion";
import "./Promotion.css";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const Promotion = (props) => {

  const [promotion, setPromotion] = useState([]);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [status, setStatus] = useState(1);
  const [dateStart, setDateStart] = useState("");
  const [dateExp, setDateExp] = useState("");

  const fetchPromotion = async () => {
    try {
      let dataPromotion = await getAllPromotion();
      console.log("data promotion ", dataPromotion.DT);
      setPromotion(dataPromotion.DT);
    } catch (error) {
      console.log(error);
    }
  };


  const handleDeletePromotion = async (id) => {
    let data = removePromotion(id) ;
    if(data && +data.EC === 1){
      alert("Xoa thanh cong");

    } 
    console.log(id);
  };

  const handleInsertPromotion = async (e) => {
    e.preventDefault();
    try {
      let data = await InsertPromotion(name, cost, status, dateStart, dateExp);
      console.log(name, cost, status, dateStart, dateExp);
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

  useEffect(() => {
    fetchPromotion();
  }, [promotion]);

  return (
    <div id="body">
      <div class="container">
        <div class="container-fluid main-body">
          <div class="d-flex flex-col">
            <div class="col ms-4">
              <div class="add-inline-form main-content rounded-3 border border-2 py-4 px-3 mb-3">
                <div class="table-header row">
                  <div class="col-3">
                    <h3 class="title">Add Promotion</h3>
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
                          Name
                        </label>
                      </div>
                    </div>
                    <div class="col-2">
                      <select
                        class="select w-100"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="1">ON</option>
                        <option value="2">OFF</option>
                      </select>
                      <label class="form-label" for="inlineFormSelectPref">
                        Status
                      </label>
                    </div>
                    <div class="col-6">
                      <input
                        type="text"
                        id="form6Example3"
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                        class="form-control"
                      />
                      <label class="form-label" for="form6Example3">
                        Cost
                      </label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <input
                        type="date"
                        id="birthdaytime"
                        name="birthdaytime"
                        value={dateStart}
                        onChange={(e) => setDateStart(e.target.value)}
                        class="form-control"
                      />
                      <label for="birthdaytime">Begin</label>
                    </div>
                    <div class="col">
                      <input
                        type="date"
                        id="birthdaytime"
                        name="birthdaytime"
                        class="form-control"
                        value={dateExp}
                        onChange={(e) => setDateExp(e.target.value)}
                      />
                      <label for="birthdaytime">End</label>
                    </div>
                  </div>
                  <div class="col-2 mt-4">
                    <button
                      type="submit"
                      onClick={(e) => handleInsertPromotion(e)}
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
                    <h3 class="title">Promotion List</h3>
                  </div>
                </div>
                <div class="text-white">
                  <div class="bg-white">
                    <table class="table align-middle mb-0">
                      <thead class="">
                        <tr>
                          <th>Promotion Name</th>
                          <th>Price</th>
                          <th>Day Begin</th>
                          <th>Day End</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {promotion.map((promotion, key) => {
                          return (
                            <tr key={key}>
                              <td>
                                <div className="d-flex align-items-center">
                                  <div className="">
                                    <p className="fw-bold mb-1">
                                      {promotion.Name}
                                    </p>
                                   
                                  </div>
                                </div>
                              </td>
                              <td>
                                {promotion.Price.toLocaleString("de-DE")}{" "}
                                <span>&#8363;</span>
                              </td>
                              <td>
                                <p className="fw-normal mb-1">
                                  {promotion.dateStart}
                                </p>
                              </td>
                              <td>
                                <p className="fw-normal mb-1">
                                  {promotion.dateExp}
                                </p>
                              </td>
                              <td>
                                <div
                                  className={
                                    promotion.Status == 1
                                      ? "text-center px-1 w-75 btn-sml btn-clr-success rounded-1"
                                      : "text-center px-1 w-75 btn-sml btn-clr-danger rounded-1"
                                  }
                                >
                                  {promotion.Status == 1 ? "ON" : "OFF"}
                                </div>
                              </td>
                              <td>
                                <div className="d-flex flex-row gap-1">
                                  <a href="./edit.html" className="nav-link">
                                    <AiOutlineEdit className="edit-icon" />
                                  </a>
                                  <span className="nav-link">
                                    <AiOutlineDelete className="del-icon" id={promotion.ID} 
                                    onClick={async(e) => await handleDeletePromotion(e.target.id)}/>
                                  </span>
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
  );
};

export default Promotion;
