class UploadFormFile {
    constructor() {
        this.uploadFormFiles = document.querySelectorAll('.upload-form-file');
    }

    onInit() {
        this.uploadFormFiles.forEach((uploadFormFile) => {
            const uploadFormFileField = uploadFormFile.querySelector('.upload-form-file__field');
            const uploadFormFileNoFile = uploadFormFile.querySelector('.upload-form-file__no-file');
            const uploadFormFileFile = uploadFormFile.querySelector('.upload-form-file__file');
            const uploadFormFileFileText = uploadFormFileFile.querySelector('.upload-form-file__file-text');

            uploadFormFileFile.style.display = "none";

            uploadFormFileField.addEventListener('change', (event) => {
                if(event.target.files[0]) {
                    uploadFormFileNoFile.style.display = "none";
                    uploadFormFileFileText.textContent = event.target.files[0].name
                    uploadFormFileFile.style.display = "inline-flex";
                } else {
                    uploadFormFileFile.style.display = "none";
                    uploadFormFileNoFile.style.display = "inline-flex";
                }
            })
        })
    }
}

const uploadFormFile = new UploadFormFile();
uploadFormFile.onInit()