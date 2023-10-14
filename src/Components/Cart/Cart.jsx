import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import { UserContext } from '../../Context/UserToken';
import Loading from '../Loading';
import { Box, Modal } from '@mui/material'
import { useFormik } from 'formik'
import emptyCart from "../../assets/empty-cart.png"
export default function Cart() {
  let { isLogin } = useContext(UserContext)
  let { getCart, deleteItem, updateCart, cartId, setCartId, setCartNumber, checkout,deleteCart } = useContext(CartContext)
  let [data, setdata] = useState(null);
  let [loading, setLoading] = useState(false);

  //to handle opening and closing of a component
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //let [productsdets,setProductsdets]=useState(null)

  let formik = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: ""
    },
    onSubmit: SubmitForm
  })
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #ffff',
    borderRadius:'10px',
    boxShadow: 24,
    p: 4,
  };

  async function SubmitForm(values) {
    let res = await checkout(cartId, values);
    console.log(res, "CHECKOUTT")
    if (res?.data.status === 'success')
      window.location.href = res?.data.session?.url
  }

  async function getCartFunc() {
    setLoading(true)
    let response = await getCart();

    console.log(response?.data, "CARTTTTT");
    if (response?.data?.status === "success") {
      setdata(response.data);
      setCartNumber(response.data.numOfCartItems)
      setCartId(response?.data.data._id)
    }
    else{
      setCartNumber(0)
      setdata(null)
    }
    setLoading(false)

    //setProductsdets(response.data.data);


  }

  async function deleteItemFunc(id) {
    let response = await deleteItem(id);
    console.log(response, "DELETEEEED");
    if (response?.data?.status === 'success') {
      setCartNumber(response.data.numOfCartItems)
      getCartFunc();//b3d ma ams7 h-call el get function ashan yt3ml setData gdeda
    }
    //3AYZA ATL# CART IS EMPTY WHEN THERE"S NO PRODUCTS
    //  if(response?.data.products.length === []){
    //   setdata(null);
    //   console.log("NULLLLLL");
    //  }
  }
  //DELETEE CARTTTTTTTTT
  async function deleteCartFunc() {
    let response = await deleteCart();
    console.log(response, "CART IS EMPTY");
    if (response?.data?.message === 'success') {
      setCartNumber(0)
      getCartFunc();//b3d ma ams7 h-call el get function ashan yt3ml setData gdeda
    }
   
  }
  
  async function updateCartFunc(id, count) {
    let response = await updateCart(id, count);
    console.log(response, "updatedd");
    if (response.data.status === 'success') {
      setCartNumber(response.data.numOfCartItems)
      getCartFunc();//b3d ma ams7 h-call el get function ashan yt3ml setData gdeda
    }
    //mhtaga lma ywsl l zero a3ml delete item w mhtaga a-handle incrementing count in order with the quantity
    if (count === 0) {
      deleteItemFunc(id)
    }
  }
  useEffect(() => {
    if (isLogin != null) {
      getCartFunc()
      //deleteItemFunc()
      // console.log("YALHWYYYYYY");
      // return
    }
    else {
      return
    }

  }, [isLogin])


  if (loading)
    return <div className="container  py-3 my-4 parent "style={{ minHeight: "100vh" }} >
      <h2 className="col fw-bolder">Shop Cart</h2>
      <h5 > Total Cart Price: <span className='text-main'> {data?.data.totalCartPrice}</span></h5>
      <Loading></Loading>
    </div>

  return (
    <>

      <div className="container  py-3 my-3 rounded-3" style={{ minHeight: "100vh" }}>
     
        <h2 className="col fw-bolder" >Shop Cart</h2>
        {!data?.numOfCartItems ?
        <div className="container  " style={{marginTop:"133.205px"}}>
          <div className="row  py-3 rounded-3 my-3 mx-auto" style={{ width: "100%" }}>
            <h3 className='text-center'>Your cart is empty</h3>
            <div className="col d-flex justify-content-center align-items-center">
              <img src={emptyCart} alt="emptyCart" width={"200px"} />
            </div>
          </div>
          </div>

          :

          <>
            <h5 > Total Cart Price: 
            <span className='text-main'> {data?.data.totalCartPrice}</span></h5>
            <div className='container rounded-3 bg-main-light py-3 my-3' >
              <span className='mx-2' >
              <button className='btn text-white bg-main' onClick={()=>deleteCartFunc()}> <i className='fa-solid fa-trash  ' style={{paddingRight:"5px"}}></i>Clear Cart</button>
              </span>
              
              {data?.data.products.map((prod) =>
                <div className="row m-2 rounded-3 bg-white border-bottom " key={prod.product._id} style={{padding:"40px 0px "}} >

                  <div className="col-md-9">
                    <div className="row d-flex align-items-center ">
                      <div className="col-md-2  ">
                        <img src={prod.product.imageCover} height={100} width={100}  alt='product'></img>
                      </div>
                      <div className="col-md-10  ">
                        <p>{prod.product.title}</p>
                        <p className='text-main'>{prod.price} EGP</p>
                        <span className='cursor-pointer removebutton' 
                        onClick={() => deleteItemFunc(prod.product._id)}><i className='fa-solid fa-trash removebutton pe-2 ' ></i>
                        Remove </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex justify-content-end align-items-center  " >
                    <button className='btn text-main border border-2 border-success ' style={{width:"39.64px"}} onClick={() => updateCartFunc(prod.product._id, prod.count - 1)}> - </button>
                    <span className='count-button' style={{ marginInline: '10px' }}>{prod.count}</span>
                    <button className='btn text-main border border-2 border-success ' onClick={() => updateCartFunc(prod.product._id, prod.count + 1)}> + </button>
                  </div>
                </div>
              )
              }
              <button className='bg-main text-white my-3 btn' onClick={handleOpen}>Check out</button>
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <form onSubmit={formik.handleSubmit}>
                  <input type="text" className='form-control my-2' name='details' onChange={formik.handleChange} value={formik.values.details} placeholder='address ' />
                  <input type="tel" className='form-control my-2' name='phone' onChange={formik.handleChange} value={formik.values.phone} placeholder='phone ' />
                  <input type="text" className='form-control my-2' name='city' onChange={formik.handleChange} value={formik.values.city} placeholder='city ' />
                  <button className='btn bg-main text-white' type='submit'>Send</button>
                </form>
              </Box>
            </Modal>
          </>
        }
      </div>

    </>

  )
}
