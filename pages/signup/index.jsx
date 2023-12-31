import React, {useState} from "react";
import { useFormik } from "formik";
import { transitApi } from '../../utils/AxiosInstance';
import Link from "next/link";
import { useRouter } from "next/router";

function Signup(props) {

  const [errMsg, setErrMsg] = useState("")
   const router = useRouter();
    const validate = values => {
      const urlValidate =
      /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
        const errors = {};
        if (!values.firstName) {
          errors.firstName = 'Required';
        } else if (values.firstName.length > 15) {
          errors.firstName = 'Must be 15 characters or less';
        }
      
        if (!values.lastName) {
          errors.lastName = 'Required';
        } else if (values.lastName.length > 20) {
          errors.lastName = 'Must be 20 characters or less';
        }
        if (!values.jobTitle) {
          errors.jobTitle = 'Required';
        } else if (values.jobTitle.length > 20) {
          errors.jobTitle = 'Must be 20 characters or less';
        }
        if (!values.dealershipName) {
          errors.dealershipName = 'Required';
        } else if (values.dealershipName.length > 20) {
          errors.dealershipName = 'Must be 20 characters or less';
        }

        if (!values.phoneNumber) {
          errors.phoneNumber = 'Required';
        } else if (values.phoneNumber.length < 10) {
          errors.phoneNumber = 'Must be 20 characters or less';
        }

        if (!values.website) {
          errors.website = "Required";
        } else if (!urlValidate.test(values.website)) {
          errors.website = "Invalid URL address";
        }

        if (!values.vatNumber) {
          errors.vatNumber = "Required";
        }
        if (!values.city_town) {
          errors.city_town = "Required";
        }
        if (!values.post_code) {
          errors.post_code = "Required";
        }

        if (!values.companyRegistration) {
          errors.companyRegistration = "Required";
        }
      
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
      
        return errors;
      };
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          jobTitle: '',
          dealershipName: '',
          phoneNumber:"",
          website:"",
          vatNumber:"",
          companyRegistration: "",
          createPassword: "",
          address1: "",
          address2: "",
          post_code:"",
          city_town:""
        },
        validate,
        onSubmit: values => {
          console.log("Click")
          // alert(JSON.stringify(values, null, 2));
          const {firstName, lastName, email, jobTitle, dealershipName, phoneNumber, 
            website, vatNumber, companyRegistration, address1, address2, createPassword,post_code, city_town} = values;
          const payload = {
            firstName,
            lastName,
            fullName: firstName+" "+lastName,
            jobTitle,
            dealershipName,
            phoneNo: phoneNumber,
            website,
            vatNumber,
            companyRegistration,
            address_1: address1,
            address_2: address2,
            role: "ADMIN",
            email,
            password:createPassword,
            post_code:post_code,
            city_town:city_town,

          };
          transitApi.post('/v1/admin/register', payload).then((res)=>{
            console.log("res", res);
            router.push('/signIn');
          }).catch((error)=> {
            console.error('error ==>', error.response.data.message);
            setErrMsg(error.response.data.message)
          })
        },
      });

  return (
    <div className="auth_container_c sign_up signUpFormSettings">
       
      <div className="auth_form col-lg-7">
        <div className="auth_form_heading_title">
          <h2 className="heding_l">Tell us little about yourself.</h2>
          <p>
            Please provide the required information below to register your
            business
          </p>
        </div>
        <div className='signInTopNav'><Link href="/" type="button" class="btn"><i class="fas fa-chevron-left"></i> <span className='TextHide'>Go Sign-up</span> </Link></div>
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="form-control"
                placeholder="First Name"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              {formik.errors.firstName ? (
                <div className="error_message">{formik.errors.firstName}</div>
              ) : null}
            </div>
            <div className="col-md-6 mb-3">
              <input
                id="lastName"
                className="form-control"
                name="lastName"
                placeholder="Last Name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
              {formik.errors.lastName ? (
                <div className="error_message">{formik.errors.lastName}</div>
              ) : null}
            </div>
            <div className="col-md-12 mb-3">
              <input
                id="jobTitle"
                className="form-control"
                name="jobTitle"
                type="text"
                placeholder="Job Title"
                onChange={formik.handleChange}
                value={formik.values.jobTitle}
              />
              {formik.errors.jobTitle ? (
                <div className="error_message">{formik.errors.jobTitle}</div>
              ) : null}
            </div>
            <div className="col-md-12 mb-3">
              <input
                id="dealershipName"
                className="form-control"
                name="dealershipName"
                type="text"
                placeholder="Dealership Name"
                onChange={formik.handleChange}
                value={formik.values.dealershipName}
              />
              {formik.errors.dealershipName ? <div className="error_message">{formik.errors.dealershipName}</div> : null}
        
            </div>
            <div className="col-md-6 mb-3">
              <input
                id="phoneNumber"
               className="form-control"
                name="phoneNumber"
                placeholder="Phone Number"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
              />
              {formik.errors.phoneNumber ? <div className="error_message">{formik.errors.phoneNumber}</div> : null}
            </div>
            <div className="col-md-6 mb-3">
              <input
                id="email"
                className="form-control"
                name="email"
                placeholder="Email Address"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? <div className="error_message">{formik.errors.email}</div> : null}
            </div>
            <div className="col-md-12 mb-3">
              <input 
              id="website"
              className="form-control"  
              name="website"
                type="text"
                placeholder="Website"
                onChange={formik.handleChange}
                value={formik.values.website}
              />
              {formik.errors.website ? <div className="error_message">{formik.errors.website}</div> : null}
            </div>
            <div className="col-md-6 mb-3">
              <input
               id="vatNumber"
               className="form-control"  
               name="vatNumber"
                 type="text"
                 placeholder="VAT Number"
                 onChange={formik.handleChange}
                 value={formik.values.vatNumber}
               />
               {formik.errors.vatNumber ? <div className="error_message">{formik.errors.vatNumber}</div> : null}
            </div>
            <div className="col-md-6 mb-3">
              <input
                id="companyRegistration"
                className="form-control"  
                name="companyRegistration"
                  type="text"
                  placeholder="Company Registration"
                  onChange={formik.handleChange}
                  value={formik.values.companyRegistration}
                />
                {formik.errors.companyRegistration ? <div className="error_message">{formik.errors.companyRegistration}</div> : null}
            </div>
            <div className="col-md-12 mb-3">
              <input
              id="createPassword"
              className="form-control"  
              name="createPassword"
                type="password"
                placeholder="Create password"
                onChange={formik.handleChange}
                value={formik.values.createPassword}
              />
              {formik.errors.createPassword ? <div className="error_message">{formik.errors.createPassword}</div> : null}
             
            </div>
            <div className="col-md-6 mb-3">
              <input 
               id="address1"
               className="form-control"  
               name="address1"
                 type="text"
                 placeholder="Address 1"
                 onChange={formik.handleChange}
                 value={formik.values.address1}
               />
               {formik.errors.address1 ? <div className="error_message">{formik.errors.address1}</div> : null}
            </div>
            <div className="col-md-6 mb-3">
              <input 
               id="address2"
               className="form-control"  
               name="address2"
                 type="text"
                 placeholder="Address 2"
                 onChange={formik.handleChange}
                 value={formik.values.address2}
               />
               {formik.errors.address2 ? <div className="error_message">{formik.errors.address2}</div> : null}
              {/* <input type="text" className="form-control" placeholder="Address 2" /> */}
            </div>
            <div className="col-md-6 mb-3">
              <input 
               id="post_code"
               className="form-control"  
               name="post_code"
                 type="text"
                 placeholder="Post code"
                 onChange={formik.handleChange}
                 value={formik.values.post_code}
               />
               {formik.errors.post_code ? <div className="error_message">{formik.errors.post_code}</div> : null}
              {/* <input type="text" className="form-control" placeholder="Address 2" /> */}
            </div>
            <div className="col-md-6 mb-3">
              <input 
               id="city_town"
               className="form-control"  
               name="city_town"
                 type="text"
                 placeholder="City"
                 onChange={formik.handleChange}
                 value={formik.values.city_town}
               />
               {formik.errors.city_town ? <div className="error_message">{formik.errors.city_town}</div> : null}
              {/* <input type="text" className="form-control" placeholder="Address 2" /> */}
            </div>
          </div>
          <div className="buttonActionMiddle">
          <button  className="btn btn-danger" type="submit">Submit</button>
       <span style={{'color':"red"}}>{errMsg}</span>
           <span>Already have an account? <Link href="/signIn" >Login</Link></span>
          </div>
        </form>
      </div>
      <div className="auth_img col-lg-5"></div>
    </div>
  );
}

export default Signup;
