import Glide from '@glidejs/glide'

const careerBlog = class careerBlog {
    constructor(sliderClass) {
        this.sliderClass = sliderClass;
    }
    init() {
        if (!document.querySelector('.career-blog-items')) return;
        new Glide('.career-blog-items', {
            startAt: 0,
            perView: 3,
            gap: 130
        }).mount();
    }
}

export default careerBlog;