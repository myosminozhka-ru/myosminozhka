import videojs from 'video.js';
const companyVideo = class companyVideo {
    constructor() {
        this.player;
    }
    init() {
        if (!document.getElementById('player')) return;
        setTimeout(() => {
            this.player = document.getElementById('player');
            videojs('player', {
                fluid: true,
                controls: false,
                autoplay: true,
                aspectRatio: '16:9',
                muted: true,
                poster: 'img/video_preview.png',
                sources: [{
                    src: 'videos/pv.mp4',
                    type: 'video/mp4'
                }]
            });
        }, 300)
    }
}


export default companyVideo;