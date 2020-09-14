import React, { useRef } from 'react';
import '../styles/navigation.css';
import {countPercentScrolledSite, spyMenuActive} from '../helperFiles/helperFunctions';
import { connect } from 'react-redux';


const Navigation = ({isMainActive, scrollY}) => {
    const showProgressBar = (perc) => document.documentElement.style.setProperty('--perc', perc + '%');
    const navigationLinks = useRef(null);
    let perc = countPercentScrolledSite(scrollY);
    spyMenuActive();
    showProgressBar(perc);

    const inOutProgressBar = (perc > 1 && perc < 99) ? 'in':'';
    const inOutSignature = (perc > 20) ? 'active' : '';


    const scrollToSection = (e) => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <nav className="navigation--container">
            <div className={`progressBar--container ${inOutProgressBar}`}>
                <div className="progressBar"></div>
                <div className="progressBar--percentage">
                    {perc + '%'}
                </div>
            </div>
            <div className="navigation--text--container">
                <div className={`signature--container ${inOutSignature}`}>
                    <p>PM</p>
                </div>
                <div className={`navigation--links--container ${isMainActive? 'in':''}`} useref={navigationLinks}>
                    <div className="navigation--link--container"><a href="#header" onClick={scrollToSection}>Główna</a></div>
                    <div className="navigation--link--container"><a href="#projects" onClick={scrollToSection}>Projekty</a></div>
                    <div className="navigation--link--container"><a href="#stack" onClick={scrollToSection}>Stack</a></div>
                    <div className="navigation--link--container"> <a href="#interests" onClick={scrollToSection}>O mnie</a></div>
                    <div className="navigation--link--container"><a href="#contact" onClick={scrollToSection}>Kontakt</a></div>
                </div>
            </div>
        </nav>
    )
};


const mapStateToProps = (state) => {
    return {
        scrollY: state
    }
};

export default connect(mapStateToProps)(Navigation);
