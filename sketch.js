var angle = 0;

var isLoaded = false;

function preload() {

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  isLoaded = true;
}

function draw() {
  
  if (isLoaded === true) {
    drawVideo();
  }else{
    drawLoading();
  }
}



function drawVideo() {
 rect(30,30,500,500);
}

function drawLoading() {
  background(252, 209, 255);
  translate(windowWidth / 2, windowHeight / 2);
  rotate(angle);
  strokeWeight(10);
  stroke(255, 0, 0);
  line(0, 0, 100, 100);
  angle += 0.1;
}