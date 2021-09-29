import React from "react"

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
    <div class="container px-5">
        <div class="navbar-brand fw-bold">
            <img src="assets/img/logo.png" class="img-fluid-header-logo" alt="Responsive" />
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="bi-list"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0"></ul>
            <button class="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#logoutModal">
                        <span class="d-flex align-items-center">
                            <i class="bi-box-arrow-right me-2"></i>
                            <span class="small">Logout</span>
                        </span>
            </button>
        </div>
    </div>
</nav>
  )
}

export default Nav