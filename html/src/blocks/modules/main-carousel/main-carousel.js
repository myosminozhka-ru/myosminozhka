import interact from 'interactjs'

const mainCarousel = class MainCarousel {
    constructor() {}
    init() {
        var carousel = document.querySelector('.main-carousel-carousel');
        if (!carousel) return;
        var cells = carousel.querySelectorAll('.main-carousel-cell');
        var cellCount; // cellCount set from cells-range input value
        var selectedIndex = 5;
        var cellWidth = carousel.offsetWidth;
        var cellHeight = carousel.offsetHeight;
        var isHorizontal = true;
        var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
        var radius, theta;


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
                chooseElem(event.target.dataset.cellIndex - 1)
            }
        });
        var interval = setInterval(function () {
            selectedIndex++;
            chooseElem(selectedIndex);
        }, 5000);
        // document.querySelector('.main-carousel-scene').addEventListener( 'mousemove mouseenter', function(event) {
        //     console.log(12312313);
        //     if (event.target.dataset.cellIndex) {
        //         chooseElem(event.target.dataset.cellIndex - 1)
        //         clearInterval(interval);
        //         const style = window.getComputedStyle(document.querySelector('.main-carousel-carousel'))
        //         const matrix = style.transform || style.webkitTransform || style.mozTransform
        //         const matrixType = matrix.includes('3d') ? '3d' : '2d'
        //         const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ')
        //         var z = 0
        //             if (matrixType === '3d') {
        //                 z = matrixValues[14]
        //             }
        //         document.querySelector('.main-carousel-carousel').style.transform = `translateZ(${z}px) rotateY(${event.clientX / 10}deg)`;
        //     }
        // });

        // set initials
        onOrientationChange();

        let degs = 0;
        let starCoord = 0;
        
        interact('.main-carousel').draggable({                     // make the element fire drag events
            origin: 'self',                   // (0, 0) will be the element's top-left
            inertia: true,                    // start inertial movement if thrown
            // modifiers: [
            // interact.modifiers.restrict({
            //     restriction: 'self'           // keep the drag coords within the element
            // })
            // ],
            // Step 3
            listeners: {
            move (event) {
                    // chooseElem(event.target.dataset.cellIndex - 1)
                    console.log(starCoord);
                    clearInterval(interval);
                    let style = window.getComputedStyle(document.querySelector('.main-carousel-carousel'))
                    let matrix = style.transform || style.webkitTransform || style.mozTransform
                    let matrixType = matrix.includes('3d') ? '3d' : '2d'
                    let matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ')
                    var z = 0
                        if (matrixType === '3d') {
                            z = +matrixValues[14]
                        }
                    var y = 0
                        if (matrixType === '3d') {
                            y = +matrixValues[14]
                        }
                    
                    degs = y + (starCoord - event.clientX / 5);
                    document.querySelector('.main-carousel-carousel').style.transform = `translateZ(${z}px) rotateY(${degs}deg)`;
                
            }
            }
        }).on('dragstart', (event) => {
           starCoord = event.clientX;
        }).on('dragmove', () => {
            
            document.querySelector('.main-carousel-carousel').classList.add('isDragable');
        }).on('dragend', () => {
            console.log(degs - 360)
            document.querySelector('.main-carousel-carousel').classList.remove('isDragable');
        })

    }
}


export default mainCarousel;