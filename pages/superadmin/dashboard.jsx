import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import Notification from "../../components/common/AlertNotification";
import { transitApi } from "../../utils/AxiosInstance";
import Loader from "../../components/Loader";
import { useAuth } from "../../context/ContextAuth";
import { useRouter } from "next/router";
// import  "../../styles/pages/superAdmin.scss";
// superAdmin from
export default function dashboard() {
    const [showNotification, setShowNotification] = React.useState(false);
    const [isLoading, setLoading] = React.useState(false);
	const [ sellerList, setSellerList] = React.useState([])
	const router = useRouter();
	const {getAuth} =useAuth()
	useEffect(()=>{
console.log("ENTER IN USE EFFECT")
if(getAuth=="SUPER_ADMIN"){

	getAllAdmins()
} else{
	router.push("/")
}
	}, [])

	const getAllAdmins = () => {
		//v1/admin/admin-list
		setLoading(true)
		console.log("Enter in All Dmin list")
		
		transitApi.get("/v1/admin/admin-list", )
    .then((res)=>{
      
		setSellerList(res.data.data)
		console.log(res.data.data)
	   
       setLoading(false)
      })
    .catch((err)=> setLoading(false))
	}


	const handleApproveReject = (id, index, check) => {
		setLoading(true)
		const data = {
			"adminId":id,
			"isApproved":check
		}
		//admin/approved-by-super-admin
		transitApi
		.patch("/v1/admin/approved-by-super-admin",data)
		.then((res)=>{
			console.log(res)
			let newVal  = [...sellerList]
			newVal[index] = res.data.data
			setSellerList(newVal)
			setLoading(false)
		})
		.catch((err)=>{
			setLoading(false)
		})
	};



	const handleShowNotification = () => {
		setShowNotification(true);
		  };

	return (
		<>
		{isLoading&&<Loader/>}
			<Layout>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
                   <div className="alertBox">
                   {/* <button onClick={handleShowNotification} className="btn btn-primary">
					Show Notification
				</button> */}
				{showNotification && (
                    <>
                    {/* <Notification className="notificationContainer alert-success" message="This is a notification message success." />
                    <Notification className="notificationContainer alert-danger" message="This is a notification message danger." />
                    <Notification className="notificationContainer alert-info" message="This is a notification message info." /> */}
                    <Notification className="notificationContainer alert-warning" message="This is a notification message warning." />

                    </>
					
				)}
                   </div>


							<h1>Seller Listings</h1>
							<div class="table-responsive">
							<table className="dashboardTable superAdminTableDashboard">
								<thead>
									<tr>
										<th>Seller Name</th>
										<th>Seller Email</th>
										<th>Status</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									{sellerList?.map((seller, index) => (
										<tr key={seller?._id}>
											<td>{seller?.fullName}</td>
											<td>{seller?.email}</td>
											<td className={'labelIs'+seller.isApproved.toLowerCase()}><span className="labelRejectApproved">{seller?.isApproved}</span></td>
											<td  className="tableButton">
												<button
												disabled = {seller.isApproved == "APPROVED"?true:false}
													className="btn btn-success subscribeBtn approveLabelBtn"
													onClick={() => handleApproveReject(seller?._id, index, "APPROVED")}
												>
													Approve
												</button>
												<button
												disabled = {seller.isApproved == "REJECT"?true:false}
													className="btn btn-danger subscribeBtn rejectLabelBtn"
													onClick={() => handleApproveReject(seller?._id, index, "REJECT")}
												>
													Reject
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}
