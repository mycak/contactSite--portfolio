import React, { useEffect, useState } from 'react';
import '../styles/navigation.css';
import {countPercentScrolledSite, spyMenuActive} from '../helperFiles/helperFunctions';



const Navigation = ({isMainActive}) => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    spyMenuActive();

    useEffect(()=> {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    useEffect (()=>{
        showProgressBar(scrollPercentage);
    },[scrollPercentage])

    const handleScroll = () => setScrollPercentage(countPercentScrolledSite(window.scrollY));
    const showProgressBar = (perc) => document.documentElement.style.setProperty('--perc', perc + '%');
    const scrollToSection = e => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    }

    const inOutProgressBar = (scrollPercentage > 1 && scrollPercentage < 99) ? 'in':'';
    const inOutSignature = (scrollPercentage > 20) ? 'active' : '';

    return (
        <nav className="navigation--container">
            <div className={`progressBar--container ${inOutProgressBar}`}>
                <div className="progressBar"></div>
                <div className="progressBar--percentage">
                    {scrollPercentage + '%'}
                </div>
            </div>
            <div className="navigation--text--container">
                <div className={`signature--container ${inOutSignature}`}>
                    <p>Piotr Myszkiewicz</p>
                </div>
                <div className={`navigation--links--container ${isMainActive? 'in':''}`} >
                    <div className="navigation--link--container"><a href="#header" onClick={scrollToSection}>Main</a></div>
                    <div className="navigation--link--container"><a href="#projects" onClick={scrollToSection}>Projects</a></div>
                    <div className="navigation--link--container"><a href="#stack" onClick={scrollToSection}>Stack</a></div>
                    <div className="navigation--link--container"> <a href="#interests" onClick={scrollToSection}>Passion</a></div>
                    <div className="navigation--link--container"><a href="#contact" onClick={scrollToSection}>Contact</a></div>
                </div>
            </div>
        </nav>
    )
};

export default Navigation;
