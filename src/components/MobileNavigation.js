import React, { useState } from 'react';
import '../styles/mobileNavigation.css';
import { spyMenu } from '../helperFiles/helperFunctions';

const MobileNavigation = ({isMainActive}) => {
    const [isLayerActive, setIsLayerActive]= useState(false);
    spyMenu('.spyMob', '.mobile--nav--button', 'active');

    const handleMenuClick = ()=> {
        setIsLayerActive(!isLayerActive);
    }
    const handleClick = e => {
        setIsLayerActive(!isLayerActive);
        e.persist();
        setTimeout(()=>{
            document.querySelector(e.target.dataset.id).scrollIntoView({
            behavior: 'smooth'
        })
        },800)

    }
    const isActiveMain = isMainActive ? 'active' : ''
    const isActiveLayer = isLayerActive ? 'active': '';
    const nameMainButton = isLayerActive ? 'CLOSE' : 'MENU'
    return (
        <div className={`mobileNav--container ${isActiveMain}`}>
            <div className={`mobileNav--menu--layer ${isActiveLayer}`}>
                <div className="mobileNav--logo">
                    <p>Piotr</p>
                    <p>Myszkiewicz</p>
                </div>
                <div className={`mobileNav--menu-buttons ${isActiveLayer}`}>
                    <button className="mobile--nav--button" data-key={0} data-id="#header" onClick={handleClick}>Main</button>
                    <button className="mobile--nav--button projects--button" data-key={1} data-id="#projects" onClick={handleClick}>Projects</button>
                    <button className="mobile--nav--button projects--mobile--button" data-key={1} data-id="#projectsMobile" onClick={handleClick}>Projects</button>
                    <button className="mobile--nav--button" data-key={2} data-id="#stack" onClick={handleClick}>Stack</button>
                    <button className="mobile--nav--button" data-key={3} data-id="#interests" onClick={handleClick}>Passion</button>
                    <button className="mobile--nav--button" data-key={4} data-id="#contact" onClick={handleClick}>Contact</button>
                </div>
            </div>
            <div className="mobileNav--sidebar">
                <div className="mobileNav--button--container">
                    <button className={`${isActiveLayer}`} onClick={handleMenuClick}>{nameMainButton}</button>
                </div>
            </div>
        </div>
    );
};

export default MobileNavigation;