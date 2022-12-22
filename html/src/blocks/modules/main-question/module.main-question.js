import '../../../js/commonVue.js';
import Vue from "vue";

window.mainQuestion = new Vue({
    el: '#main-question',
    data: () => ({
        isSafary: null 
    }),
    mounted() {
        setTimeout(() => {
            this.isSafary = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        }, 0)
    }
})