import gsap from 'gsap';

const header = class Header {
    constructor() {
        this.countedWidth = 0;
        this.self = this;
        // this.setHeaderWavePositionOnLoad();
    }
    init() {
        gsap.to('.header-logo', {
            scrollTrigger: {
                trigger: '.wrapper',
                start: 'top top',
                end: 'top+=400 top',
                scrub: 1,
                // markers: true,
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
                // markers: true,
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
        this.setHeaderWavePositionOnLoad();
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
    setHeaderWavePositionOnLoad() {
        if (document.querySelector('.header-menu')) {
            let active_menu = document.querySelector('.header-menu li.isActive');
            gsap.to('.header-menu-border', {
                left: active_menu.offsetLeft,
                width: active_menu.offsetWidth,
                right: 'auto'
            })
            gsap.to('.header-menu-wave', {
                left: active_menu.offsetLeft + active_menu.offsetWidth / 2
            })
        }
    }
    setHeaderWavePosition() {
        console.log('counting completed');
        // gsap.to('.header-menu-wave', {
        //     left: event.target.offsetLeft + event.target.offsetWidth / 2
        // })
        gsap.to('.header-menu-border', {
            left: event.target.offsetLeft,
            width: event.target.offsetWidth,
            right: 'auto'
        })
    }
}

export default header;