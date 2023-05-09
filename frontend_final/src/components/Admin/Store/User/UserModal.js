import React, { useState } from "react";
// import "../css/main.css";
// import "../css/root.css";
import { Modal, Button } from "react-bootstrap";
import "./User.css";
import Form from "react-bootstrap/Form";
// import { AddFood } from "../../../../services/foodServices";
import { InsertStaff } from "../../../../api/callApi";
import { getAllStaff } from "../../../../services/staff";
import { toast } from "react-toastify";

const UserModal = (props) => {
  const [show, setShow] = useState(props.show);

  //name, price, image, type, recipe, status
  const [staffList, setStaffList] = useState("");

  const [staff, setStaff] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getStaffList = async () => {
    try {
      const staffDT = await getAllStaff();
      if (staffDT && staffDT.EC != -1) {
        setStaffList(staffDT);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    let data = await InsertStaff(
      email,
      dob,
      gender,
      startAt,
      position,
      address
    );
    if (data && +data.EC === 1) {
      toast.success(data.EM);
      location.reload();
    } else if (data && +data.EC != 1) {
      toast.error(data.EM);
      console.log(data);
    } else {
      toast.error("Error server");
    }
  };

  return (
    <>
      <Modal
        size="lg"
        show={props.show}
        className="modal-user"
        onHide={props.onHide}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="title">Create User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="create-form">
            <div className="row mb-4 ">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form6Example1"
                    className="form-control w-100"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="form-label" for="form6Example1">
                    Email
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form6Example3"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="form-label" for="form6Example3">
                    Password
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="form-outline mb-4">
                  <select
                    class="select w-100"
                    value={staff}
                    onChange={(e) => setStaff(e.target.value)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <label className="form-label" for="form6Example3">
                    Staff
                  </label>
                </div>
              </div>
              <div className="col-6">
                <div className="form-outline mb-4">
                  <input
                    type="date"
                    id="form6Example3"
                    className="form-control"
                    // value={startAt}
                    // onChange={(e) => setStart(e.target.value)}
                  />
                  <label className="form-label" for="form6Example3">
                    Crreated At
                  </label>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            className=""
            variant="primary"
            onClick={(e) => handleCreateUser(e)}
          >
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserModal;
