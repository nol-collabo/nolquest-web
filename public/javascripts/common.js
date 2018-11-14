function goTo(path) {
  location.href = path;
}

$(document).on("hidden.bs.modal", ".modal", function() {
  $("body").toggleClass("modal-open", $(".modal").hasClass("in"));
});
