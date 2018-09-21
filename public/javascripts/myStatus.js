$(function() {
  let tab = $('.tab');
  const content = $('.status__content');
  tab.click(function() {
    var value = $(this).attr('value');
    tab.removeClass('active');
    content.removeClass('active');
    $(this).addClass('active');

    if(value === 'my-status') {
      $('.my-status').addClass('active');
    } else {
      $('.my-mission').addClass('active');
    }
  });
})