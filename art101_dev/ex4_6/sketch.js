
let u1,u2,u3;

let ufos;
let peace;

function setup() {
  createCanvas(700,700);

  ufos = new Array(70);

  for (let i = 0; i < ufos.length; i++) {

    ufos[i] = new Ufo(color(100, 100, 255), 200, 200, random(-3, 3), random(-3, 3), "take me to your leader");
    
  }


  let peace = 0;


  u2 = new Ufo(color(255, 10, 10), 300, 300, random(4, 6), random(-4, -6,), "AHHH");
  u3 = new Ufo(color(10, 200, 10), 300, 300, -2, -.5, "gleeb glorb");
}

function draw() {
  background(0);
  for (let i = 0; i < ufos.length; i++) {

    ufos[i].display();
    ufos[i].update();
  }

  u2.display();
  u3.display();


  u2.update();
  u3.update();


}

function mousePressed(){


  if (peace == 0){

  for (let i = 0; i < ufos.length; i++) {
    ufos[i].chill();
    ufos[i].chill();
  }
  u2.chill();
  u3.chill();
peace = 1;

} else {

  for (let i = 0; i < ufos.length; i++) {

    ufos[i].poke();
    ufos[i].poke();
  }
  u2.poke();
  u3.poke();

peace = 0;
}

}



class Ufo {

  //display methods 
  //action methods
  // class vars/properties/state

  //class vars (accesible through entire class)
  col;
  lx;
  ly;
  sx;
  sy;
  coms;


  //class equivalent of setup
  constructor(k, llx, lly, lsx, lsy, lcoms) {

    this.col = k;
    this.lx = llx;
    this.ly = lly;
    this.sx = lsx;
    this.sy = lsy;
    this.coms = lcoms;

    console.log("hello earthlings");

  }

  //display method
  display() {
    
    push();
    translate(this.lx, this.ly);
    fill(this.col);
    ellipse(0, -10, 30, 30);
    fill(50);
    ellipse(0,5,50, 20);
    fill(75);
    ellipse(0,0,50, 20);
  
    fill(255);
    textSize(20)
    text(this.coms, 30, -30, 300)
    pop();


  }

  //action method
  update() {
    this.ly += this.sy;
    this.lx += this.sx;

    if (this.lx < 0){
      this.lx = width
    }

    if (this.lx > width){
      this.lx = 0
    }

    if (this.ly > height){
      this.ly = 0;
    }

    if (this.ly < 0){
      this.ly = height;
    }

  }

  poke(){

    this.col = color(100,0,0);
    this.sx = random(-6,6);
    this.sy = random(-6,6);

    this.coms = "OWIEEE im telling my mothership :("

  }

  chill(){

    this.col = color(100,100,255);
    this.sx = random(-1,1);
    this.sy = random(-1,1);

    this.coms = "nvm we chill"


  }

}