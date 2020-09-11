import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import '../styles/app.css';


import LoadingPage from './LoadingPage';
import Header from './Header';
import Navigation from './Navigation';
import SectionProjects from './SectionProjects';

const App = (props) => {

    const siteContainer = useRef(null);
    const [mainActive, setMainActive] = useState(false);
    const handleScroll= () => {
        const scroll = Math.round(window.scrollY);
        props.dispatch({type: 'SCROLLY', payload: scroll})
    }

    useEffect(()=>{
        setTimeout(()=>{
            siteContainer.current.classList.add('visible');
            setTimeout(()=>{
                setMainActive(true);
            },100)
        },5500)
    },[]);

    useEffect(()=> {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })



    return (
        <div className="app--container">
            <LoadingPage />
            <div className="site--container" ref={siteContainer}>
                <Header isMainActive={mainActive}/>
                <Navigation isMainActive={mainActive} />
                <SectionProjects />
                <section id="stack" className="section section--projects">
                    <p>essa</p>
                </section>
                <section id="interests" className="section section--projects">
                    <p>essa</p>
                </section>
                <section id="contact" className="section section--projects">
                    <p>contact</p>
                </section>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        scrollY: state
    }
}

export default connect(mapStateToProps)(App);
