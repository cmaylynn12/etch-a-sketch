
function setUpDrawingPad(columns, rows) {

    //Get the drawing pad element from the HTML Page
    let drawPad = document.querySelector('#draw-pad');

    drawPad.style.setProperty('--grid-rows', rows);
    drawPad.style.setProperty('--grid-cols', columns);
    //Create a grid box element to place into the draw pad

    for (i=0; i < columns*rows; i++) {
        
        let gridBox = document.createElement('div');
        gridBox.id = i;
        drawPad.appendChild(gridBox).className = "grid-box";
    }
    
    function colorTheGrid(e) {
        e.target.classList.add('color-box');
    }

    let individualGridBox = document.querySelectorAll('.grid-box');

    individualGridBox.forEach((gridBox) => {
        gridBox.addEventListener('mouseover', colorTheGrid);
    })
}

function start() {
    
    setUpDrawingPad(16, 16);


    function clearTheGrid() {

        let drawPad = document.querySelector('#draw-pad');
        let individualGridBox = document.querySelectorAll('.grid-box');

        individualGridBox.forEach((gridBox) => {
            drawPad.removeChild(gridBox);

        })
        
        let cols = prompt('Enter new grid: ');
        let rows = cols;

        setUpDrawingPad(cols, rows);
    }

    const clearButton = document.querySelector("#clear-btn");
    clearButton.addEventListener('click', clearTheGrid);

}

start();