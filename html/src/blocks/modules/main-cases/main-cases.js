import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Glide from '@glidejs/glide'

gsap.registerPlugin(ScrollTrigger);

const mainCases = class MainCases {
    constructor({itemsClass}) {
        this.itemsClass = itemsClass;
        this.slider = new Glide('.main-cases-slider', {
            type: 'carousel',
            startAt: 1,
            perView: 1,
            gap: 20,
        });
    }
    initMobileSlider() {
        if (!document.querySelector('.main-cases-slider')) return;
        if (window.innerWidth < 1280) {
            this.slider.mount();
        } else {
            this.slider.destroy();
        }
    }
    init() {
        this.initMobileSlider();
         gsap.to('.main-cases-bg', {
             scrollTrigger: {
                 trigger: '.news-and-trends-trigger',
                 start: 'top+=500 top+=500',
                 end: 'bottom+=500 top+=500',
                 scrub: 3,
                 // markers: true
             },
             top: -100,
         });
         if (window.innerWidth > 1280) {
            gsap.to('.main-cases-items-in', {
                scrollTrigger: {
                    trigger: '.main-cases',
                    start: '30%',
                    end: '145%',
                    scrub: 1,
                    markers: true
                },
                x: '-100%',
            });
            } else {
        }
        // ScrollTrigger.matchMedia({
        //     "(min-width: 1281px)": () => {
        //         gsap.utils.toArray(".main-cases-item").forEach((item, i) => {
        //             gsap.to(item, {
        //                 scrollTrigger: {
        //                     trigger: item,
        //                     start: 'top+=400 top+=400',
        //                     end: 'bottom+=400 top+=400',
        //                     scrub: 3,
        //                     // markers: true
        //                 },
        //                 x: '-110vw',
        //             })
        //         })
        //     }
        // });
    }
}

export default mainCases;