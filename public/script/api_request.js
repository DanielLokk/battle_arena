/**
 * Dues funcions:
 *   1. Crida a la api per informar d'un spawn, rebre token i code
 *   2. Crea el nou jugador i el retorna
 * @param {String} name_player 
 */
async function addPlayer(name_player) {
     let response = await fetch(`http://battlearena.danielamo.info/api/spawn/${tokenGroup}/${name_player}`);
     let playerKey = await response.json();
     return playerKey;
}


/**
 * En cas de que el jugador hagi mort, actualitza el player amb nova posicio
 * @param {Player} player 
 */
async function respawn(player) {
     let response = await fetch(`http://battlearena.danielamo.info/api/respawn/${tokenGroup}/${player.getToken}`);
     
     //TODO: setX, setY, setImage, setVp
     console.log(response);
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
     let playerData = await response.json();
     console.log(playerData);
     return playerData;
}


/**
 * Fa una petició per moure al jugador, retorna true i ha sigut capaç
 * si hi ha un objecte que obstaculitzi, retorna false.
 * @param {String} dir direcció que pot ser N, S, E, O
 * @param {Player} player agafarem el token per fer la crida
 */
async function movePlayer(dir, player) {
     let response = await fetch(`http://battlearena.danielamo.info/api/move/${tokenGroup}/${player.getToken}/${dir}`);
     return response.status == 200 ? true : false;
}

/**
 * Ataca en la direcció demanada, si ha pogut fer el atac retorna true, si el jugador 
 * no hi era, era mort o hi ha una paret, tornarem false.
 * @param {String} dir direcció que pot ser N, S, E, O
 * @param {Player} player agafarem el token per fer la crida
 */
async function attackPlayer(dir, player) {
     let response = await fetch(`http://battlearena.danielamo.info/api/attack/${tokenGroup}/${player.getToken}/${dir}`);
     return response.status == 200 ? true : false;
}

// TODO: No acabo d'entendre com funciona aquesta merda a l'enunciat
async function pickUpObject(player) {
     let response = await fetch(`http://battlearena.danielamo.info/api/pickup/${tokenGroup}/${player.getToken}/${player.getObject}`);
     console.log(response);
}

/**
 * Retorna que hi ha a les caselles colindants
 * @param {Player} player Obté el token del jugador
 */
async function playersAndObjects(player) {
     let response = await fetch(`http://battlearena.danielamo.info/api/playersobjects/${tokenGroup}/${player.getToken}`);
     let positions = await response.json();
     return positions;
}

/**
 * Obté la posició de tots els elements en el mapa
 * @param {Playet} player 
 */
async function obtainMap(player) {
     let response = await fetch(`http://battlearena.danielamo.info/api/map/${tokenGroup}/${player.getToken}`);
     let map = await response.json();
     console.log(map);
     return map;
}