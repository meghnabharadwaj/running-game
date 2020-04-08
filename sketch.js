// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

var engine,world;
var tanker;
var angle=0;
var canonBall;
var shoot;
var ground;
var ball1, ball2,ball3,ball4,ball5;
var launcherX, launcherY;
var flag="start";

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
createCanvas(1200,400);
engine=Engine.create();
world= engine.world;
ground=new Ground(width/2,390,width,30);
tanker= new Tanker(75,height-100,60,30);

ball1 = new Ball(400,230,20);
ball2= new Ball(600,180,25);
ball3 = new Ball(800,130,30);
ball4 = new Ball(1000,80,35);
ball5 = new Ball(1100,30,40);

canonBall = new CanonBall(20,20);
shoot = new ShootBall(canonBall.body,{x:70,y:-220});
}

function draw() {
background(225,10,0)
// Remember to update the Matter Engine and set the background.
Engine.update(engine);
ground.display();
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
canonBall.display();
tanker.display();
shoot.display();
if(keyIsDown(UP_ARROW)){
    shoot.attach(canonBall.body);

}

}


function keyReleased() {
    // Call the shoot method for the cannon.
    if(keyCode ===DOWN_ARROW){
        flag ="launch"

        shoot.shoot();
    }
}