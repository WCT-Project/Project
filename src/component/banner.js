import React, { Component } from "react";

import '../css/banner.css';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import landscape1 from '../img/landscape1.png';

export default class Banner extends Component {
    render() {

    let bannerStyle = {
        width: '100%',
        height: '550px'
        // other styles...
      };
    
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
   
    return (
        <div>
            <Slider {...settings}>
                <div className="banner-item">

                </div>
                
            </Slider>
        </div>
    );
    }
};

// export default Banner;
