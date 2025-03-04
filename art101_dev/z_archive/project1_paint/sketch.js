
/* 
Make sure to check out the project 1 example on custom functions first.
namely being able to make a custom function with aruguements.
 */

let currentkey = '1';
let bgc ;
let gkcount;

function setup() {
    createCanvas(800, 600);
    background(255);
    smooth();
    bgc = color(255);
    gkcount = 20;
}


function draw() {
    // triggering the clear_print function
    if( keyIsPressed) {
      clear_print();
    }
    // triggering the newkeychoice
    if(mouseIsPressed) {
     drawChoice();
    }
}


 // wrapper function ( no parameters or arguments )
function drawChoice() {

  /*
   the key mapping if statements that you can change to do anything you want.
   just make sure each key option has the a stroke or fill and then what type of 
   graphic function. The 'key' global property contains whatever key was last pressed
  */


  let currentkey = key;

switch(currentkey) {
case '1':
  console.log("1");  // black line
 // let k = color(0);
  drawline(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '2':
  console.log("2");  // red line
  drawline(color(255,0,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '3':
  console.log("3");  // green line
  drawline(color(0,255,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '4':
  console.log("4");  // fat teal line
  drawFatLine(color(0,255,255), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '5':
  console.log("5");  // erase with bg color
  eraser(bgc,mouseX, mouseY,25);
   break;
case '6':
    console.log("6");  // erase with bg color
    steveRanBrush(gkcount, mouseX, mouseY, pmouseX, pmouseY);

    if (gkcount > 50 ) {
        // resetting the size
        gkcount = 1;
    } else {
       // making bigger
        gkcount+= .5;
    }
 break;
 case '7':
    console.log("7");  // make your first brush here!!
    esSuperBrush(color (random(100, 200), 20, random(145, 255)), mouseX, mouseY, pmouseX, pmouseY);

 break;

 case '8':
    console.log("8");  // make your first brush here!!
    esSuperBrush(color (20, random(100, 200), random(145, 255), 70), mouseX, mouseY, pmouseX, pmouseY);

 break;
 case '9':
    console.log("8");  // make your first brush here!!
    esSuperSplatter(color (random(150, 255), random(100), 100, 40), mouseX, mouseY);

 break;


default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}

}


//brush functions
function drawline( k,  lx, ly,  px, py) {
  
  strokeWeight(1);
  stroke(k);
  line(lx, ly, px, py);
  console.log(lx);
  console.log(pmouseX);
}

function drawFatLine( k,  lx, ly,  px, py) {
  strokeWeight(10);
  stroke(k);
  line(lx, ly, px, py);
}

function steveRanBrush(kcount, lx, ly,  px, py) {

  //strokeWeight(random(1,35));
  strokeWeight(kcount);
  stroke(0,kcount*3,0);
  //image(b,lx,ly, 30,30);
  line(lx, ly, px, py);
}


//sausage
function esSuperBrush( k,  lx, ly,  px, py){
  stroke(k);
  strokeWeight(random(5,25));
  line(lx, ly, px, py);

}

function esSuperSplatter(k, lx, ly){

  let r = random(20);
  fill(k);
  stroke(k);

  for (let i = 0; i < r; i++) {  
    let lr = random(5,20);
    let sr = random(-50, 50);
    let rr = random(-30, 30);
  ellipse(lx + sr, ly + rr, lr, lr);
    
  }

}

function eraser( k, lx, ly, sz) {
  fill(k);
  stroke(k);
  ellipse(lx, ly, sz,sz);
}

function clear_print() {

  // these 2 options let you choose between clearing the background
  // and saveing the current image as a file.
  if (key == 'x' || key == 'X') {
    background(255);
  } else if (key == 'p' || key == 'P') {
    saveFrames('image-0', 'png', 1, 1);
    key = '';  // resets the key so it does not make more than one image.
  }



}

