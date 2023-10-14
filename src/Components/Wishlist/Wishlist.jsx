import React, { useContext, useEffect, useState } from 'react'
import { WishListContext } from '../../Context/WishlistContext'
import { UserContext } from '../../Context/UserToken';
import Loading from '../Loading';
import emptyCart from "../../assets/empty-cart.png"
import toast, { Toaster } from 'react-hot-toast';
import { CartContext } from '../../Context/CartContext';

export default function Wishlist() {

  let { addtoCart } = useContext(CartContext) //lazm a-call el function abl el button
  let { cartNumber, setCartNumber,getCart } = useContext(CartContext);

  let { getwishlist, wishListCount, setWishlistCount,removeFromwishlist} = useContext(WishListContext)
  let { isLogin } = useContext(UserContext)
  let [loading, setLoading] = useState(false);
  let [wish, setWish] = useState(null);

  async function getwishlistFunc() {
    setLoading(true)
    let response = await getwishlist();
    console.log(response?.data, "M3rfsh")

    if (response?.data?.status === "success") {
      setWish(response?.data);
      setWishlistCount(response.data.data.length)
      console.log("HII");
      //setCartId(response?.data.data._id)
    }
    else {
      setWishlistCount(0)
      setWish(null)
    }
    setLoading(false)
  }
  async function addtoCartFunc(prodId) {
    let response = await addtoCart(prodId);
    console.log(response);
    setCartNumber(response.data.numOfCartItems)

    if (!isLogin) {
        toast.error(response.response.data.message, {
            duration: 4000,
            position: 'top-center'
        });
        return
    }
    toast.success(response.data.message, {
        duration: 4000,
        position: 'top-center'
    });
    deleteItemFunc(prodId)
}
  async function deleteItemFunc(id) {
    let response = await removeFromwishlist(id);
    console.log(response, "DELETEEEED");
    if (response?.data?.status === 'success') {
      setWishlistCount(response.data.data.length)
      getwishlistFunc();//b3d ma ams7 h-call el get function ashan yt3ml setData gdeda
    }
   
  }

  useEffect(() => {
    if (isLogin != null) {
      getwishlistFunc()
    }
    else {
      return
    }

  }, [isLogin])

  if (loading)
    return <div className="container  py-3 my-4 parent " style={{ minHeight: "100vh" }} >
      <h2 className="col fw-bolder">Wishlist</h2>
      <Loading></Loading>
    </div>
  return (

    <>

      <div className="container  py-3 my-3 rounded-3" style={{ minHeight: "100vh" }}>

        <h2 className="col fw-bolder" >Shop Wishlist</h2>
        {!wish?.data?.length ?
          <div className="container  " style={{ marginTop: "133.205px" }}>
            <div className="row  py-3 rounded-3 my-3 mx-auto" style={{ width: "100%" }}>
              <h3 className='text-center'>Your wishlist is empty</h3>
              <div className="col d-flex justify-content-center align-items-center">
                <img src={emptyCart} alt="emptyCart" width={"200px"} />
              </div>
            </div>
          </div>

          :

          <>

            <div className='container rounded-3 bg-main-light py-3 my-3' >
              

              {wish?.data?.map((prod) =>
                <div className="row m-2 rounded-3 bg-white border-bottom " key={prod.id} style={{ padding: "40px 0px " }} >

                  <div className="col-md-9">
                    <div className="row d-flex align-items-center ">
                      <div className="col-md-2  ">
                        <img src={prod.imageCover} height={100} width={100} alt='product'></img>
                      </div>
                      <div className="col-md-10  ">
                        <p>{prod.title}</p>
                        <p className='text-main'>{prod.price} EGP</p>
                        <span className='cursor-pointer removebutton'
                          onClick={() => deleteItemFunc(prod.id)}><i className='fa-solid fa-trash removebutton pe-2 ' ></i>
                          Remove </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 d-flex align-items-center justify-content-end ">
                    <span>
                    <button className='btn bg-main my-3 text-white w-100' onClick={() => addtoCartFunc(prod.id)}>
                                                    <i className='fa-solid fa-plus ' style={{ marginRight: "6px" }}></i>
                                                    Add to cart
                                                </button>
                    </span>
                  </div>
                  
                </div>
              )
              }
            </div>

          </>
        }
      </div>

    </>
  )
}
