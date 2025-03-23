let bgc;
let cloud;
let speedx, speedy, lox, loy;
let lx, ly, sx, sy;
let lx2, ly2, sx2, sy2;
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
  sx2=random(-5, 5);
  sy2= random(-5, 5);
  speedx = random(-2, 2);
  speedy = random(-2, 2);
  ly = 100;
  lx = 100;
  ly2 = 300;
  lx2 = 300;
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


    ly2 += sy2;
    lx2 += sx2;

      if ((ly2 < 0) || (ly2 > height-175)) {

    sy2 = -sy2;
}
if ((lx2 < 0) || (lx2 > width - 175)) {
  sx2 = -sx2;
}



  clouds(lox, loy, 0, 4);

  let c = color(115, 107, 100);
  esbunny(c, 100, 100, angle*180, angle/4);

  c = (255,200,200);
  esbunny(c, lx, ly, angle*-360, .7);

  c = color(74);
   esbunnyHeadHat(c, 500, 500, angle*-90, angle);


   cvMan(color(250, 200,0), color(0, 200, 0), color(100, 200, 100),lx2,ly2,0,.75);
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


function cvMan(c,tc,tp,lx,ly,rot,sc){
  push();
    translate(lx,ly);
    rotate(rot);
    scale(sc);
    head(c,-2,0);
    cvAwesomeFace(c,71,-15,.27);
    torso(tc,0,0);
    limb(c,170,65); //arms
    limb(c,35,65);
    limb(tp,80,160); //legs
    limb(tp,125,160);
  pop();
}
//------------------------------------------ body parts
function limb(c,lx,ly){
  push();
  fill(c);
  translate(lx,ly);
  rect(0,0,45,95,5);
  pop();
}
function head(c,lx,ly){
  push();
  fill(c);
  translate(lx,ly)
  rect(100,-10,55,55,10);
  cvAwesomeFace(c,50,-60,.27)
  pop();
  }
function torso(c,lx,ly){
  push();
  fill(c);
  translate(lx,ly);
  noStroke();
  rect(100,65,90,95,5);
  pop();
}
function curnty(c,lx,ly){
  push();
  noStroke();
  fill(c);
  translate(lx,ly);
  rect(80,65,90,95,5);
  pop();
  // ----------------- start woman parts
  fill(bc);
  push();
  noStroke();
  triangle(80,90,80,150,95,120);
  triangle(170,90,170,150,155,120);
  pop();
}
function cvAwesomeFace(c,lx,ly,sc) {
  push();
  translate(lx,ly);
  scale(sc);
    //eyebrows
    fill(0); //top
    stroke(0);
    strokeWeight(4);
    ellipse(222,135,27,35);
    ellipse(178,135,27,35);
    fill(c); //yellow layer
    stroke(c);
    ellipse(222,141,35,37);
    ellipse(178,141,35,37);
    //features
    fill("white");
    stroke(0);
    ellipse(222,155,33,50); //eyes
    ellipse(178,155,33,50);
    quad(155,230,245,230,205,280,195,280); //teeth
    fill("black");
    ellipse(220,148,25,33); //puipls
    ellipse(176,148,25,33);
    quad(163,238,237,238,205,280,195,280); //mouth  
  pop();
}