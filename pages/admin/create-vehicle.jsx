import React, { useState } from "react";
import axios from "axios";
import AdminLayout from "../../components/AdminLayout";
import { transitApi } from "../../utils/AxiosInstance";
import { useRouter } from "next/router";
import Modal from "../../components/common/modal";
import Loader from "../../components/Loader";

function MyVehicle() {
  const router = useRouter();
  const [licencePlate, setLicencePlate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setLoading] = useState(false)

  const [carDetails, seCarDetails] = useState({
    title: "",
    description: "",
    make: "",
    model: "",
    mileage: "",
    color: "",
    fuel: "",
    year: "",
    variantType: "",
    engineSize: "",
    transmission: "",
    price: "",
    vehicleImage: [],
  });

  const getAdminID =
    typeof window !== "undefined" && JSON.parse(localStorage.getItem("user"));

  const openModal = () => {
    setIsModalOpen(true);
    // setLoading(false)
  };

  const closeModal = () => {
    router.push("/admin/create-vehicle");
    window.location.reload();
    setIsModalOpen(false);
  };

  // console.log(getAdminID)
  const handleChange = (event) => {
    seCarDetails({
      ...carDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleCreateDeal = () => {
    setLoading(true)
    const formData = new FormData();
    formData.append("adminId", getAdminID._id);
    // formData.append("vehicle_image", carDetails?.vehicleImage);
    formData.append("licence_plate", licencePlate || "DE60JGO");
    formData.append("title", carDetails?.title);
    formData.append("car_description", carDetails?.description);
    formData.append("year", carDetails?.year);
    formData.append("model", carDetails?.model);
    formData.append("veriant_type", carDetails?.variantType);
    formData.append("mileage", carDetails?.mileage);
    formData.append("engine_size", carDetails?.engineSize);
    formData.append("color", carDetails?.color);
    formData.append("transmission", carDetails?.transmission);
    formData.append("fuel", carDetails?.fuel);
    formData.append("price", carDetails?.price);
    formData.append("make", carDetails?.make);

    [...carDetails.vehicleImage].forEach((image) => {
      formData.append("vehicle_image", image);
    });
    // carDetails.vehicleImage.map((file) => formData.append("vehicle_image", file));

    transitApi
      .post("/v1/vehicle", formData)
      .then((res) => {
        setLoading(false)
        openModal();
      })
      .catch((error) => {
        console.error("error", error);
        setLoading(false)
      });
  };

  const hanleFetchCarDetails = () => {
    console.log("CLICK START")
    setLoading(true)
    axios
      .get(
        `https://dvlasearch.appspot.com/DvlaSearch?apikey=atLzcLDJ0UQaxlJR&licencePlate=${
          licencePlate || "DE60JGO"
        }`
      )
      .then((res) => {
        const {
          co2Emissions,
          colour,
          cylinderCapacity,
          dateOfFirstRegistration,
          fuelType,
          make,
          model,
          mot,
          motDetails,
          revenueWeight,
          taxDetails,
          taxStatus,
          taxed,
          transmission,
          typeApproval,
          vin,
          wheelPlan,
          yearOfManufacture,
        } = res?.data;
        seCarDetails({
          ...carDetails,
          make: make,
          model: model,
          color: colour,
          fuel: fuelType,
          year: yearOfManufacture,
          engineSize: cylinderCapacity,
          transmission: transmission,
        });
        console.log(res.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
      });
  };

  const handleUploadImage = (event) => {
    seCarDetails({
      ...carDetails,
      vehicleImage: [...carDetails.vehicleImage, ...event.target.files],
    });
  };

  const handleClickBack = () => {
    router.push("/admin/all-vehicle");
  };

  console.log(carDetails);
  return (
    <AdminLayout>
      {isLoading&& <Loader/>}
      <div className="card dashboard_card">
        <div className="card-body">
          <a className="breadcrumb_c">
            <span
              className="back_icon"
              onClick={() => router.push("/admin/all-vehicle")}
            >
              <i class="fas fa-arrow-left"></i>{" "}
            </span>{" "}
            <span>Create Deal</span>
          </a>
          <div className="row">
            <div className="col-md-7">
              <div className="search_header_card buttonFixLeft mb-3">
                <div class="input-group">
                  {/* <div class="input-group-text">
                        <i class="fas fa-search"></i>
                      </div> */}
                  <input
                    onChange={(e) => setLicencePlate(e.target.value)}
                    type="search"
                    class="form-control"
                    placeholder="Enter Licence Plate"
                    aria-label="Enter Licence Plate"
                  />
                </div>
                <button
                  disabled={!licencePlate?.trim()}
                  className="btn btn-danger"
                  onClick={() => hanleFetchCarDetails()}
                >
                  Search
                </button>
              </div>
              <div className="row">
                
                <div className="col-md-6 mb-3">
                  <input
                    className="form-control"
                    type="text"
                    value={carDetails.make}
                    placeholder="Make"
                    name="make"
                    id=""
                    disabled
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    className="form-control"
                    type="text"
                    value={carDetails.model}
                    placeholder="Model"
                    name="model"
                    id=""
                    disabled
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    className="form-control"
                    type="text"
                    value={carDetails.engineSize}
                    placeholder="Engine size"
                    name="engineSize"
                    id=""
                    disabled
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    className="form-control"
                    type="text"
                    value={carDetails.color}
                    placeholder="Color"
                    name="color"
                    id=""
                    disabled
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    className="form-control"
                    type="text"
                    value={carDetails.transmission}
                    placeholder="Transmission"
                    name="transmission"
                    id=""
                    disabled
                  />
                </div>
                
                <div className="col-md-6 mb-3">
                  <input
                    className="form-control"
                    type="text"
                    value={carDetails.fuel}
                    placeholder="Fuel"
                    name="fuel"
                    id=""
                    disabled
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    className="form-control"
                    type="number"
                    value={carDetails.price}
                    placeholder="Price"
                    name="price"
                    id=""
                    onChange={(e) => handleChange(e)}
                  />

                </div>
                <div className="col-md-6 mb-3">
                  <input
                    className="form-control"
                    type="text"
                    value={carDetails.year}
                    placeholder="Year"
                    name="year"
                    id=""
                    disabled
                  />

                </div>
                
                <div className="col-md-6 mb-3">
                  <input
                    className="form-control"
                    type="text"
                    value={carDetails.variantType}
                    placeholder="Variant Type"
                    name="variantType"
                    onChange={(e) => handleChange(e)}
                    id=""
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    className="form-control"
                    type="number"
                    value={carDetails.mileage}
                    placeholder="Mileage"
                    name="mileage"
                    id=""
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                
               

               


                
                <div className="col-md-12 mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Title"
                    onChange={(e) => handleChange(e)}
                    name="title"
                    id=""
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <textarea
                    className="form-control"
                    name="description"
                    placeholder="Car Description"
                    onChange={(e) => handleChange(e)}
                    id=""
                    cols="30"
                    rows="5"
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12 section_padding1">
              <div className="drop_upload_main">
                <label className="drop_upload_itm" htmlFor="drop_upload">
                  <input
                    type="file"
                    className="d-none"
                    name=""
                    id="drop_upload"
                    accept="image/*"
                    onChange={handleUploadImage}
                    multiple
                  />
                  <img src="/assests/images/gallary.svg" alt="" srcset="" />
                  <p className="mb-0">
                    Drop your images here, or select{" "}
                    <span className="fc_primary fw-semibold">
                      click to browse
                    </span>
                  </p>
                </label>
              </div>
              <div className="uploaded_img">
                {carDetails?.vehicleImage?.map((imageItem) => (
                  <div className="">
                    {console.log(
                      "imageItem",
                      imageItem && imageItem?.name,
                      imageItem
                    )}
                    <img
                      src={
                        imageItem && imageItem?.name
                          ? window.URL.createObjectURL(
                              new Blob([imageItem], { type: "image/*" })
                            )
                          : `https://www.transitfastautos.com/api/${imageItem}`
                      }
                      width={110}
                      height={110}
                    />
                  </div>
                ))}
              </div>
            </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineCheckbox1">
                  Allow offers
                </label>
              </div>

              <div className="d-flex gap-3 mt-4">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => router.push("/admin/all-vehicle")}
                >
                  Go Back
                </button>
                <button className="btn btn-danger" onClick={handleCreateDeal}>
                  Update Deal
                </button>
              </div>
            </div>
            {/* <div className="col-md-5 section_padding">
              <div className="drop_upload_main">
                <label className="drop_upload_itm" htmlFor="drop_upload">
                  <input
                    type="file"
                    className="d-none"
                    name=""
                    id="drop_upload"
                    accept="image/*"
                    onChange={handleUploadImage}
                    multiple
                  />
                  <img src="/assests/images/gallary.svg" alt="" srcset="" />
                  <p className="mb-0">
                    Drop your images here, or select{" "}
                    <span className="fc_primary fw-semibold">
                      click to browse
                    </span>
                  </p>
                </label>
              </div>
              <div className="uploaded_img">
                {carDetails?.vehicleImage?.map((imageItem) => (
                  <div className="">
                    {console.log(
                      "imageItem",
                      imageItem && imageItem?.name,
                      imageItem
                    )}
                    <img
                      src={
                        imageItem && imageItem?.name
                          ? window.URL.createObjectURL(
                              new Blob([imageItem], { type: "image/*" })
                            )
                          : `https://www.transitfastautos.com/api/${imageItem}`
                      }
                      width={110}
                      height={110}
                    />
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div class="modal-body">
          <img
            className="img-fluid common_modal_icon"
            src="/assests/images/dealCreated.jpg"
            alt=""
            srcset=""
          />
          <h4 className="mb-0 fw-bold">Deal Created!</h4>
          <span>Good Job! Deal has been saved successfully.</span>
          <div className="d-flex gap-3 common_modal_footer">
            <button
              type="button"
              class="btn btn-outline-danger"
              onClick={closeModal}
            >
              + New Deal
            </button>
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => handleClickBack()}
            >
              Go Back
            </button>
          </div>
        </div>
      </Modal>
    </AdminLayout>
  );
}

export default MyVehicle;
