import gsap from 'gsap';

const mainCases = class MainCases {
    constructor({itemsClass}) {
        this.itemsClass = itemsClass;
    }
    init() {
        gsap.utils.toArray(".main-cases-item").forEach((item, i) => {
            gsap.to(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 3,
                    markers: true
                },
                x: -500,
            })
        })
    }
}

export default mainCases;