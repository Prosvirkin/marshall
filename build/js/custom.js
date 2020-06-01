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

  $(".js-modal-video").on("click", function (event) {
    var link = $(this).data("link");
    $(".video-modal").find("iframe").attr("src", link);
    $(".video-modal").modal("show");
  });

  $(".js-mobile-menu-open").click(function () {
    $(".header-menu-mobile__sandwich").toggleClass("active");
    $(".mobile-menu").toggleClass("show");
  });
});
