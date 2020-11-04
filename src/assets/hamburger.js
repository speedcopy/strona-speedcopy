const hamburger = document.querySelector(".hamburger");
const navMobile = document.querySelector(".nav-mobile");

const handleClick = () => {
  hamburger.classList.toggle("hamburger--active");
  navMobile.classList.toggle("nav-mobile--active");
};

hamburger.addEventListener("click", handleClick);