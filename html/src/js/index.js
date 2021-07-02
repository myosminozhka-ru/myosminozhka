import Vue from 'vue';
import mainWords from "%modules%/main-words/main-words";
import mainWeb from "%modules%/main-web/main-web";
import mainAbout from "%modules%/main-about/main-about";
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
            window.addEventListener('resize', () => this.cursorAnimation.updateCanvasSize());
            window.addEventListener('mousemove', (event) => {
                // this.cursorAnimation.updateColor()
                this.cursorAnimation.animate({
                    x: event.pageX,
                    y: event.pageY,
                })
            });
        }, 200);
    },
});