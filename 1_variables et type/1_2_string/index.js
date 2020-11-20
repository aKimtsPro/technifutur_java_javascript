
// Les String possèdent tout un tas de méthodes afin de les manipuler

let chaine = "Ma chaine";

// les index commencent à 0
console.log(chaine.charAt(1)); // récupère un caractère à une position (typeof = string)
console.log(chaine.charCodeAt(1)); // récupère le code Unicode(ascii) du caractère
console.log(chaine.concat(" de caractere")); // renvoi une chaine de caractère composée des 2 concernées (meme chose que +)
console.log(String.fromCharCode(97,98,99)); // forme un string grâce à une suite de valeur unicode
console.log(chaine.indexOf("a")); // récupére l'index de la première apparition du param
console.log(chaine.lastIndexOf("a")); // récupére l'index de la dernière apparition du param
console.log(chaine.match("/./")); // verifie si la chaine correspond à un pattern regexp 
console.log(chaine.replace("a", "o")); // remplace la promière occurence du premier param dans la chaine
console.log(chaine.search("/./")); // recherche l'index de la première substring correspondant à la regexp
console.log(chaine.slice(3,9)); // récupère un sous-chaine commencant au 1e index et terminant avant le 2e index
console.log(chaine.split(" ")); // sépare la chaine en un tableau en utilisant un séparateur
console.log(chaine.substring(3,9)); // mm chose que slice
console.log(chaine.substr(3,9)) // mm chose que slice
console.log(chaine.toLowerCase()); // met la chaine en minuscule
console.log(chaine.toUpperCase()); // met la chaine en majuscule