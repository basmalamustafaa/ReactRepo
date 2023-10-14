import React from 'react'
import { useQuery } from 'react-query'
import GetApi from '../CustomHook/GetApi'
import Loading from '../Loading'
import {Helmet} from "react-helmet";

export default function Brand() {

    let{isLoading,data}=GetApi('brands','brands')
    console.log(data?.data?.data);
  return (
    <div className='container'>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Brands</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        {isLoading?
            <div className='container h-100' style={{minHeight:"100vh"}}>
            <Loading></Loading>
            </div>: <>
            <div className="row">
            {data?.data?.data.map((brand)=>
            <div className='col-md-2 g-3' key={brand._id}>
                <div className='cursor-pointer product'>
                <img src={brand.image} alt={brand.name} className='w-100'></img>
               <p className='text-center'> {brand.name}</p>
               </div>
            </div>)}
            </div>
            </>
            }
    </div>
  )
}
