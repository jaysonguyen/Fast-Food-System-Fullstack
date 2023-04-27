import React, { useEffect, useState, useCallback } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { getAllSupplier, removeSupplier } from "../../../services/supplier";
import SupplierModal from "./SupplierModal";
import { toast } from "react-toastify";
import { IoIosAdd } from "react-icons/io";
import { CiEdit } from "react-icons/ci";

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
      <h3 class="title categories-title">Supplier</h3>
      <div className="add_promotion_big_btn" onClick={() => handleShowModal()}>
        <IoIosAdd className="add_promotion_big_btn--icon" />
        Add promotion
      </div>
      <div class="form-list">
        <div class="table-header row"></div>
        <br></br>
        <div class="">
          <div class="bg-white">
            <div class="table-wrapper mb-0">
              <div class="row row-header">
                <div class="col-lg-3">Supplier Name</div>
                <div class="col-lg-4">Description</div>
                <div class="col-lg-3">Contact</div>
                <div class="col-lg-2">Actions</div>
              </div>
              <div className="seperate"></div>
              <div class="table-body">
                {supplier.map((supplier, key) => {
                  return (
                    <div key={key} class="row item-list">
                      <div class="col-lg-3">
                        <div class="d-flex align-items-center">
                          <div class="ms-3">
                            <p class="mb-1">{supplier.Name}</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <p class="fw-normal mb-1">{supplier.Note}</p>
                      </div>

                      <div class="col-lg-3">{supplier.Contact}</div>
                      <div class="col-lg-2">
                        <div className="d-flex flex-row gap-1">
                          <a className="nav-link">
                            <CiEdit
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
