//! Creating a mock array for blog posts
const blogPostArr = [
  {
    title: "Dungeons and Dragons",
    date: "August 15, 2021",
    info: "D&D has been around for years, but recently it has been popular again. Here is a intro on how to play D&D, so you and your friends can explore all of your fantasies.",
  },
  {
    title: "Marvel: SpiderMan",
    date: "July 16, 2021",
    info: "A introduction to everything about who and what Spider Man is, from first appearance to most recent comic run. This will catch you up to speed on everything you need to know about Spider Man. ",
  },
  {
    title: "DC: Injustice",
    date: "July 1, 2021",
    info: "The Injustice comic book run is an infamous series. Here is a review and synopsis of what we thought about the run.",
  },
  {
    title: "DC: Batman",
    date: "May 12, 2021",
    info: "In celebration of the upcoming Batman movie starring Robert Pattinson, we wanted to provide a rundown of what we think this Batman movie will be drawing inspiration from the comic books.",
  },
];

// grabbing DOM elements
const navBtn = document.getElementById("navBtn");

navBtn.addEventListener("click", () => {
  console.log("✔️");

  //? Grabbing main nav elements to properly toggle them off and on for presentation

  document.querySelector(".navBtnDiv").classList.toggle("Open");
  document.querySelector(".open").classList.toggle("hidden");
  document.querySelector(".close").classList.toggle("hidden");
  document.querySelector(".mainUL").classList.toggle("hidden");
});

const subNav = document.querySelector(".subNavEvent");

subNav.addEventListener("click", () => {
  document.querySelector(".subNav").classList.toggle("hidden");
  document.querySelector(".subNav").classList.toggle("Vis");
  
});

//! BLOG PAGE JS
const blogArea = document.querySelector(".laterBlogPost-Container");

function blogCards(blogCard) {
  blogCard.forEach((el, i, arr) => {
    let card = document.createElement("div");
    let cardTitle = document.createElement("h2");
    let cardTitleDiv = document.createElement("div");
    let cardDate = document.createElement("p");
    let cardInfo = document.createElement("p");
    let cardCTA = document.createElement("button");
    let cardInfoDiv = document.createElement("div");

    cardTitle.textContent = el.title;
    cardDate.textContent = el.date;
    cardInfo.textContent = el.info;
    cardCTA.textContent = `Read More`;
    card.className = "cardInfo";

    cardInfoDiv.appendChild(cardDate);
    cardInfoDiv.appendChild(cardInfo);
    card.appendChild(cardInfoDiv);
    card.appendChild(cardCTA);

    let cardImgWrapper = document.createElement("div");
    let cardImg = document.createElement("img");

    cardImg.src = `../img/content/page-imgs/dnd-Dice.jpg`;
    cardImg.setAttribute("width", "1600");
    cardImg.setAttribute("height", "500");
    cardImg.setAttribute("loading", "lazy");
    cardImgWrapper.className = "cardImg";

    cardTitleDiv.appendChild(cardTitle);
    cardImgWrapper.appendChild(cardTitleDiv);
    cardImgWrapper.appendChild(cardImg);

    let finalCard = document.createElement("div");
    finalCard.className = "card";
    finalCard.appendChild(cardImgWrapper);
    finalCard.appendChild(card);

    blogArea.appendChild(finalCard);
  });
}
blogCards(blogPostArr);

