let board = document.querySelector('.board');
let toggle = document.querySelector('.draw_toggle');
let reset_button = document.querySelector('.reset_button');

function makeGrid(size) {
    board.style.setProperty('--grid-size', size);
    board.style.setProperty('--cell-size', (600/size)+"px");
    for (let i = 0; i < size*size; i++) {
        let cell = document.createElement('div');
        cell.addEventListener('mousemove', draw);
        board.appendChild(cell).className = 'cell';
    }
}

function draw(e) {
    if (toggle.checked) {
        e.target.classList.add('cell_draw');
    } 
    else {
        e.target.classList.remove('cell_draw');
    } 
}

function reset() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(c => {
        c.parentNode.removeChild(c);
    });
    changeSize();
}

function changeSize() {
    let size = prompt("new grid size, enter a number between 1 and 48");
    if (size !== null) {
        size = parseInt(size);
        if (size < 1 || size > 48 || Number.isNaN(size)) {
            alert("Please Enter a number from 1-48");
            changeSize();
        } else {
            makeGrid(size);
        }
    }
}


reset_button.addEventListener('click', reset);

makeGrid(8);