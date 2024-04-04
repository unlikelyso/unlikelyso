const menuHamburger = document.querySelector(".ts-burger");
const tsNavbarContainer = document.querySelector(".ts-navbar-container");
/*const tsContactBtn = document.querySelector(
  ".ts-navbar-container .ts-btn-container"
);
*/
const tsNavbarLogo = document.querySelector(
  ".ts-navbar--light .ts-navbar__logo img"
);
let isNavbarActive = tsNavbarContainer.classList.contains("ts-navbar-active");

let navLinks = document.querySelectorAll(".ts-navbar__link");

function toggleNavbar(onlyClose) {
  if (onlyClose) {
    tsNavbarContainer.classList.remove("ts-navbar-active");
  } else {
    tsNavbarContainer.classList.toggle("ts-navbar-active");
  }

  if (tsNavbarLogo) {
    if (tsNavbarContainer.classList.contains("ts-navbar-active")) {
      tsNavbarLogo.src = "../assets/images/logo.png";
    } else {
      tsNavbarLogo.src = "../assets/images/logo-white.png";
    }
  }
}

menuHamburger.addEventListener("click", () => toggleNavbar(false));

// Scroll Add Classes

let scrollpos = window.scrollY;
const header_height = tsNavbarContainer.offsetHeight;

const add_class_on_scroll = () => {
  tsNavbarContainer.classList.add("ts-navbar-fade-in");

  if (tsNavbarLogo) {
    tsNavbarLogo.src = "../assets/images/logo.png";
  }
  
};
const remove_class_on_scroll = () => {
  tsNavbarContainer.classList.remove("ts-navbar-fade-in");

  // Toggle  To white logo if navbar is Light Navbar is not open
  if (tsNavbarLogo && !isNavbarActive) {
    tsNavbarLogo.src = "../assets/images/logo-white.png";
  }
  // tsContactBtn.style.display = "none";
  //tsContactBtn.classList.add("d-none");
};

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});

let closeNavbar = () => {
  // Only close Navbar when clicked
  toggleNavbar(true);
};

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", closeNavbar);
});
