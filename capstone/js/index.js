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

const subNav = document.querySelector(".subNavLi");

subNav.addEventListener("click", () => {
  document.querySelector(".subNav").classList.toggle("hidden");
});
