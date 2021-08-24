import gsap from 'gsap';

const companyAbout = class CompanyAbout {
    constructor({selector}) {
        this.selector = selector
    }
    init() {
        if (!document.querySelector(this.selector)) return;
        // document.querySelector(this.selector).addEventListener('mousemove', (e) => {
            // console.log(e)
            // document.querySelector(this.selector).style.clipPath = `circle(${200 * 100 / window.innerWidth}vw at ${e.clientX}px ${e.clientY}px)`;
            // gsap.to(this.selector, {
            //     "clip-path" : `circle(${200 * 100 / window.innerWidth}vw at ${e.clientX}px ${e.clientY}px)`
            // })
        // })
        // document.querySelector(this.selector).addEventListener('mouseleave', (e) => {
        //     gsap.to(this.selector, 0.5, {
        //         "clip-path" : `circle(1920px at ${e.clientX}px ${e.clientY}px)`
        //     })
        // })
    }
}

export default companyAbout;