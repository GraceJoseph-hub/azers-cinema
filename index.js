document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = menuToggle.querySelector(".fa-bars");
  const closeIcon = menuToggle.querySelector(".fa-times");

  // Toggle theme
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
    themeToggle.innerHTML = document.body.classList.contains("dark")
      ? '<i class="fa fa-moon-o"></i>'
      : '<i class="fa fa-sun-o"></i>';
  });


  // Toggle mobile menu visibility
  menuToggle.addEventListener("click", () => {
    const isMenuVisible = mobileMenu.style.display === "flex";

    // Toggle the menu's visibility and icons
    mobileMenu.style.display = isMenuVisible ? "none" : "flex";
    menuIcon.style.display = isMenuVisible ? "block" : "none";
    closeIcon.style.display = isMenuVisible ? "none" : "block";
  });
});




// use queryselector to disable all image elements dragging
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("dragstart", (e) => {
    e.preventDefault();
  });
});

var swiper = new Swiper(".mySwiperOne", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  allowTouchMove: false,
});

var swiper = new Swiper(".mySwiperTwo", {
  effect: "coverflow",
  grabCursor: false,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  allowTouchMove: false,
});

