import React, { useRef } from 'react';
import { connect } from 'react-redux';
import '../styles/header.css';

const Header = ({isMainActive, scrollY}) => {

    const header = useRef(null);
    const headerBottom = header.current? header.current.offsetHeight : '';

    const isActiveHeader2 = isMainActive ? 'active' : '';
    const isActiveHeader = (isMainActive && scrollY < .7*headerBottom) ? 'active' : '';
    const isActiveHeader3 = (scrollY >= .7*headerBottom) ? 'roll' : '';
    
    return (
        <section className="section section--header" id="header" ref={header}>
            <header className="header--container">
                <div className={`header--leftside--container ${isActiveHeader3} ${isActiveHeader2}`}>
                
                </div>
                <div className="header--main--container">
                    <div className="header--text--container">
                        <div className={`header--title ${isActiveHeader}`}>
                            <p><span className="gradient-text">Piotr Myszkiewicz</span></p>
                        </div>
                        <div className={`header--subtitle ${isActiveHeader}`}>
                            <p>Front-end Developer</p>
                        </div>
                        <div className={`header--description ${isActiveHeader}`}>
                            <p>Voluptate sit occaecat irure adipisicing et id deserunt qui <span className="highlighted-text">duis</span> duis velit elit velit laboris. Minim incididunt minim ullamco <span className="highlighted-text">consequat</span> nostrud consequat exercitation. Enim anim non dolor et proident ut officia.Nisi mollit aliquip nisi aliquip occaecat <span className="highlighted-text">laboris</span> deserunt</p>
                        </div>
                    </div>
                    <div className={`header--pic--container ${isActiveHeader}`}>
                        {/* <img src={img} alt="portrait" /> */}
                    </div>
                </div>
            </header>
        </section>
    )
}


const mapStateToProps = (state) => {
    return {
        scrollY: state
    }
};

export default connect(mapStateToProps)(Header)