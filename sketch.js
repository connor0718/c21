var movingrect,fixedrect;


function setup()
{
  createCanvas(800,1200)
  movingrect=createSprite(200,100,50,50);
  movingrect.shapeColor="green";
  movingrect.debug=true;
  movingrect.velocityY=5

  fixedrect=createSprite(200,300,80,50);
  fixedrect.shapeColor="green";
  fixedrect.debug=true;
  fixedrect.velocityY=-5
}

function draw()
{
  background("black");

 bounceoff(movingrect,fixedrect)
  drawSprites();
}
function bounceoff(ob1,ob2){
if (ob1.x-ob2.x<ob1.width/2+ob2.width/2&&
  ob2.x-ob1.x<ob1.width/2+ob2.width/2){
    ob1.velocityX=ob1.velocityX*(-1)
    ob2.velocityX=ob2.velocityX*(-1)

  }
  if (ob1.y-ob2.y<ob1.height/2+ob2.height/2&&
    ob2.y-ob1.y<ob1.height/2+ob2.height/2){
      ob1.velocityY=ob1.velocityY*(-1)
      ob2.velocityY=ob2.velocityY*(-1)
      
    }
}