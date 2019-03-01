class Player {
  constructor(img, playerWidth, speed) {
    this.x = windowWidth / 2;
    this.y = windowHeight - 100;
    this.s = speed;
    this.w = playerWidth;
    this.h = this.w / (76 / 150);
    this.img = img;
  }
  display() {
    if (this.x != mouseX) {
      this.x += (mouseX - this.x) * this.s / 100;
    }
    if (this.y != mouseY) {
      this.y += (mouseY - this.y) * this.s / 100;
    }
    image(this.img, this.x, this.y, this.w, this.h);
  }
}

class Enemy {
  constructor() {
    this.x = random(windowWidth);
    this.y = -0.4 * windowWidth;
    this.speed = random(difficulty, difficulty + 5);
    this.dia = random(80, 120);
    this.GetSuperEnemy();
    this.hit = false;
    this.color = color(random(360), 80, 80);
  }
  collide(obj) {
    this.display(obj);
    this.hit = collideRectCircle(obj.x + (obj.w * 0.1), obj.y + (obj.h * 0.05), obj.w * 0.8, obj.h * 0.8, this.x, this.y - 2, this.dia, )
    if ((this.hit) && (obj == player)) {
      gameOver();
    }
  }
  display(obj) {
    fill(255);
    ellipse(this.x, this.y, this.dia, this.dia);
    push();
    noStroke();
    translate(this.x, this.y);
    let facingAngle = atan2(obj.x + obj.w / 2 - this.x, obj.y + obj.h / 2 - this.y);
    rotate(-facingAngle);
    fill(this.color);
    ellipse(0, this.dia * 0.39, this.dia * 0.4, this.dia * 0.2, );
    fill(150, 50, 0);
    ellipse(0, this.dia * 0.37, this.dia * 0.2, this.dia * 0.08, );
    pop();
    this.y += this.speed;
    this.x += (obj.x - this.x)  * this.speed * 0.002;
		this.Recycle();
  }
  GetSuperEnemy() {
    if (random(0, 100) > (102 - difficulty)) {
      this.dia = windowWidth / 2.5;
      this.speed = this.speed/2;
    }
  }
  Recycle(){
      if (this.y >= (windowHeight + this.dia)) {
      this.color = color(random(360), 80, 80);
      this.x = random(windowWidth);
      this.y = -0.4 * windowWidth;
      this.speed = random(difficulty, difficulty + 5);
      this.dia = random(80, 120);
      this.GetSuperEnemy();
    }
  }
}

class Star {
  constructor() {
    this.offsite = random(1000);
    this.dia = random(2, 8);
    this.dim = random(10, 70);
    this.x = random(windowWidth);
    this.y = random(windowHeight);
  }
  display() {
    fill(0, 0, 100, this.dim * sin(millis() / 1000 + this.offsite));
    ellipse(this.x, this.y, this.dia, this.dia);
    this.y += 1;
    if (this.y > windowHeight) {
      this.x = random(windowWidth);
      this.y = -1;
    }
  }
}