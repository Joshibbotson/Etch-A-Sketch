const gridSizeSlider = document.getElementById('slider'); // value slider//
const grid = document.getElementById('gridContainer')


gridSizeSlider.addEventListener('click', modifyGridSize ) // when clicked value slider//

function modifyGridSize () {
    resetGrid();
    gridCss();
    let gridSize = gridSizeSlider.value * gridSizeSlider.value;

    console.log(gridSize)
        
    for (i = 0; i < gridSize; i++) {
        const newDiv = document.createElement("div")
        newDiv.setAttribute('id', "square");
        newDiv.setAttribute('class', "square")
        
        grid.insertAdjacentElement('afterbegin', newDiv)
        }
    gridSize = 0;
    console.log (gridSize)
}

function resetGrid () { //removes any d the grid clean//
    grid.innerHTML = '';
}

function gridCss () { //alters the css grid sizing//

    let size = gridSizeSlider.value;

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

}