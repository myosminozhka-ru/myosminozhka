import Glide from '@glidejs/glide';
class CompanyReviews {
    constructor() {
        this.slider;
        this.translate = 0;
        this.index = 0;
        this.elementWidth = 0;
        this.allElementsWidth = 0;

        this.companyReviewsItems = document.querySelectorAll('.company-reviews-item');
        this.companyReviewsModal = document.querySelector('.company-reviews-item-modal');
        this.companyReviewsModalClose = this.companyReviewsModal?.querySelector('.company-reviews-item-modal__close');
        this.companyReviewsModalName = this.companyReviewsModal?.querySelector('.company-reviews-item-modal__name');
        this.companyReviewsModalText = this.companyReviewsModal?.querySelector('.company-reviews-item-modal__text');
    }

    onInit() {
        this.onInitSlider();
        this.onClickShowMore();
        this.onClickCloseModal();
        this.onClickCompanyReviewsModal();
    }

    /**
     * Ширина слайда
     */
    countElementWidth() {
        this.elementWidth = document.querySelector('.company-reviews-item:not(glide__slide--active)').offsetWidth + 100;
    }

    /**
     * Инициализация слайдера
     */
    onInitSlider() {
        if (!document.querySelector('.company-reviews__slider')) return;

        this.slider = new Glide('.company-reviews__slider', {
            type: 'carousel',
            startAt: 1,
            perView: 1.5,
            gap: 100,
            breakpoints: {
                1023: {
                    perView: 1
                }
            }
        });

        if (window.innerWidth > 1023) {
            this.slider.mount();
            this.index = this.slider.index;
            this.countElementWidth();
        } else {
            this.slider.mount();
        }
    }

    /**
     * Действия при клике на кнопку "Показать полностью"
     */
    onClickShowMore() {
        const self = this;

        self.companyReviewsItems.forEach(item => {
            const showMore = item.querySelector('.company-reviews-item__show-more');

            showMore.addEventListener('click', function() {
                const name = this.closest('.company-reviews-item').querySelector('.company-reviews-item__name').innerHTML;
                const text = this.closest('.company-reviews-item').querySelector('.company-reviews-item__text').innerHTML;

                if (self.companyReviewsModal) {
                    self.companyReviewsModalName.innerHTML = name;
                    self.companyReviewsModalText.innerHTML = text;
    
                    self.companyReviewsModal.classList.add('company-reviews-item-modal--is-active');
                    document.querySelector('body').style.overflow = 'hidden';
                }
            })
        });
    }

    /**
     * Действия при закрытии модально окна
     */
    onCloseModal() {
        this.companyReviewsModal.classList.remove('company-reviews-item-modal--is-active');
        document.querySelector('body').style.overflow = '';

        this.companyReviewsModalName.innerHTML = '';
        this.companyReviewsModalText.innerHTML = '';
    }

    /**
     * Действие при клике по кнопке закрыть модальное окно
     */
    onClickCloseModal() {
        const self = this;

        self.companyReviewsModalClose.addEventListener('click', function() {
            self.onCloseModal();
        })
    }

    /**
     * Клик вне белого модального окна
     */
    onClickCompanyReviewsModal() {
        const self = this;

        document.addEventListener('click', function(e) {
            const openCompanyReviewsItemModal = this.querySelector('.company-reviews-item-modal--is-active')
            
            if (
                    openCompanyReviewsItemModal && 
                    !e.target.classList.contains('company-reviews-item__show-more') && 
                    !e.target.classList.contains('company-reviews-item-modal__content') && 
                    !e.target.closest('.company-reviews-item-modal__content')
                ) {
                self.onCloseModal();
            }
        })
    }
}

const companyReviews = new CompanyReviews();
companyReviews.onInit();