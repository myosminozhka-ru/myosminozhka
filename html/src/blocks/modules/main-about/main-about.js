import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const mainAbout = class MainAbout {
    constructor() {}
    animateCircle() {
        gsap.to('.main-about-circle', {
            scrollTrigger: {
                trigger: '.trigger-wrapper-about',
                start: 'top top',
                end: 'top+=400 top',
                scrub: 1,
                // markers: true
            },
            width: () => {
                return 4200 * 100 / window.innerWidth + 'vw'
            },
            height: () => {
                return 2900 * 100 / window.innerWidth + 'vw'
            },
        })
        gsap.to('.main-about-title', {
            scrollTrigger: {
                trigger: '.trigger-wrapper-about',
                start: 'top+=600 top',
                end: 'top+=1000 top',
                scrub: 1,
            },
            y: () => {
                return -100 * 100 / window.innerWidth + 'vw'
            },
            color: '#afa3a3'
        })
        gsap.to('.main-about-name', {
            scrollTrigger: {
                trigger: '.trigger-wrapper-about',
                start: 'top+=500 top',
                end: 'top+=900 top',
                scrub: 1,
            },
            y: () => {
                return -350 * 100 / window.innerWidth + 'vw'
            },
        })
        gsap.to('.main-about-text', {
            scrollTrigger: {
                trigger: '.trigger-wrapper-about',
                start: 'top+=530 top',
                end: 'top+=930 top',
                scrub: 1,
            },
            y: () => {
                return -350 * 100 / window.innerWidth + 'vw'
            },
        })
        gsap.to('.main-about-video-shadow', {
            scrollTrigger: {
                trigger: '.trigger-wrapper-about',
                start: 'top+=530 top',
                end: 'top+=930 top',
                scrub: 1,
            },
            left: 0,
            top: 0,
        })
        gsap.to('.main-about-video', {
            scrollTrigger: {
                trigger: '.trigger-wrapper-about',
                start: 'top+=560 top',
                end: 'top+=960 top',
                scrub: 1,
            },
            y: () => {
                return -350 * 100 / window.innerWidth + 'vw'
            },
        })
        gsap.to('.main-about-advantages', {
            scrollTrigger: {
                trigger: '.trigger-wrapper-about',
                start: 'top top',
                end: 'bottom center',
                scrub: 1,
                // markers: true,
                pin: true,
                // pinSpacing: false
            },
            right: '100%'
        })
    }
}

export default mainAbout;