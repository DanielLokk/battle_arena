const tokenGroup = "b89f9625";
let player;
let frontPlayer;

// Defines the game table
let game_table = [40][40];

// Aqui guardem cada segon que hi ha en les direccions colindants.
// Han de ser arrays perque pot haverhi més d'una cosa a la vegada.
let dirWest = [];
let dirEast = [];
let dirNorth = [];
let dirSouth = [];

async function onLoad() {

     // Inicialitza el taulell

     // Omple el player demanant un spawn i despres la info del jugador
     const data = await addPlayer("Sans");
     const token = data.token;
     const remCode = data.token;

     let p = await getInfoPlayer(token);
     player = new Player(token, p.name, p.x, p.y, p.direction, p.attack, p.defense, p.vitalpoints, p.image, p.object, remCode);
     refreshData(player);
     await setDirectionElements(player);
     setImageEnemy(player);
}









/**
 * Obtenir els objectes o enemics de les caselles colindants
 * @param {Player} player 
 */
async function setDirectionElements(player) {
     let infoEnv = await playersAndObjects(player);
     console.log(infoEnv);
     for (let i = 0; i < infoEnv.enemies.length; i++) {
          const enemy = infoEnv.enemies[i];
          switch (enemy.direction) {
               case "O": dirWest.push(enemy);
               break;
               case "E": dirEast.push(enemy);
               break;
               case "N": dirNorth.push(enemy);
               break;
               case "S": dirSouth.push(enemy);
               break;
          }
     }

     for (let i = 0; i < infoEnv.objects.length; i++) {
          const obj = infoEnv.enemies[i];
          switch (obj.direction) {
               case "O": dirWest.push(obj);
               break;
               case "E": dirEast.push(obj);
               break;
               case "N": dirNorth.push(obj);
               break;
               case "S": dirSouth.push(obj);
               break;
          }
     }
}

/**
 * Posa a la img del html la imatge corresponent
 * @param {Player} player Enemic que esta en front
 */
async function setImageEnemy(player) {
     let enemy = document.getElementById("enemy");
     let p;
     emptyPlayer = [new Player(0, "", 0, 0, 0, 0, 0, "D", 0, "", 0)];

     // TODO: de moment només agafen el primer de cada array, ha de ser aleatori
     switch (player.getD) {
          case "N":
               p = dirNorth[0] ? dirNorth[0] : emptyPlayer;
          break;
          case "E":
               p = dirEast[0] ? dirEast[0] : emptyPlayer;
          break;
          case "S":
               p = dirSouth[0] ? dirSouth[0] : emptyPlayer;
          break;
          case "O":
               p = dirWest[0] ? dirWest[0] : emptyPlayer;
          break;
     }

     frontPlayer = new Player(0, "", p.x, p.y, p.direction, 0, 0, p.vitalpoints, p.image, "", 0);
     enemy.src = frontPlayer.getImage;
}

/**
 * Actualitza els stats en pantalla
 * @param {Player} player 
 */
function refreshData(player) {
     let vp = document.getElementById("vp-stat");
     let attack = document.getElementById("attack-stat");
     let defense = document.getElementById("defense-stat");

     //TODO: sumar + 20 cada kill
     let money = document.getElementById("money-stat");

     vp.innerHTML = player.getVp;
     attack.innerHTML = player.getAttack;
     defense.innerHTML = player.getDefense;
     
     pulseAnimation("heart");
     pulseAnimation("sword");
     pulseAnimation("shield");
     pulseAnimation("money");
}