import React, { useEffect, useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { getAllSupplier, removeSupplier } from "../../../services/supplier";
import SupplierModal from "./SupplierModal";

const Supplier = (props) => {
  const [supplier, setSupplier] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchSupplier = async () => {
    let dataSupplier = await getAllSupplier();
    console.log(dataSupplier.DT);
    setSupplier(dataSupplier.DT);
  };

  const handelDeleteSupplier = async (id) => {
    let data = await removeSupplier(id);
    if (data && +data.EC === 1) {
      alert("Xoa oke");
    }
    console.log(id);
  };

  useEffect(() => {
    fetchSupplier();
  }, [supplier]);

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
              <div class="main-content rounded-3 border border-2 py-4 px-3">
                <div class="table-header row">
                  <div class="col-3">
                    <h3 class="title">Supplier List</h3>
                  </div>
                  <div class="col text-end me-2">
                    <button class="btn btn-clr-normal">
                      <a onClick={() => handleShowModal()} class="nav-link">
                        Add supplier
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
                          <th>Supplier name</th>
                          <th>Contact</th>
                          <th>Description</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {supplier.map((supplier, key) => {
                          return (
                            <tr key={key}>
                              <td>
                                <div class="d-flex align-items-center">
                                  <img
                                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                    alt=""
                                    style={{ width: "45px", height: "45px" }}
                                    class="rounded-circle"
                                  />
                                  <div class="ms-3">
                                    <p class="fw-bold mb-1">{supplier.Name}</p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p class="fw-normal mb-1">{supplier.Contact}</p>
                              </td>

                              <td>{supplier.Note}</td>
                              <td>
                                <div className="d-flex flex-row gap-1">
                                  <a href="./edit.html" className="nav-link">
                                    <AiOutlineEdit className="edit-icon" />
                                  </a>
                                  <a href="#" className="nav-link">
                                    <AiOutlineDelete
                                      className="del-icon"
                                      id={supplier.ID}
                                      onClick={async (e) =>
                                        handelDeleteSupplier(e.target.id)
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
      <SupplierModal show={showModal} onHide={handleShowModal} />
    </div>
  );
};

export default Supplier;
