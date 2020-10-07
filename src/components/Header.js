import React, { useEffect, useRef, useState } from 'react';
import '../styles/header.css';

const Header = ({isMainActive}) => {
    const header = useRef(null);
    const headerBottom = header.current? header.current.offsetHeight : '';
    const [isContentActive, setIsContentActive] = useState(false);
    const [isOutsideHeader, setIsOutsideHeader] = useState(false);

    useEffect(()=> {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    });

    useEffect(()=> {
        setIsContentActive(isMainActive);
    },[isMainActive])

    const handleScroll = () => {
        if(window.scrollY < .9*headerBottom) {
            setIsContentActive(true);
        } else setIsContentActive(false);

        if (window.scrollY >= .9*headerBottom) {
            setIsOutsideHeader(true);
        } else setIsOutsideHeader(false);
    }
    const isActiveHeader1 = isMainActive ? 'active' : '';
    const isActiveHeader2 = isContentActive ? 'active' : '';
    const isActiveHeader3 = isOutsideHeader ? 'roll' : '';

    return (
        <section className="section section--header" id="header" ref={header}>
            <header className="header--container">
                <div className={`leftside--container header--leftside--container ${isActiveHeader1} ${isActiveHeader3} `}>
                </div>
                <div className="header--main--container">
                    <div className="header--text--container">
                        <div className={`header--title ${isActiveHeader2}`}>
                            <p>Piotr Myszkiewicz</p>
                        </div>
                        <div className={`header--subtitle ${isActiveHeader2}`}>
                            <p>Front-end Developer</p>
                        </div>
                        <div className={`header--description ${isActiveHeader2}`}>
                            <p>Hello ! I'm <span className="highlighted-text">31</span> years old front-end developer living in <span className="highlighted-text">Warsaw</span>. I search opportunity to develop mysefl during creating and designing websites.</p>
                        </div>
                        <div className={`header--arrow ${isActiveHeader2}`}>
                            <div className="header--arrow--description bounce">
                                <p>Scroll</p>
                                <p>down</p>
                            </div>
                            <div className={`arrow bounce`}></div>
                        </div>
                    </div>
                    <div className={`header--pic--container ${isActiveHeader2}`}>
                    </div>
                </div>
            </header>
        </section>
    )
}

export default Header;