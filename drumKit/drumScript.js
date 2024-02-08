// Array.from convert all element contain .key class into an array
const keys = Array.from(document.querySelectorAll(".key"));
console.log(keys);

const keyCode = {
  A: 65,
  S: 83,
  D: 68,
  F: 70,
  G: 71,
  H: 72,
  J: 74,
  K: 75,
  L: 76,
};

const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
};

window.addEventListener("keydown", playSound);
