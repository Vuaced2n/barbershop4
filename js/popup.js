var menuToggle = document.querySelector(".main-nav__toggle");
var menuClosed = document.querySelector(".main-nav");


menuToggle.addEventListener("click", function(event) {
  event.preventDefault();
  menuClosed.classList.toggle("main-nav--closed");
  menuClosed.classList.toggle("main-nav--opened");
})
