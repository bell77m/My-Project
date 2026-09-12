var navToggle = document.getElementById("navToggle");
var nav = document.getElementById("nav");

navToggle.addEventListener("click", function () {
  var isOpen = nav.classList.toggle("open");
  navToggle.classList.toggle("active", isOpen);
  navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

nav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("open");
    navToggle.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", function (event) {
  var isNavClick = nav.contains(event.target);
  var isToggleClick = navToggle.contains(event.target);
  if (!isNavClick && !isToggleClick && nav.classList.contains("open")) {
    nav.classList.remove("open");
    navToggle.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
  }
});