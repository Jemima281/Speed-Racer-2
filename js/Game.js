class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();


    car1 = createSprite()
  }
  update(state){
    database.ref("/").update({
      gameState: state    })

  }
  play(){
    
  }


  
}
 