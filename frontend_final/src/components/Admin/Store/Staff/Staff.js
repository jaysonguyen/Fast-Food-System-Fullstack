import React, { useEffect, useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { getAllStaff, removeStaff } from "../../../../services/staff";
import StaffModal from "./StaffModal";
import { toast } from "react-toastify";

const Staff = (props) => {
  const [staff, setStaff] = useState([]);

  const fetchStaff = async () => {
    let dataStaff = await getAllStaff();
    setStaff(dataStaff.DT);
  };

  const handleDeleteStaff = async (id) => { 
    let data = await removeStaff(id);
    if (data && +data.EC === 1) {
      toast.success(data.EM);
    }
    if (data && +data.EC != 1) {
      toast.error(data.EM);
    }
    console.log(id);
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [choosedStaff, setChoosedStaff] = useState({});
  const handleShowModal = (staff) => {
    let flag = !showModal;
    setChoosedStaff(() => ({ ...staff }));
    setShowModal(flag);
  };

  return (
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
                    <h3 className="title">Staff List</h3>
                  </div>
                  <div className="col text-end me-2">
                    <button className="btn btn-clr-normal">
                      <a
                        onClick={() => handleShowModal({})}
                        className="nav-link"
                      >
                        Add staff
                      </a>
                    </button>
                  </div>
                </div>
                <br></br>
                <div className="text-white">
                  <div className="bg-white">
                    <table className="table align-middle mb-0">
                      <thead className="">
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
                            <tr key={key}>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img
                                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                    alt=""
                                    style={{ width: "45px", height: "45px" }}
                                    className="rounded-circle"
                                  />
                                  <div className="ms-3">
                                    <p className="fw-bold mb-1">{staff.Name}</p>
                                    <p className="text-muted mb-0">
                                      {new Date(staff.Birth).toISOString().slice(0, 10)}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p className="text-muted mb-0">
                                  {staff.Gender == 0 ? "Nam" : "Nữ"}
                                </p>
                              </td>
                              <td>
                                {" "}
                                <p className="fw-normal mb-1">
                                  {staff.Address}
                                </p>
                              </td>
                              <td>{staff.StartAt}</td>
                              <td>{staff.Position}</td>
                              <td>
                                <div className="d-flex flex-row gap-1">
                                  <a
                                    onClick={() => handleShowModal(staff)}
                                    className="nav-link"
                                  >
                                    <AiOutlineEdit className="edit-icon" />
                                  </a>
                                  <span className="nav-link">
                                    <AiOutlineDelete
                                      className="del-icon"
                                      id={staff.StaffID}
                                      onClick={async (e) =>
                                        await handleDeleteStaff(e.target.id)
                                      }
                                    />
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
      <StaffModal
        show={showModal}
        staff={choosedStaff}
        onHide={handleShowModal}
      />
    </div>
  );
};

export default Staff;
