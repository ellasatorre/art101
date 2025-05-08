
let score;


function setup() {
  createCanvas(850,1100);
  background(255);
  fill(255);

  score = loadImage('./assets/score.jpg');

}

function draw() {
 image(score, 0, 0, width, height);

 measures(50,70);
}

function measures(lxo,lyo) {
  translate(lxo,lyo);
  stroke(0);
  strokeWeight(2);

  //start and end
  line(0, 0, 0, 60);
  line(160, 0, 160, 60);

  //horizontal lines
  line(0, 0, 160, 0);
  line(0, 15, 160, 15);
  line(0, 30, 160, 30);
  line(0, 45, 160, 45);
  line(0, 60, 160, 60);

}
