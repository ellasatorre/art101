

let lxo = 0;
let lyo = 0;


function setup() {
 // put setup code here
 createCanvas(600,600);
  noStroke();
  rectMode(CENTER);
  frameRate(10);
}


function draw() {
background(115, 204, 255);
noStroke();``
fill(41, 143, 77);
rect(300, 550, 600, 150);

  strokeWeight(3);
  //legs
  stroke(102, 24, 0);
  fill(186, 44, 0);
  rect(250+ lxo, 500 +lyo, 50, 200);
  rect(350+ lxo, 500 +lyo, 50, 200);

  //body
  stroke(17, 43, 84)
  fill(40, 103, 201)
  rect(300+ lxo, 450 +lyo, 250, 215, 35);

  //face
  strokeWeight(3);
  fill(242, 202, 179);
  stroke(209, 147, 128);
  //ears
  ellipse(215 +lxo, 300 +lyo, 40, 40);
  ellipse(385 +lxo, 300 +lyo, 40, 40);
  //head
  rect(300 + lxo, 300 + lyo, 150, 200, 50, 50, 75, 75);
  //beard
  stroke(141, 147, 158);
  fill(255);
  quad(215+ lxo, 315 +lyo, 385+ lxo, 315 +lyo, 350+ lxo, 500 +lyo, 250+ lxo, 500 +lyo);  

  //nose
  stroke(209, 147, 128);
  fill(209, 147, 128);
  triangle(300 + lxo, 300 + lyo, 290+ lxo, 330 + lyo, 310+ lxo, 330 + lyo);
  //mouth
  strokeWeight(4);
  line(280 + lxo, 350 + lyo, 340+ lxo, 340 + lyo);

  //eyes
  stroke(0);
  fill(0);
  ellipse(260 + lxo, 300 + lyo, 20, 20);
  ellipse(340 + lxo, 300 + lyo, 20, 20);
  //shine
  stroke(255);
  fill(255, 255, 255,);
  ellipse(265 + lxo, 295 + lyo, 5, 5);
  ellipse(345 + lxo, 295 + lyo, 5, 5);
  ellipse(255 + lxo, 305 + lyo, 2, 2);
  ellipse(335 + lxo, 305 + lyo, 2, 2);


  //hat
  strokeWeight(3);
  stroke(102, 24, 0);
  fill(186, 44, 0);
  triangle(300 + lxo, 90 + lyo, 215 + lxo, 250 + lyo, 385 + lxo, 250 + lyo);

if (lyo > -70) {
  lyo += -10;
} else {
  lyo += 10
}

}