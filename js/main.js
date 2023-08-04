let ingreso;
let contador = 0;
let seleccionFlorales=false
let seleccionAmaderadas=false
let seleccionFrutales=false
let seleccionCítricas=false
let seleccionRefrescante=false
let seleccionAhumadas=false
let seleccionListo=false

while (contador < 3) {
    ingreso = prompt(`Selecciona tus fragancias (puedes elegir hasta tres):\n1- Florales\n2- Amaderadas\n3- Frutales\n4- Cítricas\n5-Refrescantes \n6- Ahumadas \n0-Listo`);

    switch (ingreso) {
        case "1":
            alert("Seleccionaste Florales");
            seleccionFlorales = true
            contador++;
            break;
        case "2":
            alert("Seleccionaste Amaderadas");
            seleccionAmaderadas = true
            contador++;
            break;
        case "3":
            alert("Seleccionaste Frutales");
            seleccionFrutales = true
            contador++;
            break;
        case "4":
            alert("Seleccionaste Cítricas")
            seleccionCítricas = true
            contador++;
            break;
        case "5":
            alert("Seleccionaste Refrescantes")
            seleccionRefrescante= true
            contador++;
            break;
        case "6":
            alert("Seleccionaste Ahumadas")
            seleccionAhumadas = true
            contador++;
            break;
        case "0":
            alert("Listo")
            seleccionListo = true
            break;
        default:
            alert("Opción no váalida")
            break;
    }
    
    if (ingreso === "0") {
        break;
    }
}



if (seleccionAmaderadas && seleccionCítricas && seleccionListo) {
    alert("Te recomendamos Dior Eau de Parfum Sauvage");
}

else if (seleccionCítricas && seleccionAhumadas && seleccionAmaderadas) {
    alert("Te recomendamos Eau de Parfum Boss Bottled Parfum");
}

else if (seleccionCítricas && seleccionRefrescante && seleccionAmaderadas) {
    alert("Te recomendamos Lacoste L.12.12 Blanc");
}

else if (seleccionFlorales && seleccionRefrescante && seleccionListo) {
    alert("Te recomendamos Gentleman Gyvenchi");
}

else if (seleccionRefrescante && seleccionCítricas && seleccionAhumadas) {
    alert("Te recomendamos Dolce & Gabbana Light Blue Pour Homme");
}

else if (seleccionFlorales && seleccionAmaderadas && seleccionRefrescante) {
    alert("Te recomendamos L´Homme Yves Saint Lauent");
}

else if (seleccionFrutales && seleccionCítricas && seleccionRefrescante) {
    alert("Te recomendamos Polo Blue Ralph Lauren");
}

else if (seleccionCítricas && seleccionFlorales && seleccionAmaderadas) {
    alert("Te recomendamos L´eau D´Issey Pour Homme");
}

else if (seleccionFlorales && seleccionFrutales && seleccionAmaderadas) {
    alert("Te recomendamos One Million");
}

else if (seleccionFlorales && seleccionCítricas && seleccionAhumadas) {
    alert("Te recomendamos Phantom");
}
else {
    alert("Tus preferencias han sido registradas");
  }