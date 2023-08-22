import React, { useState } from 'react';
import ForgotPassword from '../../_container/forgotPassword';
import PasswordResetSuccessfull from '../../_container/PasswordResetSuccessfull';
import ResetPassword from '../../_container/resetPassword';
import SetNewPassword from '../../_container/setNewPassword';

const ForgotPasswordPage = () => {
    const [activeTab, setActiveTab] = useState(2);

    const handleClick = (value) => {
        if (value > -1 && value < 4) setActiveTab(value);
    }
    return (
        <>
            {
                activeTab === 0 && <ForgotPassword onClick={handleClick} activeTab={activeTab} />
            }
            {
                activeTab === 1 &&  <ResetPassword  onClick={handleClick} activeTab={activeTab}/>
            }
            {
                  activeTab === 2 &&  <SetNewPassword onClick={handleClick} activeTab={activeTab} />
            }
            {
                 activeTab === 3 &&  <PasswordResetSuccessfull  onClick={handleClick} activeTab={activeTab} />
            }
        </>
    );
};

export default ForgotPasswordPage;