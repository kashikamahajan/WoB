
var Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];

var ground,bg;
var gSlider;


function preload()
{
bg=loadImage("bg.jpg");
}

function setup() {
createCanvas(400, 400);
engine = Engine.create();
world = engine.world;
Engine.run(engine);


gSlider = createSlider(0, 100, 50);
gSlider.position(40, 365);
gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);

var options = {
    isStatic: true
}
ground = Bodies.rectangle(200, height - 50, width, 10, options);
World.add(world, ground);


}

function mousePressed() {
if (mouseY < 350) {
    boxes.push(new Box(mouseX, mouseY,random(20,50), random(20,50)));
}
}

function draw() {
background(bg);
var fVal = gSlider.value();

for (var i = 0; i < boxes.length; i++) {
    boxes[i].display();
}
stroke("black");
fill("yellow");
strokeWeight(4);
rectMode(CENTER);
rect(ground.position.x, ground.position.y, width, 10);
fill("yellow");
textSize(15);
text("Gravity " + fVal, 260, 381);
textSize(50);
textAlign(CENTER);
stroke("Black");
strokeWeight(15);
fill("Yellow");
text("Post Office",200,100);


}

