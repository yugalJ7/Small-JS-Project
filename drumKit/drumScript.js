const boomSound = new Audio('sounds/boom.wav');
const clapSound = new Audio('sounds/clap.wav');
const hihatSound = new Audio('sounds/hihat.wav');

const kickSound = new Audio('sounds/kick.wav');
const openhatSound = new Audio('sounds/openhat.wav');
const rideSound = new Audio('sounds/ride.wav');

const snareSound = new Audio('sounds/snare.wav');
const tinkSound = new Audio('sounds/tink.wav');
const tomSound = new Audio('sounds/tom.wav');

// document.querySelector('.musicSound')
  document.body.addEventListener('keydown', (e) => {

    switch(e.key){
      case "a":
        clapSound.play();
        break;

      case "s":
        hihatSound.play();
        break;

      case "d":
        kickSound.play();
        break;
      
      case "f":
        openhatSound.play();
        break;

      case "g":
        boomSound.play();
        break;

      case "h":
        rideSound.play();
        break;

      case "j":
        snareSound.play();
        break;

      case "k":
        tomSound.play();
        break;

      case "l":
        tinkSound.play();
        break;
      
      default:
        break;
    }
  })