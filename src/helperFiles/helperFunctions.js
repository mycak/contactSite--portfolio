export const countPercentScrolledSite = () => {
    const heightWindow = window.innerHeight;
    const heightSite = parseInt(window.getComputedStyle(document.querySelector('html')).height);
    const perc =(window.scrollY / (heightSite-heightWindow))*100;
    const percRounded = Math.round(perc);
    return percRounded;
}
const setup = () => {
    const headerTextDivs = document.querySelector('.header--text--container').children;
    const headerPicDiv = document.querySelector('.header--pic--container');
    const navigationlinks = document.querySelectorAll('.navigation--link--container');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    [...headerTextDivs].forEach(div => div.classList.add('active'));
    headerPicDiv.classList.add('active');
    navigationlinks.forEach(link => link.classList.add('in'));
}

export const removeAnimation = () => {
    setTimeout(() => {
        const loadingPage = document.querySelector('.loadingPage--container');
        const animatedSvg = document.querySelector('.svg');
        const siteContainer = document.querySelector('.site--container');

        loadingPage.classList.add('active');
        animatedSvg.classList.add('exit');
        setTimeout(() => {
            loadingPage.classList.remove('active');
            setTimeout(() => {
                animatedSvg.classList.remove('exit');
                setTimeout(()=> {
                    loadingPage.remove();
                    siteContainer.classList.add('visible');
                    setTimeout(()=> {
                        setup();
                    },500)
                },500)
            },1000)
        },3000)
    },1000)
};


export const spyMenuActive = () => {
    document.addEventListener('DOMContentLoaded', function(){
        const sections = document.querySelectorAll('.section');
        const menu_links = document.querySelectorAll('.navigation--link--container a');
        const makeActive = (link) => menu_links[link].classList.add("navLink--active");
        const removeActive = (link) => menu_links[link].classList.remove("navLink--active");
        const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));
        const sectionMargin = 200;
        let currentActive = 0;
        document.querySelector('.navigation--link--container a').classList.add('navLink--active');

  // listen for scroll events
        window.addEventListener("scroll", () => {
            const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin ) - 1;
            if (current !== currentActive) {
            removeAllActive();
            currentActive = current;
            makeActive(current);
            }
        });
    },false);
};