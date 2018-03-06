var speed = 60;
var diameter;
var x;
var y;
var R;
var G;
var B;
var A;
var S;
function setup() {
  createCanvas(1600,1400);
    frameRate(10);
    x = width / 2;
    y = height / 2;
}

function draw() {
   background(255);
  R = random(0, 255);
    G = random(0, mouseX/2.5);
     B = random(0, mouseY/1.8);
  A = random(100);
  fill(R, G, B, A);

  R = random(0,255);
  G = random(0, mouseY/1.8);
  B = random(0, mouseX/2.5);
  A = random(100);
  stroke(R, G, B, A);

  S = random(height/6);
  strokeWeight(S);

  diameter = random(height/3);

  x += random(-speed, speed);
  y += random(-speed, speed);

  if (x>width) { 
    x = 0;
  } else if (x < 0) { 
    x = width;
  }
  if (y>height) { 
    y = 0;
  } else if (y < 0) { 
    y = height;
  }
  ellipse(x, y, diameter, diameter);
   
}
