import '../../../js/commonVue.js';
import Vue from "vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Glide from '@glidejs/glide'
import $ from 'jquery';

gsap.registerPlugin(ScrollTrigger);

window.mainNewsAndTrends = new Vue({
    el: '#news-and-trends',
    data: () => ({
        slider: null,
        sliderItems: null,
        html: null
    }),
    mounted() {
        setTimeout(() => {
            if (document.querySelector('.news-and-trends')) {
                this.html = $('.news-and-trends-right-slider .glide').clone();
                this.initSlider();

                document.querySelectorAll('.news-and-trends .news-and-trends-button').forEach(item => {
                    item.addEventListener('click', (event) => {
                        if (this.slider) {
                            this.slider.destroy();
                        }

                        $('.news-and-trends-right-slider .glide').replaceWith($(this.html).clone());
                        
                        if (item.dataset.news != 'all') {
                            event.preventDefault();
                            $(`.news-and-trends-right-slider .news-and-trends-item:not([data-id-news="${item.dataset.news}"])`).remove();
                        }
                        
                        this.initSlider();
                    })
                })
            }
        })
    },
    methods: {
        initSlider() {
            this.sliderItems = document.querySelectorAll('.news-and-trends-item');
    
            this.slider = new Glide('.news-and-trends-right-slider', {
                type: 'carousel',
                startAt: 0,
                perView: 3,
                breakpoints: {
                    800: {
                        perView: 2
                    },
                    600: {
                        perView: 1
                    }
                }
            }).mount();
        }
    }
})