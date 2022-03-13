import gsap from 'gsap';
import $ from 'jquery';

const header = class Header {
    constructor() {
        this.countedWidth = 0;
        this.self = this;
        this.isOpened = false;
        this.isPhonesOpened = false;
        // this.setHeaderWavePositionOnLoad();
    }
    openMobileHeader() {
        this.isOpened = !this.isOpened;
    }
    openPhonesModal() {
        this.isPhonesOpened = !this.isPhonesOpened;
    }
    closePhonesModal() {
        this.isPhonesOpened = false;
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
                return 200 * 100 / window.innerWidth + 'vw'
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
                scrub: 0,
                // markers: true,
            },
            paddingTop: () => {
                //return 10 * 100 / window.innerWidth + 'vw'
                return 1 * 100 / window.innerWidth + 'vw'
            },
            paddingBottom: () => {
                //return 10 * 100 / window.innerWidth + 'vw'
                return 1 * 100 / window.innerWidth + 'vw'
            },
            onComplete: () => {
                this.headerInAnimationComplete();
            },
        })
        this.setHeaderWavePositionOnLoad();
        this.onInit();
        if (document.querySelector('.header-phone_opener')) {
            document.querySelector('.header-phone_opener').addEventListener('click', () => {
                this.openPhonesModal();
            })
            document.querySelector('.header-phone_modal_closer').addEventListener('click', (event) => {
                event.stopPropagation();
                this.closePhonesModal();
            })
            document.addEventListener('click', (event) => {
                console.log(event.target.closest('.header-phone_opener'))
                if (!event.target.closest('.header-phone_opener')) {
                    this.closePhonesModal();
                }
            })
        }
    }
    onInit() {
        if (!document.querySelector('.header-mobile-menu')) return;
        $('.header-mobile-menu .has-child > a').on('click', function (event) {
            event.preventDefault();
            console.log($(this), $(this).siblings('.header-phone_modal'))
            $(this).siblings('.header-phone_modal').slideToggle();
        })
    }
    logoAnimationComplete() {}
    headerInAnimationComplete() {}
    setHeaderWavePositionOnLoad() {
        if (document.querySelector('.header-menu li.isActive')) {
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