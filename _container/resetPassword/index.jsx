import React, { useRef, useState } from 'react';

function resetPassword({ onClick, activeTab}) {
    const [otp, setOtp] = useState(['', '', '', '', '']);
    const otpInputs = useRef([]);

    const handleOtpChange = (index, value) => {
        if (isNaN(value)) return; // Only accept numeric values
        setOtp((prevOtp) => {
          const newOtp = [...prevOtp];
          newOtp[index] = value;
          return newOtp;
        });
    
        // Move focus to the next input field
        if (value !== '' && index < otpInputs.current.length - 1) {
          otpInputs.current[index + 1].focus();
        }
      };


  const handleOtpKeyDown = (index, event) => {
    if (event.key === 'Backspace') {
      event.preventDefault();
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = '';
        return newOtp;
      });

      // Move focus to the previous input field
      if (index > 0) {
        otpInputs.current[index - 1].focus();
      }
    }
  };

      const handleOtpPaste = (event) => {
        event.preventDefault();
        const pastedData = event.clipboardData.getData('text');
        if (pastedData.length === 5) {
          const otpDigits = pastedData.split('').filter((char) => !isNaN(char));
          const newOtp = Array(5).fill('').map((_, index) => otpDigits[index] || '');
          setOtp(newOtp);
        }
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can process the OTP value, e.g., send it to the server for verification
        console.log('OTP submitted:', otp.join(''));
      };
    
    return (
        <div className="auth_container_c reset_password">
                <div className="auth_form col-lg-7">
                    <div className="auth_form_heading_title">
                    <h2 className="heding_l">Password Reset</h2>
                    <p>We sent a 5 digits code to <span className="fc_primary">Dummyemail@gmail.com</span></p>
                    </div>

                    <form action="">
                    <div className="auth_otp">
                    {otp.map((digit, index) => (
       <input
       key={index}
       type="text"
       className="form-control"
       placeholder=""
       maxLength="1"
       value={digit}
       onChange={(e) => handleOtpChange(index, e.target.value)}
       onPaste={handleOtpPaste}
       onKeyDown={(e) => handleOtpKeyDown(index, e)}
       ref={(input) => (otpInputs.current[index] = input)}
     />
        ))}
                    {/* <input type="text" class="form-control" placeholder=""/>
                    <input type="text" class="form-control" placeholder=""/>
                    <input type="text" class="form-control" placeholder=""/>
                    <input type="text" class="form-control" placeholder=""/>
                    <input type="text" class="form-control" placeholder=""/> */}

                    </div>
                  
                    </form>
                    <div className="auth_form_cta">
                    <button type="button" class="btn" onClick={()=> onClick(activeTab-1)}><i class="fas fa-chevron-left"></i> Go Back</button>
                    <button type="button" class="btn btn-danger" onClick={()=> onClick(activeTab+1)}>Continue</button>
                    </div>
                    <div className="auth_stepper">
                        <button className="btn ">1</button>
                        <button className="btn active">2</button>
                        <button className="btn">3</button>
                        <button className="btn">4</button>

                    </div>
                </div>
                <div className="auth_img col-lg-5">

                </div>
        </div>
    );
}

export default resetPassword;