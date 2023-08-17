import React from 'react'
import Layout from '../../components/Layout'

function index() {
  return (
    <Layout>
     
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
                        <h2 className="heding_l large_title">Send an enquiry</h2>
                        <p>If you have a complaint about the service or product, our team is more than happy to help.</p>
                      
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
  )
}

export default index