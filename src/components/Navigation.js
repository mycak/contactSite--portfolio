import React, { useEffect, useState } from 'react';
import '../styles/navigation.css';
import {countPercentScrolledSite, spyMenu} from '../helperFiles/helperFunctions';


const Navigation = () => {
    spyMenu();

    const [percScrolled, setPercScrolled] = useState(0);

    const showProgressBar = (perc) => {
            document.documentElement.style.setProperty('--perc', perc + '%');
            if (perc > 1 && perc < 99) {
                document.querySelector('.progressBar--container').classList.add('in');
            } else {
                document.querySelector('.progressBar--container').classList.remove('in')
            }
    }

    const showSignature = perc => {
        if (perc > 20) {
            document.querySelector('.signature--container').classList.add('active');
        } else {
            document.querySelector('.signature--container').classList.remove('active');

        }
    }

    useEffect (() => {
        window.addEventListener('scroll', () => setPercScrolled(countPercentScrolledSite()));
        showProgressBar(percScrolled);
        showSignature(percScrolled);
    },[percScrolled]);

    return (
        <nav className="navigation--container">
            <div className="progressBar--container">
                <div className="progressBar"></div>
                <div className="progressBar--percentage">
                    {percScrolled + '%'}
                </div>
            </div>
            <div className="navigation--text--container">
                <div className="signature--container">
                    <p>Piotr Myszkiewicz</p>
                </div>
                <div className="navigation--links--container">
                    <div className="navigation--link--container"><a href="#header" >Główna</a></div>
                    <div className="navigation--link--container"><a href="#projects">Projekty</a></div>
                    <div className="navigation--link--container"><a href="#stack">Stack</a></div>
                    <div className="navigation--link--container"> <a href="#interests">O mnie</a></div>
                    <div className="navigation--link--container"><a href="#contact">Kontakt</a></div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;