
// while

let condition = false;

while(condition){
    console.log("dans la boucle");
}

// do ... while

do{
    console.log("dans la boucle");
}while(condition);

// for

for (var index = 0; index < 10; index++) { 
    console.log("salut");
}

console.log(index); // ! var est récupérable hors de la boucle

// foreach

let array = ["luc", 50];
array.num_nat = 0;

let tabAss = {
    nom : "luc",
    age : 50,
    num_nat : 0
}

for (const key in tabAss /*array*/ ) { 
    console.log("clef : " +key+"| valeur : "+tabAss/*array*/[key]);
}

// methode alternative pour les arrays (ne s'interesse qu'aux éléments indexés)

array.forEach(element => {
    console.log(element);
});

// break; et les continue;

for (let index = 0; index < 10; index++) {
    if(index == 5)
        continue; // permet de passer à l'itération suivante
    else if(index == 8)
        break; // qui la structure actuelle et passe à la suite
    else
        console.log(index);
}

console.log("boucle broken")