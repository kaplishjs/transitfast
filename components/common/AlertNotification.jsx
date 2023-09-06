import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Include Bootstrap CSS
// import './Notification.css'; // Create a CSS file for your styling

const Notification = ({ message, className }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000); 

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`alert alert-success ${show ? 'show '+className : 'hide '}`} role="alert">
      {message}
    </div>
  );
};

export default Notification;