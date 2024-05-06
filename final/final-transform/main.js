let bg;

const noiseScale = 0.01;

let y = 0;
let dir = 1;

function preload() {
    bg = loadImage("swirls.png")
    }

function setup() {
    createCanvas(600,600);
    }

function draw() {
    image(bg, 0, 0, width, height);
    strokeWeight(2);
    for(let x = 0; x < width; x ++) {
        const c = get(x, y);
        stroke(c);
        line(x, y, x, height);
     }
    y += dir; 
    if(y <= 0 || y > height) {
        dir *= -1;
    }
}

function createBG() {
    for(let i = 0; i < bg.width; i ++) {
        for(let j = 0; j < bg.height; j++) {

            const n = noise(i * noiseScale, j * noiseScale);

            const band = int(n * numBands);
            const color = band % colors.length;

            bg.stroke(colors[color]);
            bg.point(i, j);
             }
     }
}