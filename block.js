class Block{
    constructor(x,y){
        var options = {
            restitution : 0.2,
            friction : 0.1
        }
        this.body = Bodies.rectangle(x,y,100,200,options);
        this.width = 100;
        this.height = 200;
        World.add(world,this.body);
    }

    display(){
        if(this.body.speed>3){
            var angle = this.body.angle
            var pos = this.body.position;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
        }
        else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            image(this.image, this.body.position.x, this.body.position.y, 50, 50);
            pop();
        }
    }

    score(){
        if (this.Visiblity < 0 && this.Visiblity > -1005){
          score++;
        }
      }
}