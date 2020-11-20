
// Les tableaux en js ne sont pas aussi limité qu'en JAVA
// on va pouvoir ajouter/retirer des éléments dynamiquement sans problème
// On pourra mettre n'importe quelle type de valeur ou combinaison de type de valeur
// dans mon tableau.

// initialiser mon tableau

let tab = ["luc", 50];
tab = new Array("luc", 50);

// récupérer une valeur (l'index des tableaux commencent à 0)

console.log(tab[0]);

// modifier une valeur

tab[0] = "varie";
console.log(tab[0]);

// accéder à une valeur hors du tableau

console.log(tab[5]); // renvoi undefined

tab["num_nat"] = 0; // ajoute d'une propriete à l'objet : num_nat/0
console.log(tab["num_nat"]);
console.log(tab[2]);

tab.salut = [1,undefined,function(){}]; // ajoute d'une propriete à l'objet : salut/Array

// L'ajout de propriété != ajout d'élément

tab.push(true);

console.log(tab);

// Methodes intéressantes

console.log(tab.toString()); // il ne considère que les 3 éléments indexés comme élément du tableau
console.log(tab.join(" / ")); // pareil que toString en choisissant les séparations.
tab.push("ajout à la fin du tableau"); // ajouter un élément à la fin du tableau
tab.pop(); // retirer le dernier élément
tab.unshift("ajout au début du tableau"); // ajoute un élément au début du tableau et réindexe
tab.shift(); // retire le premier élément et réindexe
console.log( tab.length ); // récupère la taille du tableau
tab.splice(1, 1); // supprime un certain nbr d'élément à partir d'un index donné
tab.sort(); // range dans l'ordre aplhabétique(croissant si nombre); // controle via un comparateur
tab.reverse(); // inverse les éléments du tableau
tab = tab.concat(["bonjour", "ca", "va?"]); // concat fourni un nouvel Array ayant les éléments des 2 tabs(en commencant par les éléments du premier)
console.log(tab.slice(1,3)); // fourni un sous tableau de mon Array commencant par un index et terminant à un autre index

console.log(tab);
