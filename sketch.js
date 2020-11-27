var fixedRectangle
var movingRectangle

function setup() {
  createCanvas(800,400);

  movingRectangle=createSprite(400,200,20,40);
  movingRectangle.shapeColor='green'
  movingRectangle.debug=true

  fixedRectangle=createSprite(400,300,20,20);
  fixedRectangle.shapeColor='green'
  fixedRectangle.debug=true

}

function draw() {
  console.log(fixedRectangle.y, movingRectangle.y)
 
  background(255,255,255);
  
  movingRectangle.y=mouseY
  movingRectangle.x=mouseX
  if(fixedRectangle.x-movingRectangle.x<=movingRectangle.width/2+fixedRectangle.width/2&&
    movingRectangle.x-fixedRectangle.x<=movingRectangle.width/2+fixedRectangle.width/2&&
    fixedRectangle.y-movingRectangle.y<=movingRectangle.height/2+fixedRectangle.height/2&&
    movingRectangle.y-fixedRectangle.y<=movingRectangle.height/2+fixedRectangle.height/2){
    movingRectangle.shapeColor='red'
    fixedRectangle.shapeColor='red'
  } else{movingRectangle.shapeColor='green'
fixedRectangle.shapeColor='green'}
  drawSprites();
}