$(function() {
  const done = $('.mission-check__box.done');
  const mission = $('.mission-check__box');

  mission.click(function() {
    if($(this).hasClass('done')) {
      window.location.href ="./mission_correct.html";
    } else {
      window.location.href ="./mission_wrong.html";
    }
  });
})