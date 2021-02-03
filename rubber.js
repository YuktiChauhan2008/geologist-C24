class Rubber {
    constructor(x,y,radius){
       var options = {
       density: 2,
       friction: 1.0,
       restitution: 0.5
       };
       this.x = x
       this.y = y
       this.radius = radius
       this.body = Bodies.circle(this.x, this.y,(this.radius-20)/2, options);
      World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        stroke("blue")
        fill("blue")
        rotate(angle);
        ellipseMode(CENTER)
        ellipse(0, 0, this.radius,this.radius);
        pop();
      };
}