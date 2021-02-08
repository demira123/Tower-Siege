class polygon extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("polygon.png");
      
      
    }
  polygon=Bodies.circle(50,200,20)
    display() {
      
      super.display();
      slingshot.display();
    }
    
}

function mouseDragged(){
        Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
    }
    



function mouseReleased(){
    slingshot.fly();
   
}

