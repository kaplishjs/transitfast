import React from 'react'
import AdminLayout from '../../components/AdminLayout'

function MyVehicle() {
  return ( 
    <AdminLayout>
         <div className="card dashboard_card CardTopSearchButtonsComp">
    <div className="card-body">
        <div className="search_header_card searchBarTopBtn">
        <div class="input-group">
            <div class="input-group-text">
               <i class="fas fa-search"></i>
            </div>
          <input type="search" class="form-control ps-0" placeholder="Search any vehicle..." aria-label="Search any vehicle..."/>
        </div>
        <button className="btn btn-danger">Create Deal</button>
        </div>
    </div>
  </div>

  <div className="card dashboard_card ProductSliderRightComp">
    <div className="card-body">
        <div className="container">
          <div className="row">
                <div className="col-md-6">
                      <img className="img-fluid w-100"  src="/assests/dummy_images/previewer.png" alt="" srcset="" />
                </div>
                <div className="col-md-6 my_vehicle_desc section_padding">
                <div className="my_vehicle_desc_header">
                  <h2 className="heding_l mb-0">£6,500</h2>
                  <div className="my_vehicle_desc_header_cta">
                    <button className='rounded-pill btn btn-outline-success'>Edit</button>
                    <button className='rounded-pill btn btn-outline-danger'>Delete</button>
                  </div>
                </div>   
                <h4>Citroen Berlingo Van M BlueHDi 100 6-speed manual 650 Enterprise Edition</h4> 
                <ul className='ps-3'>
                  <li>
                  180 Degree Opening Unglazed Asymmetric Rear Doors <strong className="fc_primary">See Details...</strong>
                  </li>
                </ul>
                <div className="d-flex gap-2 flex-wrap mb-4">
                      <button type="button" class="btn btn-outline-secondary rounded-pill desc_pill">make</button>
                      <button type="button" class="btn btn-outline-secondary rounded-pill desc_pill">year</button>
                      <button type="button" class="btn btn-outline-secondary rounded-pill desc_pill">mileage</button>
                      <button type="button" class="btn btn-outline-secondary rounded-pill desc_pill">Engine size</button>
                      <button type="button" class="btn btn-outline-secondary rounded-pill desc_pill">Color</button>
                      </div>
                </div>
          </div>
        </div>
    </div>
  </div>
  <div className="card dashboard_card">
  <div className="card-body">
      <a className="breadcrumb_c">
          <span className="back_icon"><i class="fas fa-arrow-left"></i> </span>    <span>Edit Deal</span>
      </a>
      <div className="row">
            <div className="col-md-7">
                  <div className="search_header_card mb-3 searchBarTopBtn">
                  <div class="input-group">
                      <div class="input-group-text">
                        <i class="fas fa-search"></i>
                      </div>
                    <input type="search" class="form-control ps-0" placeholder="Search any vehicle..." aria-label="Search any vehicle..."/>
                  </div>
                  <button className="btn btn-danger">Create Deal</button>
                  </div>
                  <div className="row">
                        <div className="col-md-12 mb-3">
                              <input className="form-control" type="text" placeholder="Title" name="" id="" />
                        </div>
                        <div className="col-md-12 mb-3">
                              <textarea className="form-control" name="" placeholder="Car Description" id="" cols="30" rows="5"></textarea>
                        </div>
                        <div className="col-md-6 mb-3">
                          <select class="form-select form-control" aria-label="Default select example">
                          <option selected>Make</option>
                          <option value="1">One</option>
                        </select>
                        </div>
                        <div className="col-md-6 mb-3">
                          <select class="form-select form-control" aria-label="Default select example">
                          <option selected>Year</option>
                          <option value="1">One</option>
                        </select>
                        </div>
                        <div className="col-md-6 mb-3">
                          <select class="form-select form-control" aria-label="Default select example">
                          <option selected>Model</option>
                          <option value="1">One</option>
                        </select>
                        </div>
                        <div className="col-md-6 mb-3">
                          <select class="form-select form-control" aria-label="Default select example">
                          <option selected>Variant Type</option>
                          <option value="1">One</option>
                        </select>
                        </div>
                        <div className="col-md-6 mb-3">
                          <select class="form-select form-control" aria-label="Default select example">
                          <option selected>Mileage </option>
                          <option value="1">One</option>
                        </select>
                        </div>
                        <div className="col-md-6 mb-3">
                          <select class="form-select form-control" aria-label="Default select example">
                          <option selected>Engine size </option>
                          <option value="1">One</option>
                        </select>
                        </div>
                        <div className="col-md-6 mb-3">
                          <select class="form-select form-control" aria-label="Default select example">
                          <option selected>Color </option>
                          <option value="1">One</option>
                        </select>
                        </div>

                        <div className="col-md-6 mb-3">
                          <select class="form-select form-control" aria-label="Default select example">
                          <option selected>Transmission </option>
                          <option value="1">One</option>
                        </select>
                        </div>

                        <div className="col-md-6 mb-3">
                          <select class="form-select form-control" aria-label="Default select example">
                          <option selected>Fuel </option>
                          <option value="1">One</option>
                        </select>
                        </div>

                        <div className="col-md-6 mb-3">
                          <select class="form-select form-control" aria-label="Default select example">
                          <option selected>Price </option>
                          <option value="1">One</option>
                        </select>
                        </div>                       
                        
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                    <label class="form-check-label" for="inlineCheckbox1">Allow offers</label>
                  </div>

                  <div className="d-flex gap-3 mt-4">
                        <button className="btn btn-outline-danger">Go Back</button>
                        <button className="btn btn-danger">Update Deal</button>

                  </div>
            </div>
            <div className="col-md-5 section_padding">
                <div className="drop_upload_main">
                      <label  className="drop_upload_itm" htmlFor="drop_upload">
                        <input type="file" className="d-none" name="" id="drop_upload" />
                        <img src="/assests/images/gallary.svg" alt="" srcset="" />
                        <p className="mb-0">Drop your images here, or
                            select <span className="fc_primary fw-semibold">click to browse</span></p>
                      </label>
                </div>
                <div className="uploaded_img">
                    <div className="uploaded_img_itm">
                        <img className='img-fluid w-100' src="/assests/auth_images/car_img_resetSuccessfull.png" alt="" srcset="" />
                    </div>
                    <div className="uploaded_img_itm">
                        <img className='img-fluid w-100' src="/assests/auth_images/car_img_resetSuccessfull.png" alt="" srcset="" />
                    </div>
                    <div className="uploaded_img_itm">
                        <img className='img-fluid w-100' src="/assests/auth_images/car_img_resetSuccessfull.png" alt="" srcset="" />
                    </div>
                    <div className="uploaded_img_itm">
                        <img className='img-fluid w-100' src="/assests/auth_images/car_img_resetSuccessfull.png" alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
  </div>
</div>
    </AdminLayout>
  )
}

export default MyVehicle