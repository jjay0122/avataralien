let count = 0; 
let value = 0;

let SingleTry;

function setup() {
  background(5, 12, 35);
  
  let cnv = createCanvas(1000, 1000);
  
  textAlign(CENTER);
  
  SingleTry = new spheres();
  
}

function draw() {
  
  SingleTry.display();
  
  bigCircle(500, 300)
  head()
  righteye()
  lefteye()
  mouth()
  body()
  hands()
  feet()
  bodytriangle()
  scan()
  dots()


  console.log('my mouseX is: ' + mouseX);
  console.log('my mouseY is: ' + mouseY);

}

function bigCircle(xpos, ypos){
  
  stroke('black');
  strokeWeight(12);
  fill('grey');
  circle(xpos, ypos, 520)

  
}

function head(){
  
  noStroke()
  fill(190, 150, 200)
  ellipse(500, 310, 250, 450)
  
}

function righteye(){
  
  fill(10, 10, 10)
  circle(600, 320, 100)
  
  fill('white')
  circle(620, 304, 40)
  circle(575, 345, 20)
  
}

function lefteye(){
  
  noStroke()
  fill(10, 10, 10)
  circle(400, 300, 140)
  
  fill('white')
  circle(425, 272, 60)
  circle(370, 330, 40)
  circle(420, 340, 20)
  
}

function mouth(){
  
  stroke('black')
  fill('white')
  circle(500, 450, 50);
  
}

function body(){
  
  stroke('black')
  strokeWeight(8)
  fill(200, 180, 600);
  ellipse(500, 730, 240, 320);
  
}

function hands(){
  
  fill(200, 180, 600);
  circle(320, 730, 80);
  circle(680, 730, 80);
}

function feet(){  
  
  fill(190, 150, 200);
  circle(400, 920, 100);
  circle(600, 920, 100);
  
}


function bodytriangle(){
    
  stroke('black')
  strokeWeight(5)
  fill(random(400), random(100), random(400))
  triangle(500, 640, 430, 740, 570, 740);
  
}

function scan(){
  line(0, mouseY, 1000, mouseY);
  describe(`vertical black line moves up and down with mouse y-position`);
  
}
function dots(){
  translate(p5.Vector.fromAngle(millis() / 100, 40));
  circle(220, 860, 50)
  circle(780, 860, 50)
}


