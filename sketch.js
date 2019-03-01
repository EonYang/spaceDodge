function preload() {
  playerImg = loadImage("images/PineApple.png");
}

function setup() {
  normalSetup();
  gameSetup();
}

function draw() {
  runGame();
}