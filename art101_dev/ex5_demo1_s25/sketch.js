
// This contains the use of both the Sounds and Scenemanager libraries

let boss, sax, doom, elevator, fart, pluh, mimi;
let boom, chain, greed, gun, joyful, love, minecraft, peekaboo, rocket, arena;
let fire;
let fancy1, fancy, dtxt;

function preload() {
//sounds
    boss = loadSound("assets/sound_boss.mp3");
    sax = loadSound("assets/sound_carelesswhispers.mp3");
    doom = loadSound("assets/sound_doom.mp3");
    elevator = loadSound("assets/sound_elevator.mp3");
    fart = loadSound("assets/sound_fart.mp3");
    pluh = loadSound("assets/sound_pluh.mp3");
    mimi = loadSound("assets/sound_mimi.mp3");

//imgs
    boom = loadImage("assets/boomseal.jpeg");
    chain = loadImage("assets/chainseal.jpeg");
    greed = loadImage("assets/greedseal.jpeg");
    gun = loadImage("assets/gunseal.jpeg");
    joyful = loadImage("assets/joyfulseal.jpg");
    love = loadImage("assets/loveseal.jpg");
    minecraft = loadImage("assets/minecraftseal.jpeg");
    peekaboo = loadImage("assets/peekaboo.jpeg");
    rocket = loadImage("assets/rocketseal.jpeg");
    arena = loadImage("assets/arena.png");

//gifs
    fire = loadImage("assets/fire.gif");
    rose = loadImage("assets/roses.gif");
//fonts
    fancy1 = loadFont('assets/textcursive.otf');
    fancy = loadFont('assets/textfancy.ttf');
    dtxt = loadFont('assets/textdoom.ttf');

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
    mgr.addScene (scene4);
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
            mgr.showScene( scene4 );
            break;
         case '5':
            mgr.showScene( theend );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
