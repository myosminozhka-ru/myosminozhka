import '../../../js/commonVue.js';
import Vue from 'vue';

window.preloader = new Vue({
    el: '#preloader',
    data: () => ({
        isPreloaderHidden: false
    }),
    mounted() {
        setTimeout(() => {
            let preloader = document.querySelector('.preloader svg animateTransform');
            preloader.addEventListener('endEvent', () => {
                this.isPreloaderHidden = true;
            })
        }, 250)
    }
})