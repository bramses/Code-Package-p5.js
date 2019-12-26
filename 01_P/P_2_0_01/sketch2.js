// P_2_0_01
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * drawing a filled circle with lines.
 *
 * MOUSE
 * position x          : length
 * position y          : thickness and number of lines
 *
 * KEYS
 * s                   : save png
 */
'use strict';

function setup() {
  createCanvas(550, 550);
  colorMode(HSB, 360, 100, 100);
  strokeCap(ROUND);
}

var step = 1;

function draw() {
  background(255);
  translate(width / 2, height / 2);

  var circleResolution = int(map(mouseY, 0, height, 3, 8));
  var hue = int(map(mouseX, 0, width, 0, 360));

  noFill();
  stroke(color(hue, 75, step % 100));
 
  var radius = mouseX - width / 2;

  

  // TAU == TWO PI
  var angle = TAU / circleResolution;

  strokeWeight(mouseY / 20);
  // strokeWeight(1);

  beginShape();
  for (var i = 0; i <= circleResolution; i++) {
    var x = cos(angle * i) * radius;
    var y = sin(angle * i) * radius;
    //line(0, 0, x, y);
    vertex(x, y);
  }
  endShape(CLOSE);
  step += 3;
  if (step > width / 2) {
      step = 1;
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
