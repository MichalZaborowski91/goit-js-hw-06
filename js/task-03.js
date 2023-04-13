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
const galleryUl = document.querySelector('.gallery');

for (const image of images) {
  const imagesos = galleryUl.createElement('li');
  galleryUl.after(imagesos);
  image.src = image.url;

  //.log(imagesos);

  console.log(image.url);
  console.log(image.alt);
}
