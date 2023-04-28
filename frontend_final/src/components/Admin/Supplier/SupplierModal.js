import React, { useEffect, useState } from "react";
import "../css/main.css";
import "../css/root.css";
import "./Supplier.css";
import { Modal, Button } from "react-bootstrap";
import "../Production/Production.css";
import Form from "react-bootstrap/Form";
import { AddFood } from "../../../services/foodServices";
import {
  InsertSupplier,
  updateFoodType,
  updateVendors,
} from "../../../api/callApi";
import { toast } from "react-toastify";
//name, contact, note
const SupplierModal = (props) => {
  const [show, setShow] = useState(props.show);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [note, setNote] = useState("");
  const [dataVendor, setDataVendor] = useState({});

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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowdataVendor = () => {
    setName(props.data.name);
    setContact(props.data.contact);
    setNote(props.data.note);
    setDataVendor({
      contact: props.data.contact,
      note: props.data.note,
    });
  };

  const handleUpdate = async () => {
    setDataVendor((prev) => ({
      ...prev,
      contact,
      note,
    }));
    const data = updateVendors(props.data.id, { ...dataVendor });
    if (data && +data.EC == 1) {
      toast.success(data.EM);
      location.reload();
    }
    if (data && +data.EC != 1) {
      toast.error(data.EM);
    }
  };

  useEffect(() => {
    handleShowdataVendor();
  }, [props.data]);

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
          <Modal.Title className="title">
            {props.action == "CREATE" ? "Create Supplier" : "Update Supplier"}
          </Modal.Title>
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
                    disabled={props.action == "CREATE" ? "" : "disabled"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form6Example1">
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
                  <label className="form-label" htmlFor="form6Example1">
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
                  <label className="form-label" htmlFor="form6Example1">
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
          <Button
            className=""
            variant="primary"
            onClick={
              props.action == "CREATE"
                ? () => handleCreate()
                : () => handleUpdate()
            }
          >
            {props.action == "CREATE" ? "CREATE" : "UPDATE"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SupplierModal;
