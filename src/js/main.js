$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    dots: false,
  });
  $(".owl-next").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".owl-prev").click(function () {
    owl.trigger("prev.owl.carousel", [300]);
  });
});

$("ul.catalog__caption").on("click", "li:not(.active)", function () {
  $(this)
    .addClass("active")
    .siblings()
    .removeClass("active")
    .closest("div.catalog__tabs")
    .find("div.catalog__content")
    .removeClass("active")
    .eq($(this).index())
    .addClass("active");
});

function toggleSlide(item) {
  $(item).each(function (i) {
    $(this).on("click", function (e) {
      e.preventDefault();
      $(".catalog-item__content")
        .eq(i)
        .toggleClass("active");
      $(".catalog-item__about").eq(i).toggleClass("active");
    });
  });
}

toggleSlide(".catalog-item__link");
toggleSlide(".catalog-item__back");
