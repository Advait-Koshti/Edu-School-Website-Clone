window.addEventListener("scroll", function () {
  let navbar = document.getElementById("mainNavbar");
  let links = document.querySelectorAll(".nav-link");
  let brand = document.querySelector(".navbar-brand");

  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "white";
    brand.classList.remove("text-light");
    brand.classList.add("text-dark");

    links.forEach((link) => {
      link.classList.remove("text-light");
      link.classList.add("text-dark");
    });
  } else {
    navbar.style.backgroundColor = "rgb(45, 45, 111)";
    brand.classList.remove("text-dark");
    brand.classList.add("text-light");

    links.forEach((link) => {
      link.classList.remove("text-dark");
      link.classList.add("text-light");
    });
  }
});
