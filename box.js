class Box extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("download.jpg");
    Matter.Body.setAngle(this.body, angle);
  }
}