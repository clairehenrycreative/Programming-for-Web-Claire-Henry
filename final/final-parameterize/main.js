var noiseScale = 100;
var n = 500;

var particles = [];

  function setup() {
    createCanvas(500, 500);
    noiseDetail(1, 0);
    genNoiseImg();
    image(noiseImg, 0, 0);
    background(color(210, 156, 229));
  
  for(var i = 0; i < n; i++) {
      var particle = {pos: createVector(random(width),random(height))};
         particles.push(particle);
       }
    }

function curl(x, y) {
     var EPSILON = 0.001;
     var n1 = noise(x + EPSILON, y);
    var n2 = noise(x - EPSILON, y);
    var cx = (n1 - n2)/(2 * EPSILON)
    
    n1 = noise(x, y + EPSILON);
    n2 = noise(x, y - EPSILON);
  
  var cy = (n1 - n2)/(2 * EPSILON);
    
    return new createVector (cx, cy);
      }

function draw() { 
  tint(color(95, 189, 196));
  image(noiseImg, 0, 0);
  
  strokeWeight(4);
  stroke (color(95, 189, 196));
  
  for(var i = 0; i < particles.length; i++){
      var p = particles[i];
      p.pos.add(curl(p.pos.x/noiseScale, p.pos.y/noiseScale))
      point(p.pos.x, p.pos.y);
          }
      }

function genNoiseImg() {
  noiseImg = createGraphics(width, height);
  noiseImg.loadPixels();
      var widthd = width * pixelDensity();
      var heightd = height * pixelDensity();
  for(var j = 0; j < heightd; j++){
        for(var i = 0; i < widthd; i++){
        var x = i / pixelDensity();
        var y = j / pixelDensity();
      var bright = pow(noise(x / noiseScale, y / noiseScale) - 0.3, 1 / 2.0) * 400;
            noiseImg.pixels[(i + j * widthd) * 4] = bright;
            noiseImg.pixels[(i + j * widthd) * 4 + 1] = bright;
            noiseImg.pixels[(i + j * widthd) * 4 + 2] = bright;
            noiseImg.pixels[(i + j * widthd) * 4 + 3] = 255;
           }
       }
  noiseImg.updatePixels();
}