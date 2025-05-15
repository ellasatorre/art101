
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

let zoom;
// example of global var that can be used between scenes

////////////////////////////// 1 /////////////////
function intro()  {

    this.setup = function() {
      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      textAlign(CENTER);
      textSize(29);
    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering scene1");

        doom.pause();
        sax.pause();
        boss.pause();

    if (elevator.isPlaying()) {
      elevator.pause(); // .play() will resume from .pause() position
  } else {
      elevator.play();
  }
    }


    this.draw = function()
    {
        image(joyful, 0, 0, width, height);
        textAlign(CENTER);
        textSize(29);
        textFont('Verdana');
        fill(255);
        text("seal of insurmountable joy!!!!", width/2, 150); 

        text("press 2 to continue your seal experience", width/2, 850); 
        // ellipse(0,0,30,30);
        //


    }
    this.mousePressed = function()
    {
      pluh.play();

    }
}

///////////////////////  2  ////////////////////////

function scene2()  {


  this.setup = function() {
      background(0);
      console.log("We are at setup for scene2");
  }

  this.enter = function()
  {
    elevator.pause();
    sax.pause();
    boss.pause();

    if (doom.isPlaying()) {
      doom.pause(); // .play() will resume from .pause() position
  } else {
      doom.play();
  }

      console.log("We are at  scene2 (again?)");

  }

    this.draw = function()
    {
      image(gun, 0, 0, width, height);
      image(fire, 0, 700, width, 300);
      fill(255);
      textSize(100);
      textFont(dtxt);
      text("AHH THE SEAL HAS A GUN!!", width/2, 100);
      text("PRESS 3 TO ESCAPE", width/2, 900);
    }

    // this.mouseDragged = function() {
    //   console.log("mouseDragged");

    // }

    // this.mousePressed = function()
    // {

    //   //console.log("exit");
    //   this.sceneManager.showNextScene();
    // }



}


////////////////////////////// 3 /////////////////

function scene3() {

    this.setup = function()  {
        console.log("We are at setup for scene3");

    }

    this.enter = function()  {
        doom.pause();
        elevator.pause();
        boss.pause();

    if (sax.isPlaying()) {
      sax.pause(); // .play() will resume from .pause() position
  } else {
      sax.play();
  }


        console.log("We are entering scene3");
        // snd1.stop(); // stop the sound so we can have it start again when we return.
        // wood.play();

    }




    this.draw = function() {
      image(love, 0, 0, width, height);
      textSize(100);
      textFont(fancy1);
      text("oh hey... didn't seal you there", width/2, 100);

      textSize(70);
      text("go on... click me bro... ", width/2, 600);
      textSize(50)
     text("press 4 to carry on...", 200, 950);
        fill(255);

        if (mouseIsPressed === true){
      image(rose, 0, 0, width, height);

        }

    }

    this.mousePressed = function()  {
      fart.play();

    }

}

////////////////////////////4////////////////////////////////


function scene4() {

  this.setup = function()  {
      console.log("4");
      elevator.pause();
      doom.pause();
  }

  this.enter = function() {
     console.log("scene4");

    doom.pause();
    elevator.pause();
    sax.pause();

    if (boss.isPlaying()) {
      boss.pause(); // .play() will resume from .pause() position
  } else {
      boss.play();
  }


  }

 this.draw = function() {
   image(arena, 0, 0, width, height);
  image(minecraft, 200, 700, 100, 100);
  textFont(fancy);
  textSize(100);
   text("Boss approaching",width/2,height/2);

 }


}

////////////////////////////end////////////////////////////////


function theend() {
let zoom = 1;
  this.setup = function()  {
      console.log("we are setting up on the result scene");
      elevator.pause();
      doom.pause();
  }

  this.enter = function() {
     console.log("we are entering the result scene");

    doom.pause();
    elevator.pause();
    sax.pause();

    if (boss.isPlaying()) {
      boss.pause(); // .play() will resume from .pause() position
  } else {
      boss.play();
  }


  }

 this.draw = function() {
   image(arena, 0, 0, width, height);
  image(minecraft, 200, 700, 100, 100);

  push();
  imageMode(CENTER);
  image(rocket, width/2, height/2, zoom, zoom);
  pop();
  textFont(fancy);
  textSize(100);
   text("AHH",width/2,200);

   if (zoom > 1500){
    zoom = 1;
   }

 }

    this.mousePressed = function()
    {

      zoom += 50;
    
      fart.play();

    }


}
