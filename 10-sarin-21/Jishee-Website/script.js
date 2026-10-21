const words = ["uhel", "hool", "hiceel", "surah", "moroodol", "buteeh"];
const word = document.getElementById("word");
const spinButton = document.getElementById("spinButton");

let currentIndex = 0;

spinButton.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % words.length;
  word.textContent = words[currentIndex];

  // Restart the animation each time the button is clicked.
  word.classList.remove("spin");
  void word.offsetWidth;
  word.classList.add("spin");
});
