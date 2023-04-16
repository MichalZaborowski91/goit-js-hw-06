'use strict';

const sizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
const textSize = () => {
  text.style.fontSize = sizeControl.value + 'px';
};
sizeControl.addEventListener('input', textSize);
