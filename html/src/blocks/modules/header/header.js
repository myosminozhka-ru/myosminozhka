import gsap from 'gsap';

const header = class Header {
    constructor() {}
    init() {
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
            },
            onComplete: () => {
                this.logoAnimationComplete();
            },
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
            },
            onComplete: () => {
                this.headerInAnimationComplete();
            },
        })
        this.onInit();
    }
    onInit() {
        console.log('Анимация шапки инициирована');
    }
    logoAnimationComplete() {
        console.log('Анимация логотипа окончена');
    }
    headerInAnimationComplete() {
        console.log('Анимация шапки окончена');
    }
}

export default header;