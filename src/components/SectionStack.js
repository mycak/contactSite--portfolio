import React, { useEffect, useRef, useState } from 'react';
import '../styles/sectionStack.css';
import { stackSectionText } from '../helperFiles/dataText';
import AnimatedPhoto from './AnimatedPhoto';
import img0 from '../helperFiles/images/react.png';
import img1 from '../helperFiles/images/js.jpg';
import img2 from '../helperFiles/images/css.jpeg';
import img3 from '../helperFiles/images/git.png';

const SectionStack = () => {

    const [isSectionActive, setIsSectionActive] = useState(false);
    const [isSectionPassed, setIsSectionPassed] = useState(false);
    const stackSection = useRef(null);
    const leftSide = useRef(null);
    const rightSide = useRef(null);

    useEffect(()=> {

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    const handleScroll = () => {
        window.scrollY >= stackSection.current.offsetTop -400 ? setIsSectionActive(true):setIsSectionActive(false);
        (window.scrollY > stackSection.current.offsetTop + stackSection.current.offsetHeight-100) ? setIsSectionPassed(true):setIsSectionPassed(false);

        const allPics = [...leftSide.current.children, ...rightSide.current.children];
        allPics.forEach(pic => {
            const top = pic.offsetTop;
            const bottom = pic.offsetTop + pic.offsetHeight;
            if(window.scrollY + window.innerHeight> top && window.scrollY < bottom) {
                pic.classList.add('active')
            } else {
                pic.classList.remove('active')
            }
        })

    };

    const isActiveSection = isSectionActive ? 'active':'';
    const isPassedSection = isSectionPassed ? 'out' : '';

    return (
        <section id="stack" className="section spyMob section--stack" ref={stackSection}>
            <div className={`leftside--container stack--leftside--container ${isPassedSection}`}>
                <div className={`stack--header--container ${isActiveSection}`}>
                    <h2>Stack</h2>
                </div>
                <div className={`leftside--pic--container ${isPassedSection}`} ref={leftSide}>
                    <AnimatedPhoto img={img0} text={stackSectionText[0]} />
                    <AnimatedPhoto img={img1} text={stackSectionText[1]} />
                </div>
            </div>
            <div className={`stack--rightside--container ${isPassedSection}`}>
                <div className={`rightside--pic--container ${isPassedSection}`} ref={rightSide}>
                    <AnimatedPhoto img={img2} text={stackSectionText[2]}/>
                    <AnimatedPhoto img={img3} text={stackSectionText[3]}/>
                </div>
            </div>
        </section>
);
};

export default SectionStack;