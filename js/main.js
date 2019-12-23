
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

