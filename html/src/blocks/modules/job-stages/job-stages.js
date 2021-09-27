import Glide from '@glidejs/glide'
import Accordion from 'accordion-js';

const jobStages = class jobStages {
    constructor(sliderClass) {
        this.sliderClass = sliderClass;
        this.accorderon;
        this.currentTab = 0;
        if (document.querySelector('.job-stages-support')) {
            this.supportSlider = new Glide('.job-stages-support-slides', {
                startAt: 0,
                perView: 1,
                gap: 0,
                type: 'slider'
            })
            if (document.querySelector('.job-stages-support-right')) {
                this.supportImagesSlider = new Glide('.job-stages-support-right', {
                    startAt: 0,
                    perView: 1,
                    gap: 0,
                    type: 'carousel',
                    transitionType: 'fade'
                })
            }
        }
    }
    init() {
        if (document.querySelector('.job-stages-tabs')) {
            this.accorderon = new Accordion('.job-stages-tabs', {
                duration: 400,
                showMultiple: true,
                elementClass: 'job-stages-slides',
                triggerClass: 'job-stages-trig',
                panelClass: 'job-stages-slide',
                openOnInit: [0],
                beforeOpen: currentElement => {
                    console.log(currentElement);
                //   gsap.to(currentElement.querySelector('.vacancies-tabs-item-body'), 1, {
                //     heigth: currentElement.querySelector('.vacancies-tabs-item-body').offsetHeight
                //   })
                }
            });
            document.querySelectorAll('.job-stages-trigger[data-tab-id]').forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (this.currentTab == +item.dataset.tabId) return;
                    document.querySelectorAll('.job-stages-trigger[data-tab-id]').forEach(item => {
                        item.classList.remove('isActive');
                    });
                    item.classList.add('isActive');
                    this.accorderon.close(this.currentTab);
                    this.accorderon.open(+item.dataset.tabId)
                    this.currentTab = +item.dataset.tabId;
                })
            })
        };
        if (document.querySelector('.job-stages-slides--analitics')) {
            new Glide('.job-stages-slides--analitics', {
                startAt: 0,
                perView: 2,
                gap: 120,
                type: 'carousel',
                breakpoints: {
                    800: {
                        perView: 1,
                    }
                }
            }).mount();
        };
        if (document.querySelector('.job-stages-slides--projecting')) {
            new Glide('.job-stages-slides--projecting', {
                startAt: 0,
                perView: 2,
                gap: 120,
                type: 'carousel',
                breakpoints: {
                    800: {
                        perView: 1,
                    }
                }
            }).mount();
        };
        if (document.querySelector('.job-stages-slides--design')) {
            new Glide('.job-stages-slides--design', {
                startAt: 0,
                perView: 1,
                gap: 0,
                type: 'carousel'
            }).mount();
        };
        if (document.querySelector('.job-stages-slides--development')) {
            new Glide('.job-stages-slides--development', {
                startAt: 0,
                perView: 1,
                gap: 0,
                type: 'carousel'
            }).mount();
        };
        
        if (document.querySelector('.job-stages-support')) {
            this.supportSlider.mount();
            console.log(this.supportImagesSlider);
            if (document.querySelector('.job-stages-support-right')) {
                this.supportImagesSlider.mount();
                this.supportSlider.on(['move.after'], () => {
                    this.supportImagesSlider.go(`=${this.supportSlider.index}`)
                })
            }
        };
        if (document.querySelector('.job-stages-title-triggers')) {
            document.querySelectorAll('.job-stages-title-triggers').forEach(wrap => {
                wrap.querySelectorAll('.job-stages-title-trigger').forEach(item => {
                    item.addEventListener('click', () => {
                        wrap.querySelectorAll('.job-stages-title-trigger').forEach(trigger => {
                            trigger.classList.remove('isActive')
                        })
                        item.classList.add('isActive');
                        console.log(item.dataset.targetType)
                    })
                });
            });
        }
    }
}

export default jobStages;