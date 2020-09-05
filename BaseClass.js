class BaseClass{
    constructor(x, y, width, height) {
        var options = {
         
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        //var angle = this.body.angle;
        
        fill("red")
        rect(this.body.position.x,this.body.position.y, this.width,this.height);

        
        
      }
}