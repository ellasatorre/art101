let bgc;
let b1;

let bunnyz;


function setup() {
  createCanvas(750,750);
  colorMode(HSB);
   bgc = color(random(170,220), 60, 70);
  colorMode(RGB);
  angleMode(DEGREES);

  rectMode(CENTER);
  noStroke();


  bunnyz = new Array(50);

  for (let i = 0; i < bunnyz.length; i++) {   
    bunnyz[i] = new esBunny(color(random(115, 200), random(115,200), random(115, 200)), width/2, length/2, 0, random(.1,.75));
  }

}

function draw() {
  background(bgc);

  for (let i = 0; i < bunnyz.length; i++) {   
    bunnyz[i].displayBunny();
    bunnyz[i].updateBunny();
  }



}