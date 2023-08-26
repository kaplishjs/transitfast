import React from 'react'
import Layout from '../../components/Layout'

function index() {
  return (
    <Layout>

      <section className="car_detail_main_wrapper">
              <div className="container">
                <div className="row">
                      <div className="col-md-6 car_detail_preview">
                     
                      <div className="car_detail_img_wrapper">
                        <img src="assests/dummy_images/preview.png" alt="" className="img-fluid w-100" srcset="" />
                      </div> 
                      <div className="car_detail_slider_wrapper">
                        <img src="assests/dummy_images/slider_img.png" className="img-fluid w-100" alt="" srcset="" />
                      </div>
                      </div>
                      <div className="col-md-6 car_detail_desc section_padding">
                      <h5 className="small_title">Fuel Type: Diesel</h5>
                      <h2 className="heading_m mb-4">Citroen Berlingo Van M BlueHDi 100 6-speed manual 650 Enterprise Edition</h2>
                      <div className="d-flex gap-2 flex-wrap mb-4">
                      <button type="button" class="btn btn-outline-secondary rounded-pill desc_pill">make</button>
                      <button type="button" class="btn btn-outline-secondary rounded-pill desc_pill">year</button>
                      <button type="button" class="btn btn-outline-secondary rounded-pill desc_pill">mileage</button>
                      <button type="button" class="btn btn-outline-secondary rounded-pill desc_pill">Engine size</button>
                      <button type="button" class="btn btn-outline-secondary rounded-pill desc_pill">Color</button>
                      </div>

                      <ul className="ps-3">
                        <li> 180 Degree Opening Unglazed Asymmetric Rear Doors</li>
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
                        </li>
                      </ul>
                      <div className="d-flex align-items-end justify-content-end">
                      <h5 className="mb-0 headieding_s fc_primary2 ">Price:</h5> <h4 className="headieding_l mb-0">£6,500</h4>
                      </div>
                      </div> 

                </div>
              </div>
      </section>
          <section className="contact_us_wrapper section_margin">
          <div className="container">
                <div className="row">
                
                  <div className="col-md-6 contact_us_desc section_padding_right">
                  <h5 className="small_title">Contact Us</h5>
                        <h2 className="heding_l large_title">How Can our team help you?</h2>
                        <p>Contact us via email or phone and we’ll get back to you as soon as we can.</p>
                      
                        <div className="form">
                        <div className="mb-3">
                        <input type="text" className="form-control" id="" placeholder="Name"/>
                        </div>
                        <div className="mb-3">
                        <input type="email" className="form-control" id="" placeholder="Email"/>
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
                </div>
          </div>
         </section>
     </Layout>

  )
}

export default index