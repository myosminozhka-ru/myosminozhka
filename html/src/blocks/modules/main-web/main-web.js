import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const mainWeb = class Mainweb {
    constructor({element, trigger}) {
        this.element = element;
        this.trigger = trigger;
    }
    animateElement() {
        // gsap.to(this.element, {
        //     scrollTrigger: {
        //         trigger: this.trigger,
        //         start: 'center center',
        //         end: 'bottom center',
        //         scrub: 3,
        //         // markers: true
        //     },
        //     x: 0 ,
        // })
        gsap.to('.web-title', {
            scrollTrigger: {
                trigger: '.trigger-wrapper-top',
                start: 'center center+=200px',
                end: 'bottom-=200px bottom',
                scrub: 3,
                // markers: true
            },
            x: 0 ,
        })
        // gsap.to('.web-what-is-it', {
        //     scrollTrigger: {
        //         trigger: '.trigger-wrapper-top',
        //         start: 'bottom bottom',
        //         end: 'bottom bottom',
        //         scrub: 1,
        //         // markers: true
        //     },
        //     y: 0 ,
        // })
        // gsap.to('.web-text', {
        //     scrollTrigger: {
        //         trigger: '.trigger-wrapper-top',
        //         start: 'bottom bottom',
        //         end: 'bottom bottom',
        //         scrub: 1,
        //         // markers: true
        //     },
        //     x: 0 ,
        // })
        // gsap.to('.web-button', {
        //     scrollTrigger: {
        //         trigger: '.trigger-wrapper-top',
        //         start: 'bottom bottom',
        //         end: 'bottom bottom',
        //         scrub: 1,
        //         // markers: true
        //     },
        //     y: 0 ,
        // })
        // gsap.to('.web-right-clip--main', {
        //     scrollTrigger: {
        //         trigger: '.trigger-wrapper-top',
        //         start: 'center top',
        //         end: 'center center',
        //         scrub: 2,
        //         // markers: true
        //     },
        //     webkitClipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' ,
        // })
        // gsap.to('.web-right-clip--grey', {
        //     scrollTrigger: {
        //         trigger: '.trigger-wrapper-top',
        //         start: 'center top',
        //         end: 'center center',
        //         scrub: 3,
        //         // markers: true
        //     },
        //     webkitClipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' ,
        // })
        // gsap.to('.web-right-image', 2, {
        //     scrollTrigger: {
        //         trigger: '.trigger-wrapper-top',
        //         start: 'center top',
        //         end: 'center center',
        //         scrub: 3,
        //         // markers: true
        //     },
        //     webkitClipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' ,
        // })
    }
}
export default mainWeb;