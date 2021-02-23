var fixedRect, movingRect;
var fixedRect1,fixedRect2;

function setup() {
  createCanvas(1200,800);
  fixedRect1=createSprite(200,400,50,80);
  fixedRect1.shapeColor = "green";
  fixedRect1.debug = true;
  fixedRect2=createSprite(800,400,50,80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    fixedRect1.shapeColor = "green";
    fixedRect2.shapeColor = "green";

  if(isTouch(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  if(isTouch(movingRect,fixedRect1)){
    movingRect.shapeColor = "red";
    fixedRect1.shapeColor = "red";
  }
  if(isTouch(movingRect,fixedRect2)){
    movingRect.shapeColor = "red";
    fixedRect2.shapeColor = "red";
  }
 
  drawSprites();
}




