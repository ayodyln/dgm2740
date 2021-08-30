import { assignments } from "./assingments.js";

const main = document.querySelector(".content");
// const card = document.querySelector(".card");
// const figure = document.querySelector(".fig");
// const img = document.querySelector(".content-img");
// const figcap = document.querySelector(".figcap");
// const assignmentName = document.querySelector(".assignment-name");
// const btn = document.querySelector(".btn");

//creating function to display to DOM
function displayWork(assignment) {
  console.log(assignment);

  assignment.forEach((el, i, arr) => {
    let card = document.createElement("div");
    card.className = "card";
    let figure = document.createElement("figure");
    figure.className = "fig";
    let img = document.createElement("img");
    img.className = "content-img";
    let figcap = document.createElement("figure");
    figcap.className = "figcap";
    let assignmentName = document.createElement("h2");
    assignmentName.className = "assignment-name";
    let a = document.createElement("a");
    a.className = "btn";
    ///////////////////////////////////////////////////

    img.src = el.img;
    figcap.textContent = el.name;
    a.textContent = `View`;
    a.href = el.url;

    figure.appendChild(img);
    figure.appendChild(figcap);
    figure.appendChild(a);
    card.appendChild(figure);
    main.appendChild(card);
  });
}

displayWork(assignments);
