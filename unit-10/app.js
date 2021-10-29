const btn = document.getElementById("hamburgerBtn");
const subNav = document.querySelector(".sub-nav");

btn.addEventListener("click", () => {
  console.log("Nav toggled!");

  document.querySelector(".ui-span1").classList.toggle("hidden");
  document.querySelector(".ui-span2").classList.toggle("hidden");
  document.querySelector(".ul-nav").classList.toggle("hidden");
});

subNav.addEventListener("mouseover", () => {
  document.querySelector(".sub-ul").classList.remove("hidden");
});
subNav.addEventListener("mouseleave", () => {
  document.querySelector(".sub-ul").classList.add("hidden");
});
