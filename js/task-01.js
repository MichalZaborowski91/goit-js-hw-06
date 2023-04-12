/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable linebreak-style */
const totalCategories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${totalCategories.length}`);
for (const element of totalCategories) {
  const categoryHeader = element.querySelector('h2');
  const categoryCount = element.querySelectorAll('li');
  console.log(categoryHeader.textContent);
  console.log(categoryCount.length);
}
