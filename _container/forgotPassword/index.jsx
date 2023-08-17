import React from 'react';
import Link from 'next/link';

function forgotPassword({ onClick, activeTab}) {

    const [state, seState] = React.useState({ email : ""});

    const handleChange = (e) => {
        setSignInInput({ ...state, [e.target.name]: e.target.value })
    };

    return (
        <div className="auth_container_c forgot_password">
                <div className="auth_form col-lg-7">
                    <div className="auth_form_heading_title">
                    <h2 className="heding_l">Forgot Password?</h2>
                    <p>No worries, We’ll send you password reset instructions.</p>
                    </div>

                    <form action="">
                    <div className="row">
                    <div class="col-md-12 mb-3">
                    <input type="email" class="form-control" name='email' placeholder="Email address" onChange={handleChange}/>
                    </div>
                    </div>
                    </form>
                    <div className="auth_form_cta">
                    <Link type="button" class="btn" href="/signIn"><i class="fas fa-chevron-left"></i> Go Back</Link>
                    <button type="button" class="btn btn-danger" onClick={()=> onClick(activeTab+1)}>Reset Password</button>
                    </div>
                    <div className="auth_stepper">
                        <button className="btn active">1</button>
                        <button className="btn">2</button>
                        <button className="btn">3</button>
                        <button className="btn">4</button>

                    </div>
                </div>
                <div className="auth_img col-lg-5">

                </div>
        </div>
    );
}

export default forgotPassword;