let ingreso;
let contador = 0;


while (contador < 3) {
    ingreso = prompt(`Selecciona tus fragancias (puedes elegir hasta tres):\n1- Florales\n2- Amaderadas\n3- Frutales\n4- Cítricas\n5-Refrescantes \n6- Ahumadas \n0-Listo`);

    switch (ingreso) {
        case "1":
            alert("Seleccionaste Florales");
            contador++;
            break;
        case "2":
            alert("Seleccionaste Amaderadas");
            contador++;
            break;
        case "3":
            alert("Seleccionaste Frutales");
            contador++;
            break;
        case "4":
            alert("Seleccionaste Cítricas")
            contador++;
            break;
        case "5":
            alert("Seleccionaste Refrescantes")
            contador++;
            break;
        case "6":
            alert("Seleccionaste Ahumadas")
            contador++;
            break;
        case "0":
            alert("Listo")
            contador++;
            break;
        default:
            alert("Opción no váalida")
            break;
    }
}

if (ingreso === "1" || ingreso === "4" || ingreso === "0") {
    alert("Te recomendamos Dior Eau de Parfum Sauvage");
}

else if (ingreso === "4" || ingreso === "6" || ingreso === "2") {
    alert("Te recomendamos Eau de Parfum Boss Bottled Parfum");
}

else if (ingreso === "4" || ingreso === "5" || ingreso === "2") {
    alert("Te recomendamos Lacoste L.12.12 Blanc");
}

else if (ingreso === "1" || ingreso === "5" || ingreso === "0") {
    alert("Te recomendamos Gentleman Gyvenchi");
}
