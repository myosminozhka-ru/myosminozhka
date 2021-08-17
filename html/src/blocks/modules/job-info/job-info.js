import Glide from '@glidejs/glide'

const jobInfo = class jobInfo {
    constructor() {
        if (document.querySelector('.job-info-right-slider')) {
            this.slider = new Glide('.job-info-right-slider', {
                startAt: 1,
                perView: 1,
            })
        }
    }
    changeSlide() {
        if (this.slider) {
            document.querySelectorAll('.job-info-title').forEach(item => {
                item.classList.remove('isActive');
            })
            document.querySelector(`.job-info-title[data-item-id="${this.slider.index}"]`).classList.add('isActive')
        }
    }
    changeIndex(event) {
        if (event.target.className != 'job-info-title') return;
        this.slider.go(`=${event.target.dataset.itemId}`)
        this.changeSlide()
    }
    init() {
        if (this.slider) {
            this.slider.mount();
        }
        this.changeSlide();
        document.addEventListener('click', (event) => this.changeIndex(event))
    }
}

export default jobInfo;