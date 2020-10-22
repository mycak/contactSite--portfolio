import React, { useEffect, useRef, useState } from 'react';
import '../styles/app.css';


import LoadingPage from './LoadingPage';
import Header from './Header';
import Navigation from './Navigation';
import SectionProjects from './SectionProjects';
import SectionStack from './SectionStack';
import SectionInterests from './SectionInterests';
import SectionContact from './SectionContact';
import MobileNavigation from './MobileNavigation'

const App = () => {
    const siteContainer = useRef(null);
    const [mainActive, setMainActive] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            siteContainer.current.classList.add('visible');
            setTimeout(()=>{
                setMainActive(true);
            },100)
        },5500)
    },[]);

    return (
        <div className="app--container">
            <LoadingPage />
            <div className="site--container" ref={siteContainer}>
                <Header isMainActive={mainActive}/>
                <Navigation isMainActive={mainActive} />
                <SectionProjects />
                {/* <SectionStack /> */}
                <SectionInterests />
                <SectionContact />
                <MobileNavigation isMainActive={mainActive}/>
            </div>
        </div>
    )
}

export default App;
