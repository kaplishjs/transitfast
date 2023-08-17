import React from 'react';

function PasswordResetSuccessfull({ onClick, activeTab}) {
    return (
        <div className="auth_container_c Password_reset_successfull">
                <div className="auth_form col-lg-7">
                    <div className="auth_form_heading_title">
                    <div className='auth_verify_img'><img className="img-fluid" src="/assests/auth_images/verify.svg" alt="" srcset="" /></div>

                    <h2>All Done!</h2>
                    <p>Good Job, Your password has been reset. Login now with your new details</p>
                    </div>

                    <div className="auth_form_cta">
                    <button type="button" class="btn btn-danger ms-auto">Login Now</button>
                    </div>
                    <div className="auth_stepper">
                        <button className="btn">1</button>
                        <button className="btn">2</button>
                        <button className="btn">3</button>
                        <button className="btn active">4</button>

                    </div>
                </div>
                <div className="auth_img col-lg-5">

                </div>
        </div>
    );
}

export default PasswordResetSuccessfull;