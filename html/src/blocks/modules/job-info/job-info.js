import Glide from '@glidejs/glide'

const jobInfo = class jobInfo {
    constructor() {
        this.index = 0;
    }
    changeSlide(index) {
        document.querySelectorAll('.job-info-title').forEach(item => {
            item.classList.remove('isActive');
        })
        document.querySelectorAll('.job-info-item').forEach(item => {
            item.classList.remove('isActive');
        })
        console.log(document.querySelector(`.job-info-item[data-target-id="${index}"]`).clientHeight);
        document.querySelector('.job-info-right').style.height = document.querySelector(`.job-info-item[data-target-id="${index}"]`).offsetHeight + 'px';
        document.querySelector(`.job-info-title[data-item-id="${index}"]`).classList.add('isActive')
        document.querySelector(`.job-info-item[data-target-id="${index}"]`).classList.add('isActive')
    }
    changeIndex(event) {
        if (event.target.className != 'job-info-title') return;
        console.log(event.target.dataset.itemId);
        this.changeSlide(event.target.dataset.itemId)
    }
    sliderInterval() {
        setInterval(() => {
            var index = this.index++;
            if (!document.querySelector(`.job-info-title[data-item-id="${++index}"]`) && !document.querySelector(`.job-info-item[data-target-id="${++index}"]`)) {
                this.index = 0;
            }
            this.changeSlide(this.index)        
        }, 5000);
    }
    init() {
        if (!document.querySelector('.job-info')) return;
        this.changeSlide(this.index);
        this.sliderInterval();
        document.addEventListener('click', (event) => this.changeIndex(event))
    }
}

export default jobInfo;