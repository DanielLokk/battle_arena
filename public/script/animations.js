function pulseAnimation(stat) {
     let start = new Promise(function(resolve, reject) {
          let element = document.getElementById(stat);
          element.classList.add("pulse");
          if (element.classList.contains("pulse")) {
               resolve(element);
          } else {
               reject("error");
          }
     });
     start.then(element => setTimeout(function(){ element.classList.remove("pulse"); }, 300)).catch(err => console.log(err));
     
}

