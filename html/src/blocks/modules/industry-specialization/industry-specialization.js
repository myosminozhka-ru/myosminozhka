export default class IndustrySpecialization {
    constructor(){

    }

    initSliders() {
        const $nav = $(".industry-specialization-slider-nav");
        const $navSlider = $nav.find('.industry-specialization-slider-nav__list')
        const $for = $(".industry-specialization-slider-for");
        const $forSlider = $for.find(".industry-specialization-slider-for__list");

        if($navSlider && $forSlider) {
            $forSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                asNavFor: $navSlider,
                vertical: true,
              });
              $navSlider.slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                asNavFor: $forSlider,
                dots: false,
                focusOnSelect: true,
                vertical: true,
                prevArrow: $nav.find('.industry-specialization-slider-nav__btn--prev'),
                nextArrow: $nav.find('.industry-specialization-slider-nav__btn--next')
              });
        }
    }

    init() {
        this.initSliders()
    }
}