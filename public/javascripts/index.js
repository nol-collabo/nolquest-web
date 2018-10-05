$(document).ready(function () {
  showTimerModal();
});

// 이 미션 포기하기
function showGiveupModal() {
  $("#giveupModal").modal();
}

// 아이템 코드번호 입력
var currentId = null;
function setCode(id) {
  // 테스트를 위해 임의로 코드 111로 매칭
  if ($("[name=code" + id + "]").val() == 111) {
    $("#itemModal").modal();
    currentId = id;
  } else {
    $("#errorCodeModal").modal();
  }
}

// 아이템 최종 입력
function setItem() {
  $("#itemModal").modal("hide");

  $(".item.item-" + currentId).addClass("done");

  $(".item.item-" + currentId)
    .find(".item__code")
    .removeClass("hidden");
  $(".item.item-" + currentId)
    .find(".item__img")
    .addClass("hidden");
  $(".item.item-" + currentId)
    .find(".item__content")
    .removeClass("hidden");
  $(".item.item-" + currentId)
    .find(".item__code--input")
    .addClass("hidden");

  if (
    $(".item-1").hasClass("done") &&
    $(".item-2").hasClass("done") &&
    $(".item-3").hasClass("done")
  ) {
    $(".main__notice").removeClass("hidden");
  }
}

// 아이템 상세보기
function showItem(id, el) {
  if ($(el).hasClass("done")) {
    $("#itemModal").modal();
    currentId = id;
  }
}

// 아이템 바꾸기
function resetItem() {
  $("#itemModal").modal("hide");

  $(".item.item-" + currentId).removeClass("done");

  $(".item.item-" + currentId)
    .find(".item__code")
    .addClass("hidden");
  $(".item.item-" + currentId)
    .find(".item__img")
    .removeClass("hidden");
  $(".item.item-" + currentId)
    .find(".item__content")
    .addClass("hidden");
  $(".item.item-" + currentId)
    .find(".item__code--input")
    .removeClass("hidden");

  $(".main__notice").addClass("hidden");
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
