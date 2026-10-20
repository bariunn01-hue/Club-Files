const words = ["Ta bayan bolno", "Ireeduid tanig uhel huleejin","Tani dun 100 Garna","Tand udahgui azgui yvdal tohiono"];
const word = document.getElementById("word");
const spinButton = document.getElementById("spinButton");
const cps = document.getElementById("cps")
let lastcount = 0
let currentIndex = 0;
let score = 0
let music = document.getElementById("Music")
music.volume = 0.1
// spinButton.addEventListener("click", function () {
//     music.play();
// });
music.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

function playSound(){
  let sound = document.getElementById("myAudio")
  sound.volume = 0.05
  sound.load()
  sound.play()
}
spinButton.addEventListener("click", function () {
  playSound();
  currentIndex = (currentIndex + 1) % words.length;
  score+=1
  word.textContent = score;

  
  word.classList.remove("spin");
  void word.offsetWidth;
  word.classList.add("spin");
});
const setinterval = 1000
const intervalId = setInterval(() => {
  cps.textContent = `${(score-lastcount)/setinterval*1000} cps`
  lastcount = score
}, setinterval);