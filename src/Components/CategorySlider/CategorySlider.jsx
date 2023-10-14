import React, { useState } from "react";
import Slider from "react-slick";
import axios from 'axios'
import { useQuery } from 'react-query';
export default function CategorySlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 2
  };
  let BaseUrl = 'https://ecommerce.routemisr.com'

  function getProducts() {
    return axios.get(`${BaseUrl}/api/v1/categories`)
}
const { data, isLoading, isError, isFetched } = useQuery('categorySlider', getProducts, {
    cacheTime: 30000
})
console.log(data?.data.data,"MAWW")

  return (
      <div className="container my-3">
      <h2>Shop All Categories</h2>
          <Slider {...settings}>
        {data?.data.data.map((categoryImage)=>
             <img src={categoryImage.image} className="w-100 cat"></img>
        )}  
        </Slider>
        </div>
  );
}