const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (let i = 0; i < ingredients.length; i++) {
  const list = document.createElement('li');
  list.textContent = ingredients[i];
  list.classList.add('item');
  const ingredientsUl = document.querySelector('ul');
  ingredientsUl.after(list);
}
