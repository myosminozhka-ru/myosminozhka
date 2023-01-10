class CompanyReviews {
    constructor() {
        this.companyReviewsItems = document.querySelectorAll('.company-reviews-item');
        this.companyReviewsModal = document.querySelector('.company-reviews-item-modal');
        this.companyReviewsModalClose = this.companyReviewsModal?.querySelector('.company-reviews-item-modal__close');
        this.companyReviewsModalName = this.companyReviewsModal?.querySelector('.company-reviews-item-modal__name');
        this.companyReviewsModalText = this.companyReviewsModal?.querySelector('.company-reviews-item-modal__text');
    }

    onInit() {
        this.onClickShowMore();
        this.onClickCloseModal();
        this.onClickCompanyReviewsModal();
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