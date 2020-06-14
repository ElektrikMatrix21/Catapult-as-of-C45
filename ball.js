class Ball{
    constructor(x,y,radius){
        var options = {
            restitution : 0.2,
            friction : 0.1
        }
        this.radius = radius
        this.body = Bodies.circle(x,y,15,options);
        World.add(world,this.body)
    }
  
    display() {
        var angle = this.body.angle
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(x,y,this.radius);
        pop();
    }
  }
  