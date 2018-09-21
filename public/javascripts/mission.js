$(function() {
  const done = $('.mission-check__box.done');
  const mission = $('.mission-check__box');

  mission.click(function() {
    if($(this).hasClass('done')) {
      window.location.href ="./mission_correct.html";
    } else if($(this).hasClass('wrong')) {
      window.location.href ="./mission_wrong.html";
    } else if ($(this).hasClass('shortage')) {
      window.location.href ="./mission_wrong02.html";
    }
  });
})