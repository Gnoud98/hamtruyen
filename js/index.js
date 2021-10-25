(function ($) {
  window.onload = function () {
    $(document).ready(function () {
      showSearchMb();
      menuMb();
    });
  };
})(jQuery);

function showSearchMb() {
  $(".search-icon-mb").click(function () {
    $(".search-form-mb ").addClass("show");
    $(".overlay").addClass("overlay-active");
    $("body").addClass("hidden");
  });

  $(".overlay").click(function () {
    $(".search-form-mb ").removeClass("show");
    $(".overlay").removeClass("overlay-active");
    $("body").removeClass("hidden");
  });

  $(".btn-close").click(function () {
    $(".search-form-mb ").removeClass("show");
    $(".overlay").removeClass("overlay-active");
    $("body").removeClass("hidden");
  });
}

function menuMb() {
  $(".header__bars ").click(function () {
    $(".menu-mobile").addClass("show");
    $(".overlay").addClass("overlay-active");
    $("body").addClass("hidden");
  });
  $(".overlay").click(function () {
    $(".menu-mobile").removeClass("show");
    $(".overlay").removeClass("overlay-active");
    $("body").removeClass("hidden");
  });
  $(".menu-mobile .close-btn").click(function () {
    $(".menu-mobile").removeClass("show");
    $(".overlay").removeClass("overlay-active");
    $("body").removeClass("hidden");
  });

  $(".menu-mobile li.menu-has-mega>a").before("<span class='icon'></span>");
  $(".menu-mobile li.menu-has-mega .icon").click(function () {
    $(this).siblings(".mega-menu").slideToggle();
    $(this).toggleClass("rotate");
  });

  $(".menu-mobile li.menu-item-has-children>a").before("<span class='icon'></span>");
  $(".menu-item-has-children .icon").click(function () {
    $(this).siblings("ul").slideToggle();
    $(this).toggleClass("rotate");
  });
}
