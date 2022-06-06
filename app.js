const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-link");
const scrollBtn = document.getElementById("scroll-top");

// open and close mobile menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

// close mobile menu when menu item clicked
navLinks.forEach(navLink => {
  navLink.addEventListener("click", () => {
    if (hamburger.classList.contains("active")) {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
    }
  })
})

// show scroll button when user scrolls 200px from top
document.addEventListener("scroll", () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
})

// scroll to top of page when scroll button clicked
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})