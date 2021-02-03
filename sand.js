class Sand {
  constructor(x,y,radius){
    var options = {
    density: 2,
    friction: 1.0,
    restitution: 0.5
    };
    this.body = Bodies.circle(x, y,radius/2, options);
    this.radius = radius
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