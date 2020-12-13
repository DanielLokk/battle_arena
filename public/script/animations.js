/**
 * Rep un ID i recrea l'animació de un pols
 * @param {String} id 
 */
function pulseAnimation(id) {
     let start = new Promise((resolve, reject) => {
          let element = document.getElementById(id);
          element.classList.add("pulse");
          if (element.classList.contains("pulse")) {
               resolve(element);
          } else {
               reject("error");
          }
     })
     .then(element => setTimeout(() => element.classList.remove("pulse"), 300))
     .catch(err => console.log(err));
}

function showPreview(element) {
     //TODO: get element of the direction
     /* element.setAttribute('src', ); */
}

