class Mango {
    constructor(x,y){

      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.circle(x, y, 50,  options);
    this.width = 50;
    this.height = 50;
    World.add(world, this.body);
  
      
    }
  
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("orange")
        ellipse( 0, 0, this.width, this.height);
        pop();
      }
}