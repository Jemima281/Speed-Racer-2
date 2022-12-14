var canvas;
var backgroundImage;
var database, gameState;
var form, player, playerCount;
var allPlayers;
var car1, car1Img, car2, car2Img, track, trackImg;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1Img = loadImage("assests/car1.png")
  car2Img = loadImage("assets/car2.png")
  track=loadImage("assests/track.jpg")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);

  if(playerCount === 2){
   game.update(1)
  }
  if(gameState === 1){
    game.play
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
