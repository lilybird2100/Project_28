class Stones {
    constructor(x,y,raidus){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
        }   
        this.body = Bodies.circle(x,y,raidus, options);
        this.raidus = raidus; 
        World.add(world, this.body); 
        this.mangoo = loadImage("Images/stone.png");  
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.mangoo, pos.x, pos.y, 75, 60);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        pop();
    }

}