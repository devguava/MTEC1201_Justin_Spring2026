/*
Title: Fire Chain
Author: Justin Roldan
reference: 
Ball move down for loopby cs4all [https://editor.p5js.org/cs4all/sketches/Hyv07I6nZ] (An example of moving ellipses using for loops)
for()loop Rectangles by annA [https://editor.p5js.org/annA/sketches/7JUx_st6p] (An example in creating a for loop for rectangles)
*/

let x;
let y;
let speed;
let rectSize;
function setup() {
  createCanvas(800, 800);
}

function draw() {
  x = 400;
  y = 400;
  speed = 10;
  rectSize = 100

  background(255);
  stroke(5);

  for(let x = 0; x < width; x += rectSize) {
    for(let y = 0; y < height; y += 40) {
    fill(200);
    rect(x, y, rectSize, 40);
    }
  }

  for (let xMover = 0; xMover <= width; xMover += 10){
      fill(255, 191, 0)
      ellipse(x + xMover,y,20)
      y += speed;
      x += speed;
  }
}
