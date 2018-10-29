$(function () {
  let morePopup = $('.more');
  let checkbox = $('.mission-check__box--header > input');
  let currentBox;


  // 0501 select_imp_mission 전문보기
  morePopup.click(function () {


    currentBox = $(this).parent(".mission-check__box")[0];

    var checked = $(currentBox).find("input[type=checkbox]").is(':checked');
    $('#itemModal').find("input[type=checkbox]").prop("checked", checked);

    $('#itemModal').modal('show');
  });

  $('#itemModal').find("input[type=checkbox]").click(function () {
    var checked = $('#itemModal').find("input[type=checkbox]").is(':checked');
    $(currentBox).find("input[type=checkbox]").prop("checked", checked);

    let otherChecked = $('.mission-check__box--header > input:checked');
    let checkedLength = otherChecked.length;
    if (checkedLength > 0 && checkedLength < 4) {
      $('.ending__button button').addClass('btn-blue');
      $('.ending__button button').prop('disabled', false);
    } else if (checkedLength > 3) {
      alert('더이상 선택할 수 없습니다.');
      $(this).prop('checked', false);
      $(currentBox).find("input[type=checkbox]").prop("checked", false);
    } else {
      $('.ending__button button').removeClass('btn-blue');
      $('.ending__button button').prop('disabled', true);
    }
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