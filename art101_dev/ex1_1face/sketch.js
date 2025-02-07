

let lxo = 0;
let lyo = 0;
let xc = 0;
let s = 2;

function setup() {
 // put setup code here
 createCanvas(600,600);
  noStroke();
  rectMode(CENTER);
  frameRate(12);
  console.log("gnome it up")
}

function draw() {
background(115, 204, 255);
noStroke();

//clouds
fill(255);
ellipse(xc + 100, 100, 190, 80);
ellipse(xc - 150, 100, 130, 50);
ellipse(xc + 300, 150, 180, 60);
ellipse(xc - 50, 180, 180, 60);
ellipse(xc + 200, 50, 190, 70);
ellipse(xc - 200, 200, 190, 70);

      if (xc > 600) {
      s = -0.5;
  }
  
  if (xc < 10) {
      s = 0.5;
  }  
  xc += s;

//background gnome 1
if (mouseX < 300){
  if(mouseY < 200){

console.log("O Gnomeo, Gnomeo, wherefore art thou Gnomeo?")
push();
translate(-200, -130);


  //body
  stroke(11, 26, 5)
  fill(25, 54, 13)
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
  stroke(11, 26, 5);
  fill(25, 54, 13);
  triangle(300 + lxo, 90 + lyo, 215 + lxo, 250 + lyo, 385 + lxo, 250 + lyo);
pop();
}
}

//background gnome 2
if (mouseX > 300){
  if(mouseY < 200){

push();
translate(200, -130);


  //body
  stroke(11, 26, 5)
  fill(25, 54, 13)
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
  stroke(11, 26, 5);
  fill(25, 54, 13);
  triangle(300 + lxo, 90 + lyo, 215 + lxo, 250 + lyo, 385 + lxo, 250 + lyo);
pop();
}
}

//hedge
fill(25, 54, 13);
rect(300, 350, 600, 375);


//flowers 
for (let x = 0; x < 650; x += 65){
  for (let y = 200; y < 650; y += 65){
    push();
    translate(x, y);			
    drawFlower();
    pop();
  }	
}


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


// push();
// translate(300, 300);
// let angle = frameCount * .1;
// rotate(angle);

// // petals
// fill(random(255), random(255),random(255));
// noStroke();

// ellipse(0 ,0 , 50, 25);
// ellipse(0 ,0 , 25, 50);

// //flower center
// fill(247, 230, 42);
// stroke(230, 149, 44);
// ellipse(0, 0, 20, 20);
// pop();

}


//flowers
function drawFlower() {
  let angle = frameCount * .2;
  rotate(angle);
  
  // petals
  fill(random(255), random(200),random(255));
  noStroke();
  
  ellipse(0 ,0 , 50, 25);
  ellipse(0 ,0 , 25, 50);
  
  //flower center
  fill(247, 230, 42);
  stroke(230, 149, 44);
  ellipse(0, 0, 20, 20);
}