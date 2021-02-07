var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cycles, cycle1, cycle2, cycle3, cycle4;

var track, cyc1_img, cyc2_img, cyc3_img, cyc4_img;

function preload(){
  track = loadImage("images/track.jpg");
  cyc1_img = loadImage("images/cycle1.png");
  cyc2_img = loadImage("images/cycle2.png");
 cyc3_img = loadImage("images/cycle3.jfif");
 cyc4_img = loadImage("images/cycle4.jpg");
  ground = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
