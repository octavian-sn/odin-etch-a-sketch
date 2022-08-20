// Creating the containers
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

// Creating functions for the grid/sizing/clearing and colorizing
function gridSize(a) {
    gameWindow.style.gridTemplateColumns = `repeat(${a}, 1fr)`;
    for (i = 0; i < (a*a); i++) {
        let square = document.createElement('div');
        let opacity = 0.1
        square.classList.add('square');
        square.addEventListener('mouseover', function(){
            opacity += 0.1;
            square.style.opacity = opacity;
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
grayButton.classList.remove('pressed');
eraseButton.classList.remove('pressed');
colorButton.classList.add('pressed');
}

function eraser() {
    document.querySelectorAll('.square').forEach(item => {
        item.addEventListener('mouseover', function(){
        item.style.backgroundColor = 'black';
        item.style.opacity = 0.1;
    })
});
grayButton.classList.remove('pressed');
colorButton.classList.remove('pressed');
eraseButton.classList.add('pressed');
}

function graySketch() {
    document.querySelectorAll('.square').forEach(item => {
        let opacity = 0.1;
        item.addEventListener('mouseover', function(){
            item.style.backgroundColor = 'black';
            opacity += 0.1;
            item.style.opacity = opacity;
    })
});
eraseButton.classList.remove('pressed');
colorButton.classList.remove('pressed');
grayButton.classList.add('pressed');
}

function randomColor() {
    let letter = '0123456789ABCDEF';
    let color = '#'
    for (i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Drawing the default sketch board
gridSize(50);

// Creating the buttons
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
grayButton.classList.add('pressed');
grayButton.addEventListener('click', function(){graySketch()});

const eraseButton = document.createElement('button');
eraseButton.innerText = 'ERASER';
eraseButton.classList.add('button', 'erase');
menu.appendChild(eraseButton);
eraseButton.addEventListener('click', function(){eraser()});

const resetButton = document.createElement('button');
resetButton.innerText = 'RESET';
resetButton.classList.add('button', 'reset');
menu.appendChild(resetButton);
resetButton.addEventListener('click', function(){removeChild(), gridSize(50),
    grayButton.classList.add('pressed'), 
    colorButton.classList.remove('pressed'),
    eraseButton.classList.remove('pressed')});

// Creating the footer containing credits
const credits = document.createElement('div');
credits.classList.add('credits');
container.appendChild(credits);

let text = document.createElement('p');
text.innerText = 'Copyright Ⓒ 2022 TheOdinProject - created by';
credits.appendChild(text);
let one = document.createElement('a');
one.classList.add('link');
let link = document.createTextNode('Octavian Șulic')
one.appendChild(link);
one.title = "Octavian Șulic's GitHub page";
one.href = 'https://github.com/octavian-sn'
credits.appendChild(one);