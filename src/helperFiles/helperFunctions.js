export const countPercentScrolledSite = (scrollY) => {
    const heightWindow = window.innerHeight;
    const heightSite = parseInt(window.getComputedStyle(document.querySelector('html')).height);
    const perc =(scrollY / (heightSite-heightWindow))*100;
    const percRounded = Math.round(perc);
    return percRounded;
}
export const spyMenu =  (sections, buttons, className) => {
    document.addEventListener('DOMContentLoaded', function(){
        const sectionsList = document.querySelectorAll(sections);
        const menu_links = document.querySelectorAll(buttons);
        const sectionMargin = 200;
        document.querySelector(buttons).classList.add(className);
        const menageActive = (current) => {
            menu_links.forEach(link => {
                if (parseInt(link.dataset.key) === current){
                    link.classList.add(className);
                } else link.classList.remove(className);
            })
        };
        window.addEventListener("scroll", () => {
            const current = sectionsList.length - [...sectionsList].reverse().findIndex((section) => window.scrollY >= section.offsetTop-sectionMargin) - 1;
            menageActive(current);
        },false);
    });
};