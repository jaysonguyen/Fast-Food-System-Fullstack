import React, { useEffect, useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { getAllStaff, removeStaff } from "../../../services/staff";
import StaffModal from "./StaffModal";

const Staff = (props) => {
  const [staff, setStaff] = useState([]);

  const fetchStaff = async () => {
    let dataStaff = await getAllStaff();
    setStaff(dataStaff.DT);
  };

  const handleDeleteStaff = async (id) => {
    let data = await removeStaff(id);
    if (data && +data.EC === 1) {
      alert("Xoa oke");
    }
    console.log(id);
  };

  useEffect(() => {
    fetchStaff();
  }, [staff]);

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
                    <h3 class="title">Staff List</h3>
                  </div>
                  <div class="col text-end me-2">
                    <button class="btn btn-clr-normal">
                      <a onClick={() => handleShowModal()} class="nav-link">
                        Add staff
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
                          <th>Staff name</th>
                          <th>Gender</th>
                          <th>Address</th>
                          <th>Start day</th>
                          <th>Position</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {staff.map((staff, key) => {
                          return (
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
                                    <p class="fw-bold mb-1">{staff.Name}</p>
                                    <p class="text-muted mb-0">{staff.Birth}</p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p class="text-muted mb-0">
                                  {staff.Gender == 0 ? "Nam" : "Nữ"}
                                </p>
                              </td>
                              <td>
                                {" "}
                                <p class="fw-normal mb-1">{staff.Address}</p>
                              </td>
                              <td>{staff.StartAt}</td>
                              <td>{staff.Position}</td>
                              <td>
                                <div className="d-flex flex-row gap-1">
                                  <a href="./edit.html" className="nav-link">
                                    <AiOutlineEdit className="edit-icon" />
                                  </a>
                                  <a href="#" className="nav-link">
                                    <AiOutlineDelete
                                      className="del-icon"
                                      id={staff.ID}
                                      onClick={async (e) =>
                                        await handleDeleteStaff(e.target.id)
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
      <StaffModal show={showModal} onHide={handleShowModal} />
    </div>
  );
};

export default Staff;
