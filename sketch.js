var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  mrect1 = createSprite(200, 200, 50, 80);
  mrect1.shapeColor = "blue";
  mrect1.debug = true;
  mrect1.velocityY=5;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rec1 = createSprite(800, 400, 50, 80);
  rec1.shapeColor = "green";
  rec1.debug = true;
  mrect2 = createSprite(200, 700, 50, 80);
  mrect2.shapeColor = "blue";
  mrect2.debug = true;
  mrect2.velocityY=-5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect, rec1)){
  movingRect.shapeColor = "red";
  rec1.shapeColor = "red";
 } 
 else{
  movingRect.shapeColor = "green";
  rec1.shapeColor = "green";
 }

 bounce(mrect1, mrect2);
  drawSprites();
}