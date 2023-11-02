var diameter = 300;
hoogte1 = 450;
hoogte2 = 0; 



function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  colorMode(RGB, 255, 255, 255, 1);
  noStroke();
}

function draw() {
  background(255,255,255,1);
  fill(255,0,0,0.5);
  ellipse(width / 2,height / 2,diameter);
  fill(0,255,0,0.5);
  ellipse(225,hoogte1,300);
  fill(0,0,255,0.5);
  ellipse(225,hoogte2,300);

  hoogte1 -= 1;
  hoogte2 += 1;

}