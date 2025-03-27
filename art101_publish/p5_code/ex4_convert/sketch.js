let bgc;
let b1;

let bunnyz;
let spaceship;
let stars;

let mood = 0;
let boom;


function setup() {
  createCanvas(750,750);
  colorMode(HSB);
   bgc = color(random(170,220), 60, 5);
  colorMode(RGB);
  angleMode(DEGREES);
  boom = loadImage('boom.gif');

  rectMode(CENTER);
  noStroke();

  bunnyz = new Array(15);
  spaceship = new Array(15);
  stars = new Array(100);

  for (let i = 0; i < bunnyz.length; i++) {   
    bunnyz[i] = new esBunny(color(random(115, 200), random(115,200), random(115, 200)), width/2, length/2, random(0,360), random(.1,.5));
  }

  for (let i = 0; i < spaceship.length; i++) {   
    spaceship[i] = new ankSpaceship(random(width), random(height), random(-PI,PI), color(random(10, 150),random(10, 150),random(10,150)), random(2), random(3), random(.5,1.5));
    spaceship[i].changeSpeed(random(-2, 2), random(-2,2));
  }
}

function draw() {
  background(bgc);

  for (let i = 0; i < stars.length; i++) {
    
    fill(255);   
    ellipse(random(width), random(height), random(1,3));
    fill(255, 100);
    ellipse(random(width), random(height), random(3,5));
  }

  for (let i = 0; i < bunnyz.length; i++) {   
    bunnyz[i].displayBunny();
    bunnyz[i].updateBunny();
  }

  for (let i = 0; i < spaceship.length; i++) {   
    spaceship[i].displayShip();
    spaceship[i].updateShip();
  }

  if(keyIsDown(32)){
  image(boom, 0, 0, width, height);
}
}

function mousePressed(){

if (mood == 0){
  for (let i = 0; i < bunnyz.length; i++) {   
    bunnyz[i].bunnyMad();
    mood = 1;
  } 
} else if(mood == 1){
  for (let i = 0; i < bunnyz.length; i++) {   
    bunnyz[i].bunnySad();
    mood = 2;

  }
 } else if(mood == 2) {
    for (let i = 0; i < bunnyz.length; i++) {   
      bunnyz[i].bunnyHappy();
      mood = 0;
} 
}
}

function keyPressed() {

  switch(key){
    case 'b':
    case 'B':
    for (let i = 0; i < spaceship.length; i++) {
      spaceship[i].changeBody();
    }
    break;
    case 'h':
    case 'H':
    for (let i = 0; i < spaceship.length; i++) {
      spaceship[i].changeHead();
    }
    break;
  }
}