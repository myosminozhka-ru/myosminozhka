import '../../../js/commonVue.js';
import Vue from 'vue';

window.industrySpecialization = new Vue({
    el: '#industry-specialization',
    data: () => ({
        idActiveTab: 0
    }),
    computed: {
        dynamicStyle() {
            const isMobile = this.window.width <= 1023;

            return isMobile ? this.getScrollBarWidth() : 0
        }
    },
    methods: {
        /**
         * Событие при клике по навигации табов
         * @param id
         */
        onClickToNavigationTab(id) {
            this.idActiveTab = id;
        },
        /**
         * Размер скролла
         * @return {number}
         */
        getScrollBarWidth () {
            const inner = document.createElement('p');
            inner.style.width = "250px";
            inner.style.height = "100%";

            const outer = document.createElement('div');
            outer.style.position = "absolute";
            outer.style.top = "0px";
            outer.style.left = "0px";
            outer.style.visibility = "hidden";
            outer.style.width = "200px";
            outer.style.height = "150px";
            outer.style.overflow = "hidden";
            outer.appendChild (inner);

            document.body.appendChild (outer);
            const w1 = inner.offsetWidth;
            outer.style.overflow = 'scroll';
            let w2 = inner.offsetWidth;
            if (w1 == w2) w2 = outer.clientWidth;

            document.body.removeChild (outer);

            return (w1 - w2);
        }
    }
})