import React from 'react'
import Layout from '../../components/Layout'
import ProductCard from "../../components/common/ProductCard"

function index() {
  const data = [1,2,3,4,5, 6, 7, 8, 9]
  return (
    <Layout>
  <section className="welcome_mail_wrapper text-center bg_felid_color d-flex">
    <div className="container">
        <div className="col-lg-7 mx-auto welcome_mail_inner_wrapper section_margin">
        <img src="assests/images/email_icon.svg" alt="" className="welcome_mail_img" />
        <h2>Welcome to <span className="fc_primary2">Transit</span><span className="fc_primary">Fast</span> Sales</h2>
        <p>We have listed our hot new deals which can change daily.
Have the latest offers straight to your email.</p>
<div className="d-flex gap-2 w-100">
                <input type="email" className="form-control" id="" placeholder="Email Address"/>
                <button className="btn btn-danger">Subscribe</button>
              </div>
        </div>
    </div>
  </section>      
           { /* product section  */}

<section className="product_main_wrapper ">
    {/* <div className="container text-center">
    <h5 className="small_title">About Us</h5>
      <h2 className="heding_l large_title">We have different categories of vehicles</h2>

    </div> */}

    <div className="product_itm_wrapper bg_white ">
      <div className="container mb-5">
        {
          data.map(item=>  {
            return (
              <>  
              <ProductCard/>
              </>
            )
          })
        }
      
      {/* <div className="product_itm card">
          <div className="card-body">
              <img className="img-fluid" src="assests/dummy_images/product_itm.png" alt="" srcset="" />
              <div className="product_itm_">
                <h5 className="product_itm_title">Vauxhall Corsa</h5>
                <span className="product_itm_desc">£498.00</span>
              </div>
              <button className="btn w-100 btn-outline-danger">View Deals</button>
          </div>
      </div> */}
      {/* <div className="product_itm card">
          <div className="card-body">
              <img className="img-fluid" src="assests/dummy_images/product_itm.png" alt="" srcset="" />
              <div className="product_itm_">
                <h5 className="product_itm_title">Vauxhall Corsa</h5>
                <span className="product_itm_desc">£498.00</span>
              </div>
              <button className="btn w-100 btn-outline-danger">View Deals</button>
          </div>
      </div> */}
      {/* <div className="product_itm card">
          <div className="card-body">
              <img className="img-fluid" src="assests/dummy_images/product_itm.png" alt="" srcset="" />
              <div className="product_itm_">
                <h5 className="product_itm_title">Vauxhall Corsa</h5>
                <span className="product_itm_desc">£498.00</span>
              </div>
              <button className="btn w-100 btn-outline-danger">View Deals</button>
          </div>
      </div> */}
      {/* <div className="product_itm card">
          <div className="card-body">
              <img className="img-fluid" src="assests/dummy_images/product_itm.png" alt="" srcset="" />
              <div className="product_itm_">
                <h5 className="product_itm_title">Vauxhall Corsa</h5>
                <span className="product_itm_desc">£498.00</span>
              </div>
              <button className="btn w-100 btn-outline-danger">View Deals</button>
          </div>
      </div> */}
      {/* <div className="product_itm card">
          <div className="card-body">
              <img className="img-fluid" src="assests/dummy_images/product_itm.png" alt="" srcset="" />
              <div className="product_itm_">
                <h5 className="product_itm_title">Vauxhall Corsa</h5>
                <span className="product_itm_desc">£498.00</span>
              </div>
              <button className="btn w-100 btn-outline-danger">View Deals</button>
          </div>
      </div>   */}
       {/* <div className="product_itm card">
          <div className="card-body">
              <img className="img-fluid" src="assests/dummy_images/product_itm.png" alt="" srcset="" />
              <div className="product_itm_">
                <h5 className="product_itm_title">Vauxhall Corsa</h5>
                <span className="product_itm_desc">£498.00</span>
              </div>
              <button className="btn w-100 btn-outline-danger">View Deals</button>
          </div>
      </div> */}
      {/* <div className="product_itm card">
          <div className="card-body">
              <img className="img-fluid" src="assests/dummy_images/product_itm.png" alt="" srcset="" />
              <div className="product_itm_">
                <h5 className="product_itm_title">Vauxhall Corsa</h5>
                <span className="product_itm_desc">£498.00</span>
              </div>
              <button className="btn w-100 btn-outline-danger">View Deals</button>
          </div>
      </div> */}
      {/* <div className="product_itm card">
          <div className="card-body">
              <img className="img-fluid" src="assests/dummy_images/product_itm.png" alt="" srcset="" />
              <div className="product_itm_">
                <h5 className="product_itm_title">Vauxhall Corsa</h5>
                <span className="product_itm_desc">£498.00</span>
              </div>
              <button className="btn w-100 btn-outline-danger">View Deals</button>
          </div>
      </div> */}
      </div>
      <button className="btn btn-danger mx-auto d-block"> View all Vehicles</button>
    </div>

</section>
    </Layout>
  )
}

export default index