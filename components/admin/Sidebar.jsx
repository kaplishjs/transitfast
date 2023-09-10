import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Modal from "../common/modal";

export default function Sidebar() {
  const router = useRouter();
  const [activeState, setActiveState] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(router.asPath)
  
  useEffect(() => {
    setActiveState(router.asPath);
  }, [])

  const handleLogout = () => {
    typeof window !== "undefined" && localStorage.clear("");
    router.push('/')
  };


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      {" "}
      <div
        class="sidebar border1 border-right1  col-md-3 col-lg-2 offcanvas-md offcanvas-end "
        tabindex="-1"
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="sidebarMenuLabel">
            Company name
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          {/* <ul class="nav flex-column">

      </ul> */}
          <ul class="nav flex-column mb-auto sidebar_itm_wrapper">
            <li
              className={`bg-body-tertiary`}
              onClick={()=> router.push('/')}
            >
             
              <Link href="/">
                <i class="fas fa-home"></i> Home
              </Link>
            </li>
            <li
              className={`bg-body-tertiary ${activeState?.includes('vehicle') && "active"}`}
              onClick={()=> {router.push('/admin/all-vehicle')}}
            >
              <Link href="/admin/all-vehicle">
                <i class="fas fa-car"></i> My Vehicles
              </Link>
            </li>
            <li
              className={`bg-body-tertiary ${activeState === '' && "active"}`}
              onClick={()=> {router.push('/admin/all-vehicle')}}
            >
              <Link href="my-vehicle">
                <i class="fas fa-clipboard-list"></i> Request
              </Link>
            </li>
            <li
              className={`bg-body-tertiary ${activeState === '/admin/my-account' && "active"}`}
              onClick={() => router.push('/admin/my-account')}
            >
              {" "}
              <Link href="my-account">
                <i class="far fa-user"></i> My Account
              </Link>
            </li>
            <li className={`bg-body-tertiary`} onClick={openModal}>
              {" "}
              <Link  href="">
                <i class="fas fa-sign-out-alt"></i> Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
<div class="modal-body">
        <img className='img-fluid common_modal_icon' src="/assests/images/logoutIcon.svg" alt="" srcset="" />
        <h4 className='mb-0 fw-bold'>Logout</h4>
        <span>Are you sure, you want to logout?</span>
        <div className="d-flex gap-3 common_modal_footer">
        <button type="button" class="btn btn-outline-danger" onClick={closeModal}>Cancel</button>
        <button type="button" class="btn btn-danger" onClick={()=> handleLogout()}>Logout</button>
        </div>
      </div>
</Modal>
    </>
  );
}
