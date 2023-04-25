import React, { useEffect, useState, useCallback } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { getAllProductType } from "../../../services/productType";
import {
  InsertFoodTyppe,
  updateFood,
  updateFoodType,
} from "../../../api/callApi";
import { toast } from "react-toastify";

const Catagories = (props) => {
  const [catagory, setCatagory] = useState([]);
  const [action, setaction] = useState("CREATE");
  const [name, setName] = useState("");
  const [selectedtypeID, setSelectedtypeID] = useState(null);
  const [dataType, setDatatype] = useState();

  const fetchCatagory = async () => {
    let dataCatagory = await getAllProductType();
    setCatagory(dataCatagory.DT);
  };

  const handleAction = useCallback(
    (typeID) => {
      setSelectedtypeID(typeID);
      const selectedType = catagory.find((catagory) => catagory.ID == typeID);
      if (selectedType) {
        setaction("UPDATE");
        setDatatype(selectedType.ID);
      }
    },
    [catagory]
  );

  const handleUpdateFood = async (e) => {
    e.preventDefault();
    //const data = await updateFood(selectedtypeID.ID, name);
    if (dataType) {
      console.log(dataType, name);
      let data = await updateFoodType(dataType, name);
      if (data && +data.EC === 1) {
        toast.success(data.EM);
        setName("");
        setaction("CREATE");
      }
      if (data && +data.EC != 1) {
        toast.error(data.EM);
      }
    }
  };

  useEffect(() => {
    fetchCatagory();
  }, [catagory]);

  const handleAddTypeFood = async (e) => {
    e.preventDefault();
    try {
      let data = await InsertFoodTyppe(name);
      if (data && +data.EC == 1) {
        toast.success(data.EM);
      }
      if (data && +data.EC != 1) {
        toast.error(data.EM);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div id="body">
      <div className="container">
        <div className="container-fluid main-body">
          <div className="d-flex flex-col">
            <div className="col ms-4">
              <div className="add-inline-form main-content rounded-3 border border-2 py-4 px-3 mb-3">
                <div className="table-header row">
                  <div className="col-3">
                    <h3 className="title">
                      {action == "CREATE" ? "Add Category" : "Update category"}
                    </h3>
                  </div>
                </div>
                <form className="create-form">
                  <div className="row">
                    <div className="col-10">
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form6Example3"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form6Example3">
                          Category name
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 mt-4">
                    <button
                      type="submit"
                      onClick={
                        action == "CREATE"
                          ? (e) => handleAddTypeFood(e)
                          : (e) => handleUpdateFood(e)
                      }
                      className="btn btn-clr-normal btn-block mb-4 w-50"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
              <div className="main-content rounded-3 border border-2 py-4 px-3">
                <div className="table-header row">
                  <div className="col-3">
                    <h3 className="title">Categories</h3>
                  </div>
                </div>
                <div className="text-white">
                  <div className="bg-white">
                    <table className="table align-middle mb-0">
                      <thead className="">
                        <tr>
                          <th>Category Name</th>
                          <th>Description</th>
                          <th>Image</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {catagory.map((catagory, key) => {
                          return (
                            <tr key={key}>
                              <td>
                                <div className="d-flex align-items-center">
                                  <div className="">
                                    <p className="fw-bold mb-1">
                                      {catagory.Name}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>{catagory.Descript}</td>
                              <td>
                                {" "}
                                <img src={catagory.Image} />
                              </td>
                              <td>
                                <div className="d-flex flex-row gap-1">
                                  <a className="nav-link">
                                    <AiOutlineEdit
                                      id={catagory.ID}
                                      className="edit-icon"
                                      onClick={(e) => handleAction(e.target.id)}
                                    />
                                  </a>
                                  <span className="nav-link">
                                    <AiOutlineDelete className="del-icon" />
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
    </div>
  );
};

export default Catagories;
