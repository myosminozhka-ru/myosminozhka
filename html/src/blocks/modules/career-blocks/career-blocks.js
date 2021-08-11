import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const careerBlocks = class careerBlocks {
    constructor() {}
    animateItems() {
        if (!document.querySelector('.career-blocks-item')) return;
        gsap.utils.toArray(".career-blocks-item").forEach((item, i) => {
            ScrollTrigger.create({
                trigger: item,
                start: "top top",
                pin: true,
                pinSpacing: false,
                onUpdate: (item) => {
                    // item.progress * 200
                    gsap.to(item.trigger.querySelector('.career-blocks-left'), 0, {
                        y: () => {
                            return 100 - item.progress * 200 + '%';
                        }
                    })
                }
            });
        });
        // gsap.to('.career-blocks-items', {
        //     scrollTrigger: {
        //         trigger: '.career-blocks',
        //         start: 'top top',
        //         end: 'bottom bottom',
        //         scrub: 1,
        //         pin: true,
        //         pinSpacing: false
        //     },
        //     x: 0,
        // })
    }
    init() {
        this.animateItems();
        console.log('career blocks inited');
    }
}

export default careerBlocks;