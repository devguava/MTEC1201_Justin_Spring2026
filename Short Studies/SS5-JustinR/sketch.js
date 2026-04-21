/*
Title: Fire Chain
Author: Justin Roldan
Description: A sketch that repicates the movements of a fire chain. Similary to the one shown in Mario titles.
reference: 
Ball move down for loopby cs4all [https://editor.p5js.org/cs4all/sketches/Hyv07I6nZ] (An example of moving ellipses using for loops)
for()loop Rectangles by annA [https://editor.p5js.org/annA/sketches/7JUx_st6p] (An example in creating a for loop for rectangles)
Sin reference [https://p5js.org/reference/p5/sin/] (Explanation to how the sin command work)
*/

let x;
let y;
let rectSize;
function setup() {
  createCanvas(800, 800);
}

function draw() {
  y = 50 * sin(frameCount * 0.10) + 400;
  rectSize = 100

  background(255);

  stroke(5);

  for(let x = 0; x < width; x += rectSize) {
    for(let y = 0; y < height; y += 40) {
    fill(200);
    rect(x, y, rectSize, 40);
    }
  }

  fill(205,127,50);
  square(373,373,55);
  fill(128,0,32);
  ellipse(382,382,10);
  ellipse(382,418,10);
  ellipse(418,382,10);
  ellipse(418,418,10);

  for (let xMover = 50 * cos(frameCount * 0.10) + 400; xMover <= width; xMover += 20){
    fill(255, 191, 0);
    ellipse(xMover,y,20);
  }
}
