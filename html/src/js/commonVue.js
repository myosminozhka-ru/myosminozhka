import Vue from "vue";

Vue.mixin({
    data: () => ({
        window: {
            width: window.innerWidth,
            height: window.innerHeight,
        }
    }),
    mounted() {
        window.addEventListener('resize',() => {
            this.window = {
                width: window.innerWidth,
                height: window.innerHeight,
            }
        })
    },
    destroyed() {
        window.addEventListener('resize', () => {})
    }
});
