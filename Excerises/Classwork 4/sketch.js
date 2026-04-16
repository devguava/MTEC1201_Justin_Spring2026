//Global Variables
let r = 0;
let g = 250;
let b = 0;
//Ellipse Variables
let x = 0;
let y = 0;
let xMove = 1;
let yMove = 1;

function setup() 
{
  createCanvas(700, 700);

  x = width/2;
  y = height/2;
}

function draw() 
{
  background(75);
  fill(r, g, b);

  x += xMove; //same as: x = x + xMove
  y += yMove; //same as: x = 
}
