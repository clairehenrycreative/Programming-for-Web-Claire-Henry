function setup() {
    createCanvas(600, 600);
}

function createTile(originX, originY, primaryColor, secondaryColor, circleOutlineColor, dotColor) {
    translate(originX, originY);
    fill(primaryColor);
    rect(0, 0, 200, 200);
    stroke(secondaryColor);
    strokeWeight(15);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    noStroke();
    fill(dotColor);
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);
    noFill();
    stroke(primaryColor);
    strokeWeight('7');
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);
    noFill();
    stroke(dotColor);
    strokeWeight('10');
    circle(100,100,100);
    noFill();
    stroke(circleOutlineColor);
    strokeWeight('7');
    circle (100,100,100);
    noFill();
    stroke(circleOutlineColor);
    strokeWeight('4');
    circle(100, 100, 100);
    circle(100, 100, 100);
    noFill();
    stroke(circleOutlineColor);
    strokeWeight('1');
    circle(100, 100, 100);
}

function draw() {
    createTile(0, 0, 'purple', 'white', 'green', 'blue');
    createTile(0, 200, 'blue', 'green', 'white', 'purple');
    createTile(0, 200, 'purple', 'white', 'green', 'blue');
    createTile(200, -400, 'blue', 'green', 'white', 'purple');
    createTile(0, 200, 'purple', 'white', 'green', 'blue');
    createTile(0, 200, 'blue', 'green', 'white', 'purple');
    createTile(200, -400, 'purple', 'white', 'green', 'blue');
    createTile(0, 200, 'blue', 'green', 'white', 'purple');
    createTile(0, 200, 'purple', 'white', 'green', 'blue');
}