import Glide from '@glidejs/glide'

const jobInfo = class jobInfo {
    constructor() {}
    init() {
        if (!document.querySelector('.job-info-right-slider')) return;
        new Glide('.job-info-right-slider', {
            startAt: 0,
            perView: 1,
        }).mount();
    }
}

export default jobInfo;