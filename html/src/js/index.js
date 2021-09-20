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
import postInfo from "%modules%/posts-info/posts-info";
import postBlog from "%modules%/posts-blog/posts-blog";
import footer from "%modules%/footer/footer";

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


window.app = new Vue({
    el: '#app',
    data: () => ({
        mainWords: new mainWords({
            delay: 1,
            element: '.main-words-wrap'
        }),
        mainWeb: new mainWeb({
            element: '.web-tentacle',
            trigger: '.first-frame'
        }),
        mainCarousel: new mainCarousel(),
        cursorAnimation: new cursorAnimation(),
        mainAbout: new mainAbout(),
        newsAndTrends: new newsAndTrends({
            itemsSelector: '.news-and-trends-item'
        }),
        mainCases: new mainCases({
            itemsClass: '.main-cases-item'
        }),
        mainQuestionForm: new mainQuestionForm({
            inputSelector: '.main-question-form-item [type="file"]',
            textSelector: '.main-question-form-item span'
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
            selector: '.company-about'
        }),
        companyRaiting: new companyRaiting(),
        vacanciesTabs: new vacanciesTabs(),
        careerBlocks: new careerBlocks(),
        jobInfo: new jobInfo(),
        jobTeam: new jobTeam(),
        jobStages: new jobStages(),
        footer: new footer(),
        isMounted: false,
        sizes: {
            window: {
                width: window.innerWidth,
                height: window.innerHeight
            }
        }
    }),
    mounted() {
        setTimeout(() => {
            this.isMounted = true;
            this.mainWords.countPosition();
            this.mainWeb.animateElement();
            this.mainAbout.animateCircle();
            this.cursorAnimation.init();
            this.mainCarousel.init();
            this.newsAndTrends.init();
            this.mainCases.init();
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
            window.addEventListener('resize', () => {
                this.window = {
                    width: window.innerWidth,
                    height: window.innerHeight,
                }
            });
            window.addEventListener('resize', () => this.cursorAnimation.updateCanvasSize());
            document.addEventListener('mousemove', (event) => {
                this.cursorAnimation.animate({
                    x: event.pageX,
                    y: event.pageY,
                })
            });
            window.addEventListener("orientationchange", function(event) {
                location.reload();
            });
            document.querySelector('.footer-bank .copy').addEventListener('click', () => this.footer.copyText({
                text: 'ИНН/КПП: 6317139806/631701001 Банк: АО "Тинькофф Банк" БИК: 044525974 Р/С: 40702810010000559615 Р/С: 40702810010000559615'
            }))
            this.animateTitles();
        }, 250);
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
            gsap.utils.toArray(".animated-title").forEach((item, i) => {
                gsap.to(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'bottom bottom-=100',
                        end: 'bottom bottom',
                        pin: true,
                        pinSpacing: false,
                        markers: true
                    },
                    x: 0,
                    onComplete: (element) => {
                        console.log(item.offsetWidth - window.innerWidth - (100 * window.innerWidth / 1920))
                        if (item.offsetWidth > window.innerWidth - (100 * window.innerWidth / 1920)) {
                            document.addEventListener('mousemove', (event) => {
                                gsap.to(item, 0, {
                                    translateX: () => {
                                        if (-event.pageX + window.innerWidth / 4 > 0) return;
                                        return -event.pageX + window.innerWidth / 4;
                                    },
                                });
                            });
                        }
                    }
                });
                
            });
        }
    }
});