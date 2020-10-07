import React, { useState } from 'react';
import '../styles/mobileNavigation.css';

const MobileNavigation = ({isMainActive}) => {
    const [isLayerActive, setIsLayerActive]= useState(false);

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
                <div className={`mobileNav--menu-buttons ${isActiveLayer}`}>
                    <button data-id="#header" onClick={handleClick}>Main</button>
                    <button data-id="#projectsMobile" onClick={handleClick}>Projects</button>
                    <button data-id="#stack" onClick={handleClick}>Stack</button>
                    <button data-id="#interests" onClick={handleClick}>Passion</button>
                    <button data-id="#contact" onClick={handleClick}>Contact</button>
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