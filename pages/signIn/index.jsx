import React, { useState } from 'react';
import { transitApi } from '../../utils/AxiosInstance';
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function SignIn(props) {

    const [signInInput, setSignInInput] = useState({
        email : "",
        password: ""
    });
    const router = useRouter()
    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        setSignInInput({ ...signInInput, [e.target.name]: e.target.value })
        
    }

    return (
        <div className="auth_container_c sign_in">
                <div className="auth_form col-lg-7">
                    <div className="auth_form_heading_title mt-0">
                    <h2 className="heding_l">Sign in to <span className="fc_primary2">Transit</span><span className="fc_primary">Fast</span></h2>
                    <p>Discover best vehicles from top brands.</p>
                    </div>

                    <form action="">
                    <div className="row">
                    <div class="col-md-12 mb-3">
                    <input type="email" class="form-control" placeholder="Email address" name="email" value={signInInput.email} onChange={handleChange} />
                    </div>
                    <div class="col-md-12 mb-3">
                    <input type="password" class="form-control" placeholder="Password" name="password"  value={signInInput.password} onChange={handleChange} />
                    </div>
                    <Link href="/forgot-password" className='text-end forgot_pass fc_primary fw-semibold'>Forgot Password?</Link>
                    </div>

                    </form>
                    <div className="auth_form_cta">
                    <Link href="/signup" type="button" class="btn"><i class="fas fa-chevron-left"></i> Go Sign-up</Link>
                    <button onClick={()=>router.push('/')} type="button" class="btn btn-danger">Sign In</button>
                    </div>
                </div>
                <div className="auth_img col-lg-5">

                </div>
        </div>
    );
}

export default SignIn;