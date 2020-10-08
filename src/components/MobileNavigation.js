import React, { useState } from 'react';
import '../styles/mobileNavigation.css';

const MobileNavigation = ({isMainActive}) => {
    const [isLayerActive, setIsLayerActive]= useState(false);
    const spy =  () => {
        document.addEventListener('DOMContentLoaded', function(){
            const sections = document.querySelectorAll('.spyMob');
            const menu_links = document.querySelectorAll('.mobile--nav--button');
            const makeActive = (link) => menu_links[link].classList.add("active");
            const removeActive = (link) => menu_links[link].classList.remove("active");
            const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));
            const sectionMargin = 200;
            let currentActive = 0;
            document.querySelector('.navigation--link--container a').classList.add('active');
    
      // listen for scroll events
            window.addEventListener("scroll", () => {
                const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin ) - 1;
                if (current !== currentActive) {
                removeAllActive();
                currentActive = current;
                makeActive(current);
                }
            });
        },false);
    };
    spy();
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
                    <button className="mobile--nav--button" data-id="#header" onClick={handleClick}>Main</button>
                    <button className="mobile--nav--button projects--button" data-id="#projects" onClick={handleClick}>Projects</button>
                    <button className="mobile--nav--button projects--mobile--button" data-id="#projectsMobile" onClick={handleClick}>Projects</button>
                    <button className="mobile--nav--button" data-id="#stack" onClick={handleClick}>Stack</button>
                    <button className="mobile--nav--button" data-id="#interests" onClick={handleClick}>Passion</button>
                    <button className="mobile--nav--button" data-id="#contact" onClick={handleClick}>Contact</button>
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