import '../../../js/commonVue.js';
import Vue from "vue";

window.mainQuestion = new Vue({
    el: '#main-question',
    data: () => ({
        isSafary: null,
        mainQuestionFormMain: null,
        file: '',
        hasFile: false,
        forms: {
            main: {
                uploadFile: null
            }
        }
    }),
    mounted() {
        setTimeout(() => {
            this.isSafary = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        }, 0)
    },
    methods: {
        onChange(formName, event) {
            this.forms[formName].uploadFile = event.target.files[0];
        }
    }
})