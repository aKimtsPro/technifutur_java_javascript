
// Pour les objets ils est à tous moments possible d'ajouter de nouvelles 
// propriétés de la manière suivante:

let o = {
    nom : "luc",
    age : 50
}

o.num_nat = 0;
o["salut"] = 0;

console.log(o);

// supprimer un propriété
delete o.salut;

console.log(o); // attention au lazy loading