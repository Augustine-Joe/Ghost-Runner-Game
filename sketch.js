var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(300,300);
  ghost.addImage(ghostImg)
  ghost.scale = 0.5;
  doorsGroup = createGroup();
  climbersGroup = createGroup();
  invisibleBlockGroup = createGroup();
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }

  if(keyDown("space")) 
  {
    ghost.velocityY = -12;
  }

  if(keyDown("left_arrow")) 
  {
    ghost.x = ghost.x-3;
  }

  if(keyDown("right_arrow")) 
  {
    ghost.x = ghost.x+3;
  }
  if (climbersGroup.isTouching(ghost)) {
    ghost.velocityY=0
  }

  if (invisibleBlockGroup.isTouching(ghost)) {
    ghost.destroy()
  }
    ghost.velocityY = ghost.velocityY + 0.8
     spawnDoors()
     drawSprites()
}
function spawnDoors() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var door = createSprite(200,50);
    door.x = Math.round(random(80,400));
    door.addImage(doorImg);
    //cloud.scale = 0.5;
    door.velocityY = 1;
    door.lifetime = 800;

    var invisibleBlock = createSprite(300,110)
    invisibleBlock.x = door.x
    //invisibleBlock.width = climber.width;
    invisibleBlock.height = 2
    invisibleBlock.velocityY = 1;
    invisibleBlock.lifetime = 800; 


    var climber = createSprite(200,100);
    climber.x = door.x
    climber.addImage(climberImg)
    climber.velocityY = 1;
    climber.lifetime = 800; 
     
    
     
    ghost.depth = door.depth;
    ghost.depth  = ghost.depth  + 1;
    
    //add each cloud to the group
    doorsGroup.add(door);
    climbersGroup.add(climber)
    invisibleBlockGroup.add(invisibleBlock)
  } 
}