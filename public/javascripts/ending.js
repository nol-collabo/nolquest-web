$(function () {
  let morePopup = $('.more');
  let checkbox = $('.mission-check__box--header > input');

  morePopup.click(function () {
    $('#itemModal').modal('show');
  });

  checkbox.change(function () {
    let checked = $('.mission-check__box--header > input:checked');
    let checkedLength = checked.length;
    if (checkedLength > 0 && checkedLength < 4) {
      $('.ending__button button').addClass('btn-blue');
      $('.ending__button button').prop('disabled', false);
    } else if (checkedLength > 3) {
      alert('더이상 선택할 수 없습니다.');
      $(this).prop('checked', false);
    } else {
      $('.ending__button button').removeClass('btn-blue');
      $('.ending__button button').prop('disabled', true);
    }
  });

  $('.ending__button button').click(function () {
    location.href = "./ending_last.html";
  })

})