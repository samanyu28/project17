var monkey , monkey_running, ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup, bananaGroup;
var survivalTime, score;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png")
}

function setup() {
  createCanvas(400,400);

  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  //creates ground sprite
  ground = createSprite(0,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width /2;
  
  obstacleGroup = new Group();
  bananaGroup = new Group(); 
  
  score = 0;
}

function draw() {
  background("white");
  
  //calls the food function for bananas and obstacles
  food();
  obstacles();
  
  monkey.collide(ground);
  
  //resets ground
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  //if space key is pressed, monkey will jump
  if(keyDown("space")) {
    monkey.velocityY = -15;
    } 
  
  monkey.velocityY = monkey.velocityY + 0.8;
    
  //displays score
  survivalTime = Math.ceil(frameCount/frameRate())
  stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time: "+ survivalTime, 100,50);
  
  drawSprites();
}

function food(){
  if(frameCount % 80 === 0){
    var banana = createSprite(100,100,10,40);
    banana.y = Math.round(random(80, 120));
    banana.addImage(bananaImage);
    banana.velocityX = -5;
    banana.lifetime = 200;
    banana.scale = 0.1;
    bananaGroup.add(banana);
  }
}

function obstacles(){
  if (frameCount % 100 === 0){
    var obstacle = createSprite(150,330,10,40);
    obstacle.velocityX = -5;
    obstacle.lifetime = 200;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacleGroup.add(obstacle);
  }
}
