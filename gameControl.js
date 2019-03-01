//speed 100 = no lag, speed 0 = max lag, recommendation : 10;
let playerSpeed = 20;
//the bigger number the more difficult, recommendation: 5;
let difficulty = 5;
let playerWidth = 50;

let enemies = [];
let enemyCounter = 0;
let enemyDelay = 200;
let stars = [];
let starAmount = 30;
let hint = "Dodge!!";

function gameOver() {
  fill(0, 80, 100, 100);
  textAlign(CENTER);
  textSize(64);
  text("YOU ARE DEAD!", windowWidth / 2, windowHeight / 2);
  textSize(32);
  text('Your score: ' + parseInt(millis() / 1000) + 's, refresh to retry', windowWidth / 2, windowHeight / 2 + 100);
  noLoop();
}

function ui() {
  score = 'Survive: ' + parseInt(millis() / 1000) + ' s';
  background(0);
  textAlign(LEFT);
  textSize(24);
  fill(255);
  text(hint, 24, 32)
  textAlign(RIGHT);
  text(score, windowWidth - 24, 32);
}

function normalSetup() {
  colorMode(HSB, 360, 100, 100, 100);
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNER);
  ellipseMode(CENTER);
  imageMode(CORNER);
  background(0);
  frameRate(60);
}

function gameSetup() {
  var playerColor = color(random(360), 80, 800);
  player = new Player(playerImg, 50, playerSpeed);

  //create stars
  for (var i = 0; i < starAmount; i++) {
    star1 = new Star();
    stars.push(star1);
    noCursor();
  }
}

function runGame() {
  background(0);
  ui();
  


  //draw stars
  for (var i = 0; i < starAmount; i++) {
    stars[i].display();
  }
  
  //draw player
  player.display();

  //create enemies
  if (frameCount % enemyDelay <= 1 && enemies.length <= (windowWidth / 100) * difficulty) {
    enemy1 = new Enemy();
    enemies.push(enemy1);
  }

  //debug
  // print(enemies.length);

  //detect collision
  for (var i = 0; i < enemies.length; i++) {
    enemies[i].collide(player);
  }
}
