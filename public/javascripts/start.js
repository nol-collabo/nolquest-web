$(function() {
  let first = $(".first");
  let second = $(".second");
  let third = $(".third");
  let fourth = $(".fourth");

  // 로그인 버튼 활성화
  $("[name=id]").keyup(function() {
    $(".error").addClass("hidden");

    if ($("[name=id]").val()) {
      $(".info__button .btn-blue").attr("disabled", false);
    } else {
      $(".info__button .btn-blue").attr("disabled", true);
    }
  });

  // 이름 설정 버튼 활성화
  $("[name=name]").keyup(function() {
    if ($("[name=name]").val()) {
      $(".info__button .btn-blue").attr("disabled", false);
    } else {
      $(".info__button .btn-blue").attr("disabled", true);
    }
  });
});

// 로그인
function login() {
  if ($("[name=id]").val() == "111") {
    location.href = "./input_name.html";
  } else {
    $(".error").removeClass("hidden");
  }
}

// 이름 설정
function setName() {
  if ($("[name=name]").val()) {
    location.href = "./guide.html";
  }
}

function resetActive() {
  let guide = document.querySelectorAll(".container.guide");
  guide = [].slice.call(guide);
  console.log(guide);
  guide.forEach(function(el) {
    if (el.classList) el.classList.remove("active");
  });
}

function moveGuide(num) {
  resetActive();

  switch (num) {
    case 1:
      document.querySelector(".first").classList.add("active");
      break;
    case 2:
      document.querySelector(".second").classList.add("active");
      break;
    case 3:
      document.querySelector(".third").classList.add("active");
      break;
    case 4:
      document.querySelector(".fourth").classList.add("active");
      break;
    default:
      break;
  }
}
