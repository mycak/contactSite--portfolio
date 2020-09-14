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
                <div className={`header--leftside--container ${isActiveHeader1} ${isActiveHeader3} `}>
                </div>
                <div className="header--main--container">
                    <div className="header--text--container">
                        <div className={`header--title ${isActiveHeader2}`}>
                            <p><span className="gradient-text">Piotr Myszkiewicz</span></p>
                        </div>
                        <div className={`header--subtitle ${isActiveHeader2}`}>
                            <p>Front-end Developer</p>
                        </div>
                        <div className={`header--description ${isActiveHeader2}`}>
                            <p>Voluptate sit occaecat irure adipisicing et id deserunt qui <span className="highlighted-text">duis</span> duis velit elit velit laboris. Minim incididunt minim ullamco <span className="highlighted-text">consequat</span> nostrud consequat exercitation. Enim anim non dolor et proident ut officia.Nisi mollit aliquip nisi aliquip occaecat <span className="highlighted-text">laboris</span> deserunt</p>
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