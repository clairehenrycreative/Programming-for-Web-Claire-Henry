function setup() {
	createCanvas(400, 400);
}
function draw() {
	if (mouseispressed) {
		fill(0);
	} else {
		fill(255);
	}
	ellipse(50, 50, 80, 80);
}