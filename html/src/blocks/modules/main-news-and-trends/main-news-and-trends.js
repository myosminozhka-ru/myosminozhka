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
        // gsap.to('.news-and-trends-trigger', {
        //     scrollTrigger: {
        //         trigger: '.news-and-trends-trigger',
        //         start: 'top top',
        //         end: 'bottom bottom',
        //         scrub: 1,
        //         // markers: true,
        //         pin: true,
        //         pinSpacing: false,
        //         onUpdate: (item) => {
        //             if (this.slider.index === Math.round(+item.progress * 100 / +this.sliderItems.length)) return;
        //             this.slider.go(`=${Math.round(+item.progress * 100 / +this.sliderItems.length)}`)
        //             console.log(Math.round(+item.progress * 100 / +this.sliderItems.length));
        //         }
        //     },
        //     x: '0',
        // });
    }
    init() {
        if (!document.querySelector('.news-and-trends')) return;
        this.initSlider();
    }
}

export default newsAndTrends;