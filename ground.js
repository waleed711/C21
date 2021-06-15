class Ground{
    constructor(x,y,width,height){
       var options = {
            isStatic:true
        } 
            
        this.rectangle = Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(world,this.rectangle);
            
    }
    display(){
    rect(this.rectangle.position.x,this.rectangle.position.y,this.width,this.height)
    }
}