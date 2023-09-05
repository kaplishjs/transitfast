import React, { useState } from "react";

export default function Sidebar() {
  const [activeState, setActiveState] = useState(0);

  const handleLogout = () => {
    typeof window !== "undefined" && localStorage.clear("");
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
              className={`bg-body-tertiary ${activeState === 0 && "active"}`}
              onClick={() => setActiveState(0)}
            >
              {" "}
              <Link href="/">
                <i class="fas fa-home"></i> Home
              </Link>
            </li>
            <li
              className={`bg-body-tertiary ${activeState === 1 && "active"}`}
              onClick={() => setActiveState(1)}
            >
              <Link href="my-vehicle">
                <i class="fas fa-car"></i> My Vehicles
              </Link>
            </li>
            <li
              className={`bg-body-tertiary ${activeState === 2 && "active"}`}
              onClick={() => setActiveState(2)}
            >
              <Link href="request">
                <i class="fas fa-clipboard-list"></i> Request
              </Link>
            </li>
            <li
              className={`bg-body-tertiary ${activeState === 3 && "active"}`}
              onClick={() => setActiveState(3)}
            >
              {" "}
              <Link href="my-account">
                <i class="far fa-user"></i> My Account
              </Link>
            </li>
            <li className={`bg-body-tertiary`}>
              {" "}
              <Link onClick={handleLogout} href="/">
                <i class="fas fa-sign-out-alt"></i> Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
