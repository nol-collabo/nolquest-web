$(function() {
  let first = $('.first')
  let second = $('.second')
  let third = $('.third')
  let fourth = $('.fourth')
  

})

function resetActive() {
  let guide = document.querySelectorAll('.container.guide');
  guide = [].slice.call(guide);
  console.log(guide)
  guide.forEach(function(el) {
    if(el.classList)
      el.classList.remove('active');
  })
}

function moveGuide(num) {
  resetActive();

  switch (num) {
    case 1: 
      document.querySelector('.first').classList.add('active');
      break;
    case 2:  
      document.querySelector('.second').classList.add('active');
      break;
    case 3:
      document.querySelector('.third').classList.add('active');
      break;
    case 4:
      document.querySelector('.fourth').classList.add('active');
      break;
    default:
      break;  
  }
}