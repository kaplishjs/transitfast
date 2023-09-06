"use-client";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { transitApi } from "../../utils/AxiosInstance";

function MyAccount() {
  const [profileData, setProfileData] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  function getProfileData(file) {
    let formData = new FormData();
    for (const key in profileData) {
      formData.append(key, profileData[key]);
    }
    if (file) formData.append("profile_pic", file);
    transitApi
      .patch("/v1/admin", formData)
      .then((res) => {
        console.log("res");
        // console.log(res)
        const { id, password, _v, ...resD } = res.data.data;
        setProfileData(resD);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getProfileData();
  }, []);

  const inputFields = [
    {
      name: "firstName",
      placeholder: "First Name",
      classname: "mb-3 col-md-4",
    },
    { name: "lastName", placeholder: "Last Name", classname: "mb-3 col-md-4" },
    { name: "jobTitle", placeholder: "Job title", classname: "mb-3 col-md-4" },
    {
      name: "phoneNo",
      placeholder: "Phone Number",
      classname: "mb-3 col-md-4",
    },
    { name: "email", placeholder: "Email address", classname: "mb-3 col-md-4" },
    { name: "website", placeholder: "website", classname: "mb-3 col-md-4" },
    {
      name: "companyRegistration",
      placeholder: "Company Registration",
      classname: "mb-3 col-md-4",
    },
    { name: "address_1", placeholder: "Address 1", classname: "mb-3 col-md-6" },
    { name: "address_2", placeholder: "Address 2", classname: "mb-3 col-md-6" },
    {
      name: "city_town",
      placeholder: "City / Town",
      classname: "mb-3 col-md-6",
    },
    { name: "post_code", placeholder: "Postcode", classname: "mb-3 col-md-6" },
  ];

  const handleOnchange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    getProfileData();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    getProfileData(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    // Trigger the file input click event when the circle is clicked
    document.getElementById("fileInput").click();
  };
  console.log("profileData==>", profileData);
  return (
    <AdminLayout>
      <div className="card ">
        <div className="card-body">
          <div className="circle-container">
            <div
              className="circle"
              style={{ backgroundImage: `https://www.transitfastautos.com/api/${profileData?.profile_pic}` }}
              onClick={handleClick}
            >
              {!selectedImage && <span>Click to Upload</span>}
              <input
                type="file"
                accept="image/*"
                id="fileInput"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </div>
          </div>
          {/* <img src="/assests/dummy_images/upload_img.png" alt="" srcset="" /> */}

          <div className="row mt-4">
            {inputFields.map((el, index) => (
              <div key={index} className={el.classname}>
                <input
                  type="text"
                  class="form-control"
                  disabled={el.name == "email" ? true : false}
                  placeholder={el.placeholder}
                  name={el.name}
                  onChange={handleOnchange}
                  value={profileData[el.name]}
                />
              </div>
            ))}
          </div>
          <button className="btn btn-danger mt-4" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}

export default MyAccount;
