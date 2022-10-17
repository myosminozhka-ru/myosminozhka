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
                swipe: false
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

            $(window).on("resize", function() {
                if (window.innerWidth <= 1023) {
                    $navSlider.slick('unslick');

                    $('.industry-specialization__tabs-item:first').addClass('industry-specialization__tabs-item--active')

                    $(document).on('click', '.industry-specialization__tabs-item', function() {
                        $forSlider.slick('slickGoTo', $(this).index());
                        $('.industry-specialization__tabs-item').removeClass('industry-specialization__tabs-item--active')
                        $(this).addClass('industry-specialization__tabs-item--active')
                    })
                }
                else {
                    $navSlider.not('.slick-initialized').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        asNavFor: $navSlider,
                        vertical: true,
                        swipe: false
                    });
                }
            });

            $(window).trigger('resize');
        }
    }

    init() {
        this.initSliders()
    }
}