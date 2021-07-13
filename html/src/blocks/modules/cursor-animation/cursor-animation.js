import gsap from 'gsap';

const cursorAnimation = class CursorAnimation {
    constructor(params = {
        count: 100,
        color: '#FF4978', 
        radius: 40, 
        speed: 0.7,
        lifetime: 100,
        element: 'cursor',
        link_to_shape: document.querySelector('.cursor-shape').src,
        shape: new Image(),
    }) {
        this.params = params;
        this.circles = [];
        this.params.shape.src = this.params.link_to_shape;
    }
    setCanvasSize() {
        return this.params;
    }
    createCanvas() {
        
        return new Promise((resolve, reject) => {
            if (this.params.element) {
                resolve({
                    canvas: this.canvas = document.getElementById(this.params.element),
                    ctx: this.canvas ? this.ctx = this.canvas.getContext('2d') : null,
                    width: this.width = this.canvas.width = document.querySelector('.first-frame').clientWidth,
                    height: this.height = this.canvas.height = document.querySelector('.first-frame').clientHeight,
                })
            } else {
                reject(new Error('params.element in not defined'))
            }
            this.gradient = this.ctx.createLinearGradient(0, 0, window.innerWidth, 0);
            this.gradient.addColorStop(0, "#FF4978");
            this.gradient.addColorStop(1, "#430A66");
        })
    }
    updateCanvasSize() {
        return new Promise((resolve, reject) => {
            if (this.canvas && this.ctx) {
                return resolve({
                    width: this.width = this.canvas.width = document.querySelector('.first-frame').clientWidth,
                    height: this.height = this.canvas.height = document.querySelector('.first-frame').clientHeight,
                })
            } else {
                return reject(new Error('params.element is not defined'))
            }
        })
    }
    updateColor() {
        return this.params.color+=0.01;
    }
    pushCircleObject(x, y) {
        const circle = {
            x,y,lifetime: this.params.radius, radius: this.params.radius
        }
        this.circles.push(circle)
    }
    animate({x, y}) {
        this.pushCircleObject(x, y)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = this.gradient;
        this.ctx.strokeStyle = this.gradient;
        // this.ctx.drawImage(this.params.shape, 0, 0, this.canvas.width, this.canvas.height);
        for (var i = 1; i < this.circles.length; i++) {
            
            
            this.circles[i].lifetime -= this.params.speed;
            if (this.circles[i].lifetime <= 0) {
                this.circles.splice(i, 1);
            }
            if (this.circles[i] && this.circles[i + 1]) {
                this.ctx.lineWidth = this.circles[i].radius * 2;
                this.ctx.beginPath();
                this.ctx.moveTo(this.circles[i + 1].x, this.circles[i + 1].y);
                this.ctx.lineTo(this.circles[i].x, this.circles[i].y);
                this.ctx.stroke();
                this.ctx.closePath()
                this.ctx.beginPath();
                this.ctx.arc(this.circles[i].x,this.circles[i].y,this.circles[i].radius, 0, Math.PI * 2);
                this.ctx.closePath()
                this.ctx.fill()
            }
        }
        // window.requestAnimationFrame(() => this.animate());
    }
    init() {
        this.createCanvas().then(result => {
            console.log('canvas created', result, this.width)
        });
    }
}

export default cursorAnimation;