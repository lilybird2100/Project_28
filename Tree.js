class Trees{
    constructor(x, y){
        var options = {

        }
        this.tree = loadImage("Images/tree.png");
    }

    display(){
        image(this.tree, this.x, this.y, 200, 100); 
    }
}