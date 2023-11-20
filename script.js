// script.js

// Fonction pour la fonctionnalité 1-bis
function afficherMessageCliqueAvecCompteur(e) {
  e.preventDefault(); // Empêcher le comportement par défaut
  // Déclaration et incrémentation du compteur
  if (!afficherMessageCliqueAvecCompteur.compteur) {
      afficherMessageCliqueAvecCompteur.compteur = 1;
  } else {
      afficherMessageCliqueAvecCompteur.compteur++;
  }
  console.log("Clic numéro " + afficherMessageCliqueAvecCompteur.compteur);
}

// Ajouter un écouteur d'événement au footer
document.querySelector('footer').addEventListener('click', afficherMessageCliqueAvecCompteur);
//-----------------------------------------------------------
// Fonction pour la fonctionnalité du "Hamburger Menu"
function toggleNavbar() {
  let navbarHeader = document.getElementById('navbarHeader');
  navbarHeader.classList.toggle('collapse');
}

// Ajouter un écouteur d'événement au bouton du "Hamburger Menu"
document.querySelector('.navbar-toggler').addEventListener('click', toggleNavbar);

//-----------------------------------------------------------

//  cliqué et rendre vert
function toggleTextColor() {
  let secondCard = document.querySelectorAll('.card')[1]; // Sélection de la deuxième card
  let editButton = secondCard.querySelector('.btn-outline-secondary');

  // Toggle du style du texte en vert
  if (secondCard.style.color === 'green') {
      secondCard.style.color = '';
  } else {
      secondCard.style.color = 'green';
  }
}

// Ajouter un écouteur d'événement au bouton "Edit" de la deuxième card
document.querySelectorAll('.btn-outline-secondary')[1].addEventListener('click', toggleTextColor);


//-----------------------------------------------------------
function toggleBootstrap() {
  // Sélection du lien CSS Bootstrap
  let bootstrapLink = document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]');

  // Toggle de la désactivation du lien CSS Bootstrap
  if (bootstrapLink.disabled) {
      bootstrapLink.removeAttribute('disabled');
  } else {
      bootstrapLink.setAttribute('disabled', 'true');
  }
}

// Ajouter un écouteur d'événement au header pour le double-clic
document.querySelector('header').addEventListener('dblclick', toggleBootstrap);

//-------------------------------------------------------------


// Fonction pour la fonctionnalité 6 sur une card spécifique
function toggleCardSize(event) {
  var card = event.currentTarget.closest('.card');
  var cardText = card.querySelector('.card-text');
  var cardImage = card.querySelector('.card-img-top');

  // Toggle de la réduction de la taille de la card
  card.classList.toggle('card-reduced');

  // Utilisation d'une variable let pour le compteur
  let count = toggleCardSize.count || 0;
  count++;
  toggleCardSize.count = count;

  console.log("Toggle sur la card numéro " + count);
}

// Ajouter un écouteur d'événement au bouton "View" de toutes les cards
var cards = document.querySelectorAll('.card');
for (let i = 0; i < cards.length; i++) {
  cards[i].querySelector('.btn-success').addEventListener('mouseover', toggleCardSize);
  cards[i].querySelector('.btn-success').addEventListener('mouseout', toggleCardSize);
}

//-------------------------------------------------------------
// Fonction pour la fonctionnalité 7
function switchLastCard() {
  // Sélectionner le conteneur parent des cards
  var cardContainer = document.querySelector('.album .container .row');

  // Sélectionner la dernière card
  var lastCard = cardContainer.lastElementChild;

  // Déplacer la dernière card en premier
  cardContainer.insertBefore(lastCard, cardContainer.firstElementChild);
}

// Ajouter un écouteur d'événement au bouton "==>" pour la fonctionnalité 7
document.querySelector('.btn-secondary').addEventListener('click', switchLastCard);