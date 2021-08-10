import Glide from '@glidejs/glide'

const companyPartners = class companyPartners {
    constructor(sliderClass) {
        this.sliderClass = sliderClass;
    }
    init() {
        if (!document.querySelector('.company-partners-slider')) return;
        new Glide('.company-partners-slider', {
            startAt: 0,
            perView: 2,
        }).mount();
    }
}

export default companyPartners;