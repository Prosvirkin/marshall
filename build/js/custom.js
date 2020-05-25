$(function () {
  $(".js-main-slider").slick({
    infinite: true,
    arrows: false,
    dots: true,
    dotsClass: "main-slider__pagination",
    customPaging: function (slider, i) {
      return '<a href="#"></a>';
    },
  });

  $(".js-modal-video").click(function () {
    $(".video-modal").modal("show");
  });

  $(".js-mobile-menu-open").click(function () {
    $(".header-menu__mobile__sandwich").toggleClass("active");
    $(".mobile-menu").toggleClass("show");
  });
});
