import React from 'react'
import AdminLayout from '../../components/AdminLayout'

function MyVehicle() {
  return (
    <AdminLayout>
         <div className="card dashboard_card ">
    <div className="card-body">
        <div className="search_header_card">
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

  <div className="card dashboard_card ">
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
    </AdminLayout>
  )
}

export default MyVehicle