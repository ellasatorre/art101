
let currentkey = '1';
let gkcount;
let cx,xy;
let bgc;
let gridSize;
let imgSize;
let pizza;
let pineapple;
let cimg;
let k;
let tool;
let mark;

function setup() {
    createCanvas(1000, 1000);
    background(2, 27, 115);
    smooth();
    bgc = color(255);
    k = color(255,0,0);
    // set up a assets folder then add an image.
    pizza = loadImage("assets/pizza.png");
    pineapple = loadImage("assets/pineapple.png");
    cx = width/2;
    cy = height/2;
    gridSize = 40;
    imgSize = 40;
    textSize(40);
    sWeight = 2;
    cimg = pizza;
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


function stampChoice() {
 
// key global variable contains whatever key was last pressed
let currentkey = key;

switch(currentkey) {

case 'a':
  console.log("a left");  // left
  cx+= -gridSize; 
  mark = 1;
  break;
case 'w':
  console.log("w up");  // up
  cy+= -gridSize;  
  mark = 1;
  break;
case 'd':
  console.log("d  right");  //right
  cx+= gridSize;
  mark = 1;
  break;
case 's':
  console.log("s back");  // back
  cy+= gridSize;
  mark = 1;
  break;
case '1':
  console.log("1 - pizza");  // first img
  cimg = pizza;
  tool = "pix";
  break;
case '2':
  console.log("2 - pineapple");   // second img
  cimg = pineapple;  // replace with your own images
  tool = "pix";
  break;
case 'c':
  console.log("c - circ");   //circle/ellipse
  tool = "circ";
  break;
case 'r':
  console.log("r - rect");   //rectangle
  tool = "rect";
  break;
case 'b':
  console.log("b - erase");  // erase with bg color
  tool = "erase";
  break;
  case 'z':
  console.log("z - splat");  // splatter
  tool = "splat";
  break;
case '>':
  console.log("+"); 
  imgSize+=10;
  break;
case '<':
  console.log("-"); 
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
  sdTurboSpatter(k,cx,cy,imgSize, imgSize);
  }else {
    // do nothing
  }
mark=0;  // resets the option if we make a mark or not
}


if (key == 'x' || key == 'X') {
  background(bgc);
}

// if (key == 'p' ) {
//  saveFrames('image-0', 'png', 1, 1);
//   key = '';  // resets the key so it does not make more than one image.
// }

key = '';  // resets the key so it does not make more than one image.

}

function drawChoice() {
  let currentkey = key;

switch(currentkey) {
case '1':
  console.log("1");  // black line
 // let k = color(0);
  drawline(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '2':
  console.log("2");  // red line
  drawline(color(255,0,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '3':
  console.log("3");  // green line
  drawline(color(0,255,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '4':
  console.log("4");  // fat teal line
  drawFatLine(color(0,255,255), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '5':
  console.log("5");  // erase with bg color
  eraser(bgc,mouseX, mouseY,25);
   break;
case '6':
    console.log("6");  // erase with bg color
    steveRanBrush(gkcount, mouseX, mouseY, pmouseX, pmouseY);

    if (gkcount > 50 ) {
        // resetting the size
        gkcount = 1;
    } else {
       // making bigger
        gkcount+= .5;
    }
 break;
 case '7':
    console.log("7");  // make your first brush here!!
    esSuperBrush(color (random(100, 200), 20, random(145, 255)), mouseX, mouseY, pmouseX, pmouseY);

 break;

 case '8':
    console.log("8");  // make your first brush here!!
    esSuperBrush(color (20, random(100, 200), random(145, 255), 70), mouseX, mouseY, pmouseX, pmouseY);

 break;
 case '9':
    console.log("8");  // make your first brush here!!
    esSuperSplatter(color (random(150, 255), random(100), 100, 40), mouseX, mouseY);

 break;


default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}
}

function stampImage(pix,lx,ly,s)  {
  // cheap centering trick with the s var /2
  image(pix,lx-(s/2),ly-(s/2),s,s);
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

function sdTurboSpatter( k, lx, ly) {

  let r = random(20);
  // r == 3
  
  fill(k);
  stroke(k);

  for (let i = 0; i < r; i++) {
   let lr = random(5,40);
   let srx = random(-39,39);
   let sry = random(-39,39);
   ellipse(lx+srx, ly+sry, lr, lr)
 }


}

function eraser( k, lx, ly, sz) {
  fill(k);
  stroke(k);
  ellipse(lx, ly, sz,sz);
}

//brush functions
function drawline( k,  lx, ly,  px, py) {
  
  strokeWeight(1);
  stroke(k);
  line(lx, ly, px, py);
  console.log(lx);
  console.log(pmouseX);
}

function drawFatLine( k,  lx, ly,  px, py) {
  strokeWeight(10);
  stroke(k);
  line(lx, ly, px, py);
}

function steveRanBrush(kcount, lx, ly,  px, py) {

  //strokeWeight(random(1,35));
  strokeWeight(kcount);
  stroke(0,kcount*3,0);
  //image(b,lx,ly, 30,30);
  line(lx, ly, px, py);
}


//sausage
function esSuperBrush( k,  lx, ly,  px, py){
  stroke(k);
  strokeWeight(random(5,25));
  line(lx, ly, px, py);

}

function esSuperSplatter(k, lx, ly){

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

