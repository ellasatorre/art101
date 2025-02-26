
let seal1;
let seal2;
let bgseal;
let t = 0;
let counter = 0;
let counter2 = 0;
let row2 = 300;


function setup() {
  createCanvas(1000,1000);
  seal1 = loadImage("assets/sealhat.png");
  seal2 = loadImage("assets/whiteseal.png");
  bgseal = loadImage("assets/happyseal.jpg");
 // rectmode(CENTER);
}


function keyPressed(){
  if (t == 0) { 
    t = 255;
    } else { 
    t = 0;
    }
tint(t, 0, 0);


  }


function draw() {
  background(200, 250, 255);

  image(bgseal, 0, 0, width, height);
  image(seal1, 100, 100, mouseX*2, mouseY*2);
  
  for (let i = 0; i < 300; i++) {

    g = i%2;

    if (g == 0) {
      image(seal1, g, i, 100, 100);
     } else {
      image(seal2, i, g, 100, 100);
     }
    
  }

  image(seal1, counter, 0, 100, 100);
  image(seal1, 0, counter, 100, 100);

  image(seal1, counter + row2, 0 + row2, 100, 100);
  image(seal1, 0 + row2, counter + row2, 100, 100);

  image(seal1, counter2 + 300, 0 + 300, 100, 100);
  image(seal1, 0 + 300, counter2 + 300, 100, 100);


  if (counter2 > height) {
    counter2 = 0;
  } else {
    counter2 += 100;
  }
}
