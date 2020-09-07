import React, { useEffect } from 'react';
import '../styles/app.css';
import {removeAnimation} from '../helperFiles/helperFunctions';


import LoadingPage from './LoadingPage';
import Header from './Header';
import Navigation from './Navigation';



const App = () => {

    useEffect(() => {
        removeAnimation();
    });

    return (
        <div className="app--container">
            <LoadingPage />
            <div className="site--container">
                <Header />
                <Navigation />
                <section id="projects" className="section section--projects">
                    <p>essa</p>
                </section>
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

export default App;