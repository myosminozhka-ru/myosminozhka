import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Glide from '@glidejs/glide'
import $ from 'jquery';

gsap.registerPlugin(ScrollTrigger);

const newsAndTrends = class NewsAndTrends {
    constructor({itemsSelector}) {
        this.slider;
        this.sliderItems;
        this.html = $('.news-and-trends-right-slider .glide').clone();
    }
    initSlider() {
        this.sliderItems = document.querySelectorAll('.news-and-trends-item');
        // this.html = $('.news-and-trends-right-slider').clone();
        this.slider = new Glide('.news-and-trends-right-slider', {
            type: 'carousel',
            startAt: 0,
            perView: 3,
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
    filterSlider({type}) {
        console.log(type);
    }
    onInit() {}
    init() {
        if (!document.querySelector('.news-and-trends')) return;
        this.initSlider();
        this.onInit();

        document.querySelectorAll('.news-and-trends .news-and-trends-button').forEach(item => {
            item.addEventListener('click', () => {
                console.log(this.html);
                if (this.slider) {
                    this.slider.destroy();
                }
                $('.news-and-trends-right-slider .glide').replaceWith($(this.html).clone());
                this.initSlider();
                
            })
        })
    }
}

export default newsAndTrends;