/*
Short Study by Justin Roldan
*/
function setup()
{
  createCanvas(400, 400);
  background(255, 120, 50);

  strokeWeight(8);
  stroke(211,0,0);
  line(0, 0, 400, 400);

  stroke(211,0,0);
  strokeWeight(1);
  fill(112, 210, 128)
  triangle(100, 123, 10, 123, 50, 200)

  stroke(10,230,239);
  fill(19, 80, 160)
  rect(102, 300, 28, 19)

  stroke(102,129,0);
  fill(100, 210, 28)
  quad(281, 234, 29, 291, 54, 28, 188, 201)

  stroke('red');
  fill('yellow')
  ellipse(500, 32, 400, 300)
}
