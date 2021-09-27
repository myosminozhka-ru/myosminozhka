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
            gap: 0,
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
         
         if (window.innerWidth > 1024) {
            setTimeout(() => {
                gsap.to('.main-cases-items-in', {
                    scrollTrigger: {
                        trigger: '.main-cases',
                        start: 'top top',
                        end: 'bottom bottom-=200',
                        scrub: 3,
                        // markers: true,
                        onUpdate: (item) => {
                            if (item.progress > 0.05 && item.progress < 0.65) {
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
                        start: 'top top-=350',
                        end: 'bottom bottom',
                        pin: true,
                        pinSpacing: false,
                        // markers: true
                    },
                    x: 0,
                });
            }, 1000);
        } else {
            setTimeout(() => {
                gsap.to('.main-cases-items-in', {
                    scrollTrigger: {
                        trigger: '.main-cases',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 3,
                        // markers: true,
                        onUpdate: (item) => {
                            if (item.progress > 0.05 && item.progress < 0.65) {
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
                        start: 'top top-=100',
                        end: 'bottom bottom',
                        pin: true,
                        pinSpacing: false,
                        // markers: true
                    },
                    x: 0,
                });
            }, 1000);
        }
    }
}

export default mainCases;