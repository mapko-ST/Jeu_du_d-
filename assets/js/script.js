// Fonction pour générer un nombre aléatoire entre 1 et 6 (valeur du dé)
function lancerDe() {
  return Math.floor(Math.random() * 6) + 1;
}

// Fonction pour lancer le dé et afficher le résultat
function jouerAuDe() {
  var resultat = lancerDe(); // Appel de la fonction pour générer le nombre aléatoire
  console.log("Résultat du lancer : " + resultat);
}

// Appel de la fonction pour jouer au dé
jouerAuDe();
