import Glide from '@glidejs/glide';

const newsAndTrends = class NewsAndTrends {
    constructor({itemsSelector}) {
        this.slider;
    }
    initSlider() {
        this.slider = new Glide('.news-and-trends-right-slider', {
            type: 'carousel',
            startAt: 0,
            perView: 5
        }).mount();
    }
    init() {
        if (!document.querySelector('.news-and-trends')) return;
        this.initSlider();
    }
}

export default newsAndTrends;