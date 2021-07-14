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
                pin: true, 
                pinSpacing: false,
                // snap: 1,
                onUpdate: (item) => {
                    gsap.to(`.web-title:not([data-item-id="${item.trigger.dataset.itemId}"])`, 1, {
                        y: '-100%'
                    })
                    gsap.to(`.web-title[data-item-id="${item.trigger.dataset.itemId}"]`, 1, {
                        y: 0
                    })
                    gsap.to(`.web-subtitle:not([data-item-id="${item.trigger.dataset.itemId}"])`, 1, {
                        y: '-100%'
                    })
                    gsap.to(`.web-subtitle[data-item-id="${item.trigger.dataset.itemId}"]`, 1, {
                        y: 0
                    })
                    gsap.to(`.web-text:not([data-item-id="${item.trigger.dataset.itemId}"])`, 1, {
                        y: '-100%'
                    })
                    gsap.to(`.web-text[data-item-id="${item.trigger.dataset.itemId}"]`, 1, {
                        y: 0
                    })
                    gsap.to(`.web-button:not([data-item-id="${item.trigger.dataset.itemId}"])`, 1, {
                        y: '-100%'
                    })
                    gsap.to(`.web-button[data-item-id="${item.trigger.dataset.itemId}"]`, 1, {
                        y: 0
                    })
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