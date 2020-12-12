const tokenGroup = "b89f9625";
let player;

async function onLoad() {
     // Omple el player demanant un spawn i despres la info del jugador
     const data = await addPlayer("Sans");
     const token = data.token;
     const remCode = data.token;

     let p = await getInfoPlayer(token);
     player = new Player(token, p.name, p.x, p.y, p.direction, p.attack, p.defense, p.vitalpoints, p.image, p.object, remCode);
     refreshData(player);
}


/**
 * Dues funcions:
 *   1. Crida a la api per informar d'un spawn, rebre token i code
 *   2. Crea el nou jugador i el retorna
 * @param {String} name_player 
 */
async function addPlayer(name_player) {
     let response = await fetch(`http://battlearena.danielamo.info/api/spawn/${tokenGroup}/${name_player}`);
     let data = await response.json();
     return data;
}

/**
 * Funció que rep un player i pren el seu token i remove code per eliminarlo del server
 * @param {Player} player 
 */
async function removePlayer(player) {
     let response = await fetch(`http://battlearena.danielamo.info/api/remove/${tokenGroup}/${player.getToken}/${player.getRemCode}`);
     console.log(response);
}

/**
 * Obté info del jugador especificat pel token
 * @param {String} token 
 */
async function getInfoPlayer(token) {
     let response = await fetch(`http://battlearena.danielamo.info/api/player/${tokenGroup}/${token}`);
     let data = await response.json();
     return data;
}

function refreshData(player) {
     let vp = document.getElementById("vp-stat");
     let attack = document.getElementById("attack-stat");
     let defense = document.getElementById("defense-stat");
     let money = document.getElementById("money-stat");

     vp.innerHTML = player.getVp;
     attack.innerHTML = player.getAttack;
     defense.innerHTML = player.getDefense;
     
}