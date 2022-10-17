import { gsap } from "gsap";

export default class FirstScreen {
    constructor() {

    }

    init() {
        gsap.to('.first-screen__tentacles', {
            duration: 1,
            left: 0
        })
    }
}