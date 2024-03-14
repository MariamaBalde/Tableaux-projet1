// Math.random():Ns permet de gerer un nombre aleatoire compris entre [0,1[
//  function random(min,max) {
//     return Math.round(Math.random() * (max - min) + min)
//  }
//  (max - min):Notre plage de possibilité
//  + min :permet d'ajouter le dernier valeur du random()
//   console.log(random(10,100));
// document.querySelector("#input").value = Math.random();
//  document.querySelector("#input").value = random(10, 100);

let max = 100;
let min = 10;
var randomaleatoire = Math.round(Math.random() * (max - min) + min);

document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault();
  let valuechoix = document.querySelector("#input").value; //Récuperer la valeur que l'utilisateur a saisie

  if (valuechoix < randomaleatoire) {
    document.querySelector("span.text-danger").innerText =
      "Non, le nombre est plus grand.";
  } else if (valuechoix > randomaleatoire) {
    document.querySelector("span.text-danger").innerText =
      "Non, le nombre est plus petit.";
  } else {
    console.log("Correct ! Vous avez trouvé");              
  }
});               




