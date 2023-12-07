kleur = "white";

function setup() {
  canvas = createCanvas(501, 501);
  canvas.parent("processing");
  background("coral");
}


function draw() {
  for (kolom = 0; kolom < 500; kolom += 50) {
    for (rij = 0; rij < 500; rij += 50) {
      fill(kleur);
      rect(rij, kolom, 50, 50);
      if (kleur === "white") {
        kleur = "black";
      } else {
        kleur = "white";
      }
    }
    if (kleur === "white") {
      kleur = "black";
    } else {
      kleur = "white";
    }
  }
}