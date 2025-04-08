


// 8 x 3 array (2D array)
// 8 rows, 3 columns
twoDarr = [ [3, 7, 9] ,
            [4, 2, 7] ,
            [8, 4, 5] ,
            [3, 5, 7] ,
            [6, 9, 2] ,
            [0, 3, 2] ,
            [1, 2, 9] ,
            [6, 0, 9] ];


function setup() {
  createCanvas(500,500);
  background(20);
  fill(255);
  console.log(twoDarr[0][0]);

  for (let i = 0; i < twoDarr.length; i++) {
    fill(twoDarr[i][0]*25,twoDarr[i][1]*25,twoDarr[i][2]*25);
    rect(i*25,0,20,20);
    
  }
}

function draw() {

}
