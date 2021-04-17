class Mangoes {
    constructor(x,y,raidus){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }   
        this.body = Bodies.circle(x,y,raidus, options);
        this.raidus = raidus; 
        World.add(world, this.body); 
        this.mangoo = loadImage("Images/mango.png");  
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.mangoo, pos.x, pos.y, 40, 35);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        pop();
    }

}