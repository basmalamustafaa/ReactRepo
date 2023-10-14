import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { ThreeDots } from 'react-loader-spinner';
import YupPassword from 'yup-password';
import { UserContext } from '../../Context/UserToken';
YupPassword(Yup);
export default function Login() {

let {setIsLogin}=useContext(UserContext);

let BaseUrl='https://ecommerce.routemisr.com'
let[loading,setLoading]=useState(false);
let [error, setError] = useState(null);
let navigate=useNavigate();

let Schema= Yup.object({
email: Yup.string().email('Invalid email address').required('Email is required'),
password:Yup.string().min(8,'password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special').minLowercase(1, 'password must contain at least 1 lower case letter').minUppercase(1, 'password must contain at least 1 upper case letter').minNumbers(1,'password must contain at least 1 number').minSymbols(1, 'password must contain at least 1 special character').required('Password is required'),

})

let formik=useFormik({
    initialValues:{
    //de nafs el asamy rli maktoba fel json file b nafs el syntax
    email:'',
    password:'',
   
    },
    //validate:validation, //lazm a-validate before submission
    validationSchema:Schema,
    onSubmit:submitLogin
    })

async function submitLogin(value){
setLoading(true);
let{data}=await axios.post(`${BaseUrl}/api/v1/auth/signin`,value).catch((err)=>{
  setError(err.response.data.message)
})
 if (data.message === 'success') {
      setError(null)
      setLoading(false) //awl ma yb2a suuccess mafrod haroh login fa  hw2f el loading
      //abl ma aroh ll cart lazm ageb el token ashan aroh el cart wana logged in bel token
      localStorage.setItem('userToken',data.token) //hena ana b-save el token fel local storage 3ndy w hwdeh ll context ashan astkhdmo fe ay heta
      //hena mafrod a-fill el isLogin bel token bta3ty b3d el login ma yb2a success 
      setIsLogin(data.token)
      navigate('/')

}
}



//lazm attribute el name yt7at fel input tag ashan a3rf arbto bel formik lma agy ageb el values

//lazm a7ut attribute value={} fel input ashan a2dr a3rf eh el value eli el user katbha w keda a2dr
// fel formik a3rdel data,, mn gherha lma agy a-submit el formil htrg3 empty
//onBlur m3naha lma afta7 w a mshy asebha fadya
//formic.dirty m3naha en el form dost 3leha , fana as long as el form ma dostesh 3leha fa ana mfrod akhly el button disabled
  return (
   
    <div className="container m-3 py-4" style={{minHeight:"100vh"}}>
    {/* <h2 className='mx-3 w-75'>Login</h2> */}
   {error? <p class="alert alert-danger">{error} </p>:''}
    {loading?
          <div className='d-flex justify-content w-100 align-items-center'>
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
      <form className="w-75 mx-auto" onSubmit={formik.handleSubmit}>
      <h2 className='aaa ' style={{marginBottom:"2rem"}}>Login</h2>
        <label htmlFor="email" className="form-label my-2 " >Email</label>
        <input type="email" className="form-control"  id="email" name='email' value={formik.values.email}
         onChange={formik.handleChange} onBlur={formik.handleBlur} />

        {formik.errors.email && formik.touched.email?<p class="alert alert-danger" >
       {formik.errors.email} </p>:''}
      
        <label htmlFor="password" className="form-label my-2">password</label>
        <input type="password" className="form-control" name='password' value={formik.values.password} 
        onChange={formik.handleChange} id="password" onBlur={formik.handleBlur} />
         {formik.errors.password && formik.touched.password?<p class="alert alert-danger" >
       {formik.errors.password} </p>:''}

         
         <button disabled={!(formik.isValid &&formik.dirty)} type="submit" className="btn btn-primary mt-4 ms-auto d-block" >Login</button>
      </form>


    </div>
    

  )
}
