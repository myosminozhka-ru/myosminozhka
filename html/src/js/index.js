import Vue from 'vue';
import mainWords from "%modules%/main-words/main-words";
import mainWeb from "%modules%/main-web/main-web";
import mainAbout from "%modules%/main-about/main-about";
import mainCarousel from "%modules%/main-carousel/main-carousel";
import newsAndTrends from "%modules%/main-news-and-trends/main-news-and-trends";
import mainCases from "%modules%/main-cases/main-cases";
import cursorAnimation from "%modules%/cursor-animation/cursor-animation";


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
            window.addEventListener('resize', () => this.cursorAnimation.updateCanvasSize());
            window.addEventListener('mousemove', (event) => {
                this.cursorAnimation.animate({
                    x: event.pageX,
                    y: event.pageY,
                })
            });
        }, 250);
    },
});