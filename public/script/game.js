const tokenGroup = "b89f9625";

function onLoad() {
     const player = new Player();
     addPlayer("MrBean01");
}

function addPlayer(name_player) {
     const token = {};
     
     const newPlayer = fetch(`http://battlearena.danielamo.info/api/spawn/${tokenGroup}/${name_player}`);
     newPlayer.then(response => { 
          const res = response.json();
          return res.result;
     }, (_) => {
          console.log("Mistake adding player!");
     });

     
}

function removePlayer(player) {
     const remPlayer = fetch(`http://battlearena.danielamo.info/api/remove/${tokenGroup}/${player.getTokken()}/${player.getRemCode()}`);
     remPlayer.then(response => console.log(response), response => console.log("ERROR"));
}