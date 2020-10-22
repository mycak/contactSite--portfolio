import React from 'react';
import Slider from 'infinite-react-carousel';
import '../styles/carousel.css';
import { interestSectionText } from '../helperFiles/dataText';

const Carousel = () => {
    const settings =  {
      autoplay: false,
      autoplaySpeed: 5000,
      arrows: false,
      dots: true,
      duration: 500,
      shift: 115,
      initialSlide: 3,
      accessibility: false,
      swipe: false
    };
    return (
        <Slider { ...settings }>
          <div>
            <div className="slide--container">
              <div className="slide--photo slide--1">
              </div>
              <div className="slide--description">
                <p>{interestSectionText[1]}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="slide--container">
              <div className="slide--photo slide--2">
              </div>
              <div className="slide--description">
                <p>{interestSectionText[0]}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="slide--container">
              <div className="slide--photo slide--3">
              </div>
              <div className="slide--description">
                <p>{interestSectionText[2]}</p>
              </div>
            </div>
          </div>
        </Slider>
    );
  }


export default Carousel;