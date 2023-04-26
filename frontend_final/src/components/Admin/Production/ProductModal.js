import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Modal, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { getFoodById, updateFood } from "../../../api/callApi";
import { AddFood } from "../../../services/foodServices";
import "../css/main.css";
import "../css/root.css";
import "./Production.css";

const ProductModal = (props) => {
  const [show, setShow] = useState(props.show);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [recipe, setRecipe] = useState("");
  const [note, setNote] = useState("");
  const [dataFood, setDataFood] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  console.log(props.action);

  //use for update
  const initialFoodInfo = async () => {};




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

  const handleGetProductByID = useCallback(async (id) => {
    try {
      const data = await getFoodById(id);
      if (data && +data.EC == 1) {
        const [food] = data.DT;
        setName(food.Name);
        setPrice(food.Price);
        setImage(food.Image);
        setType(food.Type);
        setRecipe(food.Recipe);
        setDataFood({
          ID: id,
          Name: food.Name,
          Price: food.Price,
          Image: food.Image,
          Type: food.Type,
          Recipe: food.Recipe,
        });
      }
      if (data && +data.EC != 1) {
        console.log("Khong duoc goi dai vuong oi");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleUpdatePro = async () => {
    setDataFood({
      ...dataFood,
      Name: name,
      Price: price,
      Image: image,
      Type: type,
      Recipe: recipe,
    });

    let data = await updateFood(dataFood);
    if (data && +data.EC == 1) {
      console.log(setDataFood);
    }
  };

  useEffect(() => {
    handleGetProductByID(props.idFood);
  }, []);

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
            {props.action == "CREATE" ? "CREATE PRODUCT" : "UPDATE PRODUCT"}
          </Modal.Title>
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
                    id="form6Example4"
                    className="form-control"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                  <label className="form-label" for="form6Example4">
                    Note
                  </label>
                </div>
              </div>
              <div className="col-4">
                <div className="form-outline mb-4">
                  <input
                    type="number"
                    id="form6Example5"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <label className="form-label" for="form6Example5">
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
                id="form6Example8"
                checked
              />
              {props.action == "CREATE" && (
                <label className="form-check-label" for="form6Example8">
                  Create a food
                </label>
              )}
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
            onClick={(e) =>
              props.action == "CREATE"
                ? handleCreateFood(e)
                : handleUpdatePro(e)
            }
          >
            {props.action == "CREATE" ? "Create" : "Update"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductModal;
