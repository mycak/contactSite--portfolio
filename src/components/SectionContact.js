import React, { useEffect, useRef, useState } from 'react';
import '../styles/sectionContact.css';

const SectionContact = () => {

    const section = useRef(null);
    const [isActiveTitle, setIsActiveTitle] = useState(false);
    const [isActiveFooter, setIsActiveFooter] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });

    const handleScroll = () => {
        if(window.scrollY > section.current.offsetTop - .5*section.current.offsetHeight) {
            setIsActiveTitle(true);
        } else {setIsActiveTitle(false)};
        if(window.scrollY > section.current.offsetTop - .3*section.current.offsetHeight) {
            setIsActiveFooter(true);
        } else {setIsActiveFooter(false)}
    }
    const isTitleActive = isActiveTitle?'active':'';
    const isFooterActive = isActiveFooter?'active':'';

    return (
        <section id="contact" className="sections pyMob section--contact" ref={section}>
            <div className="contact--container">
                <div className={`contact--title ${isTitleActive}`}>
                    <h2>Let's make something <span className={`footer--underline ${isFooterActive}`}>amazing</span> together.</h2>
                </div>
                <footer className={`footer ${isFooterActive}`}>
                    <div className="footer--options">
                        <p>Email. <span className="footer--link fixed"><a href="mailto:mycak@wp.pl">mycak@wp.pl</a></span></p>
                        <p>Phone. <span className="footer--link"><a href="tel:+48505184510">+48 505 184 510</a></span></p>
                        <p>GitHub.<span className="footer--link"><a href="https://github.com/mycak">https://github.com/mycak</a></span></p>
                    </div>
                    <div className="footer--signature">
                        <p>Copyright:<span className="footer--layer">Piotr Myszkiewicz</span></p>
                        <p>Design:<span className="footer--layer fixed">Piotr Myszkiewicz</span></p>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default SectionContact;