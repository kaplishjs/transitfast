import React, { useState } from 'react'
import axios from 'axios';
import AdminLayout from '../../components/AdminLayout'
import { transitApi } from '../../utils/AxiosInstance';
import { useRouter } from "next/router";

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
         <div className="card dashboard_card ">
    <div className="card-body">
        <div className="search_header_card">
        <div class="input-group searchBoxOuter">
            <div class="input-group-text">
               <i class="fas fa-search"></i>
            </div>
          <input type="search" class="form-control ps-0" placeholder="Search any vehicle..." aria-label="Search any vehicle..."/>
        </div>
        <button className="btn btn-danger" onClick={()=> router.push('/admin/create-vehicle')}>Create Deal</button>
        <button className="btn btn-danger" onClick={()=>hanleFetchCarDetails()}>Fetch Deal</button>
        </div>
    </div>
  </div>

  <div className="card dashboard_card myVichiesSlider">
    <div className="card-body">
        <div className="container">
          <div className="row">
                <div className="col-md-6">
                      <img className="img-fluid w-100"  src="/assests/dummy_images/previewer.png" alt="" srcset="" />
                </div>
                <div className="col-md-6 my_vehicle_desc section_padding">
                <div className="my_vehicle_desc_header">
                  <h2 className="heding_l mb-0">£6,500</h2>
                  <div className="my_vehicle_desc_header_cta">
                    <button className='rounded-pill btn btn-outline-success' onClick={() => router.push('/admin/edit-vehicle')}>Edit</button>
                    <button className='rounded-pill btn btn-outline-danger'>Delete</button>
                  </div>
                </div>   
                <h4>Citroen Berlingo Van M BlueHDi 100 6-speed manual 650 Enterprise Edition</h4> 
                <ul className='ps-3'>
                  <li>
                  180 Degree Opening Unglazed Asymmetric Rear Doors <strong className="fc_primary">See Details...</strong>
                  </li>
                </ul>
                <div className="d-flex gap-2 flex-wrap mb-4">
                      <button type="button" class="btn btn-outline-secondary rounded-pill desc_pill">make</button>
                      <button type="button" class="btn btn-outline-secondary rounded-pill desc_pill">year</button>
                      <button type="button" class="btn btn-outline-secondary rounded-pill desc_pill">mileage</button>
                      <button type="button" class="btn btn-outline-secondary rounded-pill desc_pill">Engine size</button>
                      <button type="button" class="btn btn-outline-secondary rounded-pill desc_pill">Color</button>
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