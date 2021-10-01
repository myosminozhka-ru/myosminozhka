const applicationForm = class ApplicationForm {
    constructor() {}
    openForm() {
        console.log('form is opened');
        document.querySelector('.application-form').classList.add('isOpened');
    }
    closeForm() {
        console.log('form is closed');
        document.querySelector('.application-form').classList.remove('isOpened');
    }
    init() {
        if (!document.querySelector('.application-form') || (!document.querySelector('.call-to-action-button a.button') && !document.querySelector('.web-slider-button button.button'))) return;
        if (window.innerWidth > 1023) {
            document.querySelector('.call-to-action-button a.button').addEventListener('click', event => {
                event.preventDefault();
                this.openForm();
            })
        } else {
            document.querySelectorAll('.web-slider-button button.button').forEach( item => {
                console.log(item);
                item.addEventListener('click', event => {
                    event.preventDefault();
                    this.openForm();
                })
            })
        }
        document.querySelector('.application-form__form-closer').addEventListener('click', event => {
            event.preventDefault();
            this.closeForm();
        })
    }
}

export default applicationForm;