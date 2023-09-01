"use-client";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { transitApi } from "../../utils/AxiosInstance";

function MyAccount() {
  const [profileData, setProfileData] = useState({});

  function getProfileData() {
    transitApi
      .patch("/v1/admin", profileData)
      .then((res) => {
        console.log("res");
        // console.log(res)
        const  { _id,password,__v, ...resD } = res.data.data
        setProfileData(resD);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getProfileData();
  }, []);

  const inputFields = [{
    name:""
  }]

  const handleOnchange = (e) =>{
      setProfileData({...profileData, [e.target.name]:e.target.value})
  }
  const handleSave = () =>{
    getProfileData()
  }
  console.log("profileData==>", profileData);
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
                name="firstName"
                onChange={handleOnchange}
                value={profileData.firstName}
              />
            </div>
            <div class="mb-3 col-md-4">
              <input
                type="text"
                class="form-control"
                name="lastName"
                placeholder="Last Name"
                onChange={handleOnchange}
                value={profileData.lastName}
              />
            </div>
            <div class="mb-3 col-md-4">
              <input
                type="text"
                class="form-control"
                placeholder="Job title"
                name="jobTitle"
                onChange={handleOnchange}
                value={profileData.jobTitle}
              />
            </div>
            <div class="mb-3 col-md-4">
              <input
                type="number"
                class="form-control"
                placeholder="Phone Number"
                onChange={handleOnchange}
                name="phoneNo"
                value={profileData.phoneNo}
              />
            </div>
            <div class="mb-3 col-md-4">
              <input
                type="email"
                class="form-control"
                placeholder="Email address"
                disabled
                // onChange={handleOnchange}
                name="email"
                value={profileData.email}
              />
            </div>
            <div class="mb-3 col-md-4">
              <input
                type="text"
                class="form-control"
                placeholder="website"
                onChange={handleOnchange}
                name="website"
                value={profileData.website}
              />
            </div>
            <div class="mb-3 col-md-4">
              <input
                type="text"
                class="form-control"
                placeholder="Company Registration"
                onChange={handleOnchange}
                name="companyRegistration"
                value={profileData.companyRegistration}
              />
            </div>
            <div class="mb-3 col-md-6">
              <input
                type="text"
                class="form-control"
                placeholder="Address 1"
                onChange={handleOnchange}
                name="address_1"
                value={profileData.address_1}
              />
            </div>
            <div class="mb-3 col-md-6">
              <input
                type="text"
                class="form-control"
                placeholder="Address 2"
                onChange={handleOnchange}
                name="address_2"
                value={profileData.address_2}
              />
            </div>
            <div class="mb-3 col-md-6">
              <input
                type="text"
                class="form-control"
                placeholder="City / Town"
                onChange={handleOnchange}
                name="city_town"
                value={profileData.city_town}
              />
            </div>
            <div class="mb-3 col-md-6">
              <input
                type="text"
                class="form-control"
                placeholder="Postcode"
                onChange={handleOnchange}
                name="post_code"
                value={profileData.post_code}
              />
            </div>
          </div>

          <button className="btn btn-danger mt-4" onClick={handleSave}>Save Changes</button>
        </div>
      </div>
    </AdminLayout>
  );
}

export default MyAccount;
