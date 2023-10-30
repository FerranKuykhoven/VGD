function setup() {
  canvas = createCanvas(450,450);
  background('cornflowerblue');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // teken de grond
  noStroke();
  fill('wheat');
  rect(0,350,450,100);
  // teken het huis
  strokeWeight(4);
  stroke('darkgrey'); //rand van het huis
  fill('lightgray'); //onderkant van het huis
  rect(100,280,100,100);
  fill('gray');
  triangle(100,280,150,200,200,280); //zolder
  // teken de deur
  noStroke();
  rect(120,330,30,50);
  // teken de maan
  fill('khaki');
  ellipse(350,100,150);
  // teken de boom
  fill('sienna');
  rect(300,250,40,130);
  fill('olive');
  ellipse(320,230,100,150)
  // Als je een cirkel wilt tekenen met diameter 300 kun je ellipse(0,0,300) gebruiken.
  // Als je een ellipse wilt maken met breedte 300 en hoogte 500, dan moet je een parameter toevoegen: ellipse(0,0,300,500).
}
