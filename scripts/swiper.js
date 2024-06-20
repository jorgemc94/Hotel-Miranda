
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

    const swiperRooms = new Swiper(".swiper--number", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      pagination: {
          el: '.swiper-pagination',
          type: 'custom',
          clickable: true,
          renderCustom: function (swiper, current, total) {
              let paginationHTML = '';
              for (let i = 0; i < total; i++) {
                  let className = 'swiper-pagination-custom-bullet';
                  if (i === (current - 1)) {
                      className += ' swiper-pagination-custom-bullet-active';
                  }
                  paginationHTML += '<span class="' + className + '" data-index="' + i + '">' + (i + 1) + "</span>";
              }
              return paginationHTML;
          }
      },
  });
  document.querySelector('.swiper--number .swiper-pagination').addEventListener('click', function(event) {
      const index = event.target.getAttribute('data-index');
      if (index !== null) {
          swiperRooms.slideTo(parseInt(index));
      }
  });