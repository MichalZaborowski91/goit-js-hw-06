'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
const input = document.querySelector('input');

let numOfBoxes = 0;

createBtn.addEventListener('click', () => {
  numOfBoxes = parseInt(input.value);
  createBoxes(numOfBoxes);
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

function createBoxes(amount) {
  destroyBoxes();
  let dimension = 30;
  if (amount > 0 && amount <= 100) {
    for (let i = 1; i <= amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${dimension}px`;
      box.style.height = `${dimension}px`;
      box.style.marginTop = '10px';
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
      dimension += 10;
    }
  } else {
    return alert('Choose a number between 1 and 100');
  }
}

function destroyBoxes() {
  while (boxesContainer.firstChild) {
    boxesContainer.removeChild(boxesContainer.firstChild);
  }
}
