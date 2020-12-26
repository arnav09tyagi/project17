
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400);
  
  
  //creating monkey
   monkey=createSprite(80,315,20,20);
   monkey.addAnimation("moving", monkey_running);
  // monkey.addImage(bananaImage)
   monkey.scale=0.15
  
  ground = createSprite(400,350,900,100);
  

  FoodGroup = new Group();
  obstaclesGroup = new Group();

  score = 0;
 
  
}


function draw() {
  
  background("green");
  
    
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  
   
    if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);   
    spawnFood();
    spawnObstacles();
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
  }
if (obstaclesGroup.isTouching(monkey)){
  obstaclesGroup.setVelocityXEach(0)
} 
 
  drawSprites();
 
}



function spawnFood() {
  //write code here to spawn the Food
  if (frameCount % 80 === 0) {
    banana = createSprite(600,250,40,10);
    banana.y = random(0,200);    
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
    //add image of banana
     banana.addImage(bananaImage);
     banana.scale=0.1;
    
    //add each banana to the group
    FoodGroup.add(banana);
  }
}

function spawnObstacles() {
  if(frameCount % 125 === 0) {
    obstacle = createSprite(600,275,10,40);
    obstacle.velocityX = -6;
    
    //add image to the obstacle 
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.25;
    
    //lifetime to the obstacle     
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}
