//Maintenant que tu sais comment sélectionner un élément, modifier une propriété et créer des éléments, il est temps d'ajouter un peu d'interactivité ! 
// Pour cela, nous pouvons utiliser des gestionnaires d'événements. Pour la gestion des clics, tu peux modifier la propriété onclick en y affectant une fonction.

someDiv.onclick = function () {

    someDiv.style.backgroundColor = "red";
  
  };

  //Nous pouvons également utiliser une méthode appelée addEventListener.

//addEventListener est une méthode qui accepte comme premier paramètre le type d'événement, et le second est une fonction de rappel (callback function).

someDiv.addEventListener('click', function () {

  someDiv.style.backgroundColor = "red";

});

//addEventListener peut être utilisé pour écouter un grand nombre d'événements différents, tels que:

    click
    mousedown
    mouseup
    mousemove
    mouseover
    mouseleave

//Voyons comment nous pouvons obtenir des informations à partir d'éléments d'un formulaire.
//Nous pouvons ajouter une fonction qui sera exécutée lorsqu'un formulaire est envoyé, en utilisant la propriété onsubmit sur l'élément form.

const form = document.querySelector("#form");


form.onsubmit = function () {

  console.log("Hello world!");

};

//Le problème avec cette approche est que lorsque l'on appelle onsubmit, la page se rafraîchit (un comportement par défaut des navigateurs). 

//Pour empêcher la page de se rafraîchir, nous pouvons utiliser une méthode que nous obtenons dans l'objet event appelée preventDefault.

//preventDefault empêchera la page de se recharger.

const form = document.querySelector("#form");


form.onsubmit = function (event) {

  event.preventDefault();

  console.log("Hello, world!");

};

//De plus, nous pourrions obtenir la valeur de l'input afin de pouvoir afficher le nom que l'utilisateur a tapé.

const form = document.querySelector("#form");

const firstName = document.querySelector("#firstname");

const lastName = document.querySelector("#lastname");


form.onsubmit = function (event) {

  event.preventDefault();

  console.log(`Hello, ${firstName.value} ${lastName.value}`);

};

//L'utilisation de la méthode classList.toggle sur un élément ajoutera la classe si la classe n'est pas là, si la classe est déjà présente alors elle la supprimera.
//C'est utile, par exemple, dans le cas où tu veux créer un menu déroulant. Lorsque l'utilisateur clique dessus, cela supprime ou ajoute la classe visible.

element.classList.toggle("mystyle");

//Comme tu l'as vu tout à l'heure, la fonction de rappel que tu donnes à un addEventListener peut accepter un paramètre; ce paramètre est l'objet event.

//L'objet event contient beaucoup de propriétés et de méthodes concernant l'événement qui vient de se produire.

const title = document.querySelector(".title");


title.addEventListener("click", function (event) {

  console.log(event);

  title.style.color = "red";

});


document.body.addEventListener("mousemove", function (event) {

  console.log(event);

});

//Ouvre cette page, Ouvre la console de ton navigateur et déplace ta souris sur l'écran.

//Tu devrais voir l'objet event.

//Si tu cliques sur le bouton, tu devrais voir toutes les différentes propriétés attachées à cet objet.

//Par exemple, nous avons accès à la position de la souris sur l'écran avec clientX et clientY.

//Résumé

//Le DOM ou Document Object Model est une interface fournie par le navigateur qui nous donne accès à une représentation objet du document HTML
//Les éléments du DOM sont appelés des noeuds
//Le DOM nous donne accès à un grand nombre de propriétés et de méthodes que nous pouvons utiliser pour modifier les propriétés des éléments
//Nous pouvons utiliser addEventListener pour écouter les événements se produisant sur un certain élément
//Nous devons fournir une fonction de callback à addEventListener, cette fonction de callback accepte un paramètre event qui donne accès à un objet avec des méthodes et des propriétés utiles sur l'événement en cours.