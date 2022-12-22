import '../../../js/commonVue.js';
import Vue from "vue";
import gsap from "gsap";

window.header = new Vue({
    el: '#header',
    data: () => ({
        isPhonesOpened: false,
        isOpened: false,
        header: null
    }),
    mounted() {
        window.addEventListener('resize', this.setHeaderWavePositionOnLoad)
        setTimeout(() => {
            this.setHeaderWavePositionOnLoad();
        }, 0)
    },
    destroyed() {
        window.removeEventListener('resize', this.setHeaderWavePositionOnLoad)
    },
    methods: {
        setHeaderWavePosition() {
            gsap.to('.header-menu-border', {
                left: event.target.offsetLeft,
                width: event.target.offsetWidth,
                right: 'auto'
            })
        },

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
        },

        openMobileHeader() {
            this.isOpened = !this.isOpened;
            this.isPhonesOpened = false;
            document.querySelector('html').classList.toggle('overflowed');
        },

        openPhonesModal() {
            this.isPhonesOpened = !this.isPhonesOpened;
            this.isOpened = false;
        },

        closePhonesModal() {
            // if (window.innerWidth > 1023) {
            this.isPhonesOpened = false;
            document.querySelector('html').classList.remove('overflowed');
            // }
        },

        onClickMobileMenuLink(event) {
            const modalMenu = event.target.closest('li').querySelector('.header-phone_modal');
            const isModalMenu = Boolean(modalMenu);
            if (isModalMenu) {
                modalMenu.style.height = modalMenu.clientHeight === 0 ? `${modalMenu.scrollHeight}px` : 0;
                event.preventDefault()
            }
        }
    }
})