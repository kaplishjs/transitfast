import React, { useState } from 'react'
import axios from 'axios';
import AdminLayout from '../../components/AdminLayout'
import { transitApi } from '../../utils/AxiosInstance';
import { useRouter } from 'next/router';


function MyVehicle() {
    const router = useRouter();
  const [licencePlate, setLicencePlate] = useState(null);
  const [carDetails, seCarDetails] = useState({
    title: '',
    description: '',
    make: '',
    model: '',
    mileage: '',
    color: '',
    fuel: '',
    year: '',
    variantType: '',
    engineSize: '',
    transmission: '',
    price: '',
    vehicleImage: [],
  });

  const handleChange = (event) => {
    seCarDetails({
      ...carDetails,
      [event.target.name] : event.target.value
    })
  }


  const handleCreateDeal = () => {
    const formData = new FormData();
    formData.append("adminId", "64d7f6f2936a1106c189db4a");
    // formData.append("vehicle_image", carDetails?.vehicleImage);
    formData.append("licence_plate", licencePlate || 'DE60JGO');
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

    [...carDetails.vehicleImage].forEach(image => {
      formData.append("vehicle_image", image)
  });
    // carDetails.vehicleImage.map((file) => formData.append("vehicle_image", file));

    transitApi
    .post("/v1/vehicle", formData)
    .then((res) => {
    })
    .catch((error) => {
      console.error("error", error);
    });
  }

  const hanleFetchCarDetails = () => {
    axios.get(`https://dvlasearch.appspot.com/DvlaSearch?apikey=atLzcLDJ0UQaxlJR&licencePlate=${licencePlate || 'DE60JGO'}`)
    .then((res) => {
      const {co2Emissions, colour, cylinderCapacity, dateOfFirstRegistration, fuelType, make, model, mot, motDetails, 
        revenueWeight, taxDetails, taxStatus, taxed, transmission, typeApproval, vin, wheelPlan, yearOfManufacture } = res?.data;
      seCarDetails({
        ...carDetails,
        make: make,
        model: model,
        color: colour,
        fuel: fuelType,
        year: yearOfManufacture,
        engineSize: cylinderCapacity,
        transmission: transmission,
      })
      console.log(res.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  
  const handleUploadImage = (event) => {
    seCarDetails({
      ...carDetails,
      vehicleImage : [...carDetails.vehicleImage, ...event.target.files]
    })
  }

  console.log(carDetails)
  return (
    <AdminLayout>
  <div className="card dashboard_card">
  <div className="card-body">
      <a className="breadcrumb_c">
          <span className="back_icon" onClick={()=> router.push('/admin/my-vehicle')}><i class="fas fa-arrow-left"></i> </span>    <span>Edit Deal</span>
      </a>
      <div className="row">
            <div className="col-md-7">
                  <div className="search_header_card mb-3">
                  {/* <div class="input-group">
                      <div class="input-group-text">
                        <i class="fas fa-search"></i>
                      </div>
                    <input type="search" class="form-control ps-0" placeholder="Search any vehicle..." aria-label="Search any vehicle..."/>
                  </div>
                  <button className="btn btn-danger" onClick={()=> hanleFetchCarDetails()}>Click</button> */}
                  </div>
                  <div className="row">
                        <div className="col-md-12 mb-3">
                              <input className="form-control" type="text" placeholder="Title"  onChange={(e)=> handleChange(e)} name="title" id="" />
                        </div>
                        <div className="col-md-12 mb-3">
                              <textarea className="form-control" name="description" placeholder="Car Description"  onChange={(e)=> handleChange(e)} id="" cols="30" rows="5"></textarea>
                        </div>
                        <div className="col-md-6 mb-3">
                          <input className="form-control" type="text" value={carDetails.make} placeholder="Make" name="make" id="" disabled/>
                          {/* <select class="form-select form-control" aria-label="Default select example">
                          <option selected>Make</option>
                          <option value="1">One</option>
                        </select> */}
                        </div>
                        <div className="col-md-6 mb-3">
                          <input className="form-control" type="text" value={carDetails.year}  placeholder="Year" name="year" id="" disabled />

                          {/* <select class="form-select form-control" aria-label="Default select example">
                          <option selected>Year</option>
                          <option value="1">One</option>
                        </select> */}
                        </div>
                        <div className="col-md-6 mb-3">
                          <input className="form-control" type="text" value={carDetails.model}  placeholder="Model" name="model" id="" disabled/>

                          {/* <select class="form-select form-control" aria-label="Default select example">
                          <option selected>Model</option>
                          <option value="1">One</option>
                        </select> */}
                        </div>
                        <div className="col-md-6 mb-3">
                          <input className="form-control" type="text" value={carDetails.variantType} placeholder="Variant Type" name="variantType" onChange={(e)=> handleChange(e)} id="" />

                          {/* <select class="form-select form-control" aria-label="Default select example">
                          <option selected>Variant Type</option>
                          <option value="1">One</option>
                        </select> */}
                        </div>
                        <div className="col-md-6 mb-3">
                          <input className="form-control" type="text" value={carDetails.mileage} placeholder="Mileage" name="mileage" id="" onChange={(e)=> handleChange(e)}/>

                          {/* <select class="form-select form-control" aria-label="Default select example">
                          <option selected>Mileage </option>
                          <option value="1">One</option>
                        </select> */}
                        </div>
                        <div className="col-md-6 mb-3">
                          <input className="form-control" type="text" value={carDetails.engineSize} placeholder="Engine size" name="engineSize" id="" disabled/>

                          {/* <select class="form-select form-control" aria-label="Default select example">
                          <option selected>Engine size </option>
                          <option value="1">One</option>
                        </select> */}
                        </div>
                        <div className="col-md-6 mb-3">
                          <input className="form-control" type="text" value={carDetails.color} placeholder="Color" name="color" id="" disabled/>

                          {/* <select class="form-select form-control" aria-label="Default select example">
                          <option selected>Color </option>
                          <option value="1">One</option>
                        </select> */}
                        </div>

                        <div className="col-md-6 mb-3">
                          <input className="form-control" type="text" value={carDetails.transmission} placeholder="Transmission" name="transmission" id="" disabled/>

                          {/* <select class="form-select form-control" aria-label="Default select example">
                          <option selected>Transmission </option>
                          <option value="1">One</option>
                        </select> */}
                        </div>

                        <div className="col-md-6 mb-3">
                          <input className="form-control" type="text" value={carDetails.fuel} placeholder="Fuel" name="fuel" id="" disabled />

                          {/* <select class="form-select form-control" aria-label="Default select example">
                          <option selected>Fuel </option>
                          <option value="1">One</option>
                        </select> */}
                        </div>

                        <div className="col-md-6 mb-3">
                        <input className="form-control" type="text" value={carDetails.price} placeholder="Price" name="price" id="" onChange={(e)=> handleChange(e)}/>

                          {/* <select class="form-select form-control" aria-label="Default select example">
                          <option selected>Price </option>
                          <option value="1">One</option>
                        </select> */}
                        </div>                       
                        
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                    <label class="form-check-label" for="inlineCheckbox1">Allow offers</label>
                  </div>

                  <div className="d-flex gap-3 mt-4">
                        <button className="btn btn-outline-danger">Go Back</button>
                        <button className="btn btn-danger" >Update Deal</button>

                  </div>
            </div>
            <div className="col-md-5 section_padding">
                <div className="drop_upload_main">
                      <label  className="drop_upload_itm" htmlFor="drop_upload">
                        <input type="file" className="d-none" name="" id="drop_upload"    onChange={handleUploadImage} multiple/>
                        <img src="/assests/images/gallary.svg" alt="" srcset="" />
                        <p className="mb-0">Drop your images here, or
                            select <span className="fc_primary fw-semibold">click to browse</span></p>
                      </label>
                </div>
                <div className="uploaded_img">
                    <div className="uploaded_img_itm">
                        <img className='img-fluid w-100' src="/assests/auth_images/car_img_resetSuccessfull.png" alt="" srcset="" />
                    </div>
                    <div className="uploaded_img_itm">
                        <img className='img-fluid w-100' src="/assests/auth_images/car_img_resetSuccessfull.png" alt="" srcset="" />
                    </div>
                    <div className="uploaded_img_itm">
                        <img className='img-fluid w-100' src="/assests/auth_images/car_img_resetSuccessfull.png" alt="" srcset="" />
                    </div>
                    <div className="uploaded_img_itm">
                        <img className='img-fluid w-100' src="/assests/auth_images/car_img_resetSuccessfull.png" alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
  </div>
</div>
    </AdminLayout>
  )
}

export default MyVehicle