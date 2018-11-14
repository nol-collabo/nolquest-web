function goTo(path) {
  location.href = path;
}

var topCopy = 0;
$(document).on("shown.bs.modal", ".modal", function() {
  var top =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  topCopy = top;

  $("body").addClass("modal-noscroll");
  $("body").css("top", -top);
});

$(document).on("hidden.bs.modal", ".modal", function() {
  $("body").css("top", 0);
  $("body").removeClass("modal-noscroll");
  $(document).scrollTop(topCopy);
});
