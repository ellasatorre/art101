let recMode = false;

let can;  // create a canvas reference

function setup() {
    can = createCanvas(500, 500);
    background(20);
    fill(255);
    frameRate(30); // slow down the framerate so everything can be drawn. no hurry.
    // noLoop();
    // 30 frames   times 10
    console.log(frameCount);


    bunny1 = new esBunny(color(200, 0, 200), 100, 100, 0, 1);
}

function draw() {
    //  start as true until 99
    if (frameCount < 150) {
        console.log("the first act");
        fill(0, 255, 0);
        ellipse(width / 2, height / 3, 80, 80);

        bunny1.displayBunny();

        fill(255,100,0);
        ellipse(400, height/2, 70, 70);
      } else if (frameCount < 400) {
        console.log("the second act");
        fill(255,100,0);
        ellipse(400, height/2, 70, 70);


        // true between 100 and 199
    } else if (frameCount < 600) {
        console.log("the second act");
        fill(255, 255, 0);
        ellipse(width / 2, height / 3, 80, 80);
        // true once it reaches frame 300
    } else {
        console.log("the third act");
        fill(255, 0, 0);
        ellipse(width / 2, height / 3, 80, 80);

        fill(255,100,0);
        ellipse(400, height/2, 30, 80);

    }

    recordit();

}


/////////////////////// use both keyPressed and recordit ///////////

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

class esBunny {
  c;
  lxo;
  lyo;
  rot;
  sc;
  sx;
  sy;
  constructor(lc,llxo,llyo,lrot,lsc){
      
      this.c = lc;
      this.lxo = llxo;
      this.lyo = llyo;
      this.rot = lrot;
      this.sc = lsc; 

      this.sx = random(-10,10);
      this.sy = random(-10,10);

  }

displayBunny(){
      push();
      translate(this.lxo, this.lyo);
      rotate(this.rot);
      scale(this.sc);
      fill(this.c);
      this.bunnyBody(this.c, 0, 100, 0, 1);
      this.esbunnyHead(this.c,0,0, 0, 1);
      pop();

  }

bunnyBody(c,lxo,lyo,rot,sc){
      push();
    translate(lxo, lyo);
    rotate(rot);
    scale(sc);
    fill(c);
    
    ellipse(-50, 70, 70, 30)
    ellipse(50, 70, 70, 30)
    
    fill(c);
    ellipse(0, 0,200,150);
    fill(0,70);
    ellipse(0, -50, 150, 100);
    pop();
    }

esbunnyHead(c,lxo,lyo,rot,sc){
      push();
    translate(lxo, lyo);
    rotate(rot);
    scale(sc);
    fill(c);
      this.bunnyEars(c, -60, -65, -10);
      this.bunnyEars(c, 60, -65, 10);
      ellipse(0,0,190,165);
      this.bunnyEyes(-50, 10);
      this.bunnyEyes(50, 10);
      this.bunnyNose(0, 15);
      pop();
    }
  
bunnyEars(c,lxo,lyo,rot,sc){
      push();
    translate(lxo, lyo);
    rotate(rot);
    scale(sc);
    fill(c);
      rect(0, 0,  50, 200, 45, 45, 15, 15);
      fill(252, 162, 207);
      rect(0, 5,  30, 170, 45, 45, 15, 15);
      pop();
    }
bunnyEyes(lxo,lyo,rot,sc){
      push();
    translate(lxo, lyo);
    rotate(rot);
    scale(sc);
      fill(0);
      ellipse(0, 0, 20, 30);
      pop();
    }
bunnyNose(lxo,lyo,rot,sc){
      push();
    translate(lxo, lyo);
    rotate(rot);
    scale(sc);
      fill(252, 162, 207);
      ellipse(0, 0, 15, 10);
    pop();
    }
}
