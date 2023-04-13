/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.querySelector('.gallery');
for (const image of images) {
  const list = document.createElement('li');
  gallery.prepend(list);
  list.insertAdjacentHTML(
    'afterbegin',
    `<img class="imgStyle" src="${image.url}" alt="${image.alt}">`
  );
  const imgStyle = document.querySelector('.imgStyle');
  // style for <img>
  imgStyle.style.width = '250px';
  imgStyle.style.height = '160px';
  // style for <ul>
}
