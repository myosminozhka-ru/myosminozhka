import Vue from 'vue';
import mainWords from "%modules%/main-words/main-words";
import mainWeb from "%modules%/main-web/main-web";
import mainAbout from "%modules%/main-about/main-about";
import mainCarousel from "%modules%/main-carousel/main-carousel";
import newsAndTrends from "%modules%/main-news-and-trends/main-news-and-trends";
import mainCases from "%modules%/main-cases/main-cases";
import cursorAnimation from "%modules%/cursor-animation/cursor-animation";
import companyVideo from "%modules%/company-video/company-video";
import header from "%modules%/header/header";

import gsap from 'gsap';


window.app = new Vue({
    el: '#app',
    data: () => ({
        mainWords: new mainWords({
            delay: 1,
            element: '.main-words-wrap'
        }),
        mainWeb: new mainWeb({
            element: '.web-tentacle',
            trigger: '.first-frame'
        }),
        mainCarousel: new mainCarousel(
            // {
            //     carouselClass: '.main-carousel-carousel',
            //     cellClass: '.main-carousel-cell',
            //     cellsRangeClass: '.cells-range',
            // }
        ),
        cursorAnimation: new cursorAnimation(),
        mainAbout: new mainAbout(),
        newsAndTrends: new newsAndTrends({
            itemsSelector: '.news-and-trends-item'
        }),
        mainCases: new mainCases({
            itemsClass: '.main-cases-item'
        }),
        companyVideo: new companyVideo(),
        header: new header(),
        isMounted: false
    }),
    mounted() {
        setTimeout(() => {
            this.isMounted = true;
            this.mainWeb.animateElement();
            this.mainAbout.animateCircle();
            this.cursorAnimation.init();
            this.mainCarousel.init();
            this.newsAndTrends.init();
            this.mainCases.init();
            this.header.init();
            this.companyVideo.init();
            window.addEventListener('resize', () => this.cursorAnimation.updateCanvasSize());
            if (document.querySelector('.first-frame')) {
               document.querySelector('.first-frame').addEventListener('mousemove', (event) => {
                    this.cursorAnimation.animate({
                        x: event.pageX,
                        y: event.pageY,
                    })
                });
            }
        }, 250);
    },
    methods: {
        buttonMouseEnter(event) {
            let x = event.offsetX;
            let y = event.offsetY;
            let circle = document.createElement("div");
            circle.classList.add('button-circle');
            event.target.appendChild(circle);
            event.target.children[1].style.left = x+'px';
            event.target.children[1].style.top = y+'px';
            gsap.to(event.target.children[1], 0.5, {
                width: 800,
                height: 800,
                x: -400,
                y: -400,
            })
        },
        buttonMouseLeave(event) {
            let x = event.offsetX;
            let y = event.offsetY;

            event.target.children[1].style.left = x + 'px';
            event.target.children[1].style.top = y + 'px';

            gsap.to(event.target.children[1], 0.3, {
                width: 0,
                height: 0,
                x: 0,
                y: 0,
                onComplete: () => {
                    event.target.removeChild(event.target.children[1])
                }
            })
        }
    }
});