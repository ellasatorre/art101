// setup runs ( almost) first, runs once
function setup() {
  // this define canvas size, (width,height)
  createCanvas(500,500);
  // color of background (greyscale)  0-255  
  // where 0 is black and 255 is wh
  background(120);
 // can you tell when its saved?
 
 
 // put setup code here
 }
 
 
 // runs second and runs over ... and over... and over......
 function draw() {
  // put drawing code here
  background(120);
  stroke(0);
  // let ran = random(100); // 0-100
  // let ran2 = random(500); // 0-500
 
 
  let ran = 0; // 0-100
  let ran2 = 50; // 0-500
 
 
 
 
 
 
  // (greyscale)  = black
  fill(ran + 0);
 
 
  // lox, loy, width, height   [ parameters or arguments]
  // default drawing is center out.
  ellipse(ran + 100,ran2 +100,100,100);
  // overloading is all about different parameters
  //  to create different behavior
   // r,g,b
  fill(0,0,255);
  ellipse(ran +100,100,ran +70,70);
  // grey, a
  fill(255,190);
  ellipse(ran2 +100,100,50,ran +50);
   // r,g,b,a
  fill(0,255,0,100);
  ellipse(ran +100,100,20,ran2 +20);
    // r,g,b,a
    fill("orange");
    // x, y, w, h
    // draws by default from the top-left
  rect(300,100,90,50);
  fill(100,200,0);
  // x, y, w, h, corners
  rect(300,300,90,50,15,20,40,50);
 
 
  stroke(255,0,0);
   //x1,y1,x2,y2
   line(30, 20, 85, 75);
 
 
 }
 
