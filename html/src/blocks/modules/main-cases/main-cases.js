import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Glide from '@glidejs/glide'

gsap.registerPlugin(ScrollTrigger);

const mainCases = class MainCases {
    constructor({itemsClass}) {
        this.itemsClass = itemsClass;
        this.slider = new Glide('.main-cases-slider', {
            type: 'carousel',
            startAt: 1,
            perView: 1,
            gap: 0,
        });
    }
    initMobileSlider() {
        if (!document.querySelector('.main-cases-slider')) return;
            this.slider.mount();
    }
    destroyMobileSlider() {
        if (!document.querySelector('.main-cases-slider')) return;
        this.slider.destroy();
    }
    onInit() {}
    onAnimationStart() {}
    onAnimationEnd() {}
    
    init() {
         
        if (document.querySelector('.case_page__prot')) {
            if ((window.innerWidth <= 1366 && window.innerWidth > 1023) || (window.innerWidth > 1440)) {
               setTimeout(() => {
                    gsap.to('.case_page__prot--title', {
                        scrollTrigger: {
                            trigger: '.case_page__prot',
                            start: 'top top',
                            end: 'bottom bottom-=1000',
                            scrub: 11,
                            // markers: true,
                            onUpdate: (item) => {
                                if (item.progress > 0.05 && item.progress < 0.65) {
                                    document.querySelector('.case_page__prot--title').classList.add('isInViewport');
                                } else {
                                    document.querySelector('.case_page__prot--title').classList.remove('isInViewport');
                                }
                            }
                        },
                        x: '-100%',
                    });
                }, 1000);
                setTimeout(() => {
                     gsap.to('.case_page__gl--title', {
                         scrollTrigger: {
                             trigger: '.gl_blocks',
                             start: 'top top',
                             end: 'bottom bottom-=300',
                             scrub: 11,
                             // markers: true,
                             onUpdate: (item) => {
                                 if (item.progress > 0.05 && item.progress < 0.65) {
                                     document.querySelector('.case_page__gl--title').classList.add('isInViewport');
                                 } else {
                                     document.querySelector('.case_page__gl--title').classList.remove('isInViewport');
                                 }
                             }
                         },
                         x: '-100%',
                     });
                 }, 1000);
                 setTimeout(() => {
                      gsap.to('.case_page__about--wtitle', {
                          scrollTrigger: {
                              trigger: '.case_page__about--work',
                              start: 'top top',
                              end: 'bottom bottom-=300',
                              scrub: 11,
                              // markers: true,
                              onUpdate: (item) => {
                                  if (item.progress > 0.05 && item.progress < 0.65) {
                                      document.querySelector('.case_page__about--wtitle').classList.add('isInViewport');
                                  } else {
                                      document.querySelector('.case_page__about--wtitle').classList.remove('isInViewport');
                                  }
                              }
                          },
                          x: '-100%',
                      });
                  }, 1000);
            }
        }
        if (!document.querySelector('.main-cases')) return;
        let self = this;
        this.onInit()
        if (window.innerWidth < 1023) {
        this.initMobileSlider();
        } else {
            this.destroyMobileSlider();
        }
         
         if ((window.innerWidth <= 1366 && window.innerWidth > 1023) || (window.innerWidth > 1440)) {
            setTimeout(() => {
                gsap.to('.main-cases-items-in', {
                    scrollTrigger: {
                        trigger: '.main-cases',
                        start: 'top top',
                        end: 'bottom bottom-=200',
                        scrub: 2,
                        // markers: true,
                        onUpdate: (item) => {
                            if (item.progress > 0.05 && item.progress < 0.65) {
                                document.querySelector('.main-cases-items-in').classList.add('isInViewport');
                            } else {
                                document.querySelector('.main-cases-items-in').classList.remove('isInViewport');
                            }
                        }
                    },
                    x: '-100%',
                });
                gsap.to('.main-cases', {
                    scrollTrigger: {
                        trigger: '.main-cases',
                        start: 'top top-=350',
                        end: 'bottom bottom',
                        pin: true,
                        scrub: 2,
                        pinSpacing: false,
                        // markers: true
                    },
                    x: 0,
                    onStart() {
                        self.onAnimationStart();
                    },
                    onComplete() {
                        self.onAnimationEnd();
                    }
                });
            }, 1000);
        } else if (window.innerWidth <= 1440 && window.innerWidth > 1366) {
            setTimeout(() => {
                gsap.to('.main-cases-items-in', {
                    scrollTrigger: {
                        trigger: '.main-cases',
                        start: 'top top',
                        end: 'bottom bottom-=200',
                        scrub: 2,
                        // markers: true,
                        onUpdate: (item) => {
                            if (item.progress > 0.05 && item.progress < 0.65) {
                                document.querySelector('.main-cases-items-in').classList.add('isInViewport');
                            } else {
                                document.querySelector('.main-cases-items-in').classList.remove('isInViewport');
                            }
                        }
                    },
                    x: '-100%',
                });
                gsap.to('.main-cases', {
                    scrollTrigger: {
                        trigger: '.main-cases',
                        start: 'top top-=200',
                        end: 'bottom bottom',
                        pin: true,
                        scrub: 2,
                        pinSpacing: false,
                        // markers: true
                    },
                    x: 0,
                    onStart() {
                        self.onAnimationStart();
                    },
                    onComplete() {
                        self.onAnimationEnd();
                    }
                });
            }, 1000);
        } 
        // else if (window.innerWidth <= 1023) {
        //     console.log('это мобилка')
        //     setTimeout(() => {
        //         gsap.to('.main-cases-items-in', {
        //             scrollTrigger: {
        //                 trigger: '.main-cases',
        //                 start: 'top top',
        //                 end: 'bottom bottom',
        //                 scrub: 3,
        //                 // markers: true,
        //                 onUpdate: (item) => {
        //                     if (item.progress > 0.05 && item.progress < 0.65) {
        //                         document.querySelector('.main-cases-items-in').classList.add('isInViewport');
        //                     } else {
        //                         document.querySelector('.main-cases-items-in').classList.remove('isInViewport');
        //                     }
        //                 }
        //             },
        //             x: '-100%',
        //         });
        //         gsap.to('.main-cases', {
        //             scrollTrigger: {
        //                 trigger: '.main-cases',
        //                 start: 'top top-=100',
        //                 end: 'bottom bottom',
        //                 pin: true,
        //                 pinSpacing: false,
        //                 // markers: true
        //             },
        //             x: 0,
        //         });
        //     }, 1000);
        // }
    }
}

export default mainCases;