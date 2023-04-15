'use strict';

const inputText = document.querySelector('#validation-input');
const dataLength = inputText.dataset.length;

inputText.addEventListener('blur', () => {
  if (inputText.value.length >= dataLength) {
    inputText.classList.add('valid');
    inputText.classList.remove('invalid');
  } else {
    inputText.classList.add('invalid');
  }
});
