var typed = new Typed(".detail", {
  strings: [
    "Website Designer",
    "Website Developer",
    "Django Developer",
    "Wordpress Developer",
  ],
  backSpeed: 40,
  typeSpeed: 40,
  loop: true,
});

var skills = {
  ht: 90,
  cs: 80,
  js: 60,
  rc: 50,
  jq: 60,
};

$.each(skills, function (key, value) {
  var skillbar = $("." + key);

  skillbar.animate(
    {
      width: value + "%",
    },
    3000,
    function () {
      $(".speech-bubble").fadeIn();
    }
  );
});

// portfolio slider with swiper slider
const swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  speed: 600,

  autoplay: {
    delay: 3000,
  },

  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    560: {
      slidesPerView: 3,
    },
    990: {
      slidesPerView: 3,
    },
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
