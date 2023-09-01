

const openButton = document.querySelector("#open");
const closeButton = document.querySelector("#close");
const navBar = document.querySelector(".nav-menu");

openButton.addEventListener("click", () => {
    navBar.classList.add("open")
    navBar.setAttribute("aria-expanded", true)
})

closeButton.addEventListener("click", () => {
  navBar.classList.remove("open");
  navBar.setAttribute("aria-expanded", false);
});

