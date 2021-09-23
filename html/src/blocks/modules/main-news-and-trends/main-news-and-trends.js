import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Glide from '@glidejs/glide'

gsap.registerPlugin(ScrollTrigger);

const newsAndTrends = class NewsAndTrends {
    constructor({itemsSelector}) {
        this.slider;
        this.sliderItems;
    }
    initSlider() {
        this.sliderItems = document.querySelectorAll('.news-and-trends-item');
        this.slider = new Glide('.news-and-trends-right-slider', {
            type: 'carousel',
            startAt: 0,
            perView: 5,
            breakpoints: {
                800: {
                    perView: 2
                },
                600: {
                    perView: 1
                }
            }
        }).mount();
    }
    init() {
        if (!document.querySelector('.news-and-trends')) return;
        this.initSlider();
    }
}

export default newsAndTrends;