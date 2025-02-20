
let seal1;
let seal2;
let bgseal;
let t = 0;

function setup() {
  createCanvas(500,500);
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
  image(seal1, 100, 100, mouseX, mouseY);
  
  for (let i = 0; i < 300; i++) {

    g = i%2;

    if (g == 0) {
      image(seal1, g, i, 100, 100);
     } else {
      image(seal2, i, g, 100, 100);
     }
    
  }
}
