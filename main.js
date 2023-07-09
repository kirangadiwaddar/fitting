$(".owl-carousel").owlCarousel({
  // loop:true,
  margin: 30,
  // nav:true,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

//menu click
$(document).ready(function () {
  $(".menu-btn").on("click", function () {
    $(".mobile-menu").addClass("active-menu");
  });
  $(".close-btn").on("click", function () {
    $(".mobile-menu").removeClass("active-menu");
  });
});
