class Box {

    constructor(x,y,width,height) {

        var options={
            restitution : 0.3,
            friction: 1.0,
            density: 1.2
        }

        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        World.add(world, this.body);        
        this.image = loadImage("brick.png");
        this.visibility=255;
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
if(this.body.speed<10){
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill("white");
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        //rect(0,0,this.width,this.height);
        pop();
}
else{

    World.remove(world,this.body);
    push();
    this.visibility=this.visibility-5;
    tint(255,this.visibility);
    image(this.image,this.body.position.x,this.body.position.y,this.width, this.height);
    pop();

}

    }

}