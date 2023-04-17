const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsUl = document.querySelector('#ingredients');
let array = [];
for (let i = 0; i < ingredients.length; i++) {
  array[i] = `<li>${ingredients[i]}</li>`;
}
let itemList = array.map((item) => item).join('');
ingredientsUl.insertAdjacentHTML('afterbegin', itemList);
