// === Container 1 ===

const items1 = document.querySelector('.items1');
const outputColor = document.querySelector('.output-color');

items1.addEventListener('click', onItem1Click);

createMarkUpContainer1();

function onItem1Click(e) {
  const itemEl = e.target;
  if (itemEl.nodeName === 'BUTTON') {
    outputColor.innerHTML = `Selected color: ${itemEl.dataset.color}, ${itemEl.style.backgroundColor}`;
    outputColor.style.color = itemEl.dataset.color;
  }
}

function createMarkUpContainer1() {
  let markup = [];
  for (let i = 0; i < 32; i += 1) {
    const color = getRandomColor();
    const item = document.createElement('button');
    item.classList.add('item1');
    item.style.backgroundColor = color;
    item.dataset.color = color;
    markup.push(item);
  }
  items1.append(...markup);
}

// === Container 2 ===

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#e91e63', rgb: '233,30,99' },
  { hex: '#9c27b0', rgb: '156,39,176' },
  { hex: '#673ab7', rgb: '103,58,183' },
  { hex: '#3f51b5', rgb: '63,81,181' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#00bcd4', rgb: '0,188,212' },
  { hex: '#009688', rgb: '0,150,136' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
  { hex: '#ff9800', rgb: '255,152,0' },
  { hex: '#795548', rgb: '121,85,72' },
];

const items2 = document.querySelector('.items2');

createMarkUpContainer2();

items2.addEventListener('click', onItem2Click);

function createMarkUpContainer2() {
  let markup = '';
  colors.map(({ hex, rgb }) => {
    const item2 = `<div class="item2-wrapper">
      <button class="item2-button" style="background-color:${hex}"></button>
      <p class="item2-hex">HEX: ${hex}</p>
      <p class="item2-rgb">RGB: (${rgb})</p>
      </div>`;
    return (markup += item2);
  });
  items2.innerHTML = markup;
}

function onItem2Click(e) {
  if (e.target.nodeName === 'BUTTON') {
    items2.style.backgroundColor = e.target.style.backgroundColor;
  }
}

// === For both ===

function getRandomHex() {
  return Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}
