let prixUnit = prompt("Quel est le prix unitaire pour ce livre?");
let qtt = prompt("Quel est la quantité de livre?"); 

console.log( (prixUnit*qtt) * 1.21 ); // les string sont convertis à l'utilisation d'op. arithmétique(sauf +)
console.log( (prixUnit + ((prixUnit/100)*21)) * qtt); // attention à l'addition des chaines
