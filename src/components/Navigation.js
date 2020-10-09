import React, { useEffect, useState } from 'react';
import '../styles/navigation.css';
import {countPercentScrolledSite, spyMenu} from '../helperFiles/helperFunctions';

const Navigation = ({isMainActive}) => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    spyMenu('.section', '.navigation--link--container button', 'navLink--active');

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
        document.querySelector(e.target.dataset.id).scrollIntoView({
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
                    <div  className="navigation--link--container"><button data-id="#header" data-key='0' onClick={scrollToSection}>Main</button></div>
                    <div  className="navigation--link--container"><button data-id="#projects" data-key='1' onClick={scrollToSection}>Projects</button></div>
                    <div data-key='2' className="navigation--link--container"><button data-id="#stack" data-key='2' onClick={scrollToSection}>Stack</button></div>
                    <div data-key='3' className="navigation--link--container"><button data-id="#interests" data-key='3'  onClick={scrollToSection}>Passion</button></div>
                    <div data-key='4' className="navigation--link--container"><button data-id="#contact"data-key='4' onClick={scrollToSection}>Contact</button></div>
                </div>
            </div>
        </nav>
    )
};

export default Navigation;
