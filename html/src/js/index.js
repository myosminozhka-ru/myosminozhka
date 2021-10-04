import Vue from 'vue';
import mainWords from "%modules%/main-words/main-words";
import mainWeb from "%modules%/main-web/main-web";
import mainAbout from "%modules%/main-about/main-about";
import mainCarousel from "%modules%/main-carousel/main-carousel";
import newsAndTrends from "%modules%/main-news-and-trends/main-news-and-trends";
import mainCases from "%modules%/main-cases/main-cases";
import cursorAnimation from "%modules%/cursor-animation/cursor-animation";
import companyVideo from "%modules%/company-video/company-video";
import companyPrinciples from "%modules%/company-principles/company-principles";
import companyPartners from "%modules%/company-partners/company-partners";
import companyReviews from "%modules%/company-reviews/company-reviews";
import companyTeam from "%modules%/company-team/company-team";
import header from "%modules%/header/header";
import mainQuestionForm from "%modules%/main-question/main-question";
import companyAbout from "%modules%/company-about/company-about";
import companyRaiting from "%modules%/company-raiting/company-raiting";
import careerBlocks from "%modules%/career-blocks/career-blocks";
import careerBlog from "%modules%/career-blog/career-blog";
import vacanciesTabs from "%modules%/vacancies-tabs/vacancies-tabs";
import jobInfo from "%modules%/job-info/job-info";
import jobTeam from "%modules%/job-team/job-team";
import jobStages from "%modules%/job-stages/job-stages";
import applicationForm from "%modules%/application-form/application-form";
// import postInfo from "%modules%/posts-info/posts-info";
// import postBlog from "%modules%/posts-blog/posts-blog";
import footer from "%modules%/footer/footer";
import cookiesForm from "%modules%/cookie-form/cookie-form";

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


window.app = new Vue({
    el: '#app',
    data: () => ({
        mainWeb: new mainWeb({
            element: '.web-tentacle',
            trigger: '.first-frame'
        }),
        mainCases: new mainCases({
            itemsClass: '.main-cases-item'
        }),
        mainQuestionForm: new mainQuestionForm({
            inputSelector: '.main-question-form-item [type="file"]',
            textSelector: '.main-question-form-item span'
        }),
        companyPrinciples: new companyPrinciples(),
        companyVideo: new companyVideo(),
        companyPartners: new companyPartners(),
        companyTeam: new companyTeam(),
        careerBlog: new careerBlog(),
        companyReviews: new companyReviews(),
        header: new header(),
        companyAbout: new companyAbout({
            selector: '.company-about:not(.company-about__title)'
        }),
        companyRaiting: new companyRaiting(),
        vacanciesTabs: new vacanciesTabs(),
        careerBlocks: new careerBlocks(),
        jobInfo: new jobInfo(),
        jobTeam: new jobTeam(),
        jobStages: new jobStages(),
        footer: new footer(),
        cookiesForm: new cookiesForm(),
        isMounted: false,
        isPreloaderHidden: false,
        sizes: {
            window: {
                width: window.innerWidth,
                height: window.innerHeight
            }
        },
        isSafary: false
    }),
    mounted() {
        let preloader = document.querySelector('.preloader svg animateTransform');
        preloader.addEventListener('endEvent', () => {
            console.log('page is loaded')
            this.isPreloaderHidden = true;
            console.log(this.isPreloaderHidden);
        })
        setTimeout(() => {
            
            this.isMounted = true;
            this.mainCases.init();
            // this.mainWords.countPosition();
            this.mainWeb.animateElement();
            // this.mainAbout.animateCircle();
            // this.mainAbout.initVideoOpening();
            // this.cursorAnimation.init();
            // this.mainCarousel.init();
            // this.newsAndTrends.init();
            this.header.init();
            this.companyVideo.init();
            this.companyPrinciples.init();
            this.companyPartners.init({
                sliderClass: '.glide'
            });
            this.companyReviews.init({
                sliderClass: '.glide'
            });
            this.companyRaiting.init();
            this.companyTeam.init();
            this.mainQuestionForm.init();
            this.companyAbout.init();
            this.careerBlocks.init();
            this.careerBlog.init();
            this.vacanciesTabs.init();
            this.jobInfo.init();
            this.jobTeam.init();
            this.jobStages.init();
            this.cookiesForm.init();
            // this.applicationForm.init();
            window.addEventListener('resize', () => {
                this.window = {
                    width: window.innerWidth,
                    height: window.innerHeight,
                }
            });
            // window.addEventListener('resize', () => this.cursorAnimation.updateCanvasSize());
            // document.addEventListener('mousemove', (event) => {
            //     this.cursorAnimation.animate({
            //         x: event.pageX,
            //         y: event.pageY,
            //     })
            // });
            window.addEventListener("orientationchange", function(event) {
                location.reload();
            });
            document.querySelector('.footer-bank .copy').addEventListener('click', () => this.footer.copyText({
                text: 'ИНН/КПП: 6317139806/631701001 Банк: АО "Тинькофф Банк" БИК: 044525974 Р/С: 40702810010000559615 Р/С: 40702810010000559615'
            }))
            
            this.isSafary = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        }, 250);
        setTimeout(this.animateTitles(), 500)
    },
    computed: {
        window: {
            get() {
                return {
                    width: this.sizes.window.width,
                    height: this.sizes.window.height
                }
            },
            set(newValue) {
                this.sizes.window = newValue;
            }
        }
    },
    methods: {
        buttonMouseEnter(event) {
            let x = event.offsetX;
            let y = event.offsetY;
            let circle = document.createElement("div");
            circle.classList.add('button-circle');
            event.target.appendChild(circle);
            event.target.children[1].style.left = x+'px';
            event.target.children[1].style.top = y+'px';
            gsap.to(event.target.children[1], 0.5, {
                width: 800,
                height: 800,
                x: -400,
                y: -400,
            })
        },
        buttonMouseLeave(event) {
            let x = event.offsetX;
            let y = event.offsetY;

            event.target.children[1].style.left = x + 'px';
            event.target.children[1].style.top = y + 'px';

            gsap.to(event.target.children[1], 0.3, {
                width: 0,
                height: 0,
                x: 0,
                y: 0,
                onComplete: () => {
                    event.target.removeChild(event.target.children[1])
                }
            })
        },
        animateTitles() {
            if (document.querySelectorAll(".animated-title")) {
                document.querySelectorAll(".animated-title").forEach((item, i) => {
                    gsap.to(item, {
                        scrollTrigger: {
                            trigger: item,
                            start: 'top bottom',
                            end: `bottom+=${window.innerHeight} bottom`,
                            // end: `top-=${window.innerHeight} top-=${window.innerHeight}`,
                            // markers: true,
                            onUpdate: (item) => {
                                if (item.progress > 0.1) {
                                    gsap.to(item.trigger, 2.5, {
                                        transform: `translateX(${-item.progress * 200 + 100}%)`
                                    })
                                } else {
                                    gsap.to(item.trigger, 2.5, {
                                        transform: `translateX(120%)`
                                    })
                                }
                            }
                        },
                        opacity: '1'
                        // x: '-100%'
                    });
                });
            }
            if (document.querySelectorAll(".animated-title-top")) {
                document.querySelectorAll(".animated-title-top").forEach((item, i) => {
                    if (window.innerWidth > 1023) {
                        gsap.to(item, {
                            scrollTrigger: {
                                trigger: item,
                                start: 'top center+=100',
                                end: `bottom+=${window.innerHeight} bottom`,
                                // end: `top-=${window.innerHeight} top-=${window.innerHeight}`,
                                // markers: true,
                                onUpdate: (item) => {
                                    console.log(item)
                                    console.log(item.progress)
                                    if (item.progress > 0.1) {
                                        gsap.to(item.trigger, 2.5, {
                                            transform: `translateX(${-item.progress * 200 + 100}%)`
                                        })
                                    } else {
                                        gsap.to(item.trigger, 2.5, {
                                            transform: `translateX(120%)`
                                        })
                                    }
                                }
                            },
                            opacity: '1'
                            // x: '-100%'
                        });
                    } else {
                        gsap.to(item, {
                            scrollTrigger: {
                                trigger: item,
                                start: 'top top+=325',
                                end: `bottom+=400 top+=325`,
                                // end: `top-=${window.innerHeight} top-=${window.innerHeight}`,
                                // markers: true,
                                onUpdate: (item) => {
                                    console.log(item)
                                    console.log(item.progress)
                                    if (item.progress > 0.1) {
                                        gsap.to(item.trigger, 2.5, {
                                            transform: `translateX(${-item.progress * 200 + 100}%)`
                                        })
                                    } else {
                                        gsap.to(item.trigger, 2.5, {
                                            transform: `translateX(120%)`
                                        })
                                    }
                                }
                            },
                            opacity: '1'
                            // x: '-100%'
                        });
                    }
                });
            }
            window.addEventListener('resize', () => {
                console.log('resized');
            })
            setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
            }, 500)
        }
    }
});