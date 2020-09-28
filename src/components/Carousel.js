import React from 'react';
import Slider from 'infinite-react-carousel';
import '../styles/carousel.css';

const Carousel = () => {

    const settings =  {
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      dots: true,
      duration: 200,
      shift: 50
    };
    return (
        <Slider { ...settings }>
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