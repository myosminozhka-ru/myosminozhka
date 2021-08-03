import videojs from 'video.js';
const companyVideo = class companyVideo {
    constructor() {
        this.player;
    }
    init() {
        if (!document.getElementById('player')) return;
        this.player = videojs('player', {
            fluid: true,
            controls: true,
            aspectRatio: '16:9',
            sources: [{
                src: 'videos/pv.mp4',
                type: 'video/mp4'
            }]
        });
    }
}


export default companyVideo;