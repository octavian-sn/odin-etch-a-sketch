const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

const gameWindow = document.createElement('div') ;
gameWindow.classList.add('gameWindow');
container.appendChild(gameWindow);

function gridSize(a) {
    gameWindow.style.gridTemplateColumns = `repeat(${a}, 1fr)`;
    size = a;
    console.log(size)
    for (i = 0; i < (size*size); i++) {
        let square = document.createElement('div');
        square.classList.add('square', i);
        square.addEventListener('mouseover', function(){
            square.style.backgroundColor = 'green';
        });
        
        gameWindow.appendChild(square);
    }
}






gridSize(42);