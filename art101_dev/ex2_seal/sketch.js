
let seal1;
let seal2;
let bgseal;
let fish;
let t = 0;
let counter = 0;
let counter2 = 0;
let row2 = 300;
let gridSize;
let cx,cy;
let bgc;
let f;
let choice;

function preload(){
  seal1 = loadImage("assets/sealhat.png");
  seal2 = loadImage("assets/whiteseal.png");
  bgseal = loadImage("assets/happyseal.jpg");
  fish = loadImage ("assets/fish.png");
  f = loadFont('assets/PixelGame.otf');
}


function setup() {
  createCanvas(1000,1000);
  
  background(255);
  cvalue = color(0, 0, 255,1);

  textFont(f);
  choice = 0;

  cx = width/2;
  cy = height/2;
  gridSize = 100;
  textSize(40);
  frameRate(12);
  
  image(bgseal, 0, 0, width, height); 
 // rectmode(CENTER); 
}


// function keyPressed(){
//   if (t == 0) { 
//     t = 255;
//     } else { 
//     t = 0;
//     }
// tint(t, 0, 0);
//   }


function draw() {
 
  // optional fade trick
    fill(cvalue);
    rect(9,9,width,height);
 
  
    // checking then triggering the keyChoice for drawing
    if( keyIsPressed) {  // true/false
      keyChoice();
   }


  image(seal1, mouseX, mouseY, mouseX/2, mouseY/2);
  
  for (let i = 0; i < 300; i++) {

    g = i%2;

    if (g == 0) {
      image(seal1, g, i, 100, 100);
     } else {
      image(seal2, i, g, 100, 100);
     }
    
  }

  image(fish, counter, 0, 100, 100);
  image(fish, 0, counter, 100, 100);

  image(seal1, counter + row2, 0 + row2, 100, 100);
  image(seal1, 0 + row2, counter + row2, 100, 100);

  image(fish, counter2 + 300, 0 + 300, 100, 100);
  image(fish, 0 + 300, counter2 + 300, 100, 100);


  if (counter2 > height) {
    counter2 = 0;
  } else {
    counter2 += 100;
  }
}

function keyPressed(){

  if (key == 'q' || key == 'Q'){ 
  if (choice == 0) {
    console.log("green tint");
    cvalue = color(0, 255, 0, 1);
    choice = 1;
  } else {
    console.log("blue tint");
    cvalue = color(0, 0, 255, 1);
    choice = 0;

  } 
  }

if ( key == 'e' || key == 'E'){
    console.log("EVIL SEALs");
    cvalue = color (255, 0, 0, 20);
}

if ( key == 'r' || key == 'R'){
  console.log("happy seal");
  image(bgseal, 0, 0, width, height);
}

}

function keyChoice() {
 // the 'key' maps what characters on the keyboard you can use.
 // switch statement
switch(key) {
case 'a':
  console.log("a left " + cx + " " + cy);  // left
  cx+= -gridSize;
  image(seal2,cx,cy,gridSize,gridSize);
  break;
case 'w':
  console.log("w up " + cx + " " + cy);  // up
  cy+= -gridSize; 
  image(seal2,cx,cy,gridSize,gridSize);
  break;
case 'd':
  console.log("d  right " + cx + " " + cy);  //right
  cx+= gridSize;
  image(seal2,cx,cy,gridSize,gridSize);
  break;
case 's':
  console.log("s back " + cx + " " + cy);  // back
  cy+= gridSize;
  image(seal2,cx,cy,gridSize,gridSize);
  break;
case 't':
    console.log("t text");  // text
    fill(0);
    text("I <3 SEALS",cx,cy,200);
    break;
default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}
key = "";  // you can empty it so, it does not double trigger
}
