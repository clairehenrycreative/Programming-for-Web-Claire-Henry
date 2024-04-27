function setup() {
    createCanvas(400, 400, WEBGL)
    angleMode(DEGREES)
}

function draw() {
    background(1)

    rotateX(200)

    noFill()
    stroke(255)

    for (var i = 0; i <55; i++) {

        var r = map(sin(frameCount/ 2), 5, 200, 200, 200)
        var g = map(i, 0, 50, 100, 200)
        var b = map(cos(frameCount), 5, 200, 200, 200)

        stroke(r, g, b)

        rotate(frameCount / 180)
       
        beginShape()
        for (var j = 0; j<100; j += 20) {
            var go = i * 2
            var a = go * cos(j)
            var b = go * sin(j)
            var c = sin(frameCount * 3 + i * 8) * 65

            vertex(a, b, c)
        }
        endShape(CLOSE)
    }
}