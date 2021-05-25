// eslint-disable-next-line import/extensions
import calcAndtext from './js/function.js';
import './css/main.css';
import vader from './img/vader.png';
import kobe from './img/kobe.jpg';

// eslint-disable-next-line no-console
console.log(calcAndtext(1, 1, 2, 3, 'sio vakaro skaicius'));

function addImages(importedImage) {
  const imgEl = document.createElement('img');
  imgEl.src = importedImage;
  document.body.append(imgEl);
}

addImages(vader);
addImages(kobe);
