$(function() {
  $('.interest__select').click(function() {
    let select = $('.interest__select.selected');
    if($(this).hasClass('selected')) {
      $(this).removeClass('selected');
    } else {
      if(select.length < 3) {
        $(this).addClass('selected');
      } else {
        return false;
      }
    }
    console.log(select.length)
  })
})