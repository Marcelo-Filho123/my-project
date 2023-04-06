var car1, car2, car1IMG, car2IMG;
var obstacle1, obstacle2, obstacle3;
var background, backgroundIMG;
var player1, player2, player3;
var opponentPlayer1IMG, opponentPlayer2IMG, opponentPlayer3IMG;
var distance=0;


function preload(){
car1IMG = loadAnimation("Car1.gif");
car2IMG = loadAnimation("Car2.gif");
opponentPlayer1IMG = loadImage("enemy1.png")
opponentPlayer2IMG = loadImage("enemy2.png")
opponentPlayer3IMG = loadImage("enemy3.png")
backgroundIMG = loadImage("Road.png");

}

function setup() {
  createCanvas(1200, 300);

  background=createSprite(100,150);
  background.addImage(backgroundIMG);
  background.velocityX = -5;

  car1 = createSprite(50,250);
  car1.addAnimation("car1", car1IMG);
  car1.scale = 0.3;

  car1.setCollider("rectangle",0,0,40,40,50);

  car2 = createSprite(50,50);
  car2.addAnimation("car2", car2IMG);
  car2.scale = 0.3;

  car2.setCollider("rectangle",0,0,40,40,50);

  opp1 = new Group();
  opp2 = new Group();
  opp3 = new Group();

  
}

function draw() {
drawSprites();
textSize(20);
fill(255);
text("Distance: "+ distance,900,30);

//Programando a distância
   Distance();

  //Movimentar os carros
    MoveCar1();
    MoveCar2();

  //Limites para os carros
  Border();

   //Movimento do plano de fundo
  if(background.x < 0 ){
    background.x = width/2;
  }

  var select_oppPlayer = Math.round(random(1,3));
  
  if (World.frameCount % 150 == 0) {
    if (select_oppPlayer == 1) {
      Enemy01();
    } else if (select_oppPlayer == 2) {
      Enemy02();
    } else {
      Enemy03();
    }
  }
    
}

function MoveCar1(){
  if(keyDown("RIGHT_ARROW")){
    car1.x += 10;
  }
  if(keyDown("UP_ARROW")){
    car1.y -= 3;
  }
 if(keyDown("DOWN_ARROW")){
    car1.y += 3;
  }
  if(keyDown("LEFT_ARROW")){
    car1.x -= 3;
  }
}

function MoveCar2(){
  
  if(keyDown("D")){
    car2.x += 10;
  }
  if(keyDown("W")){
    car2.y -= 3;
  }
 if(keyDown("S")){
    car2.y += 3;
  }
  if(keyDown("A")){
    car2.x -= 3;
  }
}

function Border(){
  
  //Limite carro 1
  if(car1.x > 1000){
    car1.x = 1000;
  }
  if(car1.x < 100){
    car1.x = 100;
  }
  console.log(car1.y);
  if(car1.y < 15){
    car1.y = 15;
  }
  if(car1.y > 250){
    car1.y = 250;
  }

//Limite carro 2

if(car2.x > 1000){
  car2.x = 1000;
}
if(car2.x < 100){
  car2.x = 100;
}
if(car2.y > 250){
  car2.y = 250;
}
if(car2.y < 15){
  car2.y = 15;
}
} 

function Distance(){
  
  distance = distance + Math.round(getFrameRate()/50);
  background.velocityX = -(6 + 2*distance/150);
}

function Enemy01(){
  player1 =createSprite(1100,Math.round(random(50, 250)));
  player1.scale =0.45;
  player1.velocityX = -(6 + 2*distance/150);
  player1.addImage("opponentPlayer1",opponentPlayer1IMG);
  player1.setLifetime=170;
  opp1.add(player1);
}

function Enemy02(){
  player2 =createSprite(1100,Math.round(random(50, 250)));
  player2.scale =0.45;
  player2.velocityX = -(6 + 2*distance/150);
  player2.addImage("opponentPlayer2",opponentPlayer2IMG);
  player2.setLifetime=170;
  opp2.add(player2);
}

function Enemy03(){
  player3 =createSprite(1100,Math.round(random(50, 250)));
  player3.scale =0.2;
  player3.velocityX = -(6 + 2*distance/150);
  player3.addImage("opponentPlayer3",opponentPlayer3IMG);
  player3.setLifetime=170;
  opp3.add(player3);
}
