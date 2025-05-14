
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// example of global var that can be used between scenes
let loy= 0;

////////////////////////////// 1 /////////////////
function intro()  {


    this.setup = function() {
      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      background("blue");
      textAlign(CENTER);
      textSize(29);
    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering scene1");

      loy = 100;
    }


    this.draw = function()
    {
        background(0,0,255);
        textAlign(CENTER);
        textSize(29);
        push();
        //
        translate(width/2, height/2);
        fill(255);
        text("scene1", 0, 100);
        // ellipse(0,0,30,30);
        //
        pop();


    }

    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
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

    if (elevator.isPlaying()) {
      elevator.pause(); // .play() will resume from .pause() position
  } else {
      elevator.play();
  }
      console.log("We are at  scene2 (again?)");

  }

    this.draw = function()
    {
      background(0);
      fill(200);
      text("scene 2", 300, height-60);
    }

    this.mouseDragged = function() {
      console.log("mouseDragged");

    }

    // this.mousePressed = function()
    // {

    //   //console.log("exit");
    //   this.sceneManager.showNextScene();
    // }



}


////////////////////////////// 3 /////////////////

function scene3() {

  let loy= 255;

    this.setup = function()  {
        console.log("We are at setup for scene3");


    }

    this.enter = function()  {
        let loy= 255;
       
        console.log("We are entering scene3");
        // snd1.stop(); // stop the sound so we can have it start again when we return.
        // wood.play();

        
    }




    this.draw = function() {
      background(100,0,255-loy);
      textAlign(CENTER);
      textSize(35);
      text("scene 3", width/2, height/2);
      textSize(29);

        fill(255);


    }

    this.mousePressed = function()  {

      mgr.showScene( scene1 );
    }

}




function theend() {

  this.setup = function()  {
      console.log("we are setting up on the result scene");
  }

  this.enter = function() {
     console.log("we are entering the result scene");

  }

 this.draw = function() {
   background(255,0,0);
   text("the result",width/2,height/2);

 }


}
