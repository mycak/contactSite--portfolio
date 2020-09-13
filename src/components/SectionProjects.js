import React, { useRef} from 'react';
import { connect } from 'react-redux';
import '../styles/sectionProjects.css'
import img1 from '../helperFiles/images/proj-1.jpeg';
import img2 from '../helperFiles/images/proj-2.jpeg';
import img3 from '../helperFiles/images/proj-3.jpeg';
import img4 from '../helperFiles/images/proj-4.jpeg';

const SectionProjects = () => {
    console.log('esa')
    const projectsContainer = useRef(null);
    const picturesContainer = useRef(null);
    const leftSideContainer = useRef(null);
    const leftSideTextContainer = useRef(null);
    const changingTextContainer = useRef(null);
    const firstPic = useRef(null);


    const projectsContainerTop = (projectsContainer.current) ? projectsContainer.current.offsetTop : '';
    const projectsContainerBottom = (projectsContainer.current) ? projectsContainer.current.offsetTop + projectsContainer.current.offsetHeight: '';
    const isActiveSection = (window.scrollY > .7*(projectsContainerTop)) ? 'active' : '';
    
   function leftSideIn () {
            if(leftSideContainer.current && window.scrollY > leftSideContainer.current.offsetTop && window.scrollY < projectsContainerBottom - window.innerHeight){
            leftSideTextContainer.current.style.width = leftSideContainer.current.offsetWidth +'px';
            return 'active'
        } else return '';
    }

    const changeText = () => {
        const text = [
            'Pariatur tempor eiusmod velit eiusmod quis magna sit aliqua aliquip. Ullamco pariatur eiusmod aliqua ea enim reprehenderit dolor eiusmod fugiat qui ullamco exercitation duis. Cupidatat sit id culpa pariatur tempor ullamco eiusmod veniam aute incididunt. Mollit laborum dolor et velit sint sunt qui pariatur ex. Dolor elit est incididunt ullamco et do magna velit nostrud dolor sint non. Eiusmod eu enim veniam reprehenderit dolore nulla mollit nostrud deserunt. Laborum ex mollit cupidatat eu officia velit enim adipisicing aliquip.',
            'Kielbasa zapiekanki browary',
            'Non anim voluptate cupidatat magna Lorem cupidatat esse sint Lorem aliquip. Ipsum aliquip do nisi exercitation Lorem officia nostrud aliquip nulla reprehenderit fugiat anim ullamco Lorem. Culpa ea Lorem nulla voluptate nisi eu nulla est cupidatat quis enim eu. Occaecat sit pariatur commodo ex fugiat veniam proident aliqua pariatur commodo id. Et irure amet minim sint ad aute excepteur sunt Lorem aute veniam eu. Proident sint ullamco cillum irure ipsum est mollit. Commodo quis laboris labore aute.',
            'essa essa essa'
        ]
        
        if (window.scrollY>400) {
            const distanseBetweenPics = firstPic.current.offsetTop - projectsContainerTop;
            const projectPics = [...picturesContainer.current.children];
            let isActive = false;
            projectPics.forEach((pic) => {
                const i = pic.dataset.id;
                if (pic.getBoundingClientRect().top <= .5*distanseBetweenPics-100 && pic.getBoundingClientRect().top + pic.offsetHeight + .5*distanseBetweenPics -100 >=0){
                    isActive = !isActive;
                    console.log(pic)
                    changingTextContainer.current.classList.remove('active');
                    changingTextContainer.current.innerHTML = text[i];
                    changingTextContainer.current.classList.add('active');
                }
            })
        }
    }
    
    changeText();
    return (
        <section id="projects" className="section section--projects" ref={projectsContainer}>
            <div className={`projects--leftside--container ${isActiveSection}`} ref={leftSideContainer}>
                <div className={`project--text--container ${leftSideIn()}`} ref={leftSideTextContainer}>
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