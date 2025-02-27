
let temp = 0;


function setup() {
  createCanvas(500,500);

  temp = random(255);


  background(temp);

  //if + is next to string then concatenation
  temp = "yayyyy " + (9000 + 1000 + temp); 

  //convert and returns a string
  console.log(temp);

}

function draw() {
  
  temp = random(255);

 fill(temp);
 ellipse(width/2, height/2, 50, 50);
}
