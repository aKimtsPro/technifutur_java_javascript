let chaine = "ma formation javascript";

console.log(chaine.indexOf("ma"));
console.log(chaine.indexOf("p"));
console.log(chaine.charAt(21));
console.log(chaine.replace("javascript", "Java"));
console.log(chaine.split(" "));


let inversed = chaine.split(""); // string -> array
inversed = inversed.reverse(); // array -> array
inversed = inversed.join(""); // array -> string

console.log(inversed);