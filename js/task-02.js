const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsUl = document.querySelector('#ingredients');
for (let i = 0; i < ingredients.length; i++) {
  const list = document.createElement('li');
  list.textContent = ingredients[i];
  list.classList.add('item');
  ingredientsUl.append(list);
}
