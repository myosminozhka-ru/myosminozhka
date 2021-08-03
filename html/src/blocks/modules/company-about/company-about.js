import gsap from 'gsap';

const companyAbout = class CompanyAbout {
    constructor({selector}) {
        this.selector = selector
    }
    init() {
        console.log()
        document.querySelector(this.selector).addEventListener('mousemove', (e) => {
            // console.log(e)
            gsap.to(this.selector, {
                "clip-path" : `circle(${200 * 100 / window.innerWidth}vw at ${e.clientX}px ${e.clientY}px)`
            })
        })
        document.querySelector(this.selector).addEventListener('mouseleave', (e) => {
            gsap.to(this.selector, 2, {
                "clip-path" : `circle(1920px at ${e.clientX}px ${e.clientY}px)`
            })
        })
    }
}

export default companyAbout;