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
    let figcap = document.createElement("figcaption");
    figcap.className = "figcap";
    let assignmentName = document.createElement("h2");
    assignmentName.className = "assignment-name";
    let a = document.createElement("a");
    a.className = "btn";
    let btnDiv = document.createElement('div')
    btnDiv.className = 'btn-div'
    ///////////////////////////////////////////////////
    img.setAttribute("width", "1600")
    img.setAttribute("height", "500")
    ///////////////////////////////////////////////////

    img.src = el.img;
    figcap.textContent = el.name;
    a.textContent = `View`;
    a.href = el.url;

    figure.appendChild(img);
    figure.appendChild(figcap);
    btnDiv.appendChild(a)
    card.appendChild(figure);
    figure.appendChild(btnDiv);
    main.appendChild(card);
  });
}

displayWork(assignments);


//displaying surfaces for small device

function smallDevice(assignment) {
  assignment.forEach((el, i, arr) => {
    let surface = document.createElement('div')
    surface.className = 'surface'
    let h3  = document.createElement('h3')
    let a = document.createElement('a')

    ///////////////////////////////////////////////
    //////////////////////////////////////////////

    h3.textContent = el.name;
    a.textContent = 'View'
    a.href = el.url;

    surface.appendChild(h3)
    surface.appendChild(a)

    main.appendChild(surface)
  })
}

smallDevice(assignments)