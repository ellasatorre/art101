

let lxo = 0;
let lyo = 0;


function setup() {
 // put setup code here
 createCanvas(600,600);
  background(0);
  noStroke();
  rectMode(CENTER);
}


function draw() {
  
  noStroke();

  // let r = random(30);
  // let m = mouseX;
  // console.log(m + " " + r);
  // if (m < width/2)  {
  //   background(m);
  //   ellipse(m, height/2, r * 5, r * 2);
  // } else {
  //   background(width -m );
  //   rect(m, height/2, r * 2, r * 5);
  // }

  // for (let i=0; i < height; i+=20) {
  //   fill(20 + i,20,100);
  //   rect(0, i, width, 10);
  //   fill(100 + i, 100, 250);
  //   rect(i, 0, 10, height);
  //   console.log(i);
  // }

  // for (let i = 0; i < 400; i += 20) {
  //   for (let j = 0; j < 400; j += 20) {
  //     rand = random(255);
  //     fill(rand);
  //     rect( i+5, j+5, 10, 10 );
  //     console.log("this has a greyscale value of" + rand);
  //   }
  // }

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



  // if ( mouseIsPressed) {

  //   if ( mouseX < 100) {
    
  //     if ( mouseY < 100) {
  //       fill(255);
  //     ellipse(width/4, height/4, 60, 60);
  //     }
    
  //   }
    
  //   if ( mouseX > 400) {
    
  //     if ( mouseY > 400) {
  //       fill(200,0,100);
  //     rect(width/1.5, height/1.5, 80, 80,10);
  //     }
  //   }
    
  //   }
    
    
  //   if ( mouseX > 200 &&  mouseX < 300 ) {
  //     if ( mouseY > 200 &&  mouseY < 300 ) {
  //        fill(255,0,0,90);
  //        triangle(200,240,240,180,270,240);
  //     }
  //   }




}
