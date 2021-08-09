import moment from 'moment';
import gsap from 'gsap';
import Glide from '@glidejs/glide'

const newsAndTrends = class NewsAndTrends {
    constructor({itemsSelector}) {
        this.itemsSelector = itemsSelector;
        this.currentDate = moment();
        this.items = [];
        this.pageOffset;
        this.animation;
        this.slider;
    }
    initSlider() {
        this.slider = new Glide('.news-and-trends-left-glide', {
            type: 'carousel',
            startAt: 0,
            perView: 1
        }).mount();
    }
    checkProgress() {
        document.addEventListener('scroll', () => {
            if (this.animation.ratio >= 0.99) {
                document.querySelector('.news-and-trends-arrows .next').classList.add('disabled')
            }
            if (this.animation.ratio < 0.99) {
                document.querySelector('.news-and-trends-arrows .next').classList.remove('disabled')
            }
            if (this.animation.ratio > 0) {
                document.querySelector('.news-and-trends-arrows .prev').classList.remove('disabled')
            }
            if (this.animation.ratio == 0) {
                document.querySelector('.news-and-trends-arrows .prev').classList.add('disabled')
            }
        });
    }
    scrollWindow() {
        let nextInterval;
        let prevInterval;
        // if (this.animation.ratio < 1) {
            document.querySelector('.news-and-trends-arrows .next').addEventListener('mousedown', () => {
                
                nextInterval = setInterval(() => {
                    this.pageOffset = window.pageYOffset;
                    window.scrollTo(0, this.pageOffset += 10)
                }, 100)
            })
            document.querySelector('.news-and-trends-arrows .next').addEventListener('mouseup', () => {
                clearInterval(nextInterval);
            })
            document.querySelector('.news-and-trends-arrows .next').addEventListener('mouseleave', () => {
                clearInterval(nextInterval);
            })
        // }
        // if (this.animation.ratio > 0) {
            document.querySelector('.news-and-trends-arrows .prev').addEventListener('mousedown', () => {
                prevInterval = setInterval(() => {
                    this.pageOffset = window.pageYOffset;
                    window.scrollTo(0, this.pageOffset -= 10)
                }, 100)
            })
            document.querySelector('.news-and-trends-arrows .prev').addEventListener('mouseup', () => {
                clearInterval(prevInterval);
            })
            document.querySelector('.news-and-trends-arrows .prev').addEventListener('mouseleave', () => {
                clearInterval(prevInterval);
            })
        // }
    }
    loadItems() {
        return new Promise((resolve, reject) => {
            this.items = document.querySelectorAll(this.itemsSelector);
            resolve(this.items);
        })
    }
    resizeItems(items) {        
        return new Promise((resolve, reject) => {
            if (!items) {
                reject(new Error('Нет элементов'))
            };
            for (let i = 0; i < items.length; i++) {
                console.log(items[i].offsetWidth)
                items[i].style.minWidth = items[i].offsetWidth / this.currentDate.diff(moment(items[i].dataset.createdAt).format(), 'days') * 10 + 'px' 
            }
            resolve(items);
        })
    }
    animateItems() {
        this.animation = gsap.to('.news-and-trends-right-items', {
            scrollTrigger: {
                trigger: '.news-and-trends-trigger',
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
                pin: true,
            },
            x: '-100%'
        })
    }
    chooseElement(element) {
        console.log(element)
        this.slider.go(`=${element.dataset.itemId}`)
    }
    init() {
        if (!document.querySelector('.news-and-trends')) return;
        this.loadItems().then(items => {
            this.resizeItems(items).then(() => {
                setTimeout(() => {
                    this.animateItems();
                    this.scrollWindow();
                    this.checkProgress();
                    this.initSlider();

                    document.querySelectorAll('.news-and-trends-item').forEach(item => {
                        item.addEventListener('click', () => this.chooseElement(item))
                    })
                }, 200)
            })
            
        })
    }
}

export default newsAndTrends;