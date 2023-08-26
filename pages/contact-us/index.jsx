import { useFormik } from 'formik';
import React from 'react'
import Layout from '../../components/Layout'

function index() {

  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
  
    if (!values.description) {
      errors.description = 'Required';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    }

    if (!values.subject) {
      errors.subject = 'Required';
    }
  
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      subject: '',
      description: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
 

  return (
    <Layout>
     
                {/* contact us section */}

      <section className="contact_us_wrapper section_margin ContactPage">
          <div className="container">
                <div className="row">
                  <div className="col-md-6 contact_us_img">
                    <div className="contacty_itm">
                      <p>Call Us:</p>
                      <span>0333 577 0488</span>
                    </div>
                    <div className="contacty_itm">     
                    <p>Social Media:</p>   
                    <div className="social_media_icon">
                    <a href=""><i className="fab fa-facebook-square"></i></a>
                    <a href=""><i className="fab fa-instagram"></i></a>  
                    <a href=""><i className="fab fa-linkedin"></i></a>  
                  </div>   
                    </div>
                  </div>
                  <div className="col-md-6 contact_us_desc section_padding">
                  <h5 className="small_title">Contact Us</h5>
                        <h2 className="heding_l large_title">Send an enquiry</h2>
                        <p>If you have a complaint about the service or product, our team is more than happy to help.</p>
                      
                        <form onSubmit={formik.handleSubmit}>
                        <div className="form">
                        <div className="mb-3">
                        <input type="text" className="form-control" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} placeholder="Name"/>
                        {formik.errors.name ? (
                           <div className="error_message">{formik.errors.name}</div>
                         ) : null}
                        </div>
                        <div className="mb-3">
                        <input type="email" className="form-control" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} placeholder="Email"/>
                        {formik.errors.email ? (
                           <div className="error_message">{formik.errors.email}</div>
                         ) : null}
                        </div>
                        <div className="mb-3">
                        <input type="text" className="form-control" id="subject" name="subject" onChange={formik.handleChange} value={formik.values.subject} placeholder="Subject"/>
                        {formik.errors.subject ? (
                           <div className="error_message">{formik.errors.subject}</div>
                         ) : null}
                        </div>
                        <div className="mb-3">
                        <textarea className="form-control" id="description" name="description" onChange={formik.handleChange} value={formik.values.description} placeholder="Message" cols="30" rows="10"></textarea>
                        {formik.errors.description ? (
                           <div className="error_message">{formik.errors.description}</div>
                         ) : null}
                        </div>
                        
                        <div className='submitAlignRight'>
                        <button type="submit" className="btn btn-danger">Submit</button> 
                        </div>
                        </div>
                        </form>

                
                        
                  </div>
                </div>
          </div>
      </section>
   


    </Layout>
  )
}

export default index