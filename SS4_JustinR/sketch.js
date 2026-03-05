/*
Name: Justin Roldan
Title: Escape Shrek's Swamp
Description: In this sketch, you have an objective. Escape from Shrek's swamp. It's a survival puzzle game where the swamp is laid out as a maze. 
Control: W to move upward, S to move downward, A to move left, D to move down
*/

// let img;
let speedX = 5;
let speedY = 5;
let playerX = 500;
let playerY = 500;
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
  beginShape();
  vertex(10,10);
  endShape(CLOSE);
  fill(192,75,101);
  ellipseMode(CENTER);

  //player
  ellipse(playerX,playerY,50);

  //player movement
  if (keyIsPressed === true) {
    if (keyCode === UP_ARROW) {
      playerY -= speedY;
    } else if (keyCode === DOWN_ARROW) {
      playerY += speedY;
    } else if (keyCode === LEFT_ARROW) {
      playerX -= speedX;
    } else if (keyCode === RIGHT_ARROW) {
      playerX += speedX;
    }
  }
}