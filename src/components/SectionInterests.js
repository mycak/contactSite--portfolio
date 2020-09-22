import React, { useRef, useState, useEffect } from 'react';
import '../styles/sectionInterests.css';

const SectionInterests = () => {

    const [isSectionActive, setIsSectionActive] = useState(false);
    const section = useRef(null);

    useEffect(()=> {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    const handleScroll = () => {
        window.scrollY > section.current.offsetTop - 100 ? setIsSectionActive(true):setIsSectionActive(false);
    }

    const isActiveSection = isSectionActive ? 'active' : '';

    return (
        <section id="interests" className="section section--interests" ref={section}>
            <div className={`interests--leftside--container ${isActiveSection}`}>
                
            </div>
            <div className={`interests--rightside--container ${isActiveSection}`}>
                
            </div>
        </section>
    );
};

export default SectionInterests;