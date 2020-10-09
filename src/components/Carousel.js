import React, { useRef } from 'react';
import Slider from 'infinite-react-carousel';
import '../styles/carousel.css';

const Carousel = ({inOut}) => {
    const carousel = useRef(null);
    const settings =  {
      autoplay: false,
      autoplaySpeed: 5000,
      arrows: false,
      dots: true,
      duration: 500,
      shift: 5,
      initialSlide: 3,
      accessibility: false,
      swipe: false
    };
    // if(caro.current){
    //   inOut?caro.current.slickPause() : caro.current.slickPlay();
    // }
    return (
        <Slider { ...settings } ref={carousel}>
          <div>
            <div className="slide--container">
              <div className="slide--photo slide--1">
              </div>
              <div className="slide--description">
                <p>Ex mollit cillum occaecat esse aliqua. Deserunt sit ex exercitation enim voluptate laboris ea quis. Consequat laboris ullamco mollit non nostrud laborum esse veniam pariatur incididunt occaecat. Non ea laborum amet nisi pariatur id elit culpa. Consequat fugiat fugiat elit amet laboris.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="slide--container">
              <div className="slide--photo slide--2">
              </div>
              <div className="slide--description">
                <p>Ex mollit cillum occaecat esse aliqua. Deserunt sit ex exercitation enim voluptate laboris ea quis. Consequat laboris ullamco mollit non nostrud laborum esse veniam pariatur incididunt occaecat. Non ea laborum amet nisi pariatur id elit culpa. Consequat fugiat fugiat elit amet laboris.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="slide--container">
              <div className="slide--photo slide--3">
              </div>
              <div className="slide--description">
                <p>Ex mollit cillum occaecat esse aliqua. Deserunt sit ex exercitation enim voluptate laboris ea quis. Consequat laboris ullamco mollit non nostrud laborum esse veniam pariatur incididunt occaecat. Non ea laborum amet nisi pariatur id elit culpa. Consequat fugiat fugiat elit amet laboris.</p>
              </div>
            </div>
          </div>
        </Slider>
    );
  }


export default Carousel;