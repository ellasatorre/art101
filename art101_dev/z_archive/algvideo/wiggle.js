class wiggle {

  counter
  sincount
  addcount


  constructor() {
  this.counter = 0;
  this.sincount = 0;
  this.addcount = 0;
 this.dir = random(-90,50);
// dir = -.25;

}

display() {
 
 push();
 translate(frameCount,this.sincount);
noStroke();
fill(this.counter, 0, 100, 200);
ellipse(50, 50, 200, 200);
 // remember * is scaling and + is offsetting
 this.sincount = sin(this.counter) * 100  + 250 + this.addcount;
 pop();
}

update(){
  this.counter+=.1;
  this.addcount += this.dir;
 
  if ( this.addcount < -500 ||  this.addcount > 500) {
    // background(0,0,random(200),10);
     this.dir = -this.dir;
  }
}
}