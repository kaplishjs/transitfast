import React from 'react'

export default function HeaderAdmin() {
  return (
    <>
    <header class="dashboard_header navbar sticky-top   p-0 border-bottom" data-bs-theme="dark">
    <div className="container-fluid flex-md-nowrap">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="#">
  <img src="/assests/images/logo.svg" alt="" srcset="" />
</a>

<ul class="navbar-nav flex-row ">
  <li className='nav-item'><img  src="https://i.pravatar.cc/60" class="rounded-circle" alt="..."/></li>
  <li className="nav-item d-block d-md-none text-nowrap">
    <button class="nav-link px-3 text-black" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fas fa-bars"></i>
    </button>
  </li>
</ul>
    </div>
</header>

    </>
  )
}
