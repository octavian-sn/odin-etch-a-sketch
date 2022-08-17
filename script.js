const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

const gameWindow = document.createElement('div');
gameWindow.classList.add('gameWindow');
gameWindow.id = 'game';
container.appendChild(gameWindow);

const title = document.createElement('h1');
title.classList.add('title');
container.insertBefore(title, gameWindow);
title.innerText = 'Etch-a-Sketch';

const menu = document.createElement('div')
menu.classList.add('menu');
container.insertBefore(menu, gameWindow);

function gridSize(a) {
    gameWindow.style.gridTemplateColumns = `repeat(${a}, 1fr)`;
    for (i = 0; i < (a*a); i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', function(){
            square.style.backgroundColor = 'DarkSeaGreen';
        });
        gameWindow.appendChild(square);
    }
}

function removeChild() {
    const list = document.getElementById('game');
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
}

function changeSize() {
    let size = prompt('Please enter a value between 2 - 100.');
    if (size >= 2 && size < 101) {
        removeChild();
        gridSize(size);
    } 
}

function colorSketch() {
    document.querySelectorAll('.square').forEach(item => {
        item.addEventListener('mouseover', function(){
        item.style.backgroundColor = randomColor();
        item.style.opacity = 0.7;
    })
});
}

function graySketch() {
    document.querySelectorAll('.square').forEach(item => {
        item.addEventListener('mouseover', function(){
        item.style.backgroundColor = 'gray';
        item.style.opacity = 0.7;
    })
});
}

function randomColor() {
    let letter = '0123456789ABCDEF';
    let color = '#'
    for (i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
}

gridSize(50);

const sizeButton = document.createElement('button');
sizeButton.innerText = 'CHANGE THE SIZE';
sizeButton.classList.add('button', 'size');
menu.appendChild(sizeButton);
sizeButton.addEventListener('click', function (){changeSize()});

const colorButton = document.createElement('button');
colorButton.innerText = 'RAINBOW';
colorButton.classList.add('button', 'color');
menu.appendChild(colorButton);
colorButton.addEventListener('click', function(){colorSketch()});

const grayButton = document.createElement('button');
grayButton.innerText = 'NORMAL';
grayButton.classList.add('button', 'gray');
menu.appendChild(grayButton);
grayButton.addEventListener('click', function(){graySketch()});

const resetButton = document.createElement('button');
resetButton.innerText = 'RESET';
resetButton.classList.add('button', 'reset');
menu.appendChild(resetButton);
resetButton.addEventListener('click', function(){removeChild(), gridSize(50)});