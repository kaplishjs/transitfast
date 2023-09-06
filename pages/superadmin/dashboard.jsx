import React, { useState } from "react";
import Layout from "../../components/Layout";
import Notification from "../../components/common/AlertNotification";
// import  "../../styles/pages/superAdmin.scss";
// superAdmin from
export default function dashboard() {
    const [showNotification, setShowNotification] = React.useState(false);
	const [cars, setCars] = React.useState([
		{
			id: 1,
			carName: "Tata Nexon",
			sellerName: "LB Doe",
			carModel: "2023",
			status: "Pending",
			imageUrl:
				"https://images.pexels.com/photos/5120093/pexels-photo-5120093.jpeg",
		},
        {
			id: 1,
			carName: "Maruti Camry",
			sellerName: "Akshay Doe",
			carModel: "2022",
			status: "Pending",
			imageUrl:
				"https://images.pexels.com/photos/4568137/pexels-photo-4568137.jpeg",
		},
	]);

	const handleApprove = (id) => {
		const updatedCars = cars.map((car) =>
			car.id === id ? { ...car, status: "Approved" } : car
		);
		setCars(updatedCars);
	};

	const handleReject = (id) => {
		const updatedCars = cars.map((car) =>
			car.id === id ? { ...car, status: "Rejected" } : car
		);
		setCars(updatedCars);
	};



	const handleShowNotification = () => {
		setShowNotification(true);
		  };

	return (
		<>
			<Layout>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
                   <div className="alertBox">
                   <button onClick={handleShowNotification} className="btn btn-primary">
					Show Notification
				</button>
				{showNotification && (
                    <>
                    {/* <Notification className="notificationContainer alert-success" message="This is a notification message success." />
                    <Notification className="notificationContainer alert-danger" message="This is a notification message danger." />
                    <Notification className="notificationContainer alert-info" message="This is a notification message info." /> */}
                    <Notification className="notificationContainer alert-warning" message="This is a notification message warning." />

                    </>
					
				)}
                   </div>


							<h1>Car Listings</h1>
							<table className="dashboardTable">
								<thead>
									<tr>
										<th>Car Name</th>
										<th>Seller Name</th>
										<th>Car Model</th>
										<th>Status</th>
										<th>Actions</th>
										<th>Images</th>
									</tr>
								</thead>
								<tbody>
									{cars?.map((car) => (
										<tr key={car?.id}>
											<td>{car?.carName}</td>
											<td>{car?.sellerName}</td>
											<td>{car?.carModel}</td>
											<td>{car?.status}</td>
											<td  className="tableButton">
												<button
													className="btn btn-success subscribeBtn"
													onClick={() => handleApprove(car?.id)}
												>
													Approve
												</button>
												<button
													className="btn btn-danger subscribeBtn"
													onClick={() => handleReject(car?.id)}
												>
													Reject
												</button>
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
			</Layout>
		</>
	);
}
