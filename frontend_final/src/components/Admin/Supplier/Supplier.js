import React, { useEffect, useState, useCallback } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { getAllSupplier, removeSupplier } from "../../../services/supplier";
import SupplierModal from "./SupplierModal";
import { toast } from "react-toastify";

const Supplier = (props) => {
  const [supplier, setSupplier] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedVendorID, setSelectedVendorID] = useState(null);
  const [dataVendor, setDatavendor] = useState({});
  const [name, setName] = useState({});
  const [contact, setContact] = useState("");
  const [note, setnote] = useState("");
  const [action, setAction] = useState("CREATE");

  const fetchSupplier = async () => {
    let dataSupplier = await getAllSupplier();
    console.log(dataSupplier.DT);
    setSupplier(dataSupplier.DT);
  };

  const handelDeleteSupplier = async (id) => {
    const data = await removeSupplier(id);
    if (data && +data.EC == 1) {
      toast.success("Delete data succeed");
    }
    if (data && +data.EC != 1) {
      toast.error(data.EM);
    }
    console.log(id);
  };

  const handleAction = useCallback(
    (vendorID) => {
      setSelectedVendorID(vendorID);
      const selectedVendor = supplier.find(
        (supplier) => supplier.ID == vendorID
      );
      if (selectedVendor) {
        setDatavendor(vendorID);
        setContact(selectedVendor.Contact);
        setName(selectedVendor.Name);
        setnote(selectedVendor.Note);
        setDatavendor({
          id: vendorID,
          name: selectedVendor.Name,
          contact: selectedVendor.Contact,
          note: selectedVendor.Note,
        });
      }
      if (dataVendor) {
        setAction("UPDATE");
        setShowModal(true);
      }
    },
    [supplier]
  );

  useEffect(() => {
    fetchSupplier();
  }, []);

  const handleShowModal = () => {
    let flag = !showModal;
    setShowModal(flag);
  };

  return (
    <>
      <div class="form-list">
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
        <div class="">
          <div class="bg-white">
            <div class="table-wrapper mb-0">
              <div class="row row-header">
                <div class="col-lg-4">Supplier Name</div>
                <div class="col-lg-3">Description</div>
                <div class="col-lg-3">Contact</div>
                <div class="col-lg-2">Actions</div>
              </div>
              <div class="table-body">
                {supplier.map((supplier, key) => {
                  return (
                    <div key={key} class="row item-list">
                      <div class="col-lg-4">
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
                      </div>
                      <div class="col-lg-3">
                        <p class="fw-normal mb-1">{supplier.Contact}</p>
                      </div>

                      <div class="col-lg-3">{supplier.Note}</div>
                      <div class="col-lg-2">
                        <div className="d-flex flex-row gap-1">
                          <a className="nav-link">
                            <AiOutlineEdit
                              className="edit-icon"
                              id={supplier.ID}
                              onClick={(e) => handleAction(e.target.id)}
                            />
                          </a>
                          <a className="nav-link">
                            <AiOutlineDelete
                              className="del-icon"
                              id={supplier.ID}
                              onClick={async (e) =>
                                handelDeleteSupplier(e.target.id)
                              }
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SupplierModal
        show={showModal}
        action={action}
        onHide={handleShowModal}
        data={dataVendor}
      />
    </>
  );
};

export default Supplier;
