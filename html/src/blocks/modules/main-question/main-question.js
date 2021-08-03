const mainQuestionForm = class mainQuestionForm {
    constructor({inputSelector}) {
        this.inputSelector = inputSelector;
        this.file = '';
        this.hasFile = false;
    }
    onInputChange(event) {
        if (!event.target.files.length) {
            this.hasFile = false;
            this.file = null;
            return;
        };
        this.hasFile = true;
        this.file = {...event.target.files}[0];
        console.log(this.file, this.hasFile);
    }
    init() {
        let fileInput = document.querySelector(this.inputSelector);
        fileInput.addEventListener('change', () => this.onInputChange(event));
    }
}



export default mainQuestionForm;