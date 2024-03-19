// Math.random():Ns permet de gerer un nombre aleatoire compris entre [0,1[
//  function random(min,max) {
//     return Math.round(Math.random() * (max - min) + min)
//  }
//  (max - min):Notre plage de possibilité
//  + min :permet d'ajouter le dernier valeur du random()
//   console.log(random(10,100));
// document.querySelector("#input").value = Math.random();
//  document.querySelector("#input").value = random(10, 100);

// let  nbressai =0;
// nbressai++;
// document.querySelector(".essais").innerText = 11 - nbressai;
// let  nbressai =0;
// nbressai++;
// document.querySelector(".essais").innerText = 10 - nbressai;

let max = 100;
let min = 10;
var randomaleatoire = Math.round(Math.random() * (max - min) + min);

document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault();
  let valuechoix = document.querySelector("#input").value; //Récuperer la valeur que l'utilisateur a saisie
  // let nbressai ;
  // for ( nbressai=0; nbressai <= 10; nbressai++) {
  //   document.querySelector(".essais").innerText = nbressai;
  // }

  let  nbressai =0;
  nbressai++;
  document.querySelector(".essais").innerText = 10 - nbressai;

  if (valuechoix < randomaleatoire) {
    document.querySelector(
      "span.text-danger"
    ).innerText = `le nombre deviner est plus grand. et on est au  ${nbressai}  essais`;
  } else if (valuechoix > randomaleatoire) {
    document.querySelector(
      "span.text-danger"
    ).innerText = `le nombre deviner est plus petit. et on est au  ${nbressai}  essais`;
      // "le nombre deviner est plus petit." + nbressai;
  } else if (valuechoix == randomaleatoire) {
    document.querySelector("span.text-danger").innerText =
      "Correct ! Vous avez trouvé en " + nbressai + "essais.";
  } else if (nbressai == 10) {
    document.querySelector(".essais").innerText = 10;
  } else {
    console.log("Correct ! Vous avez trouvé");
  }
});
