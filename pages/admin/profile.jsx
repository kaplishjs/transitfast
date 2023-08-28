import React from 'react'
import withAuth from '../../components/auth/withAuth'
import HeaderAdmin from '../../components/admin/HeaderAdmin'
import Sidebar from '../../components/admin/Sidebar'

function profile() {
  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="d-none">

<symbol id="chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</symbol>
<symbol id="door-closed" viewBox="0 0 16 16">
  <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z"/>
  <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"/>
</symbol>
<symbol id="file-earmark" viewBox="0 0 16 16">
  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
</symbol>
<symbol id="file-earmark-text" viewBox="0 0 16 16">
  <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
  <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
</symbol>
<symbol id="list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</symbol>

</svg>


<div class="container-fluid">
<div class="row admin_container_main">

  <main class="col-md-9 ms-sm-auto col-lg-10 p-3   p-md-4">
    {/* <div className="card ">
      <div className="card-body">
        <img src="/assests/dummy_images/upload_img.png" alt="" srcset="" />

        <div className="row mt-4">
          <div class="mb-3 col-md-4">
          <input type="text" class="form-control"  placeholder="First Name"/>
          </div>
          <div class="mb-3 col-md-4">
          <input type="text" class="form-control"  placeholder="Last Name"/>
          </div>
          <div class="mb-3 col-md-4">
          <input type="text" class="form-control"  placeholder="Job title"/>
          </div>
          <div class="mb-3 col-md-4">
          <input type="number" class="form-control"  placeholder="Phone Number"/>
          </div>
          <div class="mb-3 col-md-4">
          <input type="email" class="form-control"  placeholder="Email address"/>
          </div>
          <div class="mb-3 col-md-4">
          <input type="text" class="form-control"  placeholder="website"/>
          </div>
          <div class="mb-3 col-md-4">
          <input type="text" class="form-control"  placeholder="Company Registration"/>
          </div>
          <div class="mb-3 col-md-6">
          <input type="text" class="form-control"  placeholder="Address 1"/>
          </div>
          <div class="mb-3 col-md-6">
          <input type="text" class="form-control"  placeholder="Address 2"/>
          </div>
          <div class="mb-3 col-md-6">
          <input type="text" class="form-control"  placeholder="City / Town"/>
          </div>
          <div class="mb-3 col-md-6">
          <input type="text" class="form-control"  placeholder="Postcode"/>
          </div>
        </div>

        <button className='btn btn-danger mt-4'>Save Changes</button>
        
      </div>
    </div> */}
  
    {/* my account */}
    {/* <!-- Modal --> */}
    {/* <!-- Button trigger modal --> */}
<button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div class="modal fade common_modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content border-0">
     
      <div class="modal-body">
        <img className='img-fluid common_modal_icon' src="/assests/images/trash_icon.svg" alt="" srcset="" />
        <h4 className='mb-0 fw-bold'>Delete Car</h4>
        <span>Are you sure, you want to Delete Car</span>
        <div className="d-flex gap-3 common_modal_footer">
        <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger">Save changes</button>
        </div>
      </div>

    </div>
  </div>
</div>
{/* --------------- */}
{/* my vehicle */}
 
{/*  */}

<div className="card dashboard_card">
  <div className="card-body">
      <a className="breadcrumb_c">
          <span className="back_icon"><i class="fas fa-arrow-left"></i> </span>    <span>Edit Deal</span>
      </a>
      <div className="row">
            <div className="col-md-7">
                  <div className="search_header_card mb-3">
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
  </main> 
</div>
</div>
      
    </div>
  )
}

export default withAuth(profile)