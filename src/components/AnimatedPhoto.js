import React from 'react';
import '../styles/animatedPhoto.css'

const AnimatedPhoto = ({img, text}) => {
    return (
        <div className="animated--photo">
            <figure className="effect-milo">
                <img src={img} alt="img11"/>
                <figcaption>
                    <h2>{text.title.header}<span>{text.title.span}</span></h2>
                    <p>{text.p1}</p>
                    <p>{text.p2}</p>
                    <p>{text.p3}</p>
                    <a href="#">View more</a>
                </figcaption>
            </figure>
        </div>
    );
};

export default AnimatedPhoto;


