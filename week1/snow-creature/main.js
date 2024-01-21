let grid = undefined;
let stroke1 = prompt("enter as basic color name in lower case", "blue");
let stroke2 = prompt("enter another basic color in lower case", "green");
let stroke3 = prompt("enter another basic color in lower case", "purple");
function setup() {
	createCanvas(1000, 800);
	background ("#ccc");
	grid = loadImage("images/100px_grid.png");
}

function draw() {
	background(grid);
	//snowman legs
	fill("#f1f1f1");
	strokeWeight(20);
	stroke(stroke1);
	// left leg
	ellipse(400, 650, 200);
	// right leg
	ellipse(600, 650, 200);
	// body
	ellipse(500, 450, 350, 350);
	// head
	ellipse(500, 200, 200);
	//left snow creature 
	ellipse(150, 650, 200);
	ellipse(150, 525, 150);
	ellipse(150, 415, 125);
	//left snow creature eyes
	stroke(0);
	strokeWeight(30);
	point(120, 410);
	point(180, 410);
	// hat brim 
	stroke(stroke2);
	strokeWeight(40); 
	line(400, 120, 600, 120);
	// hat body 
	quad(400, 50, 600, 50, 550, 120, 450, 120);
	// eyes
	stroke(0);
	strokeWeight(40);
	point(455, 200);
	point(520, 200);
	// mouth
	noFill();
	strokeWeight(10);
	arc (490, 240, 45, 50, 0, PI);
	//buttons 
	stroke(stroke3);
	strokeWeight(30);
	point(505, 350);
	point(505, 450);
	point(505, 550);
}

