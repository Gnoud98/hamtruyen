(function ($) {
  window.onload = function () {
    $(document).ready(function () {
      showSearchMb();
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
