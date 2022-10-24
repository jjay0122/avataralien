class spheres{
  constructor(_xpos, _ypos, _rot){
    this.xpos = _xpos;
    this.ypos = _ypos;
    this.rot = _rot;
  }
    display(){
        fill(random(40), random(100))
        circle(100, 100, 300)
        circle(150, 500, 300)
        circle(850, 150, 300)
        circle(900, 600, 300)
        circle(1000, 1000, 300)
        circle(0, 1000, 300)
        circle(550, 550, 300)
    }
}