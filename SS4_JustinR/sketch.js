/*
Name: Justin Roldan
Title: Escape Shrek's Swamp
Description: In this sketch, you have an objective. Escape from Shrek's swamp. It's a survival puzzle game where the swamp is laid out as a maze. 
Control: W to move upward, S to move downward, A to move left, D to move down
*/

/*
Reference:
"Move with Arrow Keys with p5.js"[https://youtu.be/SatRryVpAKE]
*/
// let img;
let speedX = 5;
let speedY = 5;
let playerX = 28;
let playerY = 635;
let playerD = 50;
// function preload()
// {
//   image = loadImage('/assets/')
// }

function setup()
{
  createCanvas(1280,720);
  fill(74,88,40);
}

function draw()
{
  background(155, 169, 92);
  fill(192,75,101);
  ellipseMode(CENTER);

  //player
  ellipse(playerX,playerY,playerD);

  //player Movement
  //Controller input gets confused when pressing the buttons simultaneously. Making the player continuously move the same direction that was made previously.
  if (keyIsPressed) {
    if (keyCode === UP_ARROW)
    {
      playerY -= speedY;
    } else if (keyCode === DOWN_ARROW)
    {
      playerY += speedY;
    }
    if (keyCode === LEFT_ARROW)
    {
      playerX -= speedX;
    } else if (keyCode === RIGHT_ARROW)
    {
      playerX += speedX;
    }
  }

  //Level Layout
  fill(45,54,24)
  
  beginShape();
  vertex(1160,0);
  vertex(0,0);
  vertex(0,600);
  vertex(50,600);
  vertex(50,50);
  vertex(1160,50);
  endShape(CLOSE);

  beginShape();
  vertex(1230,0);
  vertex(1280,0);
  vertex(1280,720);
  vertex(0,720);
  vertex(0,670);
  vertex(1230,670);
  endShape(CLOSE);

  beginShape();
  vertex(170,125);
  vertex(170,600);
  vertex(120,600);
  vertex(120,125);
  endShape(CLOSE);

  beginShape();
  vertex(200,125);
  vertex(200,600);
  vertex(150,600);
  vertex(150,125);
  endShape(CLOSE);
}