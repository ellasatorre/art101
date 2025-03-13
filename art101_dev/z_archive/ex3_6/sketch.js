

 // in this example all the transform tools  are placed
  // inside the functions, so that the parameters that are passed
  // change the transform, rot and scale 
 let pew = 0;

  let counter = 0;

  function setup() {
    createCanvas(500,500);
    background(20);
    fill(255);
    angleMode(DEGREES);
  }
  
  function draw() {
    background(0);
    deathstar(100,300,-45,.75);
    deathstar(350,120,counter,.5);
    spaceBug(color(0,0,random(200)),width/2+30, height/2, -10,0.6);
    spaceBug6(color(200,20,20), 100,90,15,1 );
    counter+=.1;
  pew = 0;
  }

  function mousePressed(){
    pew = 1;
  }
  
         //deathstar (x,y,rotate, scale)
  function deathstar(lx,ly,rot,sc) {
  
    push();
    translate(lx,ly);
    rotate(rot);
    scale(sc);
    fill(80);
    ellipse(0,0,200,200);  // anchor
    fill(150);
    ellipse(55,10,50,60);
    fill(255,0,0);
    ellipse(0,-100,5,5);

    let c = color(0,255,0);
    laser(c, 60,10,0,pew);
    pop();
  
  }

  function laser(c,lx,ly,rot,sc){
    push();
    translate(lx,ly);
    rotate(rot);
    scale(sc);  
    stroke(c);
    strokeWeight(random(5,15));
    line(0,0, 1000, 0);


    pop();
  }
  
         //spaceBug (color, x,y,rotate,scale)
  function spaceBug(k,lx,ly,rot,sc) {
    //console.log("toon1");
    // this bug has 4 legs and a tongue
   push();
      translate(lx,ly);
      //rotate(random(10,20));
      rotate(rot);
      scale(sc);
      body(k);
      head(k,20,-15);
      arm(k,-55,15); // left arm
      arm(k,35,15); // right arm
      arm(k,-55,45); // bot left arm
      arm(k,35,45); // bot tight arm
    
      tongue(color(200,100,0),18,-12, -20 ); // sticks out its tongue
    pop();
  
  }

    //spaceBug (color, x,y,rotate,scale)
    function spaceBug6(k,lx,ly,rot,sc) {
    //console.log("toon1");
    // this bug has 6 legs and no tongue
    push();
        translate(lx,ly);
        //rotate(random(10,20));
        rotate(rot);
        scale(sc);
        body(k);  // the anchor
        head(k,20,-15);
        arm(k,-55,15); // left arm
        arm(k,35,15); // right arm
        arm(k,-55,35); // mid left arm
        arm(k,35,35); // mid tight arm
        arm(k,-55,60); // bot left arm
        arm(k,35,60); // bot tight arm
    pop();
    
    }
         
  
  
  function body(k){
   //console.log("body");
    fill(k);
    //rotate(45);
    rect(0,0,40,80, 15,15,25,25);
  }
  
  function head(c,lx,ly){
  //console.log("head");
  push();
  fill(c);
  translate(lx,ly)
  //head
  ellipse(0,0,40,40);
  //eyes
  fill(0,100,255);
  ellipse(-5,-10,10,10,);
  ellipse(5,-10,10,10,);
  
  pop();
  }
  
  function arm(c,lx,ly,rot){
  //console.log("arms");
  fill(c);
  push();
  translate(lx,ly);
  rotate(rot);
  rect(0,0,60,15,10);
  pop();

  }


  function tongue(c,lx, ly, rot ) {
    fill(c);
    push();
    translate(lx,ly);
    rotate(rot);
    rect(0,0,60,7,10);
    pop();
  }

