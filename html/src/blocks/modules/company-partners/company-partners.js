import Glide from '@glidejs/glide'

const companyPartners = class companyPartners {
    constructor(sliderClass) {
        this.sliderClass = sliderClass;
    }
    init() {
        if (!document.querySelector('.glide')) return;
        new Glide('.glide', {
            startAt: 0,
            perView: 2
        }).mount();
    }
}

export default companyPartners;