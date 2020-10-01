import React, { useRef, useState, useEffect } from 'react';
import '../styles/sectionInterests.css';
import Carousel from './Carousel';

const SectionInterests = () => {

    const [isSectionActive, setIsSectionActive] = useState(false);
    const [isSliderActive, setIsSliderActive] = useState(false);
    const [isSliderShown, setIsSlidershown] = useState(false);
    const section = useRef(null);
    const leftSide = useRef(null);

    useEffect(()=> {
        const left = leftSide.current;
        left.addEventListener('transitionend', handleCarousel);
        window.addEventListener('scroll', handleScroll);
        return () => {
            left.removeEventListener('transitionend', handleCarousel);
            window.removeEventListener('scroll', handleScroll);
        }
    })
    const handleCarousel = (e) => {
        if (isSliderActive === false && e.propertyName === 'width' && e.target.classList.contains('active') ){
            setIsSliderActive(true);
            setTimeout(()=> {
                setIsSlidershown(true);
            },100);
        }
    }

    const handleScroll = () => {
        const sectionTop = section.current.offsetTop;
        const sectionHeight = section.current.offsetHeight;
        (window.scrollY > sectionTop - 100)?setIsSectionActive(true):setIsSectionActive(false);
        if(window.scrollY< sectionTop) setIsSlidershown(false);
        if(window.scrollY > sectionTop && isSliderActive && window.scrollY <= sectionTop + sectionHeight -200){
            setIsSlidershown(true);
        }
        if(window.scrollY< sectionTop-100) setIsSliderActive(false);
        if(window.scrollY > sectionTop + sectionHeight -200 ) setIsSlidershown(false);
    };

    const isActiveSection = isSectionActive ? 'active' : '';
    const isActiveSlider = isSliderActive ? 'active' : '';
    const isShownSlider = isSliderShown ? 'in' : '';

    return (
        <section  className="section section--interests" ref={section}>
            <div className={`interests--leftside--container ${isActiveSection}`} ref={leftSide}>
                <div className="interests--wrapper">
                    <div className={`interests--title ${isActiveSlider}`} id="interests">
                        <h2>Passion</h2>
                    </div>
                    <div className={`interests--carousel--wrapper ${isActiveSlider} ${isShownSlider}`}>
                        <Carousel />
                    </div>
                </div>
            </div>
            <div className={`interests--rightside--container ${isActiveSection}`}>
            </div>
        </section>
    );
};

export default SectionInterests;