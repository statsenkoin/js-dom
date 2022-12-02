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
const playerX = [];
const playerO = [];

for (let i = 1; i <= 9; i += 1) {
  markup += `<div class="item" data-id=${i}></div>`;
}
content.insertAdjacentHTML('beforeend', markup);

content.addEventListener('click', onItemClick);

function onItemClick(e) {
  if (!e.target.textContent) {
    e.target.textContent = player;
    if (player === 'X') {
      playerX.push(e.target.dataset.id);
      if (winVars.every((winVar) => playerX.includes(winVar))) {
        console.log('winner: ', playerX);
      }
    } else {
      playerO.push(e.target.dataset.id);
    }

    player = player === 'X' ? 'O' : 'X';
  }
  console.log('playerX: ', playerX);
  console.log('playerO: ', playerO);
  //   console.log(e.target);
  //   console.log(e.target.textContent);
  //   console.log(e.target.dataset.id);
}
