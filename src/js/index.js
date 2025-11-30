const menuButton = document.querySelector("#menuToggle");
const menu = document.querySelector("nav");
menuButton.addEventListener("click", () => {
  const pressedState = menuButton.getAttribute("aria-pressed");
  if (pressedState === "true") {
    menuButton.setAttribute("aria-pressed", "false");
    menu.classList.remove("mobile-open");
    menuButton.innerHTML = 'menu';
  }
  if (pressedState === "false") {
    menuButton.setAttribute("aria-pressed", "true");
    menuButton.innerHTML = 'x';
    menu.classList.add("mobile-open");
  }
});
