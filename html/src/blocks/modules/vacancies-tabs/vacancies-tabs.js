import Accordion from 'accordion-js';
import gsap from 'gsap';


const vacanciesTabs = class vacanciesTabs {
    constructor() {}
    init() {
        new Accordion('.vacancies-tabs-items', {
            duration: 400,
            showMultiple: true,
            elementClass: 'vacancies-tabs-item',
            triggerClass: 'vacancies-tabs-item-title',
            panelClass: 'vacancies-tabs-item-body',
            beforeOpen: currentElement => {
              gsap.to(currentElement.querySelector('.vacancies-tabs-item-body'), 1, {
                heigth: currentElement.querySelector('.vacancies-tabs-item-body').offsetHeight
              })
            }
        });
    }
}

export default vacanciesTabs;