
var inc = 0.1;
var scl = 10;
var cols, rows;

var zoff = 0;



var particles = [];

var flowfield;


p5.disableFriendlyErrors = true; 


function windowResized()
{
  var clientHeight = document.getElementById('bg').clientHeight;
  var clientWidth = document.getElementById('bg').clientWidth;
    resizeCanvas(clientWidth, clientHeight);
    clear();
}


function setup() {
  var clientHeight = document.getElementById('bg').clientHeight;
  var clientWidth = document.getElementById('bg').clientWidth;
  
  var cnv = createCanvas(clientWidth, clientHeight);
  cnv.id("perlinnoise");
  colorMode(HSB, 255);
  cols = floor(width / scl);
  rows = floor(height / scl);

  flowfield = new Array(cols * rows);

  for (var i = 0; i < 5000; i++) {
    particles[i] = new Particle();
  }
  background(255);
  cnv.parent("bg");
}

function draw() {

  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;
      stroke(0, 50);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // strokeWeight(1);
      // line(0, 0, scl, 0);
      // pop();
    }
    yoff += inc;

    zoff += 0.0003;
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }

}

/*
buzzing bee
var xoff1=0;
var xoff2=10000;

    var x = map(noise(xoff1),0,1,0,width);
    var y = map(noise(xoff2),0,1,0,height);

    xoff1+=0.01;
    xoff2+=0.02;
    ellipse(x,y,24,24);
*/