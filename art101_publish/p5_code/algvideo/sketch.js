
let jelly;
let recMode = false;
let can;
let wiggles;

let zoom = 1;
let pan = 1;

// center point
let centerX = 0.0, centerY = 0.0;

let radius = 45, rotAngle = -90;
let accelX = 0.0, accelY = 0.0;
let deltaX = 0.0, deltaY = 0.0;
let springing = 0.0001, damping = 1;

let counterx = 0;
let countery = 0;


let nextxArr = [100, 400, 200,350];
let nextyArr = [60, 200, 100, 150];

let spirox =  [500, 800, 1000, 200];
let spiroy =  [500, 700, 200, 1000];

let spx, spy;


let fv = [10, 10, 5, 2]
let fv1 = [1,-1,10, -10]
let fs, fs1;


//corner nodes
let nodes = 6;

//zero fill arrays
let nodeStartX = [];
let nodeStartY = [];
let nodeX = [];
let nodeY = [];
let angle = [];
let frequency = [];

// soft-body dynamics
let organicConstant = 1.0;

let flock;


let NUMSINES = 10; // how many of these things can we do at once?
let sines = new Array(NUMSINES); // an array to hold all the current angles
let rad; // an initial radius value for the central sine
let i; // a counter variable

// play with these to get a sense of what's going on:
let fund = 0.005; // the speed of the central sine
let ratio = 1; // what multiplier for speed is each additional sine?
let alpha = 50; // how opaque is the tracing system

let trace = false; // are we tracing?


function setup() {
 can = createCanvas(1920 , 1080);
setupFlock();
setupSpiro();
jelly = loadImage('jelly.png');
wiggles = new wiggle();
  //center shape in window
  centerX = width / 2;
  centerY = height / 2;

  //initialize arrays to 0
  for (let i = 0; i < nodes; i++){
    nodeStartX[i] = 0;
    nodeStartY[i] = 0;
    nodeY[i] = 0;
    nodeY[i] = 0;
    angle[i] = 0;
  }

  // iniitalize frequencies for corner nodes
  for (let i = 0; i < nodes; i++){
    frequency[i] = random(5, 12);
  }

  noStroke();
  frameRate(24);

  counterx = nextxArr[0];
  countery = nextyArr[0];
}


function draw() {
  background(0, 35, 105, 100);


  if (frameCount < 400){

    background(0, 41, 122, 10)
    push()
    scale(zoom+=.005);
    translate(pan+=2,0);
    flock.run();
    fs = fv[0];
    fs1 = fv1[0];
    spx = spirox[0];
    spy = spiroy[0];
    counterx = nextxArr[0];
    countery = nextyArr[0];
    wiggles.display();
    wiggles.update();
    drawSpiro();
    pop()

  }else if(frameCount < 800){
push();
scale(1.3);
translate(pan-=2,0);
    background(110, 233, 255, 50)
    flock.run();
    fs = fv[1];
    fs1 = fv1[1];
    spx = spirox[1];
    spy = spiroy[1];
    flock.run();
    drawSpiro();
    counterx = nextxArr[1];
    countery = nextyArr[1];
    
pop();
  } else if (frameCount < 1000){
push();
scale(1.5);
translate(pan-=2, pan+=1);
    background(99, 51, 255, 50)
    flock.run();
    fs = fv[2];
    fs1 = fv1[2];
    spx = spirox[2];
    spy = spiroy[2];
    counterx = nextxArr[2];
    countery = nextyArr[2];
    push()
    translate(1000,200);
    wiggles.display();
    wiggles.update();
    pop()
    drawSB();
    pop();
  } else {

    push();
    scale(.9);
// translate();
    background(255, 38, 107,50)
    flock.run();
    fs = fv[3];
    fs1 = fv1[3];
    spx = spirox[3];
    spy = spiroy[3];
    counterx = nextxArr[3];
    countery = nextyArr[3];
    drawSpiro();
    drawSB();
    push()
    translate(500,500);
    wiggles.display();
    wiggles.update();
    pop();
    pop();
  }
  
  recordit();
}

function drawSB() {
  // console.log(frameCount);
  //fade background
  // fill(255, 100);
  // rect(0, 0, width, height);
  drawShape();
  moveShape();
  
  if (frameCount < 400){


    counterx = nextxArr[0];
    countery = nextyArr[0];

  }else if(frameCount < 800){

    counterx = nextxArr[1];
    countery = nextyArr[1];

  } else if (frameCount < 1000){
    counterx = nextxArr[2];
    countery = nextyArr[2];
  } else {
    counterx = nextxArr[3];
    countery = nextyArr[3];
  }
}

function keyPressed() {

  if (keyIsPressed === true) {
      let k = key;
      console.log("k is " + k);

      if (k == 's' || k == 'S') {
          console.log("Stopped Recording");
          recMode = false;
          noLoop();
      }

      if (k == ' ') {
          console.log("Start Recording");
          recMode = true;
          loop();
      }
  }
}

function recordit() {  // new version
  if (recMode == true) {
      let ext = nf(frameCount, 4);
      saveCanvas(can, 'frame-' + ext, 'jpg');
      console.log("rec " + ext);
  }
}

function drawShape() {
  //  calculate node  starting locations
  for (let i = 0; i < nodes; i++){
    nodeStartX[i] = centerX + cos(radians(rotAngle)) * radius;
    nodeStartY[i] = centerY + sin(radians(rotAngle)) * radius;
    rotAngle += 360.0 / nodes;
  }

  // draw polygon

  curveTightness(organicConstant);
  fill(171, 236, 245);
  beginShape();
  for (let i = 0; i < nodes; i++){
    curveVertex(nodeX[i], nodeY[i]);
  }
  for (let i = 0; i < nodes-1; i++){
    curveVertex(nodeX[i], nodeY[i]);
  }
  endShape(CLOSE);
}

function moveShape() {
  //move center point
  deltaX = counterx - centerX;
  deltaY = countery - centerY;

  // create springing effect
  deltaX *= springing;
  deltaY *= springing;
  accelX += deltaX;
  accelY += deltaY;

  // move predator's center
  centerX += accelX;
  centerY += accelY;

  // slow down springing
  accelX *= damping;
  accelY *= damping;

  // change curve tightness
  organicConstant = 1 - ((abs(accelX) + abs(accelY)) * 0.1);

  //move nodes
  for (let i = 0; i < nodes; i++){
    nodeX[i] = nodeStartX[i] + sin(radians(angle[i])) * (accelX * 2);
    nodeY[i] = nodeStartY[i] + sin(radians(angle[i])) * (accelY * 2);
    angle[i] += frequency[i];
  }
}



function setupFlock() {

  flock = new Flock();
  // Add an initial set of boids into the system
  for (let i = 0; i < 1000; i++) {
    let b = new Boid(random(0, 1900), random(100, 1000));
    flock.addBoid(b);
  }
}


// Add a new boid into the System
// function mouseDragged() {
//   flock.addBoid(new Boid(mouseX, mouseY));
// }

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Flock object
// Does very little, simply manages the array of all the boids

function Flock() {
  // An array for all the boids
  this.boids = []; // Initialize the array
}

Flock.prototype.run = function() {
  for (let i = 0; i < this.boids.length; i++) {
    this.boids[i].run(this.boids);  // Passing the entire list of boids to each boid individually
  }
}

Flock.prototype.addBoid = function(b) {
  this.boids.push(b);
}

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Boid class
// Methods for Separation, Cohesion, Alignment added

function Boid(x, y) {
  this.acceleration = createVector(0, 0);
  this.velocity = createVector(fs, fs1);
  this.position = createVector(x, y);
  this.r = 3.0;
  this.maxspeed = 7;    // Maximum speed
  this.maxforce = 0.1; // Maximum steering force
}

Boid.prototype.run = function(boids) {
  this.flock(boids);
  this.update();
  this.borders();
  this.render();
}

Boid.prototype.applyForce = function(force) {
  // We could add mass here if we want A = F / M
  this.acceleration.add(force);
}

// We accumulate a new acceleration each time based on three rules
Boid.prototype.flock = function(boids) {
  let sep = this.separate(boids);   // Separation
  let ali = this.align(boids);      // Alignment
  let coh = this.cohesion(boids);   // Cohesion
  // Arbitrarily weight these forces
  sep.mult(10);
  ali.mult(1.0);
  coh.mult(1.0);
  // Add the force vectors to acceleration
  this.applyForce(sep);
  this.applyForce(ali);
  this.applyForce(coh);
}

// Method to update location
Boid.prototype.update = function() {
  // Update velocity
  this.velocity.add(this.acceleration);
  // Limit speed
  this.velocity.limit(this.maxspeed);
  this.position.add(this.velocity);
  // Reset accelertion to 0 each cycle
  this.acceleration.mult(0);
}

// A method that calculates and applies a steering force towards a target
// STEER = DESIRED MINUS VELOCITY
Boid.prototype.seek = function(target) {
  let desired = p5.Vector.sub(target,this.position);  // A vector pointing from the location to the target
  // Normalize desired and scale to maximum speed
  desired.normalize();
  desired.mult(this.maxspeed);
  // Steering = Desired minus Velocity
  let steer = p5.Vector.sub(desired,this.velocity);
  steer.limit(this.maxforce);  // Limit to maximum steering force
  return steer;
}

Boid.prototype.render = function() {
  // Draw a triangle rotated in the direction of velocity
  let theta = this.velocity.heading() + radians(90);
  // fill(random(100,255), random(10,100), random(100,200));
  noFill();
  stroke(200);
  push();
  translate(this.position.x, this.position.y);
  rotate(theta);

image(jelly,0 ,0, 30, 30);


  endShape(CLOSE);
  pop();
}

// Wraparound
Boid.prototype.borders = function() {
  if (this.position.x < -this.r)  this.position.x = width + this.r;
  if (this.position.y < -this.r)  this.position.y = height + this.r;
  if (this.position.x > width + this.r) this.position.x = -this.r;
  if (this.position.y > height + this.r) this.position.y = -this.r;
}

// Separation
// Method checks for nearby boids and steers away
Boid.prototype.separate = function(boids) {
  let desiredseparation = 30.0;
  let steer = createVector(0, 0);
  let count = 0;
  // For every boid in the system, check if it's too close
  for (let i = 0; i < boids.length; i++) {
    let d = p5.Vector.dist(this.position,boids[i].position);
    // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
    if ((d > 0) && (d < desiredseparation)) {
      // Calculate vector pointing away from neighbor
      let diff = p5.Vector.sub(this.position, boids[i].position);
      diff.normalize();
      diff.div(d);        // Weight by distance
      steer.add(diff);
      count++;            // Keep track of how many
    }
  }
  // Average -- divide by how many
  if (count > 0) {
    steer.div(count);
  }

  // As long as the vector is greater than 0
  if (steer.mag() > 0) {
    // Implement Reynolds: Steering = Desired - Velocity
    steer.normalize();
    steer.mult(this.maxspeed);
    steer.sub(this.velocity);
    steer.limit(this.maxforce);
  }
  return steer;
}

// Alignment
// For every nearby boid in the system, calculate the average velocity
Boid.prototype.align = function(boids) {
  let neighbordist = 50;
  let sum = createVector(0,0);
  let count = 0;
  for (let i = 0; i < boids.length; i++) {
    let d = p5.Vector.dist(this.position,boids[i].position);
    if ((d > 0) && (d < neighbordist)) {
      sum.add(boids[i].velocity);
      count++;
    }
  }
  if (count > 0) {
    sum.div(count);
    sum.normalize();
    sum.mult(this.maxspeed);
    let steer = p5.Vector.sub(sum, this.velocity);
    steer.limit(this.maxforce);
    return steer;
  } else {
    return createVector(0, 0);
  }
}

// Cohesion
// For the average location (i.e. center) of all nearby boids, calculate steering vector towards that location
Boid.prototype.cohesion = function(boids) {
  let neighbordist = 50;
  let sum = createVector(0, 0);   // Start with empty vector to accumulate all locations
  let count = 0;
  for (let i = 0; i < boids.length; i++) {
    let d = p5.Vector.dist(this.position,boids[i].position);
    if ((d > 0) && (d < neighbordist)) {
      sum.add(boids[i].position); // Add location
      count++;
    }
  }
  if (count > 0) {
    sum.div(count);
    return this.seek(sum);  // Steer towards the location
  } else {
    return createVector(0, 0);
  }
}

function setupSpiro() {
  
  rad = height / 4; // compute radius for central circle

  for (let i = 0; i<sines.length; i++) {
    sines[i] = PI; // start EVERYBODY facing NORTH
  }
}

function drawSpiro() {

  // MAIN ACTION
  push(); // start a transformation matrix
  translate(spx, spy);
  // translate(width/2, height/2);
  noStroke();
  fill(random(0,60), random(10,120),random(200,255));

  for (let i = 0; i < sines.length; i++) {
    let erad = 0; // radius for small "point" within circle... this is the 'pen' when tracing
    // setup for tracing
    // if (trace) {
    //   stroke(0, 0, 255 * (float(i) / sines.length), alpha); // blue
    //   fill(0, 0, 255, alpha / 2); // also, um, blue
    //   erad = 5.0 * (1.0 - float(i) / sines.length); // pen width will be related to which sine
    // }
    let radius = rad / (i + 1); // radius for circle itself
    rotate(sines[i]); // rotate circle
    // rect(0, 0, radius * 2, radius * 2); // if we're simulating, draw the sine
    push(); // go up one level
    translate(0, radius); // move to sine edge
    drawSB();
    // image(jelly, 0, 0, 20, 20);
    ellipse(0, 0, 10, 20); // draw a little circle
    pop(); // go down one level
    translate(0, radius); // move into position for next sine
    sines[i] = (sines[i] + (fund + (fund * i * ratio))) % TWO_PI; // update angle based on fundamental
  }

  pop(); // pop down final transformation

}

