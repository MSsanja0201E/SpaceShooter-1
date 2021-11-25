var asteroid, asteroidImg, earth, earthImg, flight, flightImg, spaceImg, bullet, bulletImg, bulletGroup, asteroidGroup;

function preload(){
  asteroidImg = loadImage("asteroid.png");
  earthImg = loadImage("earth.png");
  flightImg = loadImage("Flight.png");
  spaceImg = loadImage("space.jpg");
  bulletImg = loadImage("rocket.png");
}

function setup(){
  createCanvas(800, 800);
  earth = createSprite(400,800);
  earth.addImage(earthImg);

  flight = createSprite(400,590);
  flight.addImage(flightImg);
  flight.scale = 0.5;

  bulletGroup = createGroup();
  asteroidGroup = createGroup();

}

function draw(){
  background(spaceImg);

  if (frameCount % 80 === 0){
    drawasteroid();
  }

  if (keyDown("space")){
    shootBullet();
  }

  flight.x = mouseX;

  /*if(asteroidGroup.collide(bulletGroup)){
    handleasteroidCollision();
  }*/
  drawSprites();
} 

function drawasteroid(){
  asteroid = createSprite(random(400,10),30,30);
  asteroid.addImage(asteroidImg);
  asteroid.scale = 0.4;
  asteroid.velocityY = 5;
  asteroidGroup.add(asteroid);
}

function shootBullet(){
  bullet = createSprite(400, 590);
  bullet.x = flight.x-20;
  bullet.addImage(bulletImg);
  bullet.scale = 0.10;
  bullet.velocityY = -5;
  bulletGroup.add(bullet);
}

/*function handleasteroidCollision(asteroidGroup){
  bulletGroup.destroyEach();
  asteroidGroup.destroyEach();
}*/

