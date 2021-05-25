import calcAndtext from "./js/function.js";
import "./css/main.css";
console.log(calcAndtext(1, 1, 2, 3, "sio vakaro skaicius"));
import vader from "./img/vader.png";
import kobe from "./img/kobe.jpg";

function addImages(importedImage) {
  const imgEl = document.createElement("img");
  imgEl.src = importedImage;
  document.body.append(imgEl);
}

addImages(vader);
addImages(kobe);
