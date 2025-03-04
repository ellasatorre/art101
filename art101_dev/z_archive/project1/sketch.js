
let currentkey = '1';
let gkcount;
let cx,xy;
let bgc;
let c = 0;
let gridSize;
let imgSize;
let pufferfish;
let goldfish;
let cimg;
let k;
let tool;
let mark;
let seal;
let sealhat;

function setup() {
    createCanvas(1000, 1000);
    background(0, 34, 112);
    smooth();
    bgc = color(0, 34, 112);
    k = color(40, 88, 176);


    pufferfish = loadImage("assets/pufferfish.png");
    goldfish = loadImage("assets/goldfish.png");
    seal = loadImage("assets/whiteseal.png");
    sealhat = loadImage("assets/sealhat.png");
    cx = width/2;
    cy = height/2;
    gridSize = 75;
    imgSize = 75;
    textSize(40);
    sWeight = 2;
    cimg = pufferfish;
    tool = "";
    mark = 0;


}


function draw() {
    // triggering the clear_print function
    if( keyIsPressed) {
      stampChoice();  
    }
    // triggering the newkeychoice
    if(mouseIsPressed) {
      drawChoice();
    }
}

function drawChoice() {
  cvalue = color (random(150, 255), random(100), 100, 40);
  let currentkey = key;
  imageMode(CENTER);

switch(currentkey) {

case '1':
  console.log("1");
  ellaBrush(color(50, 164, 240, 200), mouseX, mouseY, pmouseX, pmouseY);
  break;
 case '2':
    console.log("2"); 
    ellaSuperBrush(color (20, random(100, 200), random(145, 2515), 70), mouseX, mouseY, pmouseX, pmouseY);
 break;
 case '3':
    console.log("3");
    ellaSuperSplatter(color (random(150, 255), random(100), 100, 40), mouseX, mouseY);
 break;
 case '4':
  console.log("4");
  ellaSuperSplatter(color (10, random(100, 150), random(150, 250), 40), mouseX, mouseY);
break;
 case '5':
  console.log("5");
  spikey(color(30, random(30,150), random(100, 130),200),mouseX, mouseY, pmouseX, pmouseY);
  break;
case '6':
  console.log("6 hue " + c);
  colorMode(HSB);
  ellaRainbow(color(c, 50, 75), mouseX, mouseY);
  c++;
  c = c%360;
  colorMode(RGB);
  break;
  case '7':
  console.log("7");
  sealfriend(seal, mouseX, mouseY, imgSize, imgSize);
  break;
  case '8':
    console.log("8");
    sealfriend(sealhat, mouseX, mouseY, 100, imgSize);
    break;
 case 'e':
  console.log("e");  // erase with bg color
  eraser(bgc,mouseX, mouseY,35);
   break;

default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}

}

function stampChoice() {
 
// key global variable contains whatever key was last pressed
let currentkey = key;

switch(currentkey) {

case 'a':
  console.log("a left " + cx + " " + cy);  // left
  cx+= -gridSize; 
  mark = 1;
  break;
case 'w':
  console.log("w up " + cx + " " + cy);  // up
  cy+= -gridSize;  
  mark = 1;
  break;
case 'd':
  console.log("d  right " + cx + " " + cy);  //right
  cx+= gridSize;
  mark = 1;
  break;
case 's':
  console.log("s back " + cx + " " + cy);  // back
  cy+= gridSize;
  mark = 1;
  break;
case 'v':
  console.log("v - pufferfish");  // first img
  cimg = pufferfish;
  tool = "pix";
  break;
case 'b':
  console.log("b - goldfish");   // second img
  cimg = goldfish;  // replace with your own images
  tool = "pix";
  break;
case 'c':
  console.log("c - circ");   //circle/ellipse
  tool = "circ";
  break;
case 'z':
  console.log("z - splat");  // splatter
  tool = "splat";
  break;
case '>':
  console.log("+ " + imgSize); 
  imgSize+=10;
  break;
case '<':
  console.log("- " + imgSize); 
  imgSize-=10;
  break;
default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}

if (mark == 1) {
  if (tool == "pix"  )  {
    stampImage(cimg,cx,cy,imgSize); 
  } else if (tool == "circ") {
    drawCircle( k, cx,cy, imgSize, imgSize);
  } else if (tool == "rect"){
    drawRect( k, cx,cy, imgSize, imgSize)
  } else if (tool == "erase"){
    eraser(bgc,cx,cy,imgSize);
  } else if (tool == "splat"){
  ellaTurboSpatter(k,cx,cy,imgSize, imgSize);
  }else {
    // do nothing
  }
mark=0;  // resets the option if we make a mark or not
}


if (key == 'x' || key == 'X') {
  background(bgc);
}

if (key == 'p' ) {
 saveFrames('image-0', 'png', 1, 1);
  key = '';  // resets the key so it does not make more than one image.
}

}



function stampImage(pix,lx,ly,s)  {
  imageMode(CENTER);
  image(pix,lx,ly,s,s);
}

function drawCircle( k,  lx, ly,  w, h) {
  strokeWeight(sWeight);
  stroke(k);
  noFill();
  ellipse(lx, ly, w, h);
}

function drawRect( k,  lx, ly,  w, h) {
  strokeWeight(sWeight);
  stroke(k);
  noFill();
  rect(lx-(w/2),ly-(h/2), w, h);
}

function ellaTurboSpatter( k, lx, ly) {

  let r = random(40);
  // r == 3
  
  fill(k);
  stroke(k);

  for (let i = 0; i < r; i++) {
   let lr = random(5,40);
   let srx = random(-50,50);
   let sry = random(-50,50);
   ellipse(lx+srx, ly+sry, lr, lr)
 }


}

function eraser( k, lx, ly, sz) {
  fill(k);
  stroke(k);
  ellipse(lx, ly, sz,sz);
}

function ellaBrush( k,  lx, ly,  px, py) {
  strokeWeight(25);
  stroke(k);
  line(lx, ly, px, py);
}

//sausage
function ellaSuperBrush( k,  lx, ly,  px, py){
  stroke(k);
  strokeWeight(random(5,25));
  line(lx, ly, px, py);

}

function ellaSuperSplatter(k, lx, ly){
  let r = random(20);
  fill(k);
  stroke(k);

  for (let i = 0; i < r; i++) {  
    let lr = random(5,20);
    let sr = random(-50, 50);
    let rr = random(-30, 30);
  ellipse(lx + sr, ly + rr, lr, lr);
    
  }
}

function spikey (k, lx, ly, px, py){
  strokeWeight(random(10, 15));
  stroke(k);
  let xr = random(-50, 50);
  let yr = random(-60, 60);
  line(lx, ly, px, py);
  line(lx + xr, ly + yr, px, py);

}

function ellaRainbow(k, lx, ly){
  let r = random(20);
  fill(k);
  noStroke();

  for (let i = 0; i < r; i++) {  
    let lr = random(5,20);
    let sr = random(-70, 70);
    let rr = random(-70, 70);
  ellipse(lx + sr, ly + rr, lr, lr);
    
  }
}

function sealfriend (cimg,cx,cy,imgSize){
  image(cimg, cx, cy, imgSize, imgSize);
}

