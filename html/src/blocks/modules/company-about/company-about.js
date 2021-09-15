import gsap from 'gsap';

const companyAbout = class CompanyAbout {
    constructor({selector}) {
        this.selector = selector
    }
    init() {
        if (!document.querySelector(this.selector)) return;
    }
}

export default companyAbout;