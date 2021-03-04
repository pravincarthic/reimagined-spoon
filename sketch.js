const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Composites = Matter.Composites;
const Body = Matter.Body;
const Contact = Matter.Contact;
const Constraint = Matter.Constraint;
var engine, world;

function setup(){
    var canvas = createCanvas(displayWidth, displayHeight);
    engine = Engine.create();
    world = engine.world;
    var Duck = {
        restitution: 0.5,
        friction: 0.25,
        density: 87,
        frictionAir: 0.9
    };

    var plane_evil = {
        frictionAir: 0,
        density: 34,
        inverseMass: 923,
    };
    // console.error("evil crash, roger, evil carsh alert",plane_evil);
    // console.error("Save duck!",Duck);
}
function draw(){
    




}