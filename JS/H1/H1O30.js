var rij = 0;

function setup() {
  canvas = createCanvas(451,451);
  canvas.parent('processing');
  background('coral');
  fill('white');
}

function draw() {
  
    for (var kolom = 0;kolom < 450;kolom += 50) 
    {
      rect(kolom,rij,50,50);
      if(rij = 150)
      { push()
        fill('orange')
        rect(300,150,50,50)
        pop()}

      for (var rij = 0;rij < 450;rij += 50) 
      {
        rect(kolom,rij,50,50);
      }
    }
}