import React from 'react'
import Layout from '../../components/Layout'

function index() {
  return (
    <Layout>
        <div className="container_with_filter">

        <div className="filter_search_wrapper card">
            <div className="card-body">
                <div className="filter_search_title h5  border-bottom pb-3">
                Filter By
                </div>
                
<div class="accordion accordion-flush" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Make
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div className="chip_wrapper">
    <label htmlFor="checkBox" className='option_checkbox_wrapper'>
                     <input type="checkbox" name="" id="checkBox" />
                    <span className="option_checkbox_btn">Audi</span>
                
    </label>
    <label htmlFor="checkBox2" className='option_checkbox_wrapper'>
                     <input type="checkbox" name="" id="checkBox2" />
                    <span className="option_checkbox_btn">BMW</span>
                
    </label>
    <label htmlFor="checkBox3" className='option_checkbox_wrapper'>
                     <input type="checkbox" name="" id="checkBox3" />
                    <span className="option_checkbox_btn">Ford</span>
                
    </label>
    <label htmlFor="checkBox4" className='option_checkbox_wrapper'>
                     <input type="checkbox" name="" id="checkBox4" />
                    <span className="option_checkbox_btn">Mercedes</span>
                
    </label>
    


       </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Model
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div className="chip_wrapper">
    <label htmlFor="checkBox" className='option_checkbox_wrapper'>
                     <input type="checkbox" name="" id="checkBox" />
                    <span className="option_checkbox_btn">Audi</span>
                
    </label>
    <label htmlFor="checkBox2" className='option_checkbox_wrapper'>
                     <input type="checkbox" name="" id="checkBox2" />
                    <span className="option_checkbox_btn">BMW</span>
                
    </label>
    <label htmlFor="checkBox3" className='option_checkbox_wrapper'>
                     <input type="checkbox" name="" id="checkBox3" />
                    <span className="option_checkbox_btn">Ford</span>
                
    </label>
    <label htmlFor="checkBox4" className='option_checkbox_wrapper'>
                     <input type="checkbox" name="" id="checkBox4" />
                    <span className="option_checkbox_btn">Mercedes</span>
                
    </label>
    


       </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Model Variant
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div className="chip_wrapper">
    <label htmlFor="checkBox" className='option_checkbox_wrapper'>
                     <input type="checkbox" name="" id="checkBox" />
                    <span className="option_checkbox_btn">Audi</span>
                
    </label>
    <label htmlFor="checkBox2" className='option_checkbox_wrapper'>
                     <input type="checkbox" name="" id="checkBox2" />
                    <span className="option_checkbox_btn">BMW</span>
                
    </label>
    <label htmlFor="checkBox3" className='option_checkbox_wrapper'>
                     <input type="checkbox" name="" id="checkBox3" />
                    <span className="option_checkbox_btn">Ford</span>
                
    </label>
    <label htmlFor="checkBox4" className='option_checkbox_wrapper'>
                     <input type="checkbox" name="" id="checkBox4" />
                    <span className="option_checkbox_btn">Mercedes</span>
                
    </label>
    


       </div>
      </div>
    </div>
  </div>
</div>

                
            </div>
        </div>
                {/* search product */}

    <section className="product_itm_wrapper">
            <div className="container mb-5">
            <div className="product_itm card">
                <div className="card-body">
                    <img className="img-fluid" src="assests/dummy_images/product_itm.png" alt="" srcset="" />
                    <div className="product_itm_summary">
                    <span className="available_btn">Available</span>
                    <span className="product_itm_desc">Citroen Berlingo M BlueHDi 100 S&S 1000 Enterprise Edition</span>
                    </div>
                    <div className="product_itm_footer">
                    <h5 className="product_itm_title mb-0">£498.00</h5>
                    <button className="btn  btn-outline-danger">View Deals</button>
                    </div>
                    
                </div>
            </div>
            <div className="product_itm card">
                <div className="card-body">
                    <img className="img-fluid" src="assests/dummy_images/product_itm.png" alt="" srcset="" />
                    <div className="product_itm_summary">
                    <span className="available_btn">Available</span>
                    <span className="product_itm_desc">Citroen Berlingo M BlueHDi 100 S&S 1000 Enterprise Edition</span>
                    </div>
                    <div className="product_itm_footer">
                    <h5 className="product_itm_title mb-0">£498.00</h5>
                    <button className="btn  btn-outline-danger">View Deals</button>
                    </div>
                    
                </div>
            </div> <div className="product_itm card">
                <div className="card-body">
                    <img className="img-fluid" src="assests/dummy_images/product_itm.png" alt="" srcset="" />
                    <div className="product_itm_summary">
                    <span className="available_btn">Available</span>
                    <span className="product_itm_desc">Citroen Berlingo M BlueHDi 100 S&S 1000 Enterprise Edition</span>
                    </div>
                    <div className="product_itm_footer">
                    <h5 className="product_itm_title mb-0">£498.00</h5>
                    <button className="btn  btn-outline-danger">View Deals</button>
                    </div>
                    
                </div>
            </div> <div className="product_itm card">
                <div className="card-body">
                    <img className="img-fluid" src="assests/dummy_images/product_itm.png" alt="" srcset="" />
                    <div className="product_itm_summary">
                    <span className="available_btn">Available</span>
                    <span className="product_itm_desc">Citroen Berlingo M BlueHDi 100 S&S 1000 Enterprise Edition</span>
                    </div>
                    <div className="product_itm_footer">
                    <h5 className="product_itm_title mb-0">£498.00</h5>
                    <button className="btn  btn-outline-danger">View Deals</button>
                    </div>
                    
                </div>
            </div> <div className="product_itm card">
                <div className="card-body">
                    <img className="img-fluid" src="assests/dummy_images/product_itm.png" alt="" srcset="" />
                    <div className="product_itm_summary">
                    <span className="available_btn">Available</span>
                    <span className="product_itm_desc">Citroen Berlingo M BlueHDi 100 S&S 1000 Enterprise Edition</span>
                    </div>
                    <div className="product_itm_footer">
                    <h5 className="product_itm_title mb-0">£498.00</h5>
                    <button className="btn  btn-outline-danger">View Deals</button>
                    </div>
                    
                </div>
            </div>
        
            </div>
    </section>
        </div>




    </Layout>
  )
}

export default index