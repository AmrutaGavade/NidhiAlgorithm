var movingRect, fixedRect;



function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(200,100,50,100);
  fixedRect=createSprite(600,200,50,100);

  movingRect.shapeColor="red";
  
  fixedRect.shapeColor="red";

  movingRect.debug=true;
  fixedRect.debug=true;
  
}

function draw() {
  background(0);  
  movingRect.y=mouseY;
  movingRect.x=mouseX;
if(fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2){
  movingRect.shapeColor="green";
  
  fixedRect.shapeColor="green";
}
else{
  movingRect.shapeColor="red";
  
  fixedRect.shapeColor="red";

}

  rectMode (CENTER);
  rect (200,200,50,50);
  drawSprites();
}