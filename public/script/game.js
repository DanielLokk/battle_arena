const tokenGroup = "b89f9625";

function onLoad() {
     const newPlayer = fetch(`http://battlearena.danielamo.info/api/spawn/${tokenGroup}/DarthVader/`);
     newPlayer.then(response => console.log(response), response => console.log("ERROR"));
}