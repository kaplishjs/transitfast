import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Link from "next/link";
import SearchOption from "../components/common/SearchOption";

export default function Signup() {
  return (
    <Layout>
      
      {/* hero section */}

      <section className="hero_wrapper section_margin">
          <div className="container">
            <div className="row">
              <div className="col-md-6 hero_description">
                <h1 className="heding_xl">The Driving <span className="fc_primary">Force Behind</span> You</h1>
                <p>Our objective is to get you the wide variety of Affordable vehicle with the specifications you desire like Low rate finance options, Poor credit history and Short-term lease.</p>

                <div className="d-flex gap-1">
                  <button className="btn btn-danger">View Special Offers</button>
                  <button type="button" className="btn btn-link">See all Vehicles</button>
                </div>
              </div>
              <div className="col-md-6 hero_img">
                <img  className="img-fluid w-100" src="assests/images/heroIMg.png" alt="" srcset="" />
              </div>
            </div>

          </div>
      </section>

      {/* brand section */}

      <section className="brand_wrapper section_margin">
          <div className="container">
               <img className="img-fluid" src="assests/images/brand_logo/brand_1.svg" alt="" srcset="" />
              <img className="img-fluid" src="assests/images/brand_logo/nissan.svg" alt="" srcset="" />
              <img className="img-fluid" src="assests/images/brand_logo/citroen.svg" alt="" srcset="" />
              <img className="img-fluid" src="assests/images/brand_logo/iveco.svg" alt="" srcset="" />
              <img className="img-fluid" src="assests/images/brand_logo/ford.svg" alt="" srcset="" />
              <img className="img-fluid" src="assests/images/brand_logo/man.svg" alt="" srcset="" />
              <img className="img-fluid" src="assests/images/brand_logo/Volkswagen_with_wordmark_2019.png" alt="" srcset="" />
              <img className="img-fluid" src="assests/images/brand_logo/brand_1.svg" alt="" srcset="" />
              <img className="img-fluid" src="assests/images/brand_logo/peugeot.svg" alt="" srcset="" />
              <img className="img-fluid" src="assests/images/brand_logo/ldv.png" alt="" srcset="" />

          </div>
      </section>

      {/* filter section */}
      <SearchOption/>

      {/* feature setion */}
    
      <section className="features_wrapper section_margin">
          <div className="container">
              <div className="row">
                <div className="col-md-6 features_img">
                    <img className="img-fluid w-100" src="assests/images/feature_img.png" alt="" srcset="" />
                </div>
                <div className="col-md-6 feature_description section_padding">
                        <h5 className="small_title">About Us</h5>
                        <h2 className="heding_l large_title"><span className="fc_primary2">Transit</span><span className="fc_primary">Fast</span> Vehicle Solutions</h2>
                        <p>Buying a vehicle should never be difficult, or time-consuming when you have a busy working life. Whether you’re a first-time buyer, replacing your existing vehicle, or adding to your ever-growing fleet; Transitfast is here to make the experience as simplistic and transparent as possible so you can concentrate on what’s important to you.</p>
                        <button className="btn btn-danger">About Us</button>
                </div>
              </div>
          </div>
      </section> 

      { /* product section  */}

      <section className="product_main_wrapper">
          <div className="container text-center">
          <h5 className="small_title">About Us</h5>
            <h2 className="heding_l large_title">We have different categories of vehicles</h2>

          </div>

          <div className="product_itm_wrapper  ">
            <div className="container mb-5">
            <div className="product_itm card">
                <div className="card-body">
                    <img className="img-fluid" src="assests/dummy_images/product_itm.png" alt="" srcset="" />
                    <div className="product_itm_">
                      <h5 className="product_itm_title">Vauxhall Corsa</h5>
                      <span className="product_itm_desc">£498.00</span>
                    </div>
                    <Link href="/car-details" className="btn w-100 btn-outline-danger">View Deals</Link>
                </div>
            </div>
            <div className="product_itm card">
                <div className="card-body">
                    <img className="img-fluid" src="assests/dummy_images/product_itm.png" alt="" srcset="" />
                    <div className="product_itm_">
                      <h5 className="product_itm_title">Vauxhall Corsa</h5>
                      <span className="product_itm_desc">£498.00</span>
                    </div>
                    <button className="btn w-100 btn-outline-danger">View Deals</button>
                </div>
            </div>
            <div className="product_itm card">
                <div className="card-body">
                    <img className="img-fluid" src="assests/dummy_images/product_itm.png" alt="" srcset="" />
                    <div className="product_itm_">
                      <h5 className="product_itm_title">Vauxhall Corsa</h5>
                      <span className="product_itm_desc">£498.00</span>
                    </div>
                    <button className="btn w-100 btn-outline-danger">View Deals</button>
                </div>
            </div>
            <div className="product_itm card">
                <div className="card-body">
                    <img className="img-fluid" src="assests/dummy_images/product_itm.png" alt="" srcset="" />
                    <div className="product_itm_">
                      <h5 className="product_itm_title">Vauxhall Corsa</h5>
                      <span className="product_itm_desc">£498.00</span>
                    </div>
                    <button className="btn w-100 btn-outline-danger">View Deals</button>
                </div>
            </div>
            <div className="product_itm card">
                <div className="card-body">
                    <img className="img-fluid" src="assests/dummy_images/product_itm.png" alt="" srcset="" />
                    <div className="product_itm_">
                      <h5 className="product_itm_title">Vauxhall Corsa</h5>
                      <span className="product_itm_desc">£498.00</span>
                    </div>
                    <button className="btn w-100 btn-outline-danger">View Deals</button>
                </div>
            </div>   <div className="product_itm card">
                <div className="card-body">
                    <img className="img-fluid" src="assests/dummy_images/product_itm.png" alt="" srcset="" />
                    <div className="product_itm_">
                      <h5 className="product_itm_title">Vauxhall Corsa</h5>
                      <span className="product_itm_desc">£498.00</span>
                    </div>
                    <button className="btn w-100 btn-outline-danger">View Deals</button>
                </div>
            </div>
            <div className="product_itm card">
                <div className="card-body">
                    <img className="img-fluid" src="assests/dummy_images/product_itm.png" alt="" srcset="" />
                    <div className="product_itm_">
                      <h5 className="product_itm_title">Vauxhall Corsa</h5>
                      <span className="product_itm_desc">£498.00</span>
                    </div>
                    <button className="btn w-100 btn-outline-danger">View Deals</button>
                </div>
            </div>
            <div className="product_itm card">
                <div className="card-body">
                    <img className="img-fluid" src="assests/dummy_images/product_itm.png" alt="" srcset="" />
                    <div className="product_itm_">
                      <h5 className="product_itm_title">Vauxhall Corsa</h5>
                      <span className="product_itm_desc">£498.00</span>
                    </div>
                    <button className="btn w-100 btn-outline-danger">View Deals</button>
                </div>
            </div>
            </div>
            <button className="btn btn-danger mx-auto d-block"> View all Vehicles</button>
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
                    <a href=""><i className="fab fa-facebook-square"></i></a>
                    <a href=""><i className="fab fa-instagram"></i></a>  
                    <a href=""><i className="fab fa-linkedin"></i></a>  
                  </div>   
                    </div>
                  </div>
                  <div className="col-md-6 contact_us_desc section_padding">
                  <h5 className="small_title">Contact Us</h5>
                        <h2 className="heding_l large_title">How Can our team help you?</h2>
                        <p>Contact us via email or phone and we’ll get back to you as soon as we can.</p>
                      
                        <div className="form">
                        <div className="mb-3">
                        <input type="text" className="form-control" id="" placeholder="Name"/>
                        </div>
                        <div className="mb-3">
                        <input type="email" className="form-control" id="" placeholder="email"/>
                        </div>
                        <div className="mb-3">
                        <input type="text" className="form-control" id="" placeholder="Subject"/>
                        </div>
                        <div className="mb-3">
                        <textarea className="form-control" name="" id="" placeholder="Message" cols="30" rows="10"></textarea>
                        </div>
                        
                        
                        
                        <button className="btn btn-danger">About Us</button> 
                        </div>

                
                        
                  </div>
                </div>
          </div>
      </section>

    </Layout>
  );
}
