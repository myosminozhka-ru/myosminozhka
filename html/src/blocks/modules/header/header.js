import gsap from 'gsap';

const header = class Header {
    constructor() {}
    init() {
        console.log('header inited')
        gsap.to('.header-logo', {
            scrollTrigger: {
                trigger: '.wrapper',
                start: 'top top',
                end: 'top+=400 top',
                scrub: 1,
                markers: true,
            },
            width: () => {
                return 100 * 100 / window.innerWidth + 'vw'
            }
        })
        gsap.to('.header-blur', {
            scrollTrigger: {
                trigger: '.wrapper',
                start: 'top top',
                end: 'top+=400 top',
                scrub: 1,
                markers: true,
            },
            opacity: 1
        })
        gsap.to('.header-in', {
            scrollTrigger: {
                trigger: '.wrapper',
                start: 'top top',
                end: 'top+=400 top',
                scrub: 1,
                markers: true,
            },
            paddingTop: () => {
                return 10 * 100 / window.innerWidth + 'vw'
            },
            paddingBottom: () => {
                return 10 * 100 / window.innerWidth + 'vw'
            }
        })
    }
}

export default header;