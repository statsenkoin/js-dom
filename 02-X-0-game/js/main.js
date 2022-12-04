const content = document.querySelector('.content');

let markup = '';
let player = 'X';
const winVars = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let winVar = [];
let playerX = [];
let playerO = [];
let currentPlayer = playerX;
let numberOfSteps = 0;

for (let i = 1; i <= 9; i += 1) {
  markup += `<div class="item" data-id=${i}></div>`;
}
content.insertAdjacentHTML('beforeend', markup);

content.addEventListener('click', onItemClick);

function onItemClick(e) {
  if (!e.target.textContent) {
    e.target.textContent = player;

    setPlayerInput(currentPlayer, e.target);

    winVar = checkWinVars(currentPlayer);
    if (winVar) {
      colorWinFields(winVar);
      window.setTimeout(showWinMessage, 100);
    } else {
      currentPlayer = player === 'X' ? playerO : playerX;
      player = player === 'X' ? 'O' : 'X';
    }

    numberOfSteps = playerO.length + playerX.length;
    if (numberOfSteps >= 9) {
      window.setTimeout(showDeadHeatMessage, 100);
    }
  }
}

function checkWinVars(arrPlayer) {
  // return winVars.some((elem) => elem.every((num) => arrPlayer.includes(num)));
  return winVars.find((elem) => elem.every((num) => arrPlayer.includes(num)));
}

function setPlayerInput(player, eventTarget) {
  player.push(Number(eventTarget.dataset.id));
}

function colorWinFields(winArr) {
  winArr.forEach((element) => {
    content.children[element - 1].classList.add('box');
  });
  return true;
}

function showWinMessage() {
  alert(`Player ${player} is winner!!!`);
  resetGameField();
}

function showDeadHeatMessage() {
  alert(' DEAD HEAT. Try again...');
  resetGameField();
}

function resetGameField() {
  // console.log('Reset field');
  content.innerHTML = markup;
  player = 'X';
  winVar = [];
  playerX = [];
  playerO = [];
  currentPlayer = playerX;
  numberOfSteps = 0;
}
