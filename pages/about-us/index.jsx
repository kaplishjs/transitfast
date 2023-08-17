import React from 'react'
import Layout from '../../components/Layout'

function index() {
  return (
    <Layout>
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
                        <p>Transitfast has been in the transport industry for several years creating a successful 
                          Transport company within the UK. <span className="fc_primary fw-semibold">Transitfast Solutions Ltd</span> Being from the Transport 
                          industry we understand not only our customers’ needs but the needs of drivers and how 
                          important it is to have a well maintained up to date vehicle with the latest technology 
                          with the option to regularly upgrade.</p>
                        <button className="btn btn-danger">About Us</button>
                </div>
              </div>
          </div>
      </section> 

      <section className="about_us_feature_wrapper section_margin">
            <div className="container">
                  <div className="row">
                    <div className="col-md-4 about_us_feature_itm">
                            <div className="about_us_feature_itm_imgWrapper">
                                  <img src="assests/images/cost-effective.svg" alt="" />
                            </div>
                            <h4 className="mb-0">cost-effective</h4>
                            <p>TransitFast’s will be there every step of the way – from choosing your new or used vehicle to delivery straight to your door.</p>
                    </div>
                    <div className="col-md-4 about_us_feature_itm">
                            <div className="about_us_feature_itm_imgWrapper">
                                  <img src="assests/images/our_mission.svg" alt="" />
                            </div>
                            <h4 className="mb-0">our mission</h4>
                            <p>TransitFast’s Eliminate unnecessary costs and pass the savings onto you, the buyer.</p>
                    </div>
                    <div className="col-md-4 about_us_feature_itm">
                            <div className="about_us_feature_itm_imgWrapper">
                                  <img src="assests/images/incoming_guidelines..svg" alt="" />
                            </div>
                            <h4 className="mb-0">incoming guidelines.</h4>
                            <p>Purchase a new vehicle because of ever-increasing Clean Air Zones helps you to fall in line with the incoming current guidelines.</p>
                    </div>
                
                  </div>
            </div>
      </section>

    </Layout>
  )
}

export default index