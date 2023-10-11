import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AdminLayout from '../../../components/AdminLayout'
import { transitApi } from '../../../utils/AxiosInstance';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Modal from '../../../components/common/modal';


function MyVehicle() {
    const router = useRouter();
    const { query : { id: routeId} } = router;
  const [licencePlate, setLicencePlate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [carDetails, seCarDetails] = useState({
    _id: '',
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
    licence_plate: '',
  });
  const userDetails = typeof window !== "undefined" &&
  JSON.parse(localStorage.getItem("user"));
  function getVehicle(){
    transitApi.get(`v1/vehicle/${routeId}`)
    .then((res)=>{
  console.log("carDetails", routeId, res)

        const {car_description,color,engine_size,fuel,mileage,model,price,title,transmission,vehicle_image,veriant_type,year,make,licence_plate, _id } = res?.data?.data;
        seCarDetails({
            title: title,
            description: car_description,
            make: make,
            model: model,
            mileage: mileage,
            color: color,
            fuel: fuel,
            year: year,
            variantType: veriant_type,
            engineSize: engine_size,
            transmission: transmission,
            price: price,
            vehicleImage: vehicle_image,
            licence_plate,
            _id
        })
        setActiveImage(res?.data?.data?.vehicle_image[0]);
    })
    .catch((err)=>console.log("ERR=>", err))
  }

  useEffect(()=>{
    if(routeId) getVehicle();
  },[routeId]);


  const handleClickBack = () => {
    router.push(`/admin/my-vehicle/${routeId}`);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (event) => {
    seCarDetails({
      ...carDetails,
      [event.target.name] : event.target.value
    })
  }


  const handleCreateDeal = () => {
    const formData = new FormData();
    formData.append("adminId", userDetails?._id);
    // formData.append("vehicle_image", carDetails?.vehicleImage);
    formData.append("licence_plate", carDetails?.licence_plate);
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

//     [...carDetails.vehicleImage].forEach(image => {
//       formData.append("vehicle_image", image)
//   });
    carDetails.vehicleImage.map((file) => formData.append("vehicle_image", file));

    transitApi
    .patch(`/v1/vehicle/${carDetails?._id}`, formData)
    .then((res) => {
      router.push(`/admin/my-vehicle/${routeId}`);
        // setIsModalOpen(true);
    })
    .catch((error) => {
      console.error("error", error);
    });
  }

  const handleUploadImage = (event) => {
    console.log(event.target.files)
    seCarDetails({
      ...carDetails,
      vehicleImage : [...carDetails.vehicleImage, ...event.target.files]
    })
  }

  return (
    <AdminLayout>
  <div className="card dashboard_card">
  <div className="card-body">
      <a className="breadcrumb_c">
          <span className="back_icon" onClick={()=> router.push('/admin/all-vehicle')}><i class="fas fa-arrow-left"></i> </span>    <span>Edit Deal</span>
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
                              <input className="form-control" value={carDetails.title} type="text" placeholder="Title"  onChange={(e)=> handleChange(e)} name="title" id="" />
                        </div>
                        <div className="col-md-12 mb-3">
                              <textarea className="form-control" value={carDetails.description} name="description" placeholder="Car Description"  onChange={(e)=> handleChange(e)} id="" cols="30" rows="5"></textarea>
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
                          <input className="form-control" type="number" value={carDetails.mileage} placeholder="Mileage" name="mileage" id="" onChange={(e)=> handleChange(e)}/>

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
                        <input className="form-control" type="number" value={carDetails.price} placeholder="Price" name="price" id="" onChange={(e)=> handleChange(e)}/>

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
                        <button className="btn btn-danger" onClick={()=> handleCreateDeal()}>Update Deal</button>

                  </div>
            </div>
            <div className="col-md-5 section_padding editDropUploadContainer">
                <div className="drop_upload_main">
                      <label  className="drop_upload_itm" htmlFor="drop_upload">
                        <input type="file" className="d-none" name="" id="drop_upload" accept='image/*'    onChange={handleUploadImage} multiple/>
                        <img src="/assests/images/gallary.svg" alt="" srcset="" />
                        <p className="mb-0">Drop your images here, or
                            select <span className="fc_primary fw-semibold">click to browse</span></p>
                      </label>
                </div>
                
                <div className="uploaded_img">
                { carDetails?.vehicleImage?.map((imageItem)=>(
             <div className="imageItems">
               { console.log("imageItem", imageItem && imageItem?.name, imageItem)}
             <img 
         src={imageItem && imageItem?.name ? window.URL.createObjectURL(new Blob([imageItem], { type: 'image/*' })) : `https://www.transitfastautos.com/api/${imageItem}`}

              width={110}
              height={110}
              />
             </div>
                  ))
                  }
                </div>
            </div>
        </div>
  </div>
</div>
{/* <Modal isOpen={isModalOpen} onClose={closeModal}>
<div class="modal-body">
        <img className='img-fluid common_modal_icon' src="/assests/images/thumbsUp.svg" alt="" srcset="" />
        <h4 className='mb-0 fw-bold'>Changes Saved</h4>
        <span>Changes have been saved successfully.</span>
        <div className="d-flex gap-3 common_modal_footer">
        <button type="button" class="btn btn-outline-danger" onClick={closeModal}>Cancel</button>
        <button type="button" class="btn btn-danger" onClick={()=> handleClickBack()}>Go, Back</button>
        </div>
      </div>
</Modal> */}
    </AdminLayout>
  )
}

export default MyVehicle