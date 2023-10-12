import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useRouter } from "next/router";
import { transitApi } from "../../../utils/AxiosInstance";
import Image from "next/image";

function index() {
  const router = useRouter();
  const { query : { id: routeId} } = router;

  const [carDetails, seCarDetails] = useState();
  const [activeImage, setActiveImage] = React.useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  useEffect(()=>{
    if(routeId) getVehicle();
  },[routeId]);

  function getVehicle(){
    transitApi.get(`v1/vehicle/${routeId}`)
    .then((res)=>{
      seCarDetails(res?.data?.data)
      setActiveImage(res?.data?.data?.vehicle_image[0]);
         console.log("carDetails", res)
    })
    .catch((err)=>console.log("ERR=>", err))
  }

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.description) {
      errors.description = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    }

    if (!values.carName) {
      errors.carName = "Required";
    }
    if (!values.offer) {
      errors.offer = "Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      carName: "",
      offer: "",
      description: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleClick = (index) => {
    console.log(index);
    setActiveImage(data[index]);
  };

  return (
    <Layout>
      <section className="car_detail_main_wrapper carSliderPrevSecMainCont">
              <div className="container">
                <div className="row">
                      <div className="col-md-6 car_detail_preview  carSliderPrevSections">
                     
                      <div className="car_detail_img_wrapper">
                        <img src={`https://www.transitfastautos.com/api/${activeImage}`} alt="" className="img-fluid w-100" srcset="" />
                      </div> 
                      <div class="swiper_wrap">
                      <div className="car_detail_slider_wrapper">
                          <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                              clickable: true,
                            }}
                            navigation={{
                              nextEl: ".image-swiper-button-next",
                               prevEl: ".image-swiper-button-prev",
                              disabledClass: "swiper-button-disabled"
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                          >
                            {
                              carDetails?.vehicle_image?.map((item, index) => {
                                return (
                                  <>
                                    <SwiperSlide onClick={()=>handleClick(index)}><Image src={`https://www.transitfastautos.com/api/${item}`} width={130} height={130} alt="" srcset="" /></SwiperSlide>
                                  </>
                                )
                              })
                            }
                          </Swiper>
              
                        {/* <img src="../assests/dummy_images/slider_img.png" className="img-fluid w-100" alt="" srcset="" /> */}
                      </div>
                        {/* <!-- Add Arrows --> */}
                      <div class="swiper-button image-swiper-button-prev">
                        <i class="fas fa-chevron-left"></i>
                      </div>
                      <div class="swiper-button image-swiper-button-next">
                        <i class="fas fa-chevron-right"></i>
                      </div>
                      </div> 
                      </div>
                      <div className="col-md-6 car_detail_desc section_padding cardDetailsSec">
                      <h5 className="small_title">Fuel Type: {carDetails?.fuel} </h5>
                      <h2 className="heading_m mb-4"> {carDetails?.title} </h2>
                      <div className="d-flex gap-2 flex-wrap mb-4">
                      <button type="button" class="btn btn-outline-secondary rounded-pill desc_pill"> {carDetails?.make}</button>
                      <button type="button" class="btn btn-outline-secondary rounded-pill desc_pill"> {carDetails?.year}</button>
                      <button type="button" class="btn btn-outline-secondary rounded-pill desc_pill"> {carDetails?.mileage}</button>
                      <button type="button" class="btn btn-outline-secondary rounded-pill desc_pill"> {carDetails?.engine_size}</button>
                      <button type="button" class="btn btn-outline-secondary rounded-pill desc_pill"> {carDetails?.color}</button>
                      </div>



                      <ul className="ps-3">
                        {carDetails?.description}
                        {/* <li> 180 Degree Opening Unglazed Asymmetric Rear Doors</li>
                        <li> 6 Floor Mounted Load Securing Rings</li>
                        <li> 6 Load Tie-Down Hooks in Cargo Area</li>
                        <li>Automatic lights</li>
                        <li>Air Conditioning</li>
                        <li>Apple Carplay and Android Auto</li>
                        <li>Bluetooth with Handsfree</li>
                        <li>DAB Radio</li>
                        <li>Citroen Connect with 8" Colour touchscreen</li>
                        <li>Citroen Connect Box with Emergency and Assistance System</li>
                        <li> Cruise Control with Programmable Speed Limiter</li>
                        <li>
                        Electric Front Windows with One Touch Operation
                        </li> */}
                      </ul>
                      <div className="d-flex align-items-end justify-content-end pricePound">
                      <h5 className="mb-0 headieding_s fc_primary2 ">Price:  </h5> <h4 className="headieding_l mb-0"> &pound;{carDetails?.price}</h4>
                      </div>
                      </div> 

                  {/* <img src="../assests/dummy_images/slider_img.png" className="img-fluid w-100" alt="" srcset="" /> */}
                </div>
                {/* <!-- Add Arrows --> */}
                <div class="swiper-button image-swiper-button-prev">
                  <i class="fas fa-chevron-left"></i>
                </div>
                <div class="swiper-button image-swiper-button-next">
                  <i class="fas fa-chevron-right"></i>
                </div>
              </div>
            {/* </div> */}
        
          {/* </div> */}
        {/* </div> */}
      </section>
      <section className="contact_us_wrapper section_margin">
        <div className="container">
          <div className="row">
            <div className="col-md-6 contact_us_desc section_padding_right contactHelpForm">
              <h5 className="small_title">Contact Us</h5>
              <h2 className="heding_l large_title">
                How Can our team help you?
              </h2>
              <p>
                Contact us via email or phone and we’ll get back to you as soon
                as we can.
              </p>
              <form onSubmit={formik.handleSubmit}>
                <div className="form">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      placeholder="Name"
                    />
                    {formik.errors.name ? (
                      <div className="error_message">{formik.errors.name}</div>
                    ) : null}
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      placeholder="Email"
                    />
                    {formik.errors.email ? (
                      <div className="error_message">{formik.errors.email}</div>
                    ) : null}
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="carName"
                      name="carName"
                      onChange={formik.handleChange}
                      value={formik.values.carName}
                      placeholder="Car Name"
                    />
                    {formik.errors.carName ? (
                      <div className="error_message">
                        {formik.errors.carName}
                      </div>
                    ) : null}
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="offer"
                      name="offer"
                      onChange={formik.handleChange}
                      value={formik.values.offer}
                      placeholder="Submit an offer"
                    />
                    {formik.errors.offer ? (
                      <div className="error_message">
                        {formik.errors.offer}
                      </div>
                    ) : null}
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      onChange={formik.handleChange}
                      value={formik.values.description}
                      placeholder="Message"
                      cols="30"
                      rows="10"
                    ></textarea>
                    {formik.errors.description ? (
                      <div className="error_message">
                        {formik.errors.description}
                      </div>
                    ) : null}
                  </div>

                  <button type="submit" className="btn btn-danger">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6 contact_us_img">
              <div className="contacty_itm">
                <p>Call Us:</p>
                <span>0333 577 0488</span>
              </div>
              <div className="contacty_itm">
                <p>Social Media:</p>
                <div className="social_media_icon">
                  <a href="">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default index;
