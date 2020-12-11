const tokenGroup = "b89f9625";
var player;

function onLoad() {
     const newGame = new Promise(function(resolve) {
          addPlayer("Sans");
          resolve(true);
     }).then(getInfoPlayer(player.getToken()));
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
     .then(result => { player = new Player(result.token, name_player, 0, 0, 0, 20, 20, 100, 'assets/sans.png', undefined, result.code)});
}

/**
 * Funció que rep un player i pren el seu token i remove code per eliminarlo del server
 * @param {Player} player 
 */
function removePlayer(player) {
     const remPlayer = fetch(`http://battlearena.danielamo.info/api/remove/${tokenGroup}/${player.getToken()}/${player.getRemCode()}`);
     remPlayer.then(
          response => console.log(response),
          () => console.log("ERROR")
     );
}

/**
 * Obté info del jugador especificat pel token
 * @param {String} token 
 */
function getInfoPlayer(token) {
     const getPlayer = fetch(`http://battlearena.danielamo.info/api/player/${tokenGroup}/${token}`);
     getPlayer.then(res => res.json()).then(res => console.log(res));
}

addPlayer("Sans");