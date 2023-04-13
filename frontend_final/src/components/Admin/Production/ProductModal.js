import React, { useState } from "react";
import "../css/main.css";
import "../css/root.css";
import { Modal, Button } from "react-bootstrap";
import "./Production.css";
import Form from "react-bootstrap/Form";
import { AddFood } from "../../../services/foodServices";
import { toast } from "react-toastify";

const ProductModal = (props) => {
  const [show, setShow] = useState(props.show);

  //name, price, image, type, recipe, status

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState(1);
  const [recipe, setRecipe] = useState("");
  const [note, setNote] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCreateFood = async (e) => {
    e.preventDefault();
    const data = await AddFood(name, price, image, type, recipe);
    if (data && +data.EC === 1) {
      toast.success(data.EM);
      location.reload();
    } else if (data && +data.EC != 1) {
      toast.error(data.EM);
      console.log(data);
    } else {
      toast.error("add data failed");
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
          <Modal.Title className="title">Create Product</Modal.Title>
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
                    Product Name
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <select
                    className="select w-100"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                    <option value="6">Six</option>
                    <option value="7">Seven</option>
                    <option value="8">Eight</option>
                  </select>
                  <label className="form-label" for="inlineFormSelectPref">
                    Category
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form6Example3"
                    className="form-control"
                    value={recipe}
                    onChange={(e) => setRecipe(e.target.value)}
                  />
                  <label className="form-label" for="form6Example3">
                    Recipe
                  </label>
                </div>
              </div>
              <div className="col-4">
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form6Example3"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <label className="form-label" for="form6Example3">
                    Price
                  </label>
                </div>
              </div>
              <div className="col-4">
                <div className="file-upload">
                  <div className="file-select">
                    <div className="file-select-button" id="fileName">
                      Choose Image
                    </div>
                    <div className="file-select-name" id="noFile">
                      No file chosen...
                    </div>
                    <input
                      type="file"
                      name="chooseFile"
                      id="chooseFile"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        const reader = new FileReader();
                        reader.onload = () => {
                          setImage(reader.result);
                        };
                        reader.readAsDataURL(file);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="form-outline mb-4">
              <textarea
                className="form-control"
                id="form6Example7"
                rows="4"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              ></textarea>
              <label className="form-label" for="form6Example7">
                Note
              </label>
            </div>
            <div className="form-outline mb-4">
              <div className=" default-img-wrapper">
                <img
                  src={image ? image : "../../../images/default.jpg"}
                  alt=""
                />
              </div>
              <label className="form-label" for="form6Example4">
                Image
              </label>
            </div>
            <div className="form-check d-flex mb-4">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="form6Example8"
                checked
              />
              <label className="form-check-label" for="form6Example8">
                Create an account?
              </label>
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

export default ProductModal;
