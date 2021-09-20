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
            this.slider.mount();
    }
    destroyMobileSlider() {
        if (!document.querySelector('.main-cases-slider')) return;
        this.slider.destroy();
    }
    init() {
        if (!document.querySelector('.main-cases')) return;
        if (window.innerWidth < 1023) {
        this.initMobileSlider();
        } else {
            this.destroyMobileSlider();
        }
         
         if (window.innerWidth > 1023) {
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
            gsap.to('.main-cases-items-in', {
                scrollTrigger: {
                    trigger: '.main-cases',
                    start: 'top top',
                    end: 'bottom bottom-=200',
                    scrub: 1,
                    // markers: true,
                    onUpdate: (item) => {
                        if (item.progress > 0.05 && item.progress < 0.45) {
                            document.querySelector('.main-cases-items-in').classList.add('isInViewport');
                        } else {
                            document.querySelector('.main-cases-items-in').classList.remove('isInViewport');
                        }
                    }
                },
                x: '-100%',
            });
            gsap.to('.main-cases', {
                scrollTrigger: {
                    trigger: '.main-cases',
                    start: 'top top-=300',
                    end: 'bottom bottom',
                    pin: true,
                    pinSpacing: false,
                    markers: true
                },
                x: 0,
            });
        } else {}
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