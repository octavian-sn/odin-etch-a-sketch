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
        square.classList.add('square', i);
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
    removeChild();
    if (size >= 2 && size < 101) {
        gridSize(size);
    } else gridSize(50);
}

gridSize(50);

const sizeButton = document.createElement('button');
sizeButton.innerText = 'CHANGE THE SIZE';
sizeButton.classList.add('button', 'size');
menu.appendChild(sizeButton);
sizeButton.addEventListener('click', function (){changeSize()});