// Top-scroller
let topScroller = document.getElementById("top-scroller");
topScroller.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
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
$(".owl-carousel-1").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  nav: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1
    },
    800: {
      items: 2
    },
    1000: {
      items: 3
    },
  },
});

$('.owl-carousel-2').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  smartSpeed: 1000,
  autoplay: true,
  dots: false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:2
      }
  }
});
$('.owl-carousel-3').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  smartSpeed: 1000,
  dots: false,
  autoplay: true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})


