export const countPercentScrolledSite = (scrollY) => {
    const heightWindow = window.innerHeight;
    const heightSite = parseInt(window.getComputedStyle(document.querySelector('html')).height);
    const perc =(scrollY / (heightSite-heightWindow))*100;
    const percRounded = Math.round(perc);
    return percRounded;
}

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