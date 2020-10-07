import React, { useEffect, useRef, useState} from 'react';
import '../styles/sectionProjects.css';
import img1 from '../helperFiles/images/proj-1.jpg';
import img2 from '../helperFiles/images/proj-2.jpeg';
import img3 from '../helperFiles/images/proj-3.jpeg';
import img4 from '../helperFiles/images/proj-4.jpeg';
import { projectSectionText } from '../helperFiles/dataText';
import ChangingTextField from './ChangingTextField';
import { useDebouncedCallback } from 'use-lodash-debounce';

const SectionProjects = () => {
    const images = [img1, img2, img3, img4];
    const [activeText, setActiveText] = useState('projectSectionText[1]');
    const [isSectionActive, setIsSectionActive] = useState(false);
    const [isTextActive, SetIsTextActive] = useState(false);
    const [activePic, setActivePic] = useState(null);
    const [isMobileActive, setIsMobileActive] = useState(false);

    const projectsContainer = useRef(null);
    const picturesContainer = useRef(null);
    const leftSideContainer = useRef(null);
    const changingTextContainer = useRef(null);
    const firstPic = useRef(null);
    const lastPic = useRef(null);

    const projectsContainerTop = (projectsContainer.current) ? projectsContainer.current.offsetTop : '';
    const projectsContainerBottom = (projectsContainer.current) ? projectsContainerTop + projectsContainer.current.offsetHeight : '';

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
        (window.scrollY+ window.innerHeight > 1.4*projectsContainerTop && window.scrollY+ window.innerHeight < projectsContainerBottom+100) ? setIsMobileActive(true):setIsMobileActive(false);
        (window.scrollY >= .9*projectsContainerTop) ? setIsSectionActive(true):setIsSectionActive(false);
        (window.scrollY >= .9*projectsContainerTop && window.scrollY < lastPic.current.offsetTop + lastPic.current.offsetHeight)?SetIsTextActive(true) : SetIsTextActive(false);
    }

    const menageText = () => {
        const projectPics = [...picturesContainer.current.children];
        const distanseBetweenPics = firstPic.current.offsetTop - projectsContainerTop;
        projectPics.forEach(function(pic, i){
            if (pic.getBoundingClientRect().top <= .8*distanseBetweenPics && pic.getBoundingClientRect().top + .6*pic.offsetHeight>=0) {
                setActivePic(i);
            }
        })
        if (window.scrollY < projectsContainerTop-200 || window.scrollY > lastPic.current.offsetTop + .5*lastPic.current.offsetHeight) {
            setActivePic(null);
        }
    };

    const debouncedMenageText = useDebouncedCallback(menageText,10);

    const isActiveSection = isSectionActive ? 'active' : '';
    const isActiveText = isTextActive ? 'active' : '';
    const isActiveMobile = isMobileActive ? 'active' : '';

    const renderMobileSection = projectSectionText.map((text, i) => {
        return (
            <div className={`mobile--project--container ${isActiveMobile}`} key={i}>
                <div className="mobile--project--pic">
                    <img src={images[i]} alt="proj"></img>
                </div>
                <ChangingTextField text={text} />
            </div>
        )
    });

    return (
        <section ref={projectsContainer}>
            <div className="section section--projects" >
                <div className={`leftside--container projects--leftside--container ${isActiveSection}`} ref={leftSideContainer}>
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
            </div>
            <div className="section--projects--mobile">
                <div className={`projects--title--container ${isActiveMobile}`} id="projects" >
                    <h2>Projects</h2>
                </div>
                {renderMobileSection}
            </div>
        </section>
    )
}

export default SectionProjects;