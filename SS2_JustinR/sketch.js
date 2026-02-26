/*
Short Study by Justin Roldan
Sketch Title: SPY!! (Interactive)
With this sketch I've took my last assignment and made it so if you hovered over the signs, the background and silhouette to match with the corresponding color of the sign and push away the other signs.
*/

//Neutral background
NR = 140
NG = 91
NB = 106

//Blu background
BR = 88
BG = 133
BB = 162

//Red background
RR = 184
RG = 56
RB = 59

function setup()
{
  createCanvas(1280, 720);
}

function draw()
{
  background(NR, NG, NB);
  if (mouseX <= 175 & 950 && mouseY <= 200 & 350) {
    NR = NR - 1;
    NG = NG + 1;
    NB = NB + 1;
    if (NR == RR && NG == RG && NB == RB){
      NR = NR - 0;
      NG = NG + 0;
      NB = NB + 0;
    }
  background(140 - 52 , 91 + 42, 106 + 56);
  } else if(mouseX >= 175 & 950 && mouseY >= 200 & 350){
  background(NR, NG, NB);
  }

  //Red
  strokeWeight(0);
  fill(RR,RG,RB);
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
  fill(BR,BG,BB);
  beginShape();

  vertex(500 + 300, 720);
  vertex(420 + 450, 640);
  vertex(390 + 500, 530);
  vertex(340 + 585, 420);
  vertex(340 + 585, 300);
  vertex(370 + 515, 280);
  vertex(370 + 515, 240);
  vertex(460 + 370, 100);
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
  strokeWeight(1)
  rect(150, 200, 175, 350);
  strokeWeight(15)
  stroke(0)
  textSize(100)
  text('R', 200, 300);
  text('E', 200, 400);
  text('D', 200, 500);

  //Blu Logo
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