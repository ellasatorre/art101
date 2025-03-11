


// Example 2.3.1  Wrap Around vector movement code
let speedx, speedy, lox, loy;

function setup() {
    background(0);
    createCanvas(500, 500);
    // making a random negative or positive value
    speedx = random(-2, 2);
    // another way of doing the same thing
    speedy = 2 - random(4);
    lox = height / 2;
    loy = width / 2;
}

function draw() {
    background(0);
    
    
    //left
    if (lox < 0) {
        lox = width;
    }
    //right
    if (lox > width) {
        lox = 0;
    }
    //top
    if (loy < 0) {
        loy = height;
    }
    //bottom
    if (loy > height) {
        loy = 0;
    }

    // update the position of the ball and print to screen
    lox += speedx;
    loy += speedy;
    fill(255);
    ellipse(lox, loy, 20, 20);
}
