import interact from 'interactjs'
import Glide from '@glidejs/glide'

const mainCarousel = class MainCarousel {
    constructor() {
        if (!document.querySelector('.main-carousel__slider')) return ;
        this.slider = new Glide('.main-carousel__slider', {
            type: 'carousel',
            startAt: 1,
            perView: 1,
            gap: 0,
        });
    }
    init() {
        if (this.slider) {
            this.slider.mount();
        }
        var self = this;
        var carousel = document.querySelector('.main-carousel-carousel');
        if (!carousel) return;
        var cells = carousel.querySelectorAll('.main-carousel-cell');
        var cellCount; // cellCount set from cells-range input value
        var selectedIndex = 0;
        var cellWidth = carousel.offsetWidth;
        var cellHeight = carousel.offsetHeight;
        var isHorizontal = true;
        var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
        var radius, theta;


        function rotateCarousel() {
            console.log(self.slider.index, selectedIndex);
            if (selectedIndex - 1 <= cells.length) {
                self.slider.go(`=${selectedIndex}`);
            } else {
                self.slider.go(`=${selectedIndex - cells.length}`);
            }
        var angle = theta * selectedIndex * -1;
        carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 
            rotateFn + '(' + angle + 'deg)';
        }

        var prevButton = document.querySelector('.previous-button');
        prevButton.addEventListener( 'click', function() {
        selectedIndex--;
        rotateCarousel();
        });

        var nextButton = document.querySelector('.next-button');
        nextButton.addEventListener( 'click', function() {
        selectedIndex++;
        rotateCarousel();
        });

        var cellsRange = document.querySelector('.cells-range');
        cellsRange.addEventListener( 'change', changeCarousel );
        cellsRange.addEventListener( 'input', changeCarousel );



        function changeCarousel() {
        cellCount = cellsRange.value;
        theta = 360 / cellCount;
        var cellSize = isHorizontal ? cellWidth : cellHeight;
        radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
        for ( var i=0; i < cells.length; i++ ) {
            var cell = cells[i];
            if ( i < cellCount ) {
            // visible cell
            cell.style.opacity = 1;
            var cellAngle = theta * i;
            cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
            } else {
            // hidden cell
            cell.style.opacity = 0;
            cell.style.transform = 'none';
            }
        }

        rotateCarousel();
        }

        var orientationRadios = document.querySelectorAll('input[name="orientation"]');
        ( function() {
        for ( var i=0; i < orientationRadios.length; i++ ) {
            var radio = orientationRadios[i];
            radio.addEventListener( 'change', onOrientationChange );
        }
        })();

        function onOrientationChange() {
        var checkedRadio = document.querySelector('input[name="orientation"]:checked');
        isHorizontal = checkedRadio.value == 'horizontal';
        rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
        changeCarousel();
        }
        function chooseElem(index) {
            selectedIndex = index;
            self.slider.go(`=${index}`);
            rotateCarousel();
        }

        document.addEventListener('click', function(event) {
            if (event.target.dataset.cellIndex) {
                chooseElem(event.target.dataset.cellIndex - 1)
            }
        });
        var interval = setInterval(function () {
            selectedIndex++;
            rotateCarousel();
        }, 5000);

        // set initials
        onOrientationChange();

        let degs = 0;
        let starCoord = 0;
        
        // interact('.main-carousel').draggable({                     // make the element fire drag events
        //     origin: 'self',                   // (0, 0) will be the element's top-left
        //     inertia: true,                    // start inertial movement if thrown
        //     // modifiers: [
        //     // interact.modifiers.restrict({
        //     //     restriction: 'self'           // keep the drag coords within the element
        //     // })
        //     // ],
        //     // Step 3
        //     listeners: {
        //     move (event) {
        //             // chooseElem(event.target.dataset.cellIndex - 1)
        //             console.log(starCoord);
        //             clearInterval(interval);
        //             let style = window.getComputedStyle(document.querySelector('.main-carousel-carousel'))
        //             let matrix = style.transform || style.webkitTransform || style.mozTransform
        //             let matrixType = matrix.includes('3d') ? '3d' : '2d'
        //             let matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ')
        //             var z = 0
        //                 if (matrixType === '3d') {
        //                     z = +matrixValues[14]
        //                 }
        //             var y = 0
        //                 if (matrixType === '3d') {
        //                     y = +matrixValues[14]
        //                 }
                    
        //             degs = y - (starCoord - event.clientX / 5);
        //             document.querySelector('.main-carousel-carousel').style.transform = `translateZ(${z}px) rotateY(${degs}deg)`;
                
        //     }
        //     }
        // }).on('dragstart', (event) => {
        //    starCoord = event.clientX;
        // }).on('dragmove', () => {
            
        //     document.querySelector('.main-carousel-carousel').classList.add('isDragable');
        // }).on('dragend', () => {
        //     // chooseElem(Math.abs(Math.round(degs / cells.length / 10)));
        //     document.querySelector('.main-carousel-carousel').classList.remove('isDragable');
        // })

    }
}


export default mainCarousel;