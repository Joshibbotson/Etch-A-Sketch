const gridSizeSlider = document.getElementById('slider'); // value slider//
const grid = document.getElementById('gridContainer');
const div = document.getElementById('square');
const slideLabel = document.getElementById('slideLabel')

let colourValue = "black"

//html buttons//
const clearBtn = document.getElementById('clearBtn').addEventListener('click', (e) => {
    resetGrid()
    modifyGridSize()
    colourValue = colourChoice.value
})
const eraserBtn = document.getElementById('eraserBtn').addEventListener('click', (e) => {
    colourValue = "white"
})
const rainbowBtn = document.getElementById('rainbowBtn').addEventListener('click', (e) => {
    
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)

    return colourValue = `rgb(${r}, ${g}, ${b})`
})
const colourBtn = document.getElementById('colourBtn').addEventListener ('click', (e) => {
    colourValue = colourChoice.value;
} )
const colourChoice = document.getElementById('colourChoice')


colourChoice.addEventListener('input', function defineColourChoice(){
    return colourValue = colourChoice.value
});

let mousedown = false;
// let mouseover = false; // not sure about this yet
grid.addEventListener('mousedown', mousedownSwitch)
grid.addEventListener('mouseoff', mousedownSwitch)

function mousedownSwitch(e) {
    if (e.type === 'mousedown' && mousedown === false){
        return mousedown = true
    }
        return mousedown = false
}

// function mouseoffSwitch (e) { // not sure about this yet.
//     if (e.type === 'mouseoff' && mousedown === true) {
//         return mouseover = true;
//     }
//     return mouseover = false;
// }

for (i = 0; i < 16*16; i++) {
    const newDiv = document.createElement("div")
    newDiv.setAttribute('id', "square");
    newDiv.setAttribute('class', "square")
    
    grid.insertAdjacentElement('afterbegin', newDiv)
    

    newDiv.addEventListener('mouseover', divColourChange)
    newDiv.addEventListener('mousedown', divColourChange)

    slideLabel.innerHTML= `16 x 16`
    }

gridSizeSlider.addEventListener('input', modifyGridSize ) // when input changes on value slider reset the grid//



function modifyGridSize () {
    resetGrid();
    gridCss();

    let gridSize = gridSizeSlider.value * gridSizeSlider.value;
    let gridSizeLabel = gridSizeSlider.value;
        
    for (i = 0; i < gridSize; i++) {
        let newDiv = document.createElement("div")
        newDiv.setAttribute('id', "square");
        newDiv.setAttribute('class', "square")
        
        newDiv.addEventListener('mouseover', divColourChange)
        newDiv.addEventListener('mousedown', divColourChange)
        newDiv.addEventListener('mouseoff', divColourChange)
        
        grid.insertAdjacentElement('afterbegin', newDiv)

        slideLabel.innerHTML= `${gridSizeLabel} x ${gridSizeLabel}`
        }
    gridSize = 0;
}

function resetGrid () { //removes any divs thus wiping the grid clean//
    grid.innerHTML = '';
    gridCss;
}

function gridCss () { //alters the css grid sizing//
    let size = gridSizeSlider.value;

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

}
function divColourChange (e) {
    if (e.type === "mouseover" && !mousedown) {
        return
    }
    // if (e.type === "mouseover" && e.type === "mousedown" && mousedown === true){
    e.target.style.backgroundColor =`${colourValue}`;

};



//mental note, look into changing active state to change colours...