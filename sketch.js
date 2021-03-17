var car,wall,speed,weight 
function setup() {
  createCanvas(1600,400);
  thickness=random(20,80)
 bullet= createSprite(40, 200, 50, 5);
 wall=createSprite(1200,200,thickness,200)
 speed=random(220,330)
 weight=random(30,50)
 bullet.velocityX=speed

}

function draw() {
  background(255,255,255);
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)  {
    bullet.velocityX=0
    var d =0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(d>10){
      bullet.shapeColor="red"
    }
   
    if(d<10){
      bullet.shapeColor="green"
    }
  }
  drawSprites();
}