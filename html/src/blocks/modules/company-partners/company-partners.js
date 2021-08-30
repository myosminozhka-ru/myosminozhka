import Glide from '@glidejs/glide'

const companyPartners = class companyPartners {
    constructor(sliderClass) {
        this.sliderClass = sliderClass;
    }
    init() {
        if (!document.querySelector('.company-partners-slider')) return;
        new Glide('.company-partners-slider', {
            startAt: 0,
            bound: 'Boolean',
            perView: 2,
            breakpoints: {
                1280: {
                    perView: 1,
                },
            },
        }).mount();
    }
}

export default companyPartners;