import React, { useEffect, useRef, useState} from 'react';
import '../styles/sectionProjects.css'
import img1 from '../helperFiles/images/proj-1.jpeg';
import img2 from '../helperFiles/images/proj-2.jpeg';
import img3 from '../helperFiles/images/proj-3.jpeg';
import img4 from '../helperFiles/images/proj-4.jpeg';
import { projectSectionText } from '../helperFiles/dataText'



const SectionProjects = () => {
    const [isSectionActive, setIsSectionActive] = useState(false);
    const [isTextActive, SetIsTextActive] = useState(false);
    const [activePic, setActivePic] = useState(null);

    const projectsContainer = useRef(null);
    const picturesContainer = useRef(null);
    const leftSideContainer = useRef(null);
    const leftSideTextContainer = useRef(null);
    const changingTextContainer = useRef(null);
    const firstPic = useRef(null);

    const projectsContainerTop = (projectsContainer.current) ? projectsContainer.current.offsetTop : '';


    useEffect(() => {
        window.addEventListener('scroll', menageClasses);
        return () => window.removeEventListener('scroll', menageClasses);
    });
    useEffect(() => {
        window.addEventListener('scroll', menageText);
        return () => window.removeEventListener('scroll', menageText);
    });
    useEffect(()=>{
        if(activePic !== null){
            changingTextContainer.current.classList.remove('active');
            setTimeout(()=>{
                changingTextContainer.current.innerHTML = projectSectionText[activePic];
                changingTextContainer.current.classList.add('active');
            },100)
        } else {
            changingTextContainer.current.classList.remove('active');
        }
    },[activePic])

    const menageText = () => {
        if (window.scrollY > projectsContainerTop + 100 && window.scrollY < 4100) {
            const projectPics = [...picturesContainer.current.children];
            const distanseBetweenPics = firstPic.current.offsetTop - projectsContainerTop;
            projectPics.forEach(function(pic, i){
                if (pic.getBoundingClientRect().top <= .7*distanseBetweenPics && pic.getBoundingClientRect().top + .6*pic.offsetHeight>=0) {
                    setActivePic(i);
                }
            })
        } else setActivePic(null);
    }

    const menageClasses = () => {
        (window.scrollY >= .9*projectsContainerTop) ? setIsSectionActive(true):setIsSectionActive(false);
        (window.scrollY >= .9*projectsContainerTop && window.scrollY < 4200) ? SetIsTextActive(true) : SetIsTextActive(false);
    }

    const isActiveSection = isSectionActive ? 'active' : '';
    const isActiveText = isTextActive ? 'active' : '';

    return (
        <section className="section section--projects" ref={projectsContainer}>
            <div className={`projects--leftside--container ${isActiveSection}`} ref={leftSideContainer}>
                <div className={`project--text--container ${isActiveText}`} ref={leftSideTextContainer}>
                    <div className="changingText--container" ref={changingTextContainer}>
                    </div>
                </div>
            </div>
            <div className="projects--rightside--container">
                <div className={`projects--title--container ${isActiveText}`} id="projects" >
                    <h2>Projekty</h2>
                </div>
                <div className="projects--pics--container" ref={picturesContainer}>
                    <div className="projects--pic--container" data-id="0" ref={firstPic} >
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

export default SectionProjects;