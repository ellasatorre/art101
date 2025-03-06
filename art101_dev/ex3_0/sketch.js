let bgc;
let cloud;
let speedx, speedy, lox, loy;
let counter = 1;

function preload(){
  cloud = loadImage("assets/cloud.png");
}

function setup() {
  createCanvas(750,750);
  colorMode(HSB);
  bgc = color(random(170,220), 60, 70);
  colorMode(RGB);
  angleMode(DEGREES);
  rectMode(CENTER);
  imageMode(CENTER);
  noStroke();
  speedx = random(-2, 2);
  speedy = random(-2, 2);
  lox = height / 2;
  loy = width / 2;
}

function draw() {
  background(bgc);

  if ((loy < 0) || (loy > height)) {
    speedy = -speedy;
}
if ((lox < 0) || (lox > height)) {
  speedx = -speedx;
}

lox += speedx;
loy += speedy;

clouds(lox, loy, 0, 4);

counter ++;

  let c = color(115, 107, 100);
  let angle = frameCount/50;
  angle = angle%2;


  bunnyHead(c, width/2, height/2,angle*-90,angle);

}

function bunnyHead(c,lyo,lxo,rot,sc){
  push();
translate(lyo, lxo);
rotate(rot);
scale(sc);
fill(c);

  bunnyEars(c, -60, -65, -10);
  bunnyEars(c, 60, -65, 10);
  ellipse(0,0,190,165);

  bunnyEyes(-50, 10);
  bunnyEyes(50, 10);

  bunnyNose(0, 15);
  pop();
}

function bunnyEars(c,lyo,lxo,rot,sc){
  push();
translate(lyo, lxo);
rotate(rot);
scale(sc);
fill(c);
  rect(0, 0,  50, 200, 45, 45, 15, 15);
  fill(252, 162, 207);
  rect(0, 5,  30, 170, 45, 45, 15, 15);
  pop();
}

function bunnyEyes(lyo,lxo,rot,sc){
  push();
translate(lyo, lxo);
rotate(rot);
scale(sc);
  fill(0);
  ellipse(0, 0, 20, 30);
  pop();
}

function bunnyNose(lyo,lxo,rot,sc){
  push();
translate(lyo, lxo);
rotate(rot);
scale(sc);
  fill(252, 162, 207);
  ellipse(0, 0, 15, 10);
pop();
}

function clouds(lxo,lyo,rot,sc){
push();
translate(lxo,lyo)
rotate(rot);
scale(sc);
image(cloud, 0, 0, 100, 50);

pop();
}