var mySwiper = new Swiper(".swiper-container", {
  direction: "vertical",
  slidesPerView: 1,
  grabCursor: true,
  speed: 1000,
  paginationClickable: true,
  parallax: true,
  autoplay: false,
  effect: "slide",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: {
    invert: false,
  },
});
