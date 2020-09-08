import React, { useEffect } from 'react';
import '../styles/header.css';
import img from '../helperFiles/images/1.png'

const Header = () => {

    const handleVisibility = (e) => {
        const headerTextDivs = document.querySelector('.header--text--container').children;
        const headerPicDiv = document.querySelector('.header--pic--container');
        const scrollY = window.scrollY;
        const headerBottom =  document.querySelector('#header').offsetHeight;
        if (scrollY === 0) return;
        if (scrollY > .6*headerBottom) {
            [...headerTextDivs].forEach(div => div.classList.remove('active'));
            headerPicDiv.classList.remove('active');
        } else {
            [...headerTextDivs].forEach(div => div.classList.add('active'));
            headerPicDiv.classList.add('active');
        }

        
    }

    useEffect (() => {
        document.addEventListener('scroll', handleVisibility);
        return () => document.removeEventListener('scroll', handleVisibility)
    },[])

    return (
        <section className="section section--header" id="header">
            <header className="header--container">
                <div className="header--leftside--container">

                </div>
                <div className="header--main--container">
                    <div className="header--text--container">
                        <div className="header--title">
                            <p><span className="gradient-text">Piotr Myszkiewicz</span></p>
                        </div>
                        <div className="header--subtitle">
                            <p>Front-end Developer</p>
                        </div>
                        <div className="header--decription">
                            <p>Voluptate sit occaecat irure adipisicing et id deserunt qui <span className="highlighted-text">duis</span> duis velit elit velit laboris. Minim incididunt minim ullamco <span className="highlighted-text">consequat</span> nostrud consequat exercitation. Enim anim non dolor et proident ut officia.Nisi mollit aliquip nisi aliquip occaecat <span className="highlighted-text">laboris</span> deserunt</p>
                        </div>
                    </div>
                    <div className="header--pic--container">
                        <img src={img} alt="portrait" />
                    </div>
                </div>
            </header>
        </section>
    )
}

export default Header;