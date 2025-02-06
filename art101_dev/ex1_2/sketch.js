
let lxo = 0;
let lyo = 0;

let counter = 0;

function setup() {
  createCanvas(800,800);
  background(0);
 // put setup code here
 }
 
 
 function draw() {


  
  // intiating, test, change
      // if its true continue, otherwise exit
  for ( let i = 40; i < 400; i+=40 ){ 
    // i = column/x

    for ( let j = 40; j < 400; j+=40 ){
      //j = row/y

    fill(random(255), random(255), random(255));
    rect(i, j, 20, 20, 5);


    }
  }

  //gate that resolves true or false
  // needs at least 1 changing var
 // if true, else false
 let r2 = random(20000);
 
  if ( r2 < 400 ) {

  fill(0, 10, 200);
  ellipse(random(200), 30, 130, 130);
  // ---------------------- face
  background(0);
  fill("orange");
  rect(200 + lxo , 100 + lyo ,100,200,20);
  fill(255);
  
  // ellipse(random(-2,2)+220,150,20,20);
  // ellipse(random(-2,2)+260,150,20,20);

  ellipse(220 + lxo, 150 + lyo, 20,20);
  ellipse(260 + lxo,150 + lyo, 20,20);
  ellipse(240 +lxo,220 + lyo , 50,20);
  // optional
  //ellipse(240,230,100 * mouseX/width,100 * mouseY/height);
 
  // ---------------------- end face
  

 } else {

  fill(200, 0, 200);
  ellipse(200 + random(200), 30, 20, 20);

 }

counter++;

  // lxo++
  // lyo++

  // lxo--
  // lyo--

  lxo+=.05
  lyo+=.05

// console.log (mouseX + " " + mouseY);
 
 }
 
