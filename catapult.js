class Catapult{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length: 20
        }
        this.catapult = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.catapult);
    }

    attach(body){
        this.catapult.bodyA = body;
    }

    fly(){
        this.catapult.bodyA = null;
    }

    display(){
        if(this.catapult.bodyA){
            var pointA = this.catapult.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(5);
            stroke("red");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
    }
}