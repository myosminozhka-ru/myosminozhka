import Glide from '@glidejs/glide'

const careerBlog = class careerBlog {
    constructor(sliderClass) {
        this.sliderClass = sliderClass;
    }
    init() {
        if (!document.querySelector('.career-blog-items')) return;
        if (window.innerWidth > 1280) {
            new Glide('.career-blog-items', {
                startAt: 0,
                perView: 3,
                gap: 130,
                type: 'carousel',
            }).mount();
        }
    }
}

export default careerBlog;