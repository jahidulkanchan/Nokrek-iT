// Top-scroller
let topScroller = document.getElementById("top-scroller");
topScroller.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// // Scroll-bar
// let headerNav = document.getElementById("main-header");

// let prevPosition = window.scrollY;
// window.addEventListener("scroll", () => {
//   headerNav.classList.toggle("active", window.scrollY > 45);
//   let newPosition = window.scrollY;
//   if (newPosition > prevPosition) {
//     headerNav.classList.add("hide");
//   } 
//   else {
//     headerNav.classList.remove("hide");
//   }
//   prevPosition = newPosition;
// });

let headerNav=document.getElementById("main-header");
prevPosition = window.scrollY;
window.addEventListener("scroll",()=>{
  headerNav.classList.toggle("active", 45 < window.scrollY);
  let newPosition = window.scrollY;
  newPosition > prevPosition? headerNav.classList.add("hide"):headerNav.classList.remove("hide");
  prevPosition=newPosition;
});

// Toogle-bar
let toogleBar = document.getElementById("toogle-bar");
let navMenu = document.getElementById("menu");
toogleBar.addEventListener("click", () => {
  toogleBar.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Owl carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  nav: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    800: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
