import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AdminLayout from '../../../components/AdminLayout'
import { transitApi } from '../../../utils/AxiosInstance';
import { useRouter } from "next/router";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from 'next/image';
import Modal from '../../../components/common/modal';

function MyVehicle() {
  const router = useRouter();
  const { query : { id: routeId} } = router;
  const [isModalOpen, setIsModalOpen] = useState(false);



  const [carDetails, seCarDetails] = useState();
  const [activeImage, setActiveImage] = React.useState(null);

  function getVehicle(){
    transitApi.get(`v1/vehicle/${routeId}`)
    .then((res)=>{
        seCarDetails(res?.data?.data)
        setActiveImage(res?.data?.data?.vehicle_image[0]);
    })
    .catch((err)=>console.log("ERR=>", err))
  }

  useEffect(()=>{
    getVehicle();
  },[routeId]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = (index) => {
    console.log(index);
    setActiveImage(carDetails?.vehicle_image[index]);
  };

  const handleClickDelete = () => {
    transitApi
    .delete(`/v1/vehicle/${carDetails?._id}`)
    .then((res) => {
      router.push('/admin/all-vehicle');
      closeModal();
    })
    .catch((error) => {
      closeModal();
      console.error("error", error);
    });
  };

  return (
    <AdminLayout>
         <div className="card dashboard_card ">
    <div className="card-body">
        <div className="search_header_card">
        <div class="input-group">
            <div class="input-group-text">
               <i class="fas fa-search"></i>
            </div>
          <input type="search" class="form-control ps-0 border-0 searchVehicle rounded" placeholder="Search any vehicle..." aria-label="Search any vehicle..."/>
        </div>
        <button className="btn btn-danger" onClick={()=> router.push('/admin/create-vehicle')}>Create Deal</button>
        {/* <button className="btn btn-danger" onClick={()=>hanleFetchCarDetails()}>Fetch Deal</button> */}
        </div>
    </div>
  </div>

  <div className="card dashboard_card ">
    <div className="card-body">
        <div className="container">
          <div className="row">
                <div className="col-lg-6 col-sm-12">
                      <section className="d-flex gap-3">
                        <div style={{ width: "290px", height: "290px", position: "relative", backgroundImage: "url(" + `https://www.transitfastautos.com/api/${activeImage}` + ")"}} >
                        <Image src={`https://www.transitfastautos.com/api/${activeImage}`} layout="fill" alt="" className="" srcset="" />

                        </div>
                        <div className='d-flex flex-column align-items-center'>
                        <div class="swiper-button image-swiper-button-prevBtn">
                        <i class="fas fa-chevron-up"></i>
                      </div>
                      <Swiper
                            slidesPerView={3}
                            spaceBetween={10}
                            direction='vertical'
                            pagination={{
                              clickable: true,
                            }}
                            speed= {600}
                            autoHeight
                            className="mySwiperVertical"
                            navigation={{
                              nextEl: ".image-swiper-button-nextbtn",
                               prevEl: ".image-swiper-button-prevBtn",
                              disabledClass: "swiper-button-disabled"
                            }}
                            modules={[Navigation]}
                            // modules={[Pagination]}
                            // className="mySwiper"
                          >
                            {
                              carDetails?.vehicle_image?.map((item, index) => {
                                return (
                                  <>
                                    <SwiperSlide onClick={()=>handleClick(index)}><Image src={`https://www.transitfastautos.com/api/${item}`} width={75} height={75} alt="" srcset="" /></SwiperSlide>
                                  </>
                                )
                              })
                            }
                          </Swiper>
                      <div class="swiper-button image-swiper-button-nextbtn">
                        <i class="fas fa-chevron-down"></i>
                      </div>
                        </div>
       
      </section>
                </div>
                <div className="col-lg-6 col-sm-12 my_vehicle_desc section_padding">
                <div className="my_vehicle_desc_header">
                  <h2 className="heding_l mb-0">£{carDetails?.price}</h2>
                  <div className="my_vehicle_desc_header_cta">
                    <button className='rounded-pill btn btn-outline-success' onClick={() => router.push(`/admin/edit-vehicle/${carDetails?._id}`)}>Edit</button>
                    <button className='rounded-pill btn btn-outline-danger' onClick={()=> openModal()}>Delete</button>
                  </div>
                </div>   
                <h4>{carDetails?.title}</h4> 
                <ul className='ps-3'>
                  <li>
                  {carDetails?.car_description} 
                  {/* <strong className="fc_primary">See Details...</strong> */}
                  </li>
                </ul>
                <div className="d-flex gap-2 flex-wrap mb-4">
                      <button type="button" class="btn btn-outline-secondary rounded-pill desc_pill"> {carDetails?.make} </button>
                      <button type="button" class="btn btn-outline-secondary rounded-pill desc_pill"> {carDetails?.year} </button>
                      <button type="button" class="btn btn-outline-secondary rounded-pill desc_pill"> {carDetails?.mileage} </button>
                      <button type="button" class="btn btn-outline-secondary rounded-pill desc_pill"> {carDetails?.engine_size} </button>
                      <button type="button" class="btn btn-outline-secondary rounded-pill desc_pill"> {carDetails?.color} </button>
                      </div>
                </div>
          </div>
        </div>
    </div>
  </div>

<Modal isOpen={isModalOpen} onClose={closeModal}>
<div class="modal-body">
        <img className='img-fluid common_modal_icon' src="/assests/images/trash_icon.svg" alt="" srcset="" />
        <h4 className='mb-0 fw-bold'>Delete Car</h4>
        <span>Are you sure, you want to Delete Car</span>
        <div className="d-flex gap-3 common_modal_footer">
        <button type="button" class="btn btn-outline-danger" onClick={closeModal}>Close</button>
        <button type="button" class="btn btn-danger" onClick={()=> handleClickDelete()}>Save changes</button>
        </div>
      </div>
</Modal>
    </AdminLayout>
  )
}

export default MyVehicle