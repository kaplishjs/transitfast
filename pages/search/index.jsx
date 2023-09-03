import React from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'
import SearchOption from '../../components/common/SearchOption'
import { carData } from '../../utils/cardetials';
import { transitApi } from '../../utils/AxiosInstance';

function index() {

  const [carList, setCarList] = React.useState([carData,carData,carData,carData,carData,carData,carData]);
  React.useEffect(()=>{
   transitApi.get('/v1/vehicle').
    then((res) => {
      console.log(res);
      setCarList();
    }).catch((error)=>{
      console.log(error);
    })
  }, []);

  return (
    <Layout>
        {/* filter section */}
      <SearchOption/>

    {/* search product */}

    <section className="product_itm_wrapper  ">
            <div className="container mb-5">
            {
              
              carList?.slice(0,6).map((item, index) => {
              return (
                <>
                <div className="product_itm card">
                <div className="card-body">
                    <img className="img-fluid" src="assests/dummy_images/product_itm.png" alt="" srcset="" />
                    <div className="product_itm_summary">
                    <span className="available_btn">Available</span>
                    <span className="product_itm_desc">Citroen Berlingo M BlueHDi 100 S&S 1000 Enterprise Edition</span>
                    </div>
                    <div className="product_itm_footer">
                    <h5 className="product_itm_title mb-0">£498.00</h5>
                    <Link className="btn  btn-outline-danger" href={`/car-details/${item._id}`}>View Deals</Link>
                    </div>
                    
                </div>
            </div>
                </>
              )
            })
          }

        
            </div>
            {/* <button className="btn btn-danger mx-auto d-block"> View all Vehicles</button> */}
          </section>


        {/* hero section */}

        <section className="hero_wrapper section_margin sectionMarAdjust mb-4">
          <div className="container">
            <div className="row">
              <div className="col-md-5 hero_description">
                <h1 className="heding_xl">The Driving <span className="fc_primary">Force Behind</span> You</h1>
                <p>Our objective is to get you the wide variety of Affordable vehicle with the specifications you desire like Low rate finance options, Poor credit history and Short-term lease.</p>

                <div className="d-flex gap-1 ViewSplOfferBtns">
                  <button className="btn btn-danger">View Special Offers</button>
                  <button type="button" className="btn btn-link">See all Vehicles</button>
                </div>
              </div>
              <div className="col-md-7 hero_img">
                <img  className="img-fluid w-100" src="assests/images/bannerHome.jpg" alt="" srcset="" />
              </div>
            </div>

          </div>
      </section>
  
  {/* alert section */}

  <section className="alert_detail_wrapper section_margin">
    <div className="container">
              <div className="card bg-danger">
                  <div className="card-body">
                      <h2 className="heding_l large_title">The small print</h2>
                      <ul>
                        <li>All offers are subject to change at any time. Please enquire for availability and confirmation of price.</li>
                        <li>If you require finance, you must be 18 or over and is subject to status, terms and conditions apply. 
                        We can introduce you to a number of finance companies
                        where a commission may be received. Failure to maintain payments may result in the termination of your 
                        agreement and the vehicle being returned, this could affect your credit rating and make it more difficult
                          to obtain credit in the future. All prices are correct at the time of publication.</li>  
                        <li>All vehicle images and car descriptions on this site are for illustration and reference purposes only and 
                        are not necessarily an accurate representation of the vehicle on offer.</li> 
                        <li>Commercial vehicle prices are excluding VAT. VAT is charged at the current rate which is 20%</li>

                      </ul>
                  </div>
              </div>
    </div>
  </section>

    </Layout>
  )
}

export default index