import { gallery } from "./gallery.js";

const content = document.querySelector(".content");

function displayContent(gallery) {
  console.log(gallery);

  gallery.forEach((el, i, arr) => {
    let figure = document.createElement("figure");
    figure.className = "fig";
    let img = document.createElement("img");
    img.className = "fruit-img";
    let figcap = document.createElement("figcaption");

    /////////////////////////////////////////////////
    // width="1600" height="500"
    img.setAttribute("width", "1600");
    img.setAttribute("height", "500");
    img.setAttribute("alt", el.alt);
    ////////////////////////////////////////////////

    img.src = el.imgURL;
    figcap.textContent = el.name;

    figure.appendChild(img);
    figure.appendChild(figcap);

    content.appendChild(figure);
  });
}

displayContent(gallery);
