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
    <div class="d-flex flex-col">
      <div class="col ms-4">
        <div class="form-list">
          <div class="table-header row">
            <div class="col-3">
              <h3 class="title">
                {" "}
                {action == "CREATE" ? "Add Category" : "Update category"}
              </h3>
            </div>
          </div>
          <form class="create-form">
            <div class="row">
              <div class="col-10">
                <div class="form-outline mb-4">
                  <input
                    type="text"
                    id="form6Example3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    class="form-control w-100"
                  />
                  <label class="form-label" for="form6Example3">
                    Category name
                  </label>
                </div>
              </div>
              <div class="col-2">
                <button
                  type="submit"
                  onClick={
                    action == "CREATE"
                      ? (e) => handleAddTypeFood(e)
                      : (e) => handleUpdateFood(e)
                  }
                  class="btn btn-clr-normal btn-block w-75 h-50"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="form-list mt-3">
          <div class="table-header row">
            <div class="col-3">
              <h3 class="title">Categories</h3>
            </div>
          </div>
          <div class="">
            <div class="bg-white">
              <div class="table-wrapper mb-0">
                <div class="row row-header">
                  <div class="col-lg-4">Category Name</div>
                  <div class="col-lg-4">Description</div>
                  <div class="col-lg-2">Image</div>
                  <div class="col-lg-2">Action</div>
                </div>
                <div class="table-body">
                  {catagory.map((catagory, key) => {
                    return (
                      <div key={key} class="row item-list">
                        <div class="col-lg-4">
                          <div class="d-flex align-items-center">
                            <div class="">
                              <p class="fw-bold mb-1">{catagory.Name}</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4">{catagory.Descript}</div>
                        <div class="col-lg-2">
                          <img src={catagory.Image} />
                        </div>
                        <div class="col-lg-2">
                          <div className="d-flex flex-row gap-1">
                            <a className="nav-link">
                              <AiOutlineEdit
                                id={catagory.ID}
                                className="edit-icon"
                                onClick={(e) => handleAction(e.target.id)}
                              />
                            </a>
                            <a className="nav-link">
                              <AiOutlineDelete className="del-icon" />
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
      </div>
    </div>
   
  );
};

export default Catagories;
