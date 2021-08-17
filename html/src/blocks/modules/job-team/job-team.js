import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const jobTeam = class jobTeam {
    constructor() {}
    init() {
        gsap.to('.job-team-circle', {
            scrollTrigger: {
                trigger: '.job-info',
                start: 'center center',
                end: 'bottom+=1000 center',
                scrub: 1,
                // markers: true
            },
            width: () => {
                return 6200 * 100 / window.innerWidth + 'vw'
            },
            height: () => {
                return 4900 * 100 / window.innerWidth + 'vw'
            },
        })
    }
}

export default jobTeam;