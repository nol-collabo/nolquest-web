$(document).ready(function() {});

// 이 미션 포기하기
function showGiveupModal() {
  $("#giveupModal").modal();
}

// 아이템 코드번호 입력
function setCode(id) {
  // 테스트를 위해 임의로 코드 111로 매칭
  if ($("[name=code" + id + "]").val() == 111) {
    $("#itemModal").modal();
  } else {
    $("#errorCodeModal").modal();
  }
}

// 힌트 보기
function showHintModal() {
  $("#hintConfirmModal").modal();
}

function getHint() {
  $("#hintConfirmModal").modal("hide");

  $(".hint__card")
    .not(".hint__card--details")
    .addClass("hidden");
  $(".hint__card--details").removeClass("hidden");
}

// 잔여 시간 타이머
function showTimerModal() {
  $("#timerModal").modal();
}

/**
 * cookie
 */
function setCookie(name, value, expiredays) {
  var today = new Date();
  today.setDate(today.getDate() + expiredays);

  document.cookie =
    name +
    "=" +
    escape(value) +
    "; path=/; expires=" +
    today.toGMTString() +
    ";";
}

function getCookie(name) {
  var cName = name + "=";
  var x = 0;
  while (x <= document.cookie.length) {
    var y = x + cName.length;
    if (document.cookie.substring(x, y) == cName) {
      if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
        endOfCookie = document.cookie.length;
      return unescape(document.cookie.substring(y, endOfCookie));
    }
    x = document.cookie.indexOf(" ", x) + 1;
    if (x == 0) break;
  }
  return "";
}
