let s = 0;
let x = 0;
let dx = 5;
let y = 100;
let dy = 7;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("#17D1E8");
  fill("#581919");
  ellipse(x, y, 40, 40);
  rect(mouseX, height - 30, 120, 25);

  if (x > width) {
    dx = -dx;
  }

  if (x < 0) {
    dx = -dx;
  }

  if (y < 0) {
    dy = -dy;
  }

  if (x > mouseX && x < mouseX + 120) {
    if (y > height - 30) {
      dy = -dy;
      s = s + 1;
    }
  }
  textSize(100);
  text(s, 400, 100);

  if (y > height + 50) {
    dy = 0;
    dx = 0;
    x = 2000;
    y = 5000;
    fill(255);
    textSize(100);
    text("Конец", 80, 300);
  }

  y = y + dy;
  x = x + dx;
}
