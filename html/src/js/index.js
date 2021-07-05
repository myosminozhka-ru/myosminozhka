import Vue from 'vue';
import mainWords from "%modules%/main-words/main-words";
import mainWeb from "%modules%/main-web/main-web";
import mainAbout from "%modules%/main-about/main-about";
import mainCarousel from "%modules%/main-carousel/main-carousel";
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
        mainCarousel: new mainCarousel(),
        cursorAnimation: new cursorAnimation(),
        mainAbout: new mainAbout(),
        isMounted: false
    }),
    mounted() {
        setTimeout(() => {
            this.isMounted = true;
            this.mainWeb.animateElement();
            this.mainAbout.animateCircle();
            this.cursorAnimation.init();
            this.mainCarousel.init();
            window.addEventListener('resize', () => this.cursorAnimation.updateCanvasSize());
            window.addEventListener('mousemove', (event) => {
                this.cursorAnimation.animate({
                    x: event.pageX,
                    y: event.pageY,
                })
            });
        }, 200);
    },
});