/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
'use strict';
const value = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;
const clickDecrement = () => {
  counterValue--;
  value.innerHTML = counterValue;
};
const clickIncrement = () => {
  counterValue++;
  value.innerHTML = counterValue;
};
decrementBtn.addEventListener('click', clickDecrement);
incrementBtn.addEventListener('click', clickIncrement);
