// Mobile menu toggles
const burgerBtn = document.getElementById("burgerBtn");
const langBtn = document.getElementById("langBtn");
const navPanel = document.getElementById("navPanel");
const langPanel = document.getElementById("langPanel");
const mobileLinks = document.querySelectorAll(".mobile-link");

const closePanels = () => {
  navPanel.classList.remove("open");
  langPanel.classList.remove("open");
};

burgerBtn.addEventListener("click", () => {
  const isOpen = navPanel.classList.contains("open");
  closePanels();
  navPanel.classList.toggle("open", !isOpen);
});

langBtn.addEventListener("click", () => {
  const isOpen = langPanel.classList.contains("open");
  closePanels();
  langPanel.classList.toggle("open", !isOpen);
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => closePanels());
});

//Close panels when clicking outside
document.addEventListener("click", (e) => {
  const inHeader = e.target.closest("header");
  if (!inHeader) closePanels();
});
// ------------------------------------------------------------
document.querySelector(".btn").addEventListener("click", function () {
  window.open("https://github.com/Illia-Tarabarov", "_blank");
});
document.querySelector(".gotoeg").addEventListener("click", function () {
  window.open("index.html", "_blank");
});
document.querySelector(".gotocz").addEventListener("click", function () {
  window.open("czech.html", "_blank");
});
document.querySelector(".gotoua").addEventListener("click", function () {
  window.open("ukrainian.html", "_blank");
});