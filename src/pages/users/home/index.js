import React from "react"

const Home = () => {
  return (
    <header class="masthead">
    <div class="container px-5">
        <div class="row gx-5 align-items-center">
            <div class="text-center">
                <div class="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                    <i class="bi-tools icon-feature mech-text-gradient d-block mb-3"></i>
                    <h3 class="mech-font-alt-and-size"> Mechanics</h3>
                </div>
            </div>
            <div class="container-fluid px-5">
                <div class="row gx-5">
                    <div class="col-md-3 mb-5">
                        <div class="text-center">
                            <img src="assets/img/person.png" class="card-img-top" alt="User profile" />
                            <div class="card-body">
                                <h5 class="card-title">Mechanic One</h5>
                                <p class="card-text">0 cars repaired.</p>
                                <p class="card-text">Phone: 0700-000-000</p>
                                <a href="#" class="btn btn-primary">View More info</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
  )
}

export default Home