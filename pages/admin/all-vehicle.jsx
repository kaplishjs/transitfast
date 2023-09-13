import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Notification from "../../components/common/AlertNotification";
import AdminLayout from "../../components/AdminLayout";
import { transitApi } from "../../utils/AxiosInstance";
import Link from "next/link";
import Loader from "../../components/Loader";

function AllVehicle() {
  const [showNotification, setShowNotification] = React.useState(false);
  const [allCar, setSetAllCar] = useState([])
  const [isLoading, setLoading] = useState(false)

  function getAllVehicle(){
    setLoading(true)
    transitApi.get("/v1/vehicle")
    .then((res)=>{
      
       setSetAllCar(res.data.data)
       setLoading(false)
      })
    .catch((err)=> setLoading(false))
  }

  useEffect(()=>{
    getAllVehicle();
  },[]);

  const handleShowNotification = () => {
    setShowNotification(true);
  };
  return (
    <AdminLayout>
      {isLoading&&<Loader/>}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="alertBox">
              {showNotification && (
                <>
                  {/* <Notification className="notificationContainer alert-success" message="This is a notification message success." />
                    <Notification className="notificationContainer alert-danger" message="This is a notification message danger." />
                    <Notification className="notificationContainer alert-info" message="This is a notification message info." /> */}
                  <Notification
                    className="notificationContainer alert-warning"
                    message="This is a notification message warning."
                  />
                </>
              )}
            </div>
            <div className="d-flex justify-content-between">
            <h1>Car Listings</h1>
            <Link
                href='create-vehicle'
                className="btn btn-primary createVehicleBtn"
              >
                Create Vehicle
              </Link>
            </div>

            <table className="dashboardTable">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Mileage</th>
                  <th>Car Model</th>
                  <th>Price</th>
                  <th>Actions</th>
                  {/* <th>Images</th> */}
                </tr>
              </thead>
              <tbody>
                {allCar?.map((car) => (
                  <tr key={car?.id}>
                    <td>{car?.title}</td>
                    <td>{car?.mileage}</td>
                    <td>{car?.model}</td>
                    <td>{car?.price}</td>
                    <td className="tableButton">
                      <Link
                        className="btn btn-success subscribeBtn"
                        href={`/admin/my-vehicle/${car._id}`}
                      >
                        View
                      </Link>
                    </td>
                    {/* <td className="tableImage">
                      <img src={car.imageUrl} alt={car?.carName} />
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AllVehicle;
