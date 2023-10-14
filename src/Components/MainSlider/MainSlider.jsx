import React, { useState } from "react";
import Slider from "react-slick";
import axios from 'axios'
import { useQuery } from 'react-query';
import slide1 from "../../assets/slider-image-1.jpeg"
import slide2 from "../../assets/slider-image-2.jpeg"
import slide3 from "../../assets/slider-image-3.jpeg"
export default function MainSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplayspeed:1500
    };
    let BaseUrl = 'https://ecommerce.routemisr.com'

    let sliders = [slide1, slide2, slide3]

    function getProducts() {
        return axios.get(`${BaseUrl}/api/v1/categories`)
    }
    const { data, isLoading, isError, isFetched } = useQuery('categorySlider', getProducts, {
        cacheTime: 30000
    })
    console.log(data?.data.data, "MAWW")

    return (
        <div className="container">
            <div className="row gx-0 h-50 my-4">
                <div className="col-md-9 ">
                    <Slider {...settings}>
                        {sliders.map((slide) =>
                            <img src={slide} height={400}></img>)}
                    </Slider>
                </div>
                <div className="col-md-3">
                    <Slider {...settings}>
                        {sliders.map((slide) =>
                            <img src={slide} height={200} ></img>)}
                    </Slider>
                    <Slider {...settings}>
                        {sliders.map((slide) =>
                            <img src={slide} height={200}></img>)}
                    </Slider>
                </div>

            </div>
        </div>
    );
}