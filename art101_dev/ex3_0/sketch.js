let bgc;
let cloud;
let speedx, speedy, lox, loy;
let lx, ly, sx, sy;
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
  sx=random(-10, 10);
  sy= random(-10, 10);
  speedx = random(-2, 2);
  speedy = random(-2, 2);
  ly = 100;
  lx = 100;
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

  counter ++;
  let angle = frameCount/50;
  angle = angle%2;


    if (lx < 0){
      lx = width
    }

    if (lx > width){
      lx = 0
    }

    if (ly > height){
      ly = 0;
    }

    if (ly < 0){
      ly = height;
    }

    ly += sy;
    lx += sx;




  clouds(lox, loy, 0, 4);

  let c = color(115, 107, 100);
  esbunny(c, 100, 100, angle*180, angle/4);

  c = (255,200,200);
  esbunny(c, lx, ly, angle*-360, .7);

  c = color(74);
   esbunnyHeadHat(c, 500, 500, angle*-90, angle);

}






function esbunny(c,lxo,lyo,rot,sc){
  push();
  translate(lxo, lyo);
  rotate(rot);
  scale(sc);
  fill(c);
  bunnyBody(c, 0, 100);
  esbunnyHead(c,0,0, 0, 1);
  pop();
}


function bunnyBody(c,lxo,lyo,rot,sc){
  push();
translate(lxo, lyo);
rotate(rot);
scale(sc);
fill(c);

ellipse(-50, 70, 70, 30)
ellipse(50, 70, 70, 30)

fill(c);
ellipse(0, 0,200,150);
fill(0,70);
ellipse(0, -50, 150, 100);
pop();
}

function esbunnyHead(c,lxo,lyo,rot,sc){
  push();
translate(lxo, lyo);
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

function esbunnyHeadHat(c,lxo,lyo,rot,sc){
  push();
translate(lxo, lyo);
rotate(rot);
scale(sc);
fill(c);  
bunnyBody(c, 0, 100);

  bunnyEars(c, -60, -65, -10);
  bunnyEars(c, 60, -65, 10);
  ellipse(0,0,190,165);

  bunnyHat(0, -75)

  bunnyEyes(-50, 10);
  bunnyEyes(50, 10);

  bunnyNose(0, 15);
  pop();
}


function bunnyEars(c,lxo,lyo,rot,sc){
  push();
translate(lxo, lyo);
rotate(rot);
scale(sc);
fill(c);
  rect(0, 0,  50, 200, 45, 45, 15, 15);
  fill(252, 162, 207);
  rect(0, 5,  30, 170, 45, 45, 15, 15);
  pop();
}

function bunnyEyes(lxo,lyo,rot,sc){
  push();
translate(lxo, lyo);
rotate(rot);
scale(sc);
  fill(0);
  ellipse(0, 0, 20, 30);
  pop();
}

function bunnyNose(lxo,lyo,rot,sc){
  push();
translate(lxo, lyo);
rotate(rot);
scale(sc);
  fill(252, 162, 207);
  ellipse(0, 0, 15, 10);
pop();
}

function bunnyHat(lxo, lyo, rot, sc){
push();
fill(0);
translate(lxo, lyo);
rotate(rot);
scale(sc);
rect(0,-40, 75, 100);
rect(0, 0, 110, 20);
pop();
}

function clouds(lxo,lyo,rot,sc){
push();
translate(lxo,lyo)
rotate(rot);
scale(sc);
image(cloud, 0, 0, 100, 50);
image(cloud, 75, 75, 100, 50);
image(cloud, -75, -75, 100, 50);
image(cloud, 75, -75, 100, 50);
image(cloud, -75, 75, 100, 50);

pop();
}