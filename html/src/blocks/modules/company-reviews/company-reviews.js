import Glide from '@glidejs/glide'

const companyReviews = class companyReviews {
    constructor(sliderClass) {
        this.sliderClass = sliderClass;
        this.translate = 0;
        this.elementWidth = 0;
    }
    countElementWidth() {
        this.elementWidth = document.querySelector('.company-reviews-item:not(glide__slide--active)').offsetWidth + 100;
    }
    init() {
        if (!document.querySelector('.company-reviews-slider')) return;
        // let self = this;
        // var FixBoundPeek = function (Glide, Components, Events) {
        //     console.log(Events)
        //     return {
        //       /**
        //        * Fix peek 'after' with 'bound' option.
        //        *
        //        * @param  {Number} translate
        //        * @return {Number}
        //        */
        //       modify (translate) {
        //         console.log(self.translate);
        //         self.translate += self.elementWidth;  
        //         return self.translate;
        //       }
        //     }
        //   }
        new Glide('.company-reviews-slider', {
            type: 'slider',
            focusAt: 'center',
            startAt: 1,
            perView: 3,
            gap: 100,
        }).mount();
        // .mutate([FixBoundPeek])
        this.countElementWidth();
    }
}

export default companyReviews;