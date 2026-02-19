/*
Short Study by Justin Roldan
Sketch Title: SPY!!
With this sketch I've made. I want to explore interactive arts, like games or reactive art works.
*/
function setup()
{
  createCanvas(1280, 720);
  background(140, 91, 106);

  //Red
  fill(184,56,59);
  beginShape();

  vertex(500, 720);
  vertex(420, 640);
  vertex(390, 530);
  vertex(340, 420);
  vertex(340, 300);
  vertex(370, 280);
  vertex(370, 240);
  vertex(460, 100);
  vertex(620, 0);
  vertex(640, 0);
  vertex(640, 720);

  endShape(CLOSE);

  //Blue
  fill(88,133,162);
  beginShape();

  vertex(500 + 300, 720);
  vertex(420 + 450, 640);
  vertex(390 + 500, 530);
  vertex(340 + 580, 420);
  vertex(340 + 580, 300);
  vertex(370 + 510, 280);
  vertex(370 + 510, 240);
  vertex(460 + 375, 100);
  vertex(600 + 60, 0);
  vertex(640, 0);
  vertex(640, 720);

  endShape(CLOSE);

  //eyehole
  fill(247, 171, 145);
  beginShape();

  vertex(500, 370);
  vertex(390, 310);
  vertex(420, 260);
  vertex(820, 260);
  vertex(860, 310);
  vertex(750, 370);
  vertex(670, 330);
  vertex(610, 330);

  endShape(CLOSE);

  //mouthhole
  fill(247, 171, 145);
  beginShape();
  
  vertex(500, 520);
  vertex(465, 560);
  vertex(465, 600);
  vertex(500, 640);
  vertex(800, 640);
  vertex(825, 600);
  vertex(825, 560);
  vertex(800, 520);
  vertex(675, 560);
  vertex(600, 560);

  endShape(CLOSE);

  //Red Logo
  fill(184,56,59);
  rect(150, 200, 175, 350);
  strokeWeight(15)
  stroke(0)
  textSize(100)
  text('R', 200, 300);
  text('E', 200, 400);
  text('D', 200, 500);

  //Red Logo
  fill(88,133,162);
  strokeWeight(1)
  rect(950, 200, 175, 350);
  stroke(0)
  strokeWeight(15)
  textSize(100)
  text('B', 1000, 300);
  text('L', 1000, 400);
  text('U', 1000, 500);
}
