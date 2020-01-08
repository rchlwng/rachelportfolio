
// makes letters zoom across logo
var textWrapper = document.querySelector('.motion');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({autoplay: true})
  .add({
    targets: '.motion .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutBack",
    duration: 950,
    delay: (el, i) => 70*i
});

$('#work').hover(function() {
  $('#changetext').text("a collection of my visual design work");
}, function() {
  $('#changetext').text("hello. i'm glad you're here.");
});

$('#casestudies').hover(function() {
  $('#changetext').text("in-depth case studies examining the design process as a whole");
}, function() {
  $('#changetext').text("hello. i'm glad you're here.");
});

$('#insidemybrain').hover(function() {
  $('#changetext').text("get to know me!");
}, function() {
  $('#changetext').text("hello. i'm glad you're here.");
});
