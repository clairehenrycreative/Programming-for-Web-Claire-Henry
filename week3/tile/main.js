function setup() {
    createCanvas(200, 200);
}

function createTile() {
    translate (0, 0);
    fill('pink');
    rect(0, 0, 200, 200);
    stroke('orange');
    strokeWeight(15);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    noStroke();
    fill('white');
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);
    noFill();
    stroke('black');
    strokeWeight('7');
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);
    noFill();
    stroke('black');
    strokeWeight('10');
    circle (100,100,100);
    noFill();
    stroke('white');
    strokeWeight('7');
    circle (100,100,100);
    noFill();
    stroke('black');
    strokeWeight('4');
    circle (100,100,100);
    circle (100,100,100);
    noFill();
    stroke('white');
    strokeWeight('1');
    circle (100,100,100);
}

function draw() {
    createTile();
}