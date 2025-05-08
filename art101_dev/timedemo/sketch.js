



function setup() {
  createCanvas(500,500);
  background(20);
  fill(255);
  noStroke()
}

function draw() {
background (0);
fill(255);
let s =second(); // 0-59
let m =minute(); //0-59
let h =hour(); // 0-23


let nutime = "s " +s + "  m " + m + "  h " + h;

      //input data, input low, input high, output low, output high
let ms = map(s, 0, 59, 0, 300);
let mm = map(m, 0, 59, 0, 300);
let mh = map(h, 0, 23, 0, 300);

textSize(32);
text(nutime, 150, 100, 500);


rect (100, 20, 2, 500);
rect (410, 20, 2, 500);

fill (ms, mm, mh);
rect(100, 350, 10 + ms, 10);
rect(100, 400, 10 + mm, 10);
rect(100, 450, 10 + mh, 10);

fill(255, 0, 0);
rect (100 +ms, 200, 10, 10);
rect (100 +mm, 250, 10, 10);
rect (100 +mh, 300, 10, 10);

}
