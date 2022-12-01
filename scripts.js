// function touche(nombre) {
//     if (nombre == '=') {
//         var affiche = document.getElementById('resultat').innerHTML;
//         var resultat = eval(affiche);
//         document.getElementById('resultat').innerHTML = resultat;
//         return;
//     }
//     else if (nombre == 'reset') {
//         document.getElementById('resultat').innerHTML = '';
//         return;
//     }
//     else {
//         var affiche = document.getElementById('resultat').innerHTML;
//         var nombres = affiche + nombre;
//         document.getElementById('resultat').innerHTML = nombres;
//         return;
//     }
// }


function affiche(i) {
    var aff = document.getElementById("Zone").value;
    var affs = aff + i;
    document.getElementById("Zone").value = affs;
}

function efface(){
    document.getElementById("Zone").value = "";
}

function resultat() {
    var calcul = document.getElementById("Zone").value;
    document.getElementById("Zone").value = eval(calcul); 
}

