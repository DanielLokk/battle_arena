const tokenGroup = "b89f9625";
var player;

function onLoad() {
     addPlayer("Sans");
}

/**
 * Dues funcions:
 *   1. Crida a la api per informar d'un spawn, rebre token i code
 *   2. Crea el nou jugador i el retorna
 * @param {String} name_player 
 */
function addPlayer(name_player) {
     const newPlayer = fetch(`http://battlearena.danielamo.info/api/spawn/${tokenGroup}/${name_player}`);
     newPlayer.then(
          res => res.json(), 
          (_) => console.log("Mistake adding player!"),
     )
     .then(
          result => player = new Player(result.token, name_player, 0, 0, 0, 20, 20, 100, 'assets/sans.png', undefined, result.code));
}

function removePlayer(player) {
     const remPlayer = fetch(`http://battlearena.danielamo.info/api/remove/${tokenGroup}/${player.getTokken()}/${player.getRemCode()}`);
     remPlayer.then(
          response => console.log(response),
          () => console.log("ERROR")
     );
}