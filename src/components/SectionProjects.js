import React, { useRef} from 'react';
import { connect } from 'react-redux';
import '../styles/sectionProjects.css'
import img1 from '../helperFiles/images/proj-1.jpeg';
import img2 from '../helperFiles/images/proj-2.jpeg';
import img3 from '../helperFiles/images/proj-3.jpeg';
import img4 from '../helperFiles/images/proj-4.jpeg';
import { projectSectionText } from '../helperFiles/dataText'



const SectionProjects = ({scrollY}) => {
    const projectsContainer = useRef(null);
    const picturesContainer = useRef(null);
    const leftSideContainer = useRef(null);
    const leftSideTextContainer = useRef(null);
    const changingTextContainer = useRef(null);
    const firstPic = useRef(null);
    

    const projectsContainerTop = (projectsContainer.current) ? projectsContainer.current.offsetTop : '';
    const projectsContainerBottom = (projectsContainer.current) ? projectsContainer.current.offsetTop + projectsContainer.current.offsetHeight: '';
    const isActiveSection = (scrollY > .7*(projectsContainerTop)) ? 'active' : '';
    const leftSideIn = (leftSideContainer.current && scrollY > leftSideContainer.current.offsetTop && scrollY < projectsContainerBottom - window.innerHeight) ? 'active' : '';
     

    if (scrollY>400) {

        // 
        let activePic = null;
        const projectPics = [...picturesContainer.current.children];
        const distanseBetweenPics = firstPic.current.offsetTop - projectsContainerTop;
        const picHeight = projectPics[0].offsetHeight;
        const picTop = projectPics[0].offsetTop;
        projectPics.forEach(function(pic, i){
            const top = picTop + picHeight * i + distanseBetweenPics * i;
            if (scrollY > top - .5*distanseBetweenPics - 10 && scrollY < top + picHeight) {
                activePic = i;
            }
        })
        if (!(activePic === null)) {
            changingTextContainer.current.innerHTML = projectSectionText[activePic];
            changingTextContainer.current.classList.add('active');
        } else {
            changingTextContainer.current.classList.remove('active');
        }

    }

    return (
        <section id="projects" className="section section--projects" ref={projectsContainer}>
            <div className={`projects--leftside--container ${isActiveSection}`} ref={leftSideContainer}>
                <div className={`project--text--container ${leftSideIn}`} ref={leftSideTextContainer}>
                    <div className="changingText--container" ref={changingTextContainer}>
                        
                    </div>
                </div>
            </div>
            <div className="projects--rightside--container">
                <div className="projects--pics--container" ref={picturesContainer}>
                    <div className="projects--pic--container" data-id="0" ref={firstPic}>
                        <img src={img1} alt="proj"></img>
                    </div>
                    <div className="projects--pic--container" data-id="1">
                        <img src={img2} alt="proj"></img>
                    </div>
                    <div className="projects--pic--container" data-id="2">
                        <img src={img3} alt="proj"></img>
                    </div>
                    <div className="projects--pic--container" data-id="3">
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