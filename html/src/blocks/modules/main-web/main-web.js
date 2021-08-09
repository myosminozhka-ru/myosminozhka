import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const mainWeb = class Mainweb {
    constructor({element, trigger}) {
        this.element = element;
        this.trigger = trigger;
    }
    animateElement() {
        gsap.utils.toArray(".web-right-image").forEach((item, i) => {
            ScrollTrigger.create({
                trigger: item,
                start: "top top", 
                // pin: true, 
                // pinSpacing: false,
                // snap: 1,
                onUpdate: (item) => {
                    if (item.progress > 0) {
                        console.log(item.trigger.dataset.itemId)
                        document.querySelectorAll(`.web-subtitle`).forEach(item => {
                            item.classList.remove('isActive');
                        })
                        document.querySelector(`.web-subtitle[data-item-id="${item.trigger.dataset.itemId}"]`).classList.add('isActive');
                        document.querySelectorAll(`.web-title`).forEach(item => {
                            item.classList.remove('isActive');
                        })
                        document.querySelector(`.web-title[data-item-id="${item.trigger.dataset.itemId}"]`).classList.add('isActive');
                        document.querySelectorAll(`.web-text`).forEach(item => {
                            item.classList.remove('isActive');
                        })
                        document.querySelector(`.web-text[data-item-id="${item.trigger.dataset.itemId}"]`).classList.add('isActive');
                        document.querySelectorAll(`.web-button`).forEach(item => {
                            item.classList.remove('isActive');
                        })
                        document.querySelector(`.web-button[data-item-id="${item.trigger.dataset.itemId}"]`).classList.add('isActive');
                        // gsap.to(`.web-title:not([data-item-id="${item.trigger.dataset.itemId}"])`, 1, {
                        //     y: '-100%',
                        //     opacity: 0,
                        //     onComplete: () => {
                        //         gsap.to(`.web-title[data-item-id="${item.trigger.dataset.itemId}"]`, 1, {
                        //             y: 0,
                        //             opacity: 1,
                        //         })
                        //     }
                        // })
                        
                        // gsap.to(`.web-subtitle:not([data-item-id="${item.trigger.dataset.itemId}"])`, 1, {
                        //     y: '-100%',
                        //     opacity: 0,
                        //     onComplete: () => {
                        //         gsap.to(`.web-subtitle[data-item-id="${item.trigger.dataset.itemId}"]`, 1, {
                        //             y: 0,
                        //             opacity: 1
                        //         })
                        //     }
                        // })
                        
                        // gsap.to(`.web-text:not([data-item-id="${item.trigger.dataset.itemId}"])`, 1, {
                        //     y: '-100%',
                        //     opacity: 0,
                        //     onComplete: () => {
                        //         gsap.to(`.web-text[data-item-id="${item.trigger.dataset.itemId}"]`, 1, {
                        //             y: 0,
                        //             opacity: 1
                        //         })
                        //     }
                        // })
                        
                        // gsap.to(`.web-button:not([data-item-id="${item.trigger.dataset.itemId}"])`, 1, {
                        //     y: '-100%',
                        //     opacity: 0,
                        //     onComplete: () => {
                        //         gsap.to(`.web-button[data-item-id="${item.trigger.dataset.itemId}"]`, 1, {
                        //             y: 0,
                        //             opacity: 1
                        //         })
                        //     }
                        // })
                    }
                }
            });
        });
        gsap.to('.web-data-in', {
            scrollTrigger: {
                trigger: '.web-data',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
                pin: true,
                pinSpacing: false
                // markers: true
            },
            x: 0,
        })
    }
}
export default mainWeb;