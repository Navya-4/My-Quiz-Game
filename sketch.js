var canvas;

var database;

var contestantCount = 0, player, allPlayers

var gameState = 1;

var form;

function setup(){
  canvas = createCanvas(1254,572);

  database = firebase.database()
  // game  = new Game ()
   //game.getState()
   //game.start()

   form = new Form ()

}


function draw(){
  background("#CBA79C");
  //#CBA79C og
  ////#ECC578 yellow
  ////#749AC6 blue
  ////#BA8FC6 purple A BIG NO NO
  ////#BD748D pink
  //#9DC9BA turquoise

  form.display()

  
}
