import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { transitApi } from '../../utils/AxiosInstance';

const FormSchema = yup.object().shape({
    pass: yup
      .string()
      .min(8, 'Password must be 8 characters long')
      .matches(/[0-9]/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .matches(/[A-Z]/, 'Password requires an uppercase letter')
      .matches(/[^\w]/, 'Password requires a symbol'),
    confirm: yup
      .string()
      .oneOf([yup.ref('pass'), null], 'Must match "password" field value'),
  });

function setNewPassword({ onClick, activeTab}) {


    return (
        <Formik
        initialValues={{
          pass: '',
          confirm: '',
        }}
        validationSchema={FormSchema}
        onSubmit={(values) => {
          const email = typeof window !== 'undefined' && localStorage.getItem('email')
          console.log(values);
          const payload = {
            email:email,
            password: values.pass
        }
          transitApi.post('/v1/admin/reset-password', payload).then((res)=>{
            console.log("Final step=>", res);
            onClick(activeTab+1);
            window !== 'undefined' && localStorage.clear("")
          }).catch((error)=> {
            console.error('error', error);
          })
        }}
      >
        {({ errors, isValid, dirty }) => (
          <Form>
        <div className="auth_container_c set_new_password">
                <div className="auth_form col-lg-5">
                    <div className="auth_form_heading_title">
                    <h2>Set new Password</h2>
                    <p>Must be atleast 8 characters.</p>
                    </div>

               
                    <div className="row">
                    <div class="col-md-12 mb-3">
                    {/* <input type="password" class="form-control" placeholder="Password"/> */}
                    <Field type="password" class="form-control"  placeholder="Password" name="pass" />
                    {errors.pass && <p className='error_message'>{errors.pass}</p>}
                    </div>
                    <div class="col-md-12 mb-3">
                    <Field type="password"  class="form-control" placeholder="Confirm Password" name="confirm" />
                    {/* <input type="password" class="form-control" placeholder="Confirm Password"/> */}
                    {/* {errors.confirm && <p className='error_message'>{errors.confirm}</p>} */}
                    {errors.confirm &&<div className="error_message">{errors.confirm}</div>}
                    </div>
                    </div>
        
                    <div className="auth_form_cta">
                    <button type="button" class="btn" onClick={()=> onClick(activeTab-1)}><i class="fas fa-chevron-left"></i> Go Back</button>
                    <button type="submit" disabled={!isValid || !dirty} class="btn btn-danger">Reset Password</button>
                    </div>
                    <div className="auth_stepper">
                        <button className="btn">1</button>
                        <button className="btn">2</button>
                        <button className="btn active">3</button>
                        <button className="btn">4</button>

                    </div>
                </div>
                <div className="auth_img col-lg-7">

                </div>
        </div>
        </Form>
      )}
    </Formik>
    );
}

export default setNewPassword