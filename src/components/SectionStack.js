import React, { useEffect, useRef, useState } from 'react';
import '../styles/sectionStack.css';
import { stackSectionText } from '../helperFiles/dataText';
import AnimatedPhoto from './AnimatedPhoto';
import img0 from '../helperFiles/images/react.png';
import img1 from '../helperFiles/images/js.jpg';
import img2 from '../helperFiles/images/css.jpeg';
import img3 from '../helperFiles/images/git.png';

const SectionStack = () => {
    const [isSectionActive, setIsSectionActive] = useState(false)
    const stackSection = useRef(null);
    const leftSide = useRef(null);
    const rightSide = useRef(null);

    useEffect(()=> {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    const handleScroll = () => {

        window.scrollY >= stackSection.current.offsetTop -1 ? setIsSectionActive(true) : setIsSectionActive(false);
        if(window.scrollY>4000){
            const allPics = [...leftSide.current.children, ...rightSide.current.children];
            console.log(allPics)
            allPics.forEach(pic => {
                const top = pic.offsetTop;
                const height = pic.offsetHeight;
                if(window.scrollY + 300> top ) {
                    pic.classList.add('active')
                } else {
                    pic.classList.remove('active')
                }
            })
        }
    };

    const isActiveSection = isSectionActive ? 'active':'';
    return (
        <section id="stack" className="section section--stack" ref={stackSection}>
            <div className={`stack--leftside--container ${isActiveSection}`}>
                <div className="stack--header--container">
                    <h2>Stack</h2>
                </div>
                <div className="leftside--pic--container" ref={leftSide}>
                    <AnimatedPhoto img={img0} text={stackSectionText[0]} />
                    <AnimatedPhoto img={img1} text={stackSectionText[1]} />
                </div>
            </div>
            <div className={`stack--rightside--container ${isActiveSection}`}>
                <div className="rightside--pic--container" ref={rightSide}>
                    <AnimatedPhoto img={img2} text={stackSectionText[2]}/>
                    <AnimatedPhoto img={img3} text={stackSectionText[3]}/>
                </div>
            </div>
        </section>
);
};

export default SectionStack;