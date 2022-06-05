const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-link");

// open and close mobile menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

// closes mobile menu when menu item clicked
navLinks.forEach(navLink => {
  navLink.addEventListener("click", () => {
    if (hamburger.classList.contains("active")) {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
    }
  })
})
