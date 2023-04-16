/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
'use strict';
const value = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;
const clickDecrement = () => {
  value.innerHTML = counterValue-- - 1;
};
const clickIncrement = () => {
  value.innerHTML = counterValue++ + 1;
};
decrementBtn.addEventListener('click', clickDecrement);
incrementBtn.addEventListener('click', clickIncrement);
