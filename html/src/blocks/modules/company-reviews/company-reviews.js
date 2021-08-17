import Glide from '@glidejs/glide'

const companyReviews = class companyReviews {
    constructor(sliderClass) {
        this.slider = new Glide('.company-reviews-slider', {
            type: 'slider',
            focusAt: 'center',
            startAt: 1,
            perView: 3,
            gap: 100,
        });
        this.translate = 0;
        this.index = 0;
        this.elementWidth = 0;
        this.allElementsWidth = 0;
    }
    countElementWidth() {
        this.elementWidth = document.querySelector('.company-reviews-item:not(glide__slide--active)').offsetWidth + 100;
    }
    init() {
        if (!document.querySelector('.company-reviews-slider')) return;
        let self = this;
        var FixBoundPeek = function (Glide, Components, Events) {
            console.log(self.slider);
            return {
              modify (translate) {
                
                if (self.index < self.slider.index && self.slider.index != 0 && self.slider.index != 1) {
                    self.translate += self.elementWidth;
                } else if (self.index > self.slider.index && self.slider.index != 0 && self.slider.index != 1) {
                    self.translate -= self.elementWidth;
                } else if (self.slider.index == 0 || self.slider.index == 1) {
                    self.translate = 0
                }
                if (self.slider.index - self.index > 1) {
                    self.allElementsWidth = 0;
                    self.translate = 0;
                    document.querySelectorAll('.company-reviews-item').forEach(item => {
                        console.log(self.allElementsWidth);
                        if (!item.className.includes('glide__slide--active')) {
                            self.allElementsWidth += (item.offsetWidth + 100);
                        }
                    })
                    self.translate += self.allElementsWidth - self.elementWidth * 2;
                    console.log(self.translate)
                } 
                self.index = self.slider.index;
                
                return self.translate;
              }
            }
          }
        this.slider.mutate([FixBoundPeek]).mount();
        this.index = this.slider.index;
        this.countElementWidth();
    }
}

export default companyReviews;