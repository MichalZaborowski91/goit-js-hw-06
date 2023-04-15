/* eslint-disable no-return-assign */
'use strict';

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
const defaultText = nameOutput.textContent;

nameInput.addEventListener('input', (event) => {
  if (nameInput.value !== '') {
    nameOutput.textContent = event.currentTarget.value;
  } else {
    return (nameOutput.textContent = defaultText);
  }
});
