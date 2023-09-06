import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Notification from "../../components/common/AlertNotification";
import AdminLayout from "../../components/AdminLayout";
import { transitApi } from "../../utils/AxiosInstance";
import Link from "next/link";

function AllVehicle() {
  const [showNotification, setShowNotification] = React.useState(false);
  const [allCar, setSetAllCar] = useState([])

  function getAllVehicle(){
    transitApi.get("/v1/vehicle")
    .then((res)=>console.log("RES=>", setSetAllCar(res.data.data)))
    .catch((err)=>console.log("ERR=>", err))
  }

  useEffect(()=>{
    getAllVehicle()
  })

  const handleShowNotification = () => {
    setShowNotification(true);
  };
  return (
    <AdminLayout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="alertBox">
              <Link
                href='create-vehicle'
                className="btn btn-primary"
              >
                Create Vehicle
              </Link>
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

            <h1>Car Listings</h1>
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
                        href="my-vehicle"
                      >
                        View
                      </Link>
                    </td>
                    <td className="tableImage">
                      <img src={car.imageUrl} alt={car?.carName} />
                    </td>
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