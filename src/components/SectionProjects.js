import React, { useRef} from 'react';
import { connect } from 'react-redux';
import '../styles/sectionProjects.css'
import img1 from '../helperFiles/images/proj-1.jpeg';
import img2 from '../helperFiles/images/proj-2.jpeg';
import img3 from '../helperFiles/images/proj-3.jpeg';
import img4 from '../helperFiles/images/proj-4.jpeg';

const SectionProjects = ({scrollY}) => {
    const projectsContainer = useRef(null);
    const pictureContainer = useRef(null);
    const leftSideContainer = useRef(null);
    const leftSideTextContainer = useRef(null);
    const projectsContainerTop = (projectsContainer.current) ? projectsContainer.current.offsetTop : '';
    const projectsContainerBottom = (projectsContainer.current) ? projectsContainer.current.offsetTop + projectsContainer.current.offsetHeight: '';
    const isActiveSection = (scrollY > .7*(projectsContainerTop)) ? 'active' : '';
 
   function leftSideIn () {
            if(leftSideContainer.current && scrollY > leftSideContainer.current.offsetTop && scrollY < projectsContainerBottom - window.innerHeight){
            leftSideTextContainer.current.style.width = leftSideContainer.current.offsetWidth +'px';
            return 'active'
        } else return '';
    }

    if (scrollY>400) {
        const projectPics = [...pictureContainer.current.children]
        projectPics.forEach(pic => {
            if (pic.getBoundingClientRect().top){
            console.log('')
            }
        })
    }

    return (
        <section id="projects" className="section section--projects" ref={projectsContainer}>
            <div className={`projects--leftside--container ${isActiveSection}`} ref={leftSideContainer}>
                <div className={`project--text--container ${leftSideIn()}`} ref={leftSideTextContainer}>
                    <p>Mycha</p>
                </div>
            </div>
            <div className="projects--rightside--container">
                <div className="projects--pics--container" ref={pictureContainer}>
                    <div className="projects--pic--container">
                        <img src={img1} alt="proj"></img>
                    </div>
                    <div className="projects--pic--container">
                        <img src={img2} alt="proj"></img>
                    </div>
                    <div className="projects--pic--container">
                        <img src={img3} alt="proj"></img>
                    </div>
                    <div className="projects--pic--container">
                        <img src={img4} alt="proj"></img>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        scrollY: state
    }
};

export default connect(mapStateToProps)(SectionProjects)