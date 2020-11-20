
// Créer des dates

let date = new Date(); // créer un objet date représentant la date d'ajd
date = new Date(2000, 0); // attention les mois commencent à 0
console.log(date);
date = new Date(2000, 0, 1, 0,0,0,0);

// infos d'une date:

date.getFullYear();
date.getMonth(); // 0 -> 11
date.getDate(); 
date.getDay(); // 0 = dimanche -> 6 = samedi
date.getHours();
date.getMinutes();
date.getSeconds();
date.getMilliseconds();
console.log(date.getTime());