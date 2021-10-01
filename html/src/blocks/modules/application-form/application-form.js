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
        if (!document.querySelector('.application-form') || !document.querySelector('.call-to-action-button a.button')) return;
        document.querySelector('.call-to-action-button a.button').addEventListener('click', event => {
            event.preventDefault();
            this.openForm();
        })
        document.querySelector('.application-form__form-closer').addEventListener('click', event => {
            event.preventDefault();
            this.closeForm();
        })
    }
}

export default applicationForm;