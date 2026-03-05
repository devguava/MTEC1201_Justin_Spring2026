let x = random(25, 1255);
let y = random(25, 695);

function setup() 
{
	createCanvas(1280,720);
	background(72,195,231);
	strokeWeight(0.5);
	ellipseMode(CENTER);
	for(let i=0;i<random(3,12);i++)
	{
	  ellipse(x,y,50+(i*1),50+(i*1));
	}
}

function draw() 
{

}

function mouseClicked()
{
	if(dist(x,y,mouseX,mouseY))
	{

	}
}