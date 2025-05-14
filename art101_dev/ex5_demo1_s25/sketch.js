
// This contains the use of both the Sounds and Scenemanager libraries

let boss, sax, doom, elevator, fart;

function preload() {

    boss = loadSound("assets/sound_boss.mp3");
    sax = loadSound("assets/sound_carelesswhispers.mp3");
    doom = loadSound("assets/sound_doom.mp3");
    elevator = loadSound("assets/sound_elevator.mp3");
    fart = loadSound("assets/sound_fart.mp3");
//   snd1 = loadSound("assets/beat.mp3");
//   wood = loadSound("assets/wood.mp3");
//   opi = loadImage("assets/octo.png");

}


// global manager object
var mgr;

function setup() {
    createCanvas(1000, 1000);
  //  console.log(hell);

     mgr = new SceneManager();
    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (intro);
    mgr.addScene (scene2);
    mgr.addScene (scene3);
    mgr.addScene (theend);
    mgr.showNextScene();

}

function draw()
{
    // pass the current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

 function mouseMoved()
 {
   // pass the mouseMoved message into the SceneManager
   mgr.handleEvent("mouseDragged");
}

function mouseDragged()
{
   // pass the mouseMoved message into the SceneManager
    mgr.handleEvent("mouseDragged");
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( intro );
            break;
        case '2':
            mgr.showScene( scene2 );
            break;
        case '3':
            mgr.showScene( scene3 );
            break;
         case '4':
            mgr.showScene( theend );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
