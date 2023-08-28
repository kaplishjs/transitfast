import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <>  <div class="sidebar border border-right  col-md-3 col-lg-2 offcanvas-md offcanvas-end " tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
      {/* <ul class="nav flex-column">

      </ul> */}
      <ul class="nav flex-column mb-auto sidebar_itm_wrapper">
        <li className="bg-body-tertiary"><i class="fas fa-car"></i> <Link href="/">Home</Link></li>
        <li className="bg-body-tertiary"><i class="fas fa-car"></i> <Link href="my-vehicle">My Vehicles</Link></li>
        <li className="bg-body-tertiary"><i class="fas fa-car"></i> <Link href="request">Request</Link></li>
        <li className="bg-body-tertiary"><i class="fas fa-car"></i> <Link href="my-account">My Account</Link></li>
        <li className="bg-body-tertiary"><i class="fas fa-car"></i> <Link href="">Logout</Link></li>

      </ul>
    </div>
  </div></>
  )
}
