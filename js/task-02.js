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
  const list = document.createElement('li');
  list.textContent = ingredients[i];
  list.classList.add('item');
  array.push(list);
}
ingredientsUl.append(...array);
