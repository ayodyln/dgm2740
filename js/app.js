import { assignments } from "./assingments.js";

const main = document.querySelector(".content");
// const card = document.querySelector(".card");
// const figure = document.querySelector(".fig");
// const img = document.querySelector(".content-img");
// const figcap = document.querySelector(".figcap");
// const assignmentName = document.querySelector(".assignment-name");
// const btn = document.querySelector(".btn");

// updated displayWorkFunction
function mobileDisplayClassWork(assignment) {
  assignment.forEach((el, i, arr) => {
    let classCard = document.createElement("div");
    let cardPrimary = document.createElement("div");
    let assignmentFig = document.createElement('fig')
    let assignmentImg = document.createElement('img')
    let assignmentTitle = document.createElement("h2");
    let assignmentInfo = document.createElement("p");
    let learnBtn = document.createElement("button");
    let visitBtn = document.createElement("a");

    learnBtn.addEventListener("click", () => {
      assignmentInfo.classList.toggle("hidden");
      learnBtn.classList.toggle("btn-open");

      if (learnBtn.classList.contains("btn-open")) {
        learnBtn.style.borderRadius = "0px 0px 0px 0px";
      } else {
        learnBtn.style.borderRadius = "0px 0px 10px 10px";
      }
    });

    ////////////////////////////////////////////////////
    classCard.className = `class-card`;
    cardPrimary.className = "upper-layer";
    assignmentTitle.className = `assignment-title`;
    assignmentInfo.className = `assignment-info hidden`;
    assignmentImg.className = 'card-img'
    learnBtn.className = `learn-btn`;
    visitBtn.className = `visit-btn`;

    ////////////////////////////////////////////////////

    ////////////////////////////////////////////////////

    ////////////////////////////////////////////////////

    assignmentTitle.textContent = `Unit-${el.id} ${el.name}`;
    assignmentImg.src = el.img
    assignmentInfo.textContent = el.discription;
    visitBtn.textContent = `Visit Site`;
    visitBtn.href = el.url;
    learnBtn.className = "fas fa-caret-down";

    
    cardPrimary.appendChild(assignmentImg)
    cardPrimary.appendChild(assignmentTitle);
    cardPrimary.appendChild(visitBtn);
    classCard.appendChild(cardPrimary);
    classCard.appendChild(learnBtn);
    classCard.appendChild(assignmentInfo);
    main.appendChild(classCard);
  });
}
mobileDisplayClassWork(assignments);

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
    let btnDiv = document.createElement("div");
    btnDiv.className = "btn-div";
    ///////////////////////////////////////////////////
    img.setAttribute("width", "1600");
    img.setAttribute("height", "500");
    ///////////////////////////////////////////////////

    img.src = el.img;
    figcap.textContent = el.name;
    a.textContent = `View`;
    a.href = el.url;

    figure.appendChild(img);
    figure.appendChild(figcap);
    figure.appendChild(btnDiv);
    btnDiv.appendChild(a);
    card.appendChild(figure);

    main.appendChild(card);
  });
}

// displayWork(assignments);

//displaying surfaces for small device

function smallDevice(assignment) {
  assignment.forEach((el, i, arr) => {
    let surface = document.createElement("div");
    surface.className = "surface";
    let h3 = document.createElement("h3");
    let a = document.createElement("a");

    ///////////////////////////////////////////////
    //////////////////////////////////////////////

    h3.textContent = el.name;
    a.textContent = "View";
    a.href = el.url;

    surface.appendChild(h3);
    surface.appendChild(a);

    main.appendChild(surface);
  });
}

// smallDevice(assignments)
