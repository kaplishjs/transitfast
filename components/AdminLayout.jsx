import React from "react";
import HeaderAdmin from "./admin/HeaderAdmin";
import Sidebar from "./admin/Sidebar";
import withAuth from "./auth/withAuth";
function AdminLayout({ children }) {
  return (
    <>
      <HeaderAdmin />
      <div class="container-fluid">
        <div class="row admin_container_main">
          <Sidebar />
          <main class="col-md-9 ms-sm-auto col-lg-10 p-3  p-md-4">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}

export default withAuth(AdminLayout);
