'use strict';

var tileCountX = 18;
var tileCountY = 7;

var colorsLeft = [];
var colorsRight = [];
var colors = [];

var tileWidth;
var tileHeight;

var img;

function preload () {
    img = loadImage('milky-way.jpg');
}


function setup () {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    // img.resize(window.innerWidth, window.innerHeight);
    colorMode(HSB);
    noStroke();
    tileWidth = width / tileCountX;
    tileHeight = height / tileCountY;
    shakeColors();
    // noLoop();
}

let i = 1;

function draw () {
    var interCol; 
    colors = [];
    background(43, 27, 85);

    rotateY(radians(305));
    rotateX(radians(45));
   // rotateX(radians(frameCount * 0.1));


    translate(-width / 3, -height / 3.06);
    for (var gridY = 0; gridY < tileCountY; gridY++) {
        var col1 = colorsLeft[gridY];
        var col2 = colorsRight[gridY];

        for (var gridX = 0; gridX < tileCountX; gridX++) {
            var amount = map(gridX, 0, tileCountX - 1, 0, 1);
            colorMode(RGB);
            interCol = lerpColor(col1, col2, amount);
            colorMode(HSB);

            fill(interCol);

            var posX = tileWidth * gridX;
            var posY = tileHeight * gridY;
            var posZ = 300 + 20 * sin(gridX + i / 14);
            // var posZ = 30 + (30 * gridX);
            push();
            translate(posX, posY)
            box(tileWidth, tileHeight, posZ);
            pop();
            colors.push(interCol);
        }
    }
    i++;
}


function shakeColors() {
    for (var i = 0; i < tileCountY; i++) {
      colorsLeft[i] = color(random(0, 60), random(0, 100), 100);
      colorsRight[i] = color(random(160, 190), 100, random(0, 100));
    }
  }
