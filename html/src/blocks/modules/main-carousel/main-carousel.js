// const mainCarousel = class MainCarousel {
//     constructor({
//         carouselClass,
//         cellClass,
//         cellsRangeClass,
//         cellCount = 7,
//         isHorizontal = true,
//         selectedIndex = 5,
//         prevButtonClass = '.prev-button',
//         nextButtonClass = '.next-button'
//     }) {
//         this.carouselClass = carouselClass;
//         this.cellClass = cellClass;
//         this.cellsRangeClass = cellsRangeClass;
//         this.cellCount = cellCount;
//         this.isHorizontal = isHorizontal;
//         this.rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';
//         this.carousel = document.querySelector(this.carouselClass);
//         this.cells = this.carousel.querySelectorAll(this.cellClass);
//         this.cellsRange = document.querySelector(this.cellsRangeClass);
//         this.cellWidth = this.carousel.offsetWidth;
//         this.cellHeight = this.carousel.offsetHeight;
//         this.selectedIndex = selectedIndex;
//         this.prevButtonClass = prevButtonClass;
//         this.nextButtonClass = nextButtonClass;
//         this.theta;
//         this.radius;
//     }
//     prev() {
//         this.selectedIndex--;
//         this.rotateCarousel();
//         console.log('prev')
//     }
//     next() {
//         this.selectedIndex++;
//         this.rotateCarousel();
//         console.log('next')
//     }
//     init() {
//         document.querySelector(this.prevButtonClass).addEventListener('click', () => this.prev);
//         document.querySelector(this.nextButtonClass).addEventListener('click', () => this.next);

//         this.cellsRange.addEventListener( 'change', () => this.changeCarousel );
//         this.cellsRange.addEventListener( 'input', () => this.changeCarousel );

//         var orientationRadios = document.querySelectorAll('input[name="orientation"]');
//         ( function() {
//         for ( var i=0; i < orientationRadios.length; i++ ) {
//             var radio = orientationRadios[i];
//             radio.addEventListener( 'change', () => this.onOrientationChange );
//         }
//         })();

        

//         document.addEventListener('click', event => {
//             if (event.target.dataset.cellIndex) {
//                 console.log(event.target.dataset.cellIndex - 1);
//                 this.chooseElem(event.target.dataset.cellIndex - 1)
//             }
//         });

//         // set initials
//         this.onOrientationChange();
//     }
    
//     rotateCarousel() {
//         var angle = this.theta * this.selectedIndex * -1;
//         this.carousel.style.transform = 'translateZ(' + -this.radius + 'px) ' + 
//         this.rotateFn + '(' + angle + 'deg)';
//     }
//     changeCarousel() {
//         console.log('change')
//         this.cellCount = this.cellsRange.value;
//         this.theta = 360 / this.cellCount;
//         var cellSize = this.isHorizontal ? this.cellWidth : this.cellHeight;
//         this.radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / this.cellCount ) );
//         for ( var i=0; i < this.cells.length; i++ ) {
//             var cell = this.cells[i];
//             if ( i < this.cellCount ) {
//             // visible cell
//             cell.style.opacity = 1;
//             var cellAngle = this.theta * i;
//             cell.style.transform = this.rotateFn + '(' + cellAngle + 'deg) translateZ(' + this.radius + 'px)';
//             } else {
//             // hidden cell
//             cell.style.opacity = 0;
//             cell.style.transform = 'none';
//             }
//         }

//         this.rotateCarousel();
//     }
//     onOrientationChange() {
//         var checkedRadio = document.querySelector('input[name="orientation"]:checked');
//         this.isHorizontal = checkedRadio.value == 'horizontal';
//         this.rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';
//         this.changeCarousel();
//     }
//     chooseElem(index) {
//         this.selectedIndex = index;
//         this.rotateCarousel();
//     }
    
// }


// export default mainCarousel;










const mainCarousel = class MainCarousel {
    constructor() {}
    init() {
        var carousel = document.querySelector('.main-carousel-carousel');
        var cells = carousel.querySelectorAll('.main-carousel-cell');
        var cellCount; // cellCount set from cells-range input value
        var selectedIndex = 5;
        var cellWidth = carousel.offsetWidth;
        var cellHeight = carousel.offsetHeight;
        var isHorizontal = true;
        var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
        var radius, theta;
        // console.log( cellWidth, cellHeight );

        function rotateCarousel() {
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
        rotateCarousel();
        }

        document.addEventListener('click', function(event) {
            if (event.target.dataset.cellIndex) {
                console.log(event.target.dataset.cellIndex - 1);
                chooseElem(event.target.dataset.cellIndex - 1)
            }
        });

        // set initials
        onOrientationChange();
    }
}


export default mainCarousel;