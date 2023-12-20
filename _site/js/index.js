var reviewSwiper = new Swiper(".reviewSwiper", {
  pagination: {
    el: ".ts-review-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
});
var reviewSwiper2 = new Swiper(".reviewSwiper2", {
  pagination: {
    el: ".ts-review-pagination-2",
    clickable: true,
  },
  autoplay: {
    delay: 10000,
  },
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".ts-navbar a[href*=" + sectionId + "]")
        .classList.add("ts-text-blue-2");
    } else {
      document
        .querySelector(".ts-navbar a[href*=" + sectionId + "]")
        .classList.remove("ts-text-blue-2");
    }
  });
}
