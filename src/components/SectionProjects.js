import React, { useEffect, useRef, useState} from 'react';
import '../styles/sectionProjects.css';
import img1 from '../helperFiles/images/proj-1.jpeg';
import img2 from '../helperFiles/images/proj-2.jpeg';
import img3 from '../helperFiles/images/proj-3.jpeg';
import img4 from '../helperFiles/images/proj-4.jpeg';
import { projectSectionText } from '../helperFiles/dataText';
import ChangingTextField from './ChangingTextField';
import { useDebouncedCallback } from 'use-lodash-debounce';

const SectionProjects = () => {
    const [activeText, setActiveText] = useState('projectSectionText[1]');
    const [isSectionActive, setIsSectionActive] = useState(false);
    const [isTextActive, SetIsTextActive] = useState(false);
    const [activePic, setActivePic] = useState(null);

    const projectsContainer = useRef(null);
    const picturesContainer = useRef(null);
    const leftSideContainer = useRef(null);
    const changingTextContainer = useRef(null);
    const firstPic = useRef(null);
    const lastPic = useRef(null);
    const projectsContainerTop = (projectsContainer.current) ? projectsContainer.current.offsetTop : '';

    useEffect(() => {
        window.addEventListener('scroll', menageClasses);
        window.addEventListener('scroll', debouncedMenageText);
        return () => {
            window.removeEventListener('scroll', menageClasses);
            window.removeEventListener('scroll', debouncedMenageText);
        };
    });

    useEffect(()=>{
        if(activePic !== null ){
            changingTextContainer.current.classList.remove('active');
            setTimeout(()=>{
                if(window.scrollY >= .9*projectsContainerTop && window.scrollY < lastPic.current.offsetTop + .5*lastPic.current.offsetHeight){
                    setActiveText(projectSectionText[activePic]);
                    changingTextContainer.current.classList.add('active');
                }
            },200);
        }else changingTextContainer.current.classList.remove('active');
        if(activePic === null) changingTextContainer.current.classList.remove('active');
    },[activePic,projectsContainerTop])

    const menageClasses = () => {
        (window.scrollY >= .9*projectsContainerTop) ? setIsSectionActive(true):setIsSectionActive(false);
        (window.scrollY >= .9*projectsContainerTop && window.scrollY < lastPic.current.offsetTop + lastPic.current.offsetHeight)?SetIsTextActive(true) : SetIsTextActive(false);
    }
    const debouncedMenageText = useDebouncedCallback(menageText, 200)

    const menageText = () => {
        const projectPics = [...picturesContainer.current.children];
        const distanseBetweenPics = firstPic.current.offsetTop - projectsContainerTop;
        projectPics.forEach(function(pic, i){
            if (pic.getBoundingClientRect().top <= 1.2*distanseBetweenPics && pic.getBoundingClientRect().top + .6*pic.offsetHeight>=0) {
                setActivePic(i);
            }
        })
        if (window.scrollY < projectsContainerTop-200 || window.scrollY > lastPic.current.offsetTop + .7*lastPic.current.offsetHeight) {
            setActivePic(null);
        }
    };

    const isActiveSection = isSectionActive ? 'active' : '';
    const isActiveText = isTextActive ? 'active' : '';

    return (
        <section className="section section--projects" ref={projectsContainer}>
            <div className={`projects--leftside--container ${isActiveSection}`} ref={leftSideContainer}>
                <div className={`project--text--container ${isActiveText}`} >
                    <div className="changingText--container" ref={changingTextContainer}>
                        <ChangingTextField text={activeText} />
                    </div>
                </div>
            </div>
            <div className="projects--rightside--container">
                <div className={`projects--title--container ${isActiveText}`} id="projects" >
                    <h2>Projects</h2>
                </div>
                <div className="projects--pics--container" ref={picturesContainer}>
                    <div className={`projects--pic--container ${isActiveText}`} data-id="0" ref={firstPic} >
                        <img src={img1} alt="proj"></img>
                    </div>
                    <div className={`projects--pic--container ${isActiveText}`} data-id="1">
                        <img src={img2} alt="proj"></img>
                    </div>
                    <div className={`projects--pic--container ${isActiveText}`} data-id="2">
                        <img src={img3} alt="proj"></img>
                    </div>
                    <div className={`projects--pic--container ${isActiveText}`} data-id="3" ref={lastPic}>
                        <img src={img4} alt="proj"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionProjects;