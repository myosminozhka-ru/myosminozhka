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
                poster: 'local/img/video_preview.png',
                sources: [{
                    src: 'local/videos/pv.mp4',
                    type: 'local/videos/mp4'
                }]
            });
        }, 300)
        if (!document.getElementById('player2')) return;
        setTimeout(() => {
            this.player = document.getElementById('player2');
            videojs('player2', {
                fluid: true,
                controls: false,
                autoplay: true,
                aspectRatio: '16:9',
                muted: true,
                poster: 'local/img/video_preview.png',
                sources: [{
                    src: 'local/videos/pv.mp4',
                    type: 'video/mp4'
                }]
            });
        }, 300)
        if (!document.getElementById('player3')) return;
        setTimeout(() => {
            this.player = document.getElementById('player3');
            videojs('player3', {
                fluid: true,
                controls: false,
                autoplay: true,
                aspectRatio: '16:9',
                muted: true,
                poster: 'local/img/video_preview.png',
                sources: [{
                    src: 'local/videos/pv.mp4',
                    type: 'video/mp4'
                }]
            });
        }, 300)
    }
}


export default companyVideo;