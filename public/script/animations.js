function pulseAnimation(stat) {
     let start = new Promise((resolve, reject) => {
          let element = document.getElementById(stat);
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

