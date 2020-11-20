
// Les if

let condition = true;
let condition2 = false;

if(condition){
    console.log("exec si 'condition' == true");
}
else if(condition2){
    console.log("exec si 'condition2' == true");
}
else{
    console.log("exec si 'condition' et 'condition2' == false")
}

// Les switch (avec egalité stricte ===)

let age = 17;

switch(age){
    case "18":
        console.log("'18'");
        break;
    case 17:
    case 18: // celui ci sera exécuté
        console.log("18");
        break;
    default:
        console.log("aucun");
}