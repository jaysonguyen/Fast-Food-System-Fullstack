import React, { useEffect, useState, useCallback } from "react";
import "../css/root.css";
import "../css/main.css";
import ProductModal from "./ProductModal";

import { getAllProduct } from "../../../services/productList";
import { getAllProductType } from "../../../services/productType";
import { removeFood } from "../../../services/foodServices";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
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
      <div id="body">
        <div className="container">
          <div className="container-fluid main-body">
            <div className="d-flex flex-col">
              <div className="col ms-4">
                <div className="main-content rounded-3 border border-2 py-4 px-3">
                  <div className="table-header row">
                    <div className="col-3">
                      <h3 className="title">Product List</h3>
                    </div>
                    <div className="col text-end me-2">
                      <button className="btn btn-clr-normal">
                        <a
                          onClick={() => handleCreateProduct()}
                          className="nav-link"
                        >
                          Add product
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
                            <th>Product name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {productList.map((product, key) => {
                            return (
                              <tr key={key}>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="">
                                      <p className="fw-bold mb-1">
                                        {product.Name}
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <p className="fw-normal mb-1">
                                    {product.Type}
                                  </p>
                                </td>
                                <td>
                                  {product.Price.toLocaleString("de-DE")}{" "}
                                  <span>&#8363;</span>
                                </td>
                                <td>
                                  <img
                                    src={product.Image}
                                    className="image-product"
                                  />
                                </td>
                                <td>
                                  <div
                                    className={
                                      product.Status == 1
                                        ? "text-center px-1 w-75 btn-sml btn-clr-success rounded-1"
                                        : "text-center px-1 w-75 btn-sml btn-clr-danger rounded-1"
                                    }
                                  >
                                    {product.Status == 1 ? "ON" : "OFF"}
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex flex-row gap-1">
                                    <span className="nav-link">
                                      <AiOutlineEdit
                                        className="edit-icon"
                                        id={product.ID}
                                        onClick={(e) =>
                                          handleAction(e.target.id)
                                        }
                                      />
                                    </span>
                                    <span className="nav-link">
                                      <AiOutlineDelete
                                        className="del-icon"
                                        id={product.ID}
                                        onClick={async (e) =>
                                          await handleDeleteFood(e.target.id)
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
        {
          <ProductModal
            show={showModal}
            onHide={handleShowModal}
            action={action}
            dataFood={dataFood}
          />
        }
      </div>
    </>
  );
};

export default Production;
