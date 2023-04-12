import React, { useState } from "react";
import "../css/main.css";
import "../css/root.css";
import { Modal, Button } from "react-bootstrap";
import "./Staff.css";
import Form from "react-bootstrap/Form";
import { AddFood } from "../../../services/foodServices";
import { InsertStaff } from "../../../api/callApi";

const StaffModal = (props) => {
  const [show, setShow] = useState(props.show);

  //name, price, image, type, recipe, status

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState(1);
  const [address, setAddress] = useState("");
  const [position, setPosition] = useState(1);
  const [startAt, setStart] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCreateFood = async (e) => {
    e.preventDefault();
    let data = await InsertStaff(name, dob, gender,startAt, position, address);
    if (data && +data.EC === 1) {
      alert("add data succeed");
      console.log(data);
      location.reload();
    } else if (data && +data.EC != 1) {
      alert("add data failed");
      console.log(data);
    } else {
      alert("add data failed");
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
          <Modal.Title className="title">Create Staff</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="create-form">
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form6Example1"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label className="form-label" for="form6Example1">
                    Name
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="form-outline mb-4">
                  <input
                    type="date"
                    id="form6Example3"
                    className="form-control"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                  <label className="form-label" for="form6Example3">
                    Birth
                  </label>
                </div>
              </div>
              <div className="col-6">
                <div className="form-outline mb-4">
                  <select
                    class="select w-100"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <label className="form-label" for="form6Example3">
                    Position
                  </label>
                </div>
              </div>
              <div className="col-6">
                <div className="form-outline mb-4">
                  <select
                    class="select w-100"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                  </select>
                  <label className="form-label" for="form6Example3">
                    Gender
                  </label>
                </div>
              </div>
              <div className="col-6">
                <div className="form-outline mb-4">
                  <input
                    type="date"
                    id="form6Example3"
                    className="form-control"
                    value={startAt}
                    onChange={(e) => setStart(e.target.value)}
                  />
                  <label className="form-label" for="form6Example3">
                    Start At
                  </label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form6Example3"
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <label className="form-label" for="form6Example3">
                    Address
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
            onClick={(e) => handleCreateFood(e)}
          >
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default StaffModal;
