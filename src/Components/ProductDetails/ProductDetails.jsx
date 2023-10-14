import React,{ useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import { CartContext } from '../../Context/CartContext';
import toast, { Toaster } from 'react-hot-toast';
import { UserContext } from '../../Context/UserToken';

export default function ProductDetails() {

  let { id } = useParams()
  let BaseUrl = 'https://ecommerce.routemisr.com'
  let{addtoCart}=useContext(CartContext) //lazm a-call el function abl el button
  let {isLogin}=useContext(UserContext)
  let { cartNumber, setCartNumber } = useContext(CartContext);

  async function addtoCartFunc(prodId){
    let response= await addtoCart(prodId);
    console.log(response);
    setCartNumber(response.data.numOfCartItems)

    if(!isLogin){
        toast.error(response.response.data.message, {
            duration: 4000,
            position: 'top-center'});
            return
    }
    toast.success(response.data.message, {
        duration: 4000,
        position: 'top-center'});
 }

  function getProductdets() {
    return axios.get(`${BaseUrl}/api/v1/products/${id}`)
  }
  const { data, isLoading, isError, isFetched } = useQuery('productdetails', getProductdets) 
  console.log(data?.data);


  return (
    <div className='container'>
      <div className="row align-items-center">
        <div className="col-md-3">
        <img src={data?.data.data.imageCover} className='w-100 '></img>
        </div>
        <div className="col-md-9 ">
          
          <p>{data?.data.data.title}</p>
          <p>{data?.data.data.description}</p>
          <p>{data?.data.data.category.name}</p>
          <div className='d-flex justify-content-between'>
          <span className='fw-bolder'>{data?.data.data.price} EGP </span>
          <span className='fw-bolder'>{data?.data.data.ratingsAverage} <i className='fa-solid fa-star rating-color'></i></span>
          </div>

          <button className='btn bg-main w-100 text-white' onClick={()=>addtoCartFunc(id)}>Add to cart</button>
        
        </div>
      </div>
    </div>
  )
}
