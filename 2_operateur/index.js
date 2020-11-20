
// opérateurs arithmétiques

console.log(5 + 6);
console.log("5" + 6);
console.log(5 - 6);
console.log(5 * 6);
console.log(5 / 6); // division classique
console.log(Math.floor(5/6)); // division entière
console.log(5 % 6);

// opérateurs d'affectation

let nbr = 0;

nbr += 5;
nbr -= 5;
nbr *= 5;
nbr /= 5;
nbr %= 5;

// opérateur de comparaison

console.log( 5 > 6 );
console.log( 5 < 6 );
console.log( 5 >= "6" ); // lorsqu'on compare string et number, js converti le nombre
console.log( 5 <= "chaine" ); // le resultat d'une conversion ratée est NaN => comparaison tjs false

console.log("jean" <= "jean-luc"); // compare les code ascii lettre par lettre

// opérateurs d'égalités

console.log( 6 == "6" ); // conversion puis verification
console.log( 6 === "6" ); // pas de convertion (egal si mm type et meme valeur)
console.log( 6 != "6" ); 
console.log( 6 !== "6" );

console.log("ok" == ["o", "k"]); // false

// ** - convertion d'un number

let n = parseInt("chaine"); // = NaN
n = parseFloat("5.50"); // = 5.5

// opérateurs logiques

console.log(true && true); // and
console.log(true || true); // or
console.log(!true); // not

// opérateurs ternaires
let age = 17;

console.log( age >= 18 ? "majeur" : "mineur");// retourne "majeur" si condition à true, "mineur" si false

// opérateurs unaires

console.log(typeof "bonjour"); // renvoie le type général de la valeur
let date = new Date(); // instancie un objet

let o = {
    nom : "louis",
    age : 18
}

console.log(o);

console.log(delete o.num_nat); // supprime une propriété;
console.log(delete o);

console.log(o);

// incrémentation/décrémentation

let a = 0; // 0
console.log(a++); // 0
console.log(++a); // 2
console.log(a--); // 2
console.log(--a); // 0