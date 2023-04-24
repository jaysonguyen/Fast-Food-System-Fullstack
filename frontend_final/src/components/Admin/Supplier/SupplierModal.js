import React, { useState } from "react";
import "../css/main.css";
import "../css/root.css";
import "./Supplier.css";
import { Modal, Button } from "react-bootstrap";
import "../Production/Production.css";
import Form from "react-bootstrap/Form";
import { AddFood } from "../../../services/foodServices";
import { InsertSupplier } from "../../../api/callApi";
import { toast } from "react-toastify";
//name, contact, note
const SupplierModal = (props) => {
  const [show, setShow] = useState(props.show);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [note, setNote] = useState("");

  const handleCreate = async () => {
    try {
      let data = await InsertSupplier(name, contact, note);
      if (data && +data.EC == 1) {
        toast.success(data.EM);
      }
      if (data && +data.EC == 0) {
        toast.error(data.EM);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    
  };

  //name, price, image, type, recipe, status

  /*  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [note, setNote] = useState(""); */

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /* const handleCreateFood = async (e) => {
    e.preventDefault();
    let data = await InsertSupplier(name, contact, note);
    if (data && +data.EC === 1) {
      toast.success(data.EM)
      console.log(data);
      location.reload();
    } else if (data && +data.EC != 1) {
      toast.error(data.EM);
      console.log(data);
    } else {
      toast.error("Error from server");
    }
  }; */

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
          <Modal.Title className="title">Create Supplier</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="create-form">
            <div className="row mb-4">
              <div className="col col-12">
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
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form6Example1"
                    className="form-control"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                  <label className="form-label" for="form6Example1">
                    Contact
                  </label>
                </div>
              </div>
              <div className="col col-12 note-container-supplier">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form6Example1"
                    className="form-control"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                  <label className="form-label" for="form6Example1">
                    note
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
          <Button className="" variant="primary" onClick={() => handleCreate()}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SupplierModal;
