import React, { Component } from "react";

import '../css/banner.css';
import Slider from 'react-slick';
import battambang from '../img/battambang.jpeg';
import angkor from '../img/angkor_wat.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import landscape1 from '../img/landscape1.png';


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
   
    return (
        <div>
            <Slider {...settings}>
                <div className="banner-item">
                  <div className="nest-item-banner">
                    <div>
                      <h3 className="h3">Trip &</h3>
                      <h3 className="h3">Budget to</h3>
                      <h3 className="h3">Temple</h3>
                      <p className="p">Trip Analysis budget with</p>
                      <p className="p">Recommendation</p>
                      <p className="p">for the best place to visit.</p>
                    </div>
                    <div className="div-img">
                      <img src={angkor}></img>
                    </div>
                  </div>
                </div>
                <div className="banner-item">
                  <div className="nest-item-banner">
                    <div>
                      <h3 className="h3">Trip &</h3>
                      <h3 className="h3">Budget to</h3>
                      <h3 className="h3">Cities</h3>
                      <p className="p">Trip Analysis budget with</p>
                      <p className="p">Recommendation</p>
                      <p className="p">for the best place to visit.</p>
                    </div>
                    <div className="div-img">
                      <img src={battambang}></img>
                    </div>
                  </div>
                </div>
            </Slider>
        </div>
    );
    }
};

// export default Banner;
