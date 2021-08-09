import gsap from 'gsap';

const mainCases = class MainCases {
    constructor({itemsClass}) {
        this.itemsClass = itemsClass;
    }
    init() {
        gsap.to('.main-cases-bg', {
            scrollTrigger: {
                trigger: '.news-and-trends-trigger',
                start: 'top+=500 top+=500',
                end: 'bottom+=500 top+=500',
                scrub: 3,
                // markers: true
            },
            top: -100,
        });
        gsap.utils.toArray(".main-cases-item").forEach((item, i) => {
            gsap.to(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top+=400 top+=400',
                    end: 'bottom+=400 top+=400',
                    scrub: 3,
                    // markers: true
                },
                x: '-110vw',
            })
        })
        
    }
}

export default mainCases;