import React, { useContext } from 'react'
import { Helmet } from "react-helmet";
import { useQuery } from 'react-query'
import GetApi from '../CustomHook/GetApi'
import Loading from '../Loading'
import { CartContext } from '../../Context/CartContext';
import toast, { Toaster } from 'react-hot-toast';
import { UserContext } from '../../Context/UserToken';
import { Link } from 'react-router-dom';
export default function Categories() {


    let { isLogin } = useContext(UserContext)
    let { cartNumber, setCartNumber } = useContext(CartContext);

    let { isLoading, data } = GetApi('categories', 'categories')
    console.log(data?.data?.data);

    return (
        <div className='container my-3 py-3' style={{ minHeight: "100vh" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>All Categories</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {isLoading ?
        <div className='container h-100' style={{ minHeight: "100vh" }}>
          <Loading></Loading>
        </div> : <>
        <h3>All Categories</h3>
          <div className="row ">
            {
              data?.data?.data.map((category) =>
                <div className='col-md-2 cart-box ' key={category._id}>
                  <div className='product p-3 cursor-pointer'>
                    <img className='w-100 cat' src={category.image}></img>
                  
                    <p className='fw-bold text-center my-2'>{category.name}</p>
                  </div>

                </div>)
            }

          </div>
        </>
      }

    </div>
    )
}
