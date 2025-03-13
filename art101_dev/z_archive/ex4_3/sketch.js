
// Example 2.4.3 Adjustable Array Version

let count = 100;
let loX = new Array(count);
let loY = new Array(count);
let speedX = new Array(count);
let speedY = new Array(count);
let cirSize = new Array(count);
let colorsR = new Array(count);
let colorsG = new Array(count);
let colorsB = new Array(count);
let alphaC = new Array(count);
let isCirc = new Array(count);

function setup() {
  createCanvas(600, 600);
  noStroke();
  rectMode(CENTER);

  //seeding the arrays
  for (let i=0; i < loX.length; i++) {
    loX[i] = width/2;
    loY[i] = height/2;
    speedX[i] = random(-3, 3);
    speedY[i] = random(-3, 3);
    cirSize[i] = random(30, 90);
    colorsR[i] = int(random(100, 255));
    colorsG[i] = int(random(0, 255));
    colorsB[i] = int(random(200, 255));
    alphaC[i] = int(random(50, 200));
    isCirc[i] = int(random(2)); //flip
    console.log(loX);
  }

}
function draw() {
 
  background(70);
  // makes a frame
  fill(250);
  rect(width/2, height/2, width-80, height-80);

  for (let i = 0; i < loX.length; i++) {

     //check boundaries for all balls
     // note the '40+' and '-40' are to pull in the borders to match 
     // the background rect


     //check for x
    if (loX[i] < 40+cirSize[i]/2 || loX[i] > (width-40)-cirSize[i]/2 ) {
      speedX[i] = -speedX[i];
    }

    //check for y
    if (loY[i] < 40+cirSize[i]/2 || loY[i] > (height-40)-cirSize[i]/2) {
      speedY[i] = -speedY[i];
    }

    //draw all balls
    push();

    translate(loX[i],loY[i]);
    fill(colorsR[i],colorsG[i] ,colorsB[i], alphaC[i]);
    rotate(radians(loX[i]));

    if(isCirc[i] == 1){
    ellipse(0,0,cirSize[i],cirSize[i]);
    rect(40,0,cirSize[i] +100,cirSize[i]/10);
    } else {
      rect(0,0,cirSize[i],cirSize[i]);
    }
    pop();


   
    //update all positions
    loX[i] += speedX[i];
    loY[i] += speedY[i];

  } // end of loop

}
