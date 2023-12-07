var aantal = 5;
Nbloemen = 6;

function setup() {
  canvas = createCanvas(1000,200);
  canvas.parent('processing');
  frameRate(10);
  colorMode(RGB, 255, 255, 255, 1);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
}

function draw() {

  background('lavender');
  fill('black');
  text("aantal = " + aantal,10,20); 
  breedte = width / Nbloemen

  for (var n1 = 0;n1 < Nbloemen;n1++) {
    tekenBloem(0.4);
    translate(breedte,0);
  }

  if (keyIsDown(LEFT_ARROW) && aantal >= 2) {
    aantal--;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    aantal++;
  }   
}


function tekenBloem(s) {
  push()
  scale(s)   
  translate(225,225);
  fill(0, 0, 199,0.7);
  for (var n = 0;n < aantal;n++) {
    ellipse(0,0,400,50);
    rotate(360 / aantal);
  }
  fill(247, 111, 18,0.5);
  for (var n = 0;n < aantal;n++) {
    rect(0,0,75,75)
    rotate(360 / aantal);
  }
  pop()
}