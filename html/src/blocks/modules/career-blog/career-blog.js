import Glide from '@glidejs/glide'

const careerBlog = class careerBlog {
    constructor(sliderClass) {
        this.sliderClass = sliderClass;
    }
    init() {
        if (!document.querySelector('.career-blog-items')) return;
        if (window.offsetWidth > 1280) {
            new Glide('.career-blog-items', {
                startAt: 0,
                perView: 3,
                gap: 130,
                type: 'carousel',
                breakpoints: {
                    1280: {
                        perView: 1,
                        gap: 20
                    }
                }
            }).mount();
        }
    }
}

export default careerBlog;