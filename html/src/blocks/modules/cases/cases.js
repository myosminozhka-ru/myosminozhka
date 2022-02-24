import gsap from 'gsap';

const modelurl = "./models/border.glb";
const modelurl2 = "./models/dots.glb";
const modelurl5 = "./models/shield.glb";
const modelurl6 = "./models/sphere.glb";
const line4 = "./models/line4.glb";
const line5 = "./models/line5.glb";
const line6 = "./models/line6.glb";
const circule1 = "./models/circule1.glb";
const circule2 = "./models/circule2.glb";
const circule3 = "./models/circule3.glb";




const casesUpdated = class CasesUpdated {
    constructor() {}
    bioline() {
        if (!document.querySelector('.cases__item.bioline')) return;
        document.querySelectorAll('.cases__item.bioline').forEach(item => {
            item.addEventListener('mousemove', event => {
                gsap.to(item.querySelector('.bioline__image--hidden'), {
                    'clip-path': `polygon(0% 0%, ${event.offsetX}px 0%, ${event.offsetX}px 100%, 0% 100%)`
                });
            })
            item.addEventListener('mouseleave', event => {
                gsap.to(item.querySelector('.bioline__image--hidden'), {
                    'clip-path': `polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)`
                });
            })
        })
    }
    setParalax() {
        document.querySelectorAll('.cases__item[data-is_paralaxed]').forEach(item => {
            item.addEventListener('mousemove', (event) => {
                console.log(event.offsetX,event.offsetY);
                item.querySelectorAll('[data-speed]').forEach(elem => {
                    console.log(elem.dataset.speed);
                    gsap.to(elem, {
                        x: event.offsetX / elem.dataset.speed,
                        y: event.offsetY / elem.dataset.speed
                    });
                })
            })
        });
    }


    loadModel(url) {
        return new Promise((resolve, reject) => {
            const manager = new THREE.LoadingManager();
            const loader = new THREE.GLTFLoader(manager);
            loader.load(url,
                function (gltf) {
                    resolve(gltf.scene)
                },
                function (xhr) {
    
                },
                function (error) {
                    console.log(error);
                }
            );
        });
    }
    init() {
        if (!document.querySelector('.cases__items') || window.innerWidth <= 1024) return;
        this.bioline();
        this.setParalax();
    }
}
export default casesUpdated;