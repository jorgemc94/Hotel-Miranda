
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

