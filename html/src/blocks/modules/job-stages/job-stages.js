import Glide from '@glidejs/glide'

const jobStages = class jobStages {
    constructor(sliderClass) {
        this.sliderClass = sliderClass;
        if (document.querySelector('.job-stages-support')) {
            this.supportSlider = new Glide('.job-stages-support-slides', {
                startAt: 0,
                perView: 1,
                type: 'carousel'
            })
            this.supportImagesSlider = new Glide('.job-stages-support-right', {
                startAt: 0,
                perView: 1,
                type: 'carousel'
            })
        }
    }
    init() {
        if (document.querySelector('.job-stages-slides')) {
            new Glide('.job-stages-slides', {
                startAt: 0,
                perView: 2,
                gap: 120,
                type: 'carousel'
            }).mount();
        };
        if (document.querySelector('.job-stages-support')) {
            this.supportSlider.mount();
            this.supportImagesSlider.mount();

            this.supportSlider.on(['move.after'], () => {
                this.supportImagesSlider.go(`=${this.supportSlider.index}`)
            })
        };
    }
}

export default jobStages;