import '../../../js/commonVue.js';
import Vue from "vue";

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Glide from '@glidejs/glide';
import $ from "jquery";
import 'slick-carousel';
import  'jquery.marquee';

gsap.registerPlugin(ScrollTrigger);

window.mainCases = new Vue({
    el: '#main-cases',
    data: () => ({
        itemsClass: null,
        slider: null
    }),
    mounted() {
        setTimeout(() => {
            this.slider = new Glide('.main-cases-slider', {
                type: 'carousel',
                startAt: 1,
                perView: 1,
                gap: 0,
            });

            if (window.innerWidth <= 1023) {
                if (document.querySelector('.js_sl')) {
                    $('.js_sl').slick({
                        dots: false,
                        arrows: true,
                        infinite: true,
                        fade: true,
                        autoplay: true,
                        autoplaySpeed: 3000,
                        slidesToShow: 1
                    });
                }
            }

            if ((window.innerWidth <= 1366 && window.innerWidth > 1023) || (window.innerWidth > 1440)) {
                $('.marquee-js').marquee({
                    //duration in milliseconds of the marquee
                    duration: 10000,
                    //gap in pixels between the tickers
                    gap: 100,
                    //time in milliseconds before the marquee will start animating
                    delayBeforeStart: 0,
                    //'left' or 'right'
                    direction: 'left',
                    //true or false - should the marquee be duplicated to show an effect of continues flow
                    duplicated: true
                });
            }

            if ((window.innerWidth <= 1366 && window.innerWidth > 1023) || (window.innerWidth > 1440)) {
                window.addEventListener("scroll", function(event){
                    const top = this.pageYOffset;
                
                    const layers = $(".paralax_layer");
                    let speed;
                    layers.each(function() {
                        speed = $(this).attr('data-speed');
                        const yPos = -(top * speed / 100);
                        $(this).attr('style','transform: translate3d(0px, ' + yPos + 'px, 0px)');
                    });
                });
            }
        }, 0)
    },
    methods: {
        initMobileSlider() {
            if (!document.querySelector('.main-cases-slider')) return;
                this.slider.mount();
        },

        destroyMobileSlider() {
            if (!document.querySelector('.main-cases-slider')) return;
            this.slider.destroy();
        }
    }
})