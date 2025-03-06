

//array - list of grouped values
let arr = [23, 3.141592, true, "hello" ];

// [ , , , , ];

  //index is 0, 1, 2, 3, 4, 5, 6... (can see in console)
  //refers to order of values in array

let ages = [21, 24, 35, 12, 85, 56, 35, 28];

let names = ["stella", "ella", "bella", "fella", "hella", "tellaphone", "smella", "yella"];

let handles = ["shrimplord455", "dictator_seal101", "presidentmermaid23", "smartfella", "ash1tt0n", "ring_ring", "fartsmella", "l0ud4ss"]

let mood = ["devious", "wise", "strong", "smart", "bored", "sassy", "gassy", "noisy"]

function setup() {
  createCanvas(500,500);
  background(20);
  fill(255);

  textSize(20);
  
  for (let i = 0; i < ages.length; i++) {
    console.log(names[i] + " is " + mood[i] + " " + ages[i] + ". @" + handles[i]);

    text(names[i] + " is " + mood[ int(random (ages.length))] + " " + ages[ int(random(ages.length))] + ". @" + handles[i], 100, 50 * i + 50)
  }


  console.log()


  let item = ages[0];

  console.log(item);
  console.log(ages);

  ages[0] = 25;

  console.log(ages[0]);

  console.log(ages);

}

// function draw() {
//  ellipse(width/2, height/2, 50, 50);
// }
