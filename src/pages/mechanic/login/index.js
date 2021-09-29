import React, { useState } from "react"
import axios from "axios"

import { API } from "../../../utils/requests"
import { A as Link } from "hookrouter"

const Login = () => {
    const [user, setUser] = useState({
        phone: "",
        password: ""
    })

    const onChange = e => {
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const onSignIn = async (e) => {
        console.log(user)

        const { data } = await axios(`${API}/api/auth/mechanic/login`, {
            data: user,
            method: "post"
        })
        alert(data)
    }
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
                        <input type="text" id="phone" name="phone" placeholder="Phone number" class="form-control" value={user.phone} onChange={onChange} required />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label text-muted">Password</label>
                        <input type="password" id="password" name="password" placeholder="Password" class="form-control" required />
                        <div class="row justify-content-center my-2"> <Link href="/mechanics/register"><small class="text-sign-up">Don’t have an account? Sign Up</small></Link> </div>
                    </div>
                    <div class="row justify-content-center my-3 px-3"> <button type="submit" class="btn-block btn-color-signin" onClick={onSignIn}>Sign In</button> </div>
                    {/* <div class="row justify-content-center my-2"> <a href="#"><small class="text-muted">Forgot Password?</small></a> </div> */}
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