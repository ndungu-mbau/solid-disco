import React from "react"

const Login = () => {
  return (
  <>
<video class="bg-video" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop"><source src="assets/mp4/mech-wangu-video.mp4" type="video/mp4" /></video>
<div class="masthead">
    <div class="masthead-content text-white">
        <div class="container-fluid px-4 px-lg-0">
            <div class="container px-5 my-5">
                <div class="text-center justify-content-center">
                    <img src="/assets/img/logo.png" class="img-fluid-sign-in-logo" alt="Responsive" />
                </div>
                <div class="justify-content-center text-top-sign-up text-center">Sign in to your account to continue</div>
                <form class="form-floating">
                    <div class="form-group">
                        <label class="form-control-label text-muted">Phone number</label>
                        <input type="text" id="phone" name="phone" placeholder="Phone number" class="form-control" REQUIRED />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label text-muted">Password</label>
                        <input type="password" id="psw" name="psw" placeholder="Password" class="form-control" REQUIRED />
                        <div class="row justify-content-center my-2"> <a href="register.html"><small class="text-sign-up">Don’t have an account? Sign Up</small></a> </div>
                    </div>
                    <div class="row justify-content-center my-3 px-3"> <button class="btn-block btn-color-signin">Sign In</button> </div>
                    <div class="row justify-content-center my-2"> <a href="#"><small class="text-muted">Forgot Password?</small></a> </div>
                    <div class="row justify-content-center my-3 px-1">
                        <button class="btn-block btn-color-facebook">Sign In with Facebook <i class="fab fa-facebook"></i> </button>
                        <button class="btn-block btn-color-google">Sign In with Google <i class="fab fa-google"></i> </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="social-icons">
    <div class="d-flex flex-row flex-lg-column justify-content-center align-items-center h-100 mt-3 mt-lg-0">
        <a class="btn btn-dark m-3" href="#!"><i class="fab fa-twitter"></i></a>
        <a class="btn btn-dark m-3" href="#!"><i class="fab fa-facebook-f"></i></a>
        <a class="btn btn-dark m-3" href="#!"><i class="fab fa-instagram"></i></a>
    </div>
</div>
  </>
)
  }

  export default Login