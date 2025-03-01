let choice;
let cvalue;


function setup() {
  createCanvas(500,500);
  background(100);
  
  choice = "left";
  
  cvalue = 0;


}

function draw() {

fill(cvalue);
 ellipse(width/2, height/2, 50, 50);
}

function keyPressed(){

  if (key == 'b' || key == 'B'){ 
  if (cvalue == 0) {
    cvalue = 255;
  } else {
    cvalue = 0;
  } 
  }

if ( key == 'c' || key == 'C'){
  if (choice == 'left'){
    cvalue = 128;
  }
}

}


