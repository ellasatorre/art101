
let clef;
let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


function preload(){
  clef = loadImage('./assets/altoclef.png');
}

function setup() {
  createCanvas(850,1100);
  background(255);
  textFont("Times New Roman");
  strokeWeight(5);
}

function draw() {
background(255);

// Date (Title)
textSize(30);
let d1 = new Date();
console.log(d1.getDay());
let todayis = days[d1.getDay()];

text(todayis, width/2-50, 100);

// timer
  let mls = millis();
  let s =second(); // 0-59
  let m =minute(); //0-59
  let h =hour(); // 0-23

  let nutime = h + ":" + m + "." + s + "." + mls;
  
  //input data, input low, input high, output low, output high
  let ms = map(s, 0, 59, 0, 600);
  let mm = map(m, 0, 59, 0, 600);
  let mh = map(h, 0, 23, 0, 600);



fill(255,0,0)
noStroke();
rect (70 +ms, 150, 2, 60);
rect (70 +mm, 250, 10, 10);
rect (70 +mh, 300, 10, 10);

text(nutime, 50, 50)


//lines 
 staff1(25, 150);
 staff(25, 250);
 staff(25, 350);

 fill(0);
 strokeWeight(2);
 ellipse(110, 155, 15, 12);
 ellipse(140, 155, 15, 12);
 ellipse(170, 155, 15, 12);
 ellipse(200, 155, 15, 12);
}

function staff1(lxo,lyo,s) {
  push();
  translate(lxo,lyo);
  scale(s);
  fill(0);
  //clef and time signature
  image(clef, 0,0, 45, 60)
  textSize(45);
  text("4", 45, 30);
  text("4", 45, 60);
  //measure count
  measures(0, 0);
  measures(200, 0);
  measures(400, 0);
  measures(600, 0);
  pop();
}

function staff(lxo,lyo,s) {
  push();
  translate(lxo,lyo);
  scale(s);
  //clef
  image(clef, 0,0, 45, 60)
  //measure count
  measures(0, 0);
  measures(200, 0);
  measures(400, 0);
  measures(600, 0);
  pop();

}

function measures(lxo,lyo) {
 push();
  translate(lxo,lyo);
  stroke(0);
  strokeWeight(2);

  //end line
  line(200, 0, 200, 60);

  //horizontal lines
  line(0, 0, 200, 0);
  line(0, 15, 200, 15);
  line(0, 30, 200, 30);
  line(0, 45, 200, 45);
  line(0, 60, 200, 60);
  pop();
}

