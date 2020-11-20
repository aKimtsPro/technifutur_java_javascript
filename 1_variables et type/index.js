
// déclarer une variable

var variableGlobale; // portée globale une fois définie
let variableLocale; // portée locale
const CONSTANTE = "ma constante"; // constante de portée locale

// Les variables ne check pas les types

variableLocale = 45;
variableLocale = [1,2,3];
variableLocale = {
    nom : "luc",
    age : 50
}

// Quelques constantes utiles

// NaN - Not a Number

NaN === NaN; // false

isNaN(NaN); // true
isNaN("15"); // false
isNaN("salut"); // true
// isNaN nous permet de vérifier si un valeur peut être considérée comme un number ou pas


// Infinity

let inf = Infinity * Infinity; // inf
inf = 500/0; // inf
inf = 500/Infinity; // 0
inf = Infinity/Infinity; // NaN


// undefined - correspond à un élément de type non reconnu

let undef = {
    nom : "luc",
    age : 50
};

console.log(undef.nom);

// Constantes de Math/Number

Math.PI
Math.SQRT2
// ...

Number.EPSILON
Number.MAX_VALUE
Number.MIN_VALUE
// ...

// Les types des différentes

// number

let nbr = 45;
nbr = 4.5;

nbr = 0x10; // hexadecimal
nbr = 0b10; // binaire
nbr = 0o10; // octodecimal

// boolean

let bool = true;
bool = false;

// string

let chaine = "ma chaine d'caractere";
chaine = 'ma chaine d\' "caractere"';

// object

let tab = [];
let tabAss = {};
let nul = null;
let date = new Date();

// function

let func = function(){};

// undefined

let u = undefined;

// typeof - vérifier le type d'une valeur

console.log(typeof nbr);
console.log(typeof bool);
console.log(typeof chaine);
console.log(typeof tab);
console.log(typeof tabAss);
console.log(typeof nul);
console.log(typeof date);
console.log(typeof func);
console.log(typeof u);

// .constructor - vérifier le type de l'objet

console.log("--------------------")

console.log(tab.constructor);
console.log(tabAss.constructor);
// console.log(nul.constructor); // erreur  
console.log(date.constructor);

if(date.constructor == Date){ // constructor.name renvoie le type en string
    console.log("date est bien une Date");
}