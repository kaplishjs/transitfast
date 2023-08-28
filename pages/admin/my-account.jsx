import React from "react";
import AdminLayout from "../../components/AdminLayout";

function MyAccount() {
  return (
    <AdminLayout>
      <div className="card ">
        <div className="card-body">
          <img src="/assests/dummy_images/upload_img.png" alt="" srcset="" />

          <div className="row mt-4">
            <div class="mb-3 col-md-4">
              <input
                type="text"
                class="form-control"
                placeholder="First Name"
              />
            </div>
            <div class="mb-3 col-md-4">
              <input type="text" class="form-control" placeholder="Last Name" />
            </div>
            <div class="mb-3 col-md-4">
              <input type="text" class="form-control" placeholder="Job title" />
            </div>
            <div class="mb-3 col-md-4">
              <input
                type="number"
                class="form-control"
                placeholder="Phone Number"
              />
            </div>
            <div class="mb-3 col-md-4">
              <input
                type="email"
                class="form-control"
                placeholder="Email address"
              />
            </div>
            <div class="mb-3 col-md-4">
              <input type="text" class="form-control" placeholder="website" />
            </div>
            <div class="mb-3 col-md-4">
              <input
                type="text"
                class="form-control"
                placeholder="Company Registration"
              />
            </div>
            <div class="mb-3 col-md-6">
              <input type="text" class="form-control" placeholder="Address 1" />
            </div>
            <div class="mb-3 col-md-6">
              <input type="text" class="form-control" placeholder="Address 2" />
            </div>
            <div class="mb-3 col-md-6">
              <input
                type="text"
                class="form-control"
                placeholder="City / Town"
              />
            </div>
            <div class="mb-3 col-md-6">
              <input type="text" class="form-control" placeholder="Postcode" />
            </div>
          </div>

          <button className="btn btn-danger mt-4">Save Changes</button>
        </div>
      </div>
    </AdminLayout>
  );
}

export default MyAccount;
