// grabbing elements
const btnMenu = document.getElementById("btn");

btnMenu.addEventListener("click", () => {
  console.log("✅");
  document.getElementById("ul-nav").classList.toggle("hide");
});
