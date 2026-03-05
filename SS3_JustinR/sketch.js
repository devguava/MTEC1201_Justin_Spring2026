let tarxposmin = 25;
let tarxposmax = 1255;
let taryposmin = 25;
let taryposmax = 695;

function setup() 
{
  createCanvas(1280,720);
	background(72,195,231);
	strokeWeight(0.5);
	ellipseMode(CENTER);
	for(let i=0;i<random(3,12);i++)
	{
	  ellipse(random(tarxposmin,tarxposmax),random(taryposmin,taryposmax),50+(i*1),50+(i*1));
  }
}

function draw() 
{

}
