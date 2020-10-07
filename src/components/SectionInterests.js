import React, { useRef, useState, useEffect } from 'react';
import '../styles/sectionInterests.css';
import Carousel from './Carousel';

const SectionInterests = () => {
    const [isSectionActive, setIsSectionActive] = useState(false);
    const [isSliderActive, setIsSliderActive] = useState(false);
    const [isSliderShown, setIsSlidershown] = useState(false);
    const [isAfterTransition, setIsAfterTransition] = useState(false);

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
                setIsAfterTransition(true);
            },100);
        }
    }

    const handleScroll = () => {
        const sectionTop = section.current.offsetTop;
        const sectionHeight = section.current.offsetHeight;
        const scrollAtIn = window.scrollY + window.innerHeight;
        const sectionBottom = sectionTop + sectionHeight;
        const halfSection = sectionTop + .5*sectionHeight;

        (window.scrollY > sectionTop-300)?setIsSectionActive(true):setIsSectionActive(false);
        if(window.scrollY < sectionTop-300)setIsAfterTransition(false);
        (window.scrollY > sectionTop - 280 && isAfterTransition)?setIsSliderActive(true):setIsSliderActive(false);

        if(scrollAtIn < sectionBottom + 200  && scrollAtIn > halfSection && isSliderActive) setIsSlidershown(true);
        if(scrollAtIn > sectionBottom + 200 || scrollAtIn < halfSection) setIsSlidershown(false);
    };

    const isActiveSection = isSectionActive ? 'active' : '';
    const isActiveSlider = isSliderActive ? 'active' : '';
    const isShownSlider = isSliderShown ? 'in' : '';

    return (
        <section  className="section section--interests" ref={section}>
            <div className={`leftside--container interests--leftside--container ${isActiveSection}`} ref={leftSide}>
                <div className="interests--wrapper">
                    <div className={`interests--title ${isActiveSection}`} id="interests">
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