
const swiperHomeRoom = new Swiper(".swiper--rooms", {
    spaceBetween: 30,
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const swiperHomeFacilities = new Swiper(".swiper--facilities", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

  const swiperHomeMenu = new Swiper(".swiper--menu", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const swiperCard = new Swiper(".swiper--card", {
    spaceBetween: 30,
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiperCounter = new Swiper(".swiper--counter", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });