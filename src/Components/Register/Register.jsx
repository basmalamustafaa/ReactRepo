import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import {Helmet} from "react-helmet";


YupPassword(Yup);
export default function Register() {

let navigate=useNavigate();
  let [registered, setRegistered] = useState(false);
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#fff1f");
  let [error, setError] = useState(null);

  let Schema = Yup.object({
    name: Yup.string().min(2, 'Must be at least 2 characters').max(15, 'Must be 15 characters or less').required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special').minLowercase(1, 'password must contain at least 1 lower case letter').minUppercase(1, 'password must contain at least 1 upper case letter').minNumbers(1, 'password must contain at least 1 number').minSymbols(1, 'password must contain at least 1 special character').required('Password is required'),
    rePassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password does not match').required('Must re-enter your Password'),
    phone: Yup.string().matches(/^(002)?01[0-25][0-9]{8}$/, 'Invalid Phone Number').required('Phone Number is Required')

  })

  let formik = useFormik({
    initialValues: {
      //de nafs el asamy rli maktoba fel json file b nafs el syntax
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: ''
    },
    //validate:validation, //lazm a-validate before submission
    validationSchema: Schema,
    onSubmit: submitForm
  })

  async function submitForm(value) {
    setLoading(true)//awl ma-asubmit h3ml loading
    let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, value).catch((err) =>
    {
      setError(err.response.data.message)
      setLoading(false) //awl ma yb2a feh error hw2f el loading
    })
    if (data.message === 'success') {
      setError(null)
      setLoading(false) //awl ma yb2a suuccess mafrod haroh login fa  hw2f el loading
      navigate('/login')

    }

  }


  // function validation(values){
  //     let errors={}
  //     if(!values.name){
  //         errors.name='name is required'
  //     }
  //     if(!values.email){
  //         errors.email='email is required'
  //     }
  //     return errors
  // }
  useEffect(()=>{
console.log(loading);
  },[loading])


  //lazm attribute el name yt7at fel input tag ashan a3rf arbto bel formik lma agy ageb el values

  //lazm a7ut attribute value={} fel input ashan a2dr a3rf eh el value eli el user katbha w keda a2dr
  // fel formik a3rdel data,, mn gherha lma agy a-submit el formil htrg3 empty
  //onBlur m3naha lma afta7 w a mshy asebha fadya
  //formic.dirty m3naha en el form dost 3leha , fana as long as el form ma dostesh 3leha fa ana mfrod akhly el button disabled
  return (
    <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Register</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <div className="container mx-3">
        
        <>
        
          <h2>Register</h2>
          <form className="w-75 mx-auto" onSubmit={formik.handleSubmit}>
          {loading?
          <div className='d-flex justify-content'>
          <ThreeDots 
          height="80" 
          width="80" 
          radius="9"
          color="#4fa94d" 
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          loading={loading}
          visible={true}/>
          </div>
          :""}
         
            <>
            {error ? <p className="alert alert-danger"> {error}</p> : ''}
            <label htmlFor="name" className="form-label ms-auto d-block" >Name  </label>
            <input type="text" className="form-control my-2" id="name" name='name' value={formik.values.name}
              onChange={formik.handleChange} onBlur={formik.handleBlur} />

            {formik.errors.name && formik.touched.name ? <p class="alert alert-danger" >{formik.errors.name} </p> : ''}


            <label htmlFor="email" className="form-label my-2 " >Email</label>
            <input type="email" className="form-control" id="email" name='email' value={formik.values.email}
              onChange={formik.handleChange} onBlur={formik.handleBlur} />

            {formik.errors.email && formik.touched.email ? <p class="alert alert-danger" >
              {formik.errors.email} </p> : ''}

            <label htmlFor="password" className="form-label my-2">password</label>
            <input type="password" className="form-control" name='password' value={formik.values.password}
              onChange={formik.handleChange} id="password" onBlur={formik.handleBlur} />
            {formik.errors.password && formik.touched.password ? <p class="alert alert-danger" >
              {formik.errors.password} </p> : ''}

            <label htmlFor="rePassword" className="form-label my-2">Re-Password</label>
            <input type="password" className="form-control" name='rePassword' value={formik.values.rePassword}
              onChange={formik.handleChange} onBlur={formik.handleBlur} id="rePassword" />
            {formik.errors.rePassword && formik.touched.rePassword ? <p class="alert alert-danger" >
              {formik.errors.rePassword} </p> : ''}

            <label htmlFor="phone" className="form-label my-2">Phone</label>
            <input type="text" className="form-control" name='phone' value={formik.values.phone}

              onChange={formik.handleChange} id="phone" onBlur={formik.handleBlur} />
            {formik.errors.phone && formik.touched.phone ? <p class="alert alert-danger" >
              {formik.errors.phone} </p> : ''}

            <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="btn btn-primary mt-4 ms-auto d-block" onClick={() => {
              setLoading(true)
            }} >Register</button>
            </>
           
          </form>

          </>
        </div>
       
        

      

    </>

  )
}
