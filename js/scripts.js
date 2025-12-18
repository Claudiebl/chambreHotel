// import de la classe Chambre
import { Chambre } from "./Chambre.js";

// tableau contenant toutes les chambres de l’hôtel
let hotel = [];

// création de 10 chambres identiques (20m², 2 personnes, libres)
for (let i = 0; i < 10; i++) {
  hotel.push(new Chambre(20, 2, false));
}

// function qui genere des chiffre aleatoire de chalbre de libre
function genererChambre() {
// nbChambre = un chiffre generé aléatoirement entre 1 et 10
  let nbChambre = Math.floor(Math.random() * hotel.length) + 1;
// chambreReserver = un chiffre a determiner si dessous en le pushant 
  let chambreReserver = [];

// jusqu'à le nbm de chambreReserver n'est pas = au nb de chambre
  while (chambreReserver.length < nbChambre) {
    // chambreIndex prend un chiffre au hazard dans la liste d'index d'hotel
    let chambreIndex = Math.floor(Math.random() * hotel.length);
    // Est-ce que cette chambre n’a pas déjà été choisie, si non alors on la rajoute au tableau
    if (!chambreReserver.includes(chambreIndex)) {
      chambreReserver.push(chambreIndex);
    }
  }

// parcours la liste des index sélectionnés
  chambreReserver.forEach((index) => {
    // et *réserve* chaque chambre correspondante dans l'hôtel
    hotel[index].reserverChambre();
  });
}

// appel la fonction de mettre l'etat de la reservation aleatoire
genererChambre();

// pour chaque index contenu dans le tableau chambreReserver,
// on réserve la chambre correspondante dans le tableau hotel
function compterChambresLibres(tableauChambres) {
    return tableauChambres.filter(chambre => !chambre.reserver).length;
}

//afficher le tableau hotel (incluant la class Chambre) 
console.log(hotel);

// j'affiche dans ma console le nombre de chambre libre dans mon hotel
let nbLibres = compterChambresLibres(hotel);
console.log("Nombre de chambres libres :", nbLibres);
