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
    checkSelect()
  })
})

function checkSelect() {
  const selected =  $('.interest__select.selected');
  
  if( selected.length === 2 || selected.length === 3 ) {
    $('.interest__button button').prop('disabled', false);
    $('.interest__button button').addClass('btn-blue');
  } else {
    $('.interest__button button').prop('disabled', true);
    $('.interest__button button').removeClass('btn-blue');
  }
}