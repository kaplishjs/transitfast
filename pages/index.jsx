import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Link from "next/link";
import SearchOption from "../components/common/SearchOption";
import ProductCard from "../components/common/ProductCard";
import { useFormik } from "formik";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import React from "react";
import { transitApi } from "../utils/AxiosInstance";
import { carData } from "../utils/cardetials";
// import AlertNotification from "../components/common/AlertNotification";
import Notification from "../components/common/AlertNotification";

export default function Signup() {
  const [carList, setCarList] = React.useState([
  ]);
  const [showNotification, setShowNotification] = React.useState(false);

  const handleShowNotification = () => {
    setShowNotification(true);
  };

  React.useEffect(() => {
    transitApi
      .get("/v1/admin/all-vehicles-list")
      .then((res) => {
        console.log("res", res.data.data);
        setCarList(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

    if (!values.subject) {
      errors.subject = "Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      subject: "",
      description: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log("carList ==>", carList);
  return (
    <Layout>
      {/* hero section */}
      {/* <AlertNotification message="This is a success alert!" type="success" /> */}
      <section className="hero_wrapper section_margin HomePageData sectionMarAdjust">
        <div className="container">
          <div className="row">
            <div className="col-md-5 hero_description">
              <h1 className="heding_xl">
                The <span className="fc_primary">Driving Force </span> <br />{" "}
                Behind You
              </h1>
              <p className="section_desc">
                Buying a vehicle should never be difficult, or time-consuming
                when you have a busy working life. Whether you’re a first-time
                buyer, replacing your existing vehicle, or adding to your
                ever-growing fleet; Transitfast is here to make the experience
                as simplistic and transparent as possible so you can concentrate
                on what’s important to you.
              </p>
              <ul className="HomeSecondBannerText">
                <li>
                  <p>Top approved car and van dealerships</p>
                </li>
                <li>
                  <p>Great deals from top rated dealers</p>
                </li>
                <li>
                  <p>Affordable vehicles</p>
                </li>
                <li>
                  <p className="lastBig">
				  Guaranteed to get you the vehicle that you want with the spec that you want.
                  </p>
                </li>
              </ul>

              <div className="d-flex gap-1">
                <Link href="/special-offers" className="btn btn-danger">
                  View Special Offers
                </Link>
                <Link
                  href="/search"
                  type="button"
                  className="btn btn-link fc_primary"
                >
                  See all Vehicles
                </Link>
              </div>
            </div>
            <div className="col-md-7 hero_img">
              <img
                className="img-fluid w-100"
                src="assests/images/transitFirst.png"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* brand section */}
      <section className="brand_wrapper section_margin cursor-pointer pe-auto">
        {/* <div className="container">
          <img
            className="img-fluid"
            src="assests/images/brand_logo/brand_1.svg"
            alt=""
            srcset=""
          />
          <img
            className="img-fluid"
            src="assests/images/brand_logo/nissan.svg"
            alt=""
            srcset=""
          />
          <img
            className="img-fluid"
            src="assests/images/brand_logo/citroen.svg"
            alt=""
            srcset=""
          />
          <img
            className="img-fluid"
            src="assests/images/brand_logo/iveco.svg"
            alt=""
            srcset=""
          />
          <img
            className="img-fluid"
            src="assests/images/brand_logo/ford.svg"
            alt=""
            srcset=""
          />
          <img
            className="img-fluid"
            src="assests/images/brand_logo/man.svg"
            alt=""
            srcset=""
          />
          <img
            className="img-fluid"
            src="assests/images/brand_logo/Volkswagen_with_wordmark_2019.png"
            alt=""
            srcset=""
          />
          <img
            className="img-fluid"
            src="assests/images/brand_logo/brand_1.svg"
            alt=""
            srcset=""
          />
          <img
            className="img-fluid"
            src="assests/images/brand_logo/peugeot.svg"
            alt=""
            srcset=""
          />
          <img
            className="img-fluid"
            src="assests/images/brand_logo/ldv.png"
            alt=""
            srcset=""
          />
        </div> */}
        
      <Swiper
        className="brand_wrapper section_margin container"
        slidesPerView={8}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        // className="mySwiper"
      >
        <SwiperSlide>  <img
            className="img-fluid"
            src="assests/images/brand_logo/brand_1.svg"
            alt=""
            srcset=""
          /></SwiperSlide>
        <SwiperSlide> <img
            className="img-fluid"
            src="assests/images/brand_logo/nissan.svg"
            alt=""
            srcset=""
          /></SwiperSlide>
        <SwiperSlide>   <img
            className="img-fluid"
            src="assests/images/brand_logo/citroen.svg"
            alt=""
            srcset=""
          /></SwiperSlide>
        <SwiperSlide>    <img
            className="img-fluid"
            src="assests/images/brand_logo/iveco.svg"
            alt=""
            srcset=""
          /></SwiperSlide>
        <SwiperSlide>    <img
            className="img-fluid"
            src="assests/images/brand_logo/ford.svg"
            alt=""
            srcset=""
          /></SwiperSlide>
        <SwiperSlide>     <img
            className="img-fluid"
            src="assests/images/brand_logo/man.svg"
            alt=""
            srcset=""
          /></SwiperSlide>
        <SwiperSlide>       <img
            className="img-fluid"
            src="assests/images/brand_logo/Volkswagen_with_wordmark_2019.png"
            alt=""
            srcset=""
          /></SwiperSlide>
        <SwiperSlide>      <img
            className="img-fluid"
            src="assests/images/brand_logo/brand_1.svg"
            alt=""
            srcset=""
          /></SwiperSlide>
        <SwiperSlide>         <img
            className="img-fluid"
            src="assests/images/brand_logo/peugeot.svg"
            alt=""
            srcset=""
          /></SwiperSlide>
                  <SwiperSlide>       <img
            className="img-fluid"
            src="assests/images/brand_logo/ldv.png"
            alt=""
            srcset=""
          /></SwiperSlide>
      </Swiper>
      </section>


      {/* filter section */}
      <SearchOption />
      {/* feature setion */}
      <section className="features_wrapper section_margin">
        <div className="container">
          <div className="row">
            <div className="col-md-6 features_img">
              <img
                className="img-fluid w-100"
                src="assests/images/feature_img.png"
                alt=""
                srcset=""
              />
            </div>
            <div className="col-md-6 feature_description section_padding m-auto">
              <h5 className="small_title">About Us</h5>
              <h2 className="heding_l large_title">
                <span className="fc_primary2">Transitfast </span>
                <span className="fc_primary"> Autos</span>
              </h2>
              <p className="section_desc">
                Buying a vehicle should never be difficult, or time-consuming
                when you have a busy working life. Whether you're a first-time
                buyer, replacing your existing vehicle, or adding to your
                ever-growing fleet; Transitfast is here to make the experience
                as simplistic and transparent as possible so you can concentrate
                on what's important to you.
              </p>
              <p className="section_desc">
                Our goal is to connect you with our every-growing list of
                verified dealers who are ready to deal with your enquiry and get
                you into your vehicle of choice.
              </p>
              <p className="section_desc">
                With our ever-growing extensive network of dealerships, we can
                bring the best competitive offers to a wide variety of customers
                throughout the UK; to not only suit the dealer but also achieve
                the best deal for the customer.
              </p>
              {/* <Link href="/about-us" className="btn btn-danger">
                About Us
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* product section  */}

      <section className="product_main_wrapper">
        <div className="container text-center">
          <h5 className="small_title animateBlink">Weekly special offers</h5>
          <h2 className="heding_l large_title">
            We have different categories <br /> of vehicles
          </h2>
        </div>
        <div className="product_itm_wrapper  ">
          <div className="container mb-5">
            {carList.slice(0, 9).map((item, index) => {
              return (
                <>
                  <ProductCard item={item} />
                </>
              );
            })}
          </div>
          {/* <button className="btn btn-danger mx-auto d-block  px-6">
						View all Vehicles
					</button> */}
        </div>
      </section>

      {/* contact us section */}

      <section className="contact_us_wrapper section_margin">
        <div className="container">
          <div className="row">
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
            <div className="col-md-6 contact_us_desc section_padding">
              <h5 className="small_title">Contact Us</h5>
              <h2 className="heding_l large_title">
                How Can our team help you?
              </h2>
              <p className="section_desc">
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
                      id="subject"
                      name="subject"
                      onChange={formik.handleChange}
                      value={formik.values.subject}
                      placeholder="Subject"
                    />
                    {formik.errors.subject ? (
                      <div className="error_message">
                        {formik.errors.subject}
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
                      rows="9"
                    ></textarea>
                    {formik.errors.description ? (
                      <div className="error_message">
                        {formik.errors.description}
                      </div>
                    ) : null}
                  </div>

                  <div className="text-right">
                    <button type="submit" className="btn btn-danger">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
