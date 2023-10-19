// Scroll-bar
let headerNav = document.getElementById("main-header");

let prevPos = window.scrollY;
window.addEventListener("scroll", () => {
  headerNav.classList.toggle("active", window.scrollY > 45);
  let newPos = window.scrollY;
  if (newPos > prevPos) {
    headerNav.classList.add("hide");
  } else {
    headerNav.classList.remove("hide");
  }
  prevPos = newPos;
});

// Toogle-bar
let toogleBar = document.getElementById("toogle-bar");
let navMenu = document.getElementById("menu");
toogleBar.addEventListener("click", () => {
  toogleBar.classList.toggle("active");
  navMenu.classList.toggle("active");
});
