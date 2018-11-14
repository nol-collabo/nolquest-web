function goTo(path) {
  location.href = path;
}

$(document).on("shown.bs.modal", ".modal", function() {
  var top =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  $("body").css("top", -top);
  $("body").addClass("modal-noscroll");
});

$(document).on("hidden.bs.modal", ".modal", function() {
  $("body").removeClass("modal-noscroll");
});
