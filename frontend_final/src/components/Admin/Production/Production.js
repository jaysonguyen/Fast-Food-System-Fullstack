import React, { useEffect, useState, useCallback } from "react";
import "../css/root.css";
import "../css/main.css";
import ProductModal from "./ProductModal";

import { getAllProduct } from "../../../services/productList";
import { getAllProductType } from "../../../services/productType";
import { removeFood } from "../../../services/foodServices";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { toast } from "react-toastify";

const Production = (props) => {
  const [proType, setProType] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [idFood, setIdFood] = useState(1);

  const [name, setName] = useState("");
  const [id, setid] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [recipe, setRecipe] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState(0);
  const [productList, setProductList] = useState([]);
  const [dataFood, setDataFood] = useState({});
  const [selectedProductId, setSelectedProductId] = useState(null);

  const [action, setAction] = useState("CREATE");

  const fetchProType = async () => {
    let dataProType = await getAllProductType();
    setProType(dataProType.DT);
  };

  const handleDeleteFood = async (id) => {
    let data = await removeFood(id);
    if (data && +data.EC === 1) {
      toast.success(data.EM);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const dataProduct = await getAllProduct();
      setProductList(dataProduct.DT);
    };
    if (productList) {
      console.log(productList);
    }
    fetchData();
  }, []);

  const handleShowModal = () => {
    let flag = !showModal;
    setShowModal(flag);
  };

  const handleCreateProduct = () => {
    handleShowModal();
    setAction("CREATE");
  };

  const handleAction = useCallback(
    (productId) => {
      setSelectedProductId(productId);
      const selectedProduct = productList.find(
        (product) => product.ID == productId
      );
      if (selectedProduct) {
        setid(productId);
        setName(selectedProduct.Name);
        setPrice(selectedProduct.Price);
        setImage(selectedProduct.Image);
        setType(selectedProduct.Type);
        setRecipe(selectedProduct.Recipe);
        setStatus(selectedProduct.Status);
        setDataFood({
          id: productId,
          name: selectedProduct.Name,
          price: selectedProduct.Price,
          image: selectedProduct.Image,
          type: selectedProduct.Type,
          recipe: selectedProduct.Recipe,
          status: selectedProduct.Status,
        });
      }
      if (dataFood) {
        setAction("UPDATE");
        setShowModal(true);
      }
    },
    [productList]
  );
  return (
    <>
      <div class="table-header row">
        <h3 class="title">Product</h3>
        <div
          className="add_promotion_big_btn"
          onClick={() => handleShowModal()}
        >
          <IoIosAdd className="add_promotion_big_btn--icon" />
          Add Product
        </div>
      </div>
      <div class="">
        <div class="form-list">
          <table class="table-wrapper mb-0">
            <div class="row row-header">
              <div class="col-lg-3">Product Name</div>
              <div class="col-lg-2">Category</div>
              <div class="col-lg-2">Price</div>
              <div class="col-lg-2">Image</div>
              <div class="col-lg-1">Status</div>
              <div class="col-lg-2">Actions</div>
            </div>
            <div className="seperate"></div>
            <div class="table-body">
              {productList.map((product, key) => {
                return (
                  <div key={key} class="row item-list">
                    <div class="col-lg-3">
                      <div class="d-flex align-items-center">
                        <div class="">
                          <p class="mb-1">{product.Name}</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-2">
                      <p class="fw-normal mb-1">{product.NameType}</p>
                    </div>
                    <div class="col-lg-2">
                      {product.Price.toLocaleString("de-DE")}{" "}
                      <span>&#8363;</span>
                    </div>
                    <div class="col-lg-2">
                      <img src={product.Image} className="image-product" />
                    </div>
                    <div class="col-lg-1">
                      <div
                        className={
                          product.Status == 1
                            ? "text-center px-1 w-75 btn-sml btn_success rounded-1"
                            : "text-center px-1 w-75 btn-sml btn_danger rounded-1"
                        }
                      >
                        {product.Status == 1 ? "ON" : "OFF"}
                      </div>
                    </div>
                    <div class="col-lg-2">
                      <div className="d-flex flex-row gap-1">
                        <a className="nav-link">
                          <CiEdit
                            className="edit-icon"
                            id={product.ID}
                            onClick={(e) => handleAction(e.target.id)}
                          />
                        </a>
                        <a href="#" className="nav-link">
                          <AiOutlineDelete
                            className="del-icon"
                            id={product.ID}
                            onClick={async (e) =>
                              await handleDeleteFood(e.target.id)
                            }
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </table>
        </div>
      </div>
      {
        <ProductModal
          show={showModal}
          onHide={handleShowModal}
          action={action}
          dataFood={dataFood}
        />
      }
    </>
  );
};

export default Production;
