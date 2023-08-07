let ingreso;
let contador = 0;
let seleccionFlorales = false
let seleccionAmaderadas = false
let seleccionFrutales = false
let seleccionCítricas = false
let seleccionRefrescante = false
let seleccionAhumadas = false
let seleccionListo = false

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
            seleccionRefrescante = true
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
            alert("Opción no válida")
            break;
    }

    if (ingreso === "0") {
        break;
    }
}



if (seleccionFlorales && seleccionCítricas && seleccionAhumadas) {
    comprarRecomendacion("Phantom", 54650);
} else if (seleccionFlorales && seleccionCítricas && seleccionAmaderadas) {
    comprarRecomendacion("L´eau D´Issey Pour Homme", 58850);
} else if (seleccionFrutales && seleccionCítricas && seleccionRefrescante) {
    comprarRecomendacion("Polo Blue Ralph Lauren", 54315);
} else if (seleccionFlorales && seleccionFrutales && seleccionAmaderadas) {
    comprarRecomendacion("One Million", 52550);
} else if (seleccionCítricas && seleccionFlorales && seleccionAmaderadas) {
    comprarRecomendacion("L´Homme Yves Saint Laurent", 59415);
} else if (seleccionRefrescante && seleccionCítricas && seleccionAhumadas) {
    comprarRecomendacion("Dolce & Gabbana Light Blue Pour Homme", 60750);
} else if (seleccionFlorales && seleccionRefrescante && seleccionListo) {
    comprarRecomendacion("Gentleman Gyvenchi", 66200);
} else if (seleccionCítricas && seleccionRefrescante && seleccionAmaderadas) {
    comprarRecomendacion("Lacoste L.12.12 Blanc", 35435);
} else if (seleccionCítricas && seleccionAhumadas && seleccionAmaderadas) {
    comprarRecomendacion("Eau de Parfum Boss Bottled Parfum", 63000);
} else if (seleccionAmaderadas && seleccionCítricas && seleccionListo) {
    comprarRecomendacion("Dior Eau de Parfum Sauvage", 67000);
} else {
    alert("Tus preferencias han sido registradas");
}

function comprarRecomendacion(producto, precio) {
    let opcion;
    while (true) {
        opcion = prompt(`Te recomendamos ${producto} a un precio de $${precio}. ¿Deseas comprarlo?\n1- Si\n2- No`);
        switch (opcion) {
            case "1":
                opcion = true;
                break;
            case "2":
                opcion = false;
                alert("Tus preferencias han sido registradas.");
                return;
            default:
                alert("Opción no válida. Por favor, seleccione '1' para Si o '2' para No.");
                continue;
        }
        break;
    }

    if (opcion) {
        let cantidad;
        while (true) {
            cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar:"));
            if (isNaN(cantidad) === false && cantidad > 0) {
                break;
            }
            alert("Por favor, ingrese una cantidad válida mayor que cero.");
        }

        let pagarEnCuotas;
        switch (prompt("¿Deseas pagar en cuotas?\n1- Si\n2- No")) {
            case "1":
                pagarEnCuotas = true;
                break;
            case "2":
                pagarEnCuotas = false;
                break;
            default:
                alert("Opción no válida.");
                pagarEnCuotas = false;
                break;
        }
        let cuotasSeleccionadas;
        if (pagarEnCuotas) {
            switch (prompt("Seleccione la cantidad de cuotas. \n1- 3 cuotas sin interés \n2- 6 cuotas (10% de interés) \n3- 12 cuotas (20% de interés)")) {
                case "1":
                    cuotasSeleccionadas = 3;
                    break;
                case "2":
                    cuotasSeleccionadas = 6;
                    break;
                case "3":
                    cuotasSeleccionadas = 12;
                    break;
                default:
                    alert("Opción no válida. Por favor, seleccione una cantidad de cuotas válida");
            }
        } else {
            alert(`Vas a pagar $${precio * cantidad} en un solo pago`);
        }

        if (cuotasSeleccionadas === 3) {
            let montoCuota = (precio * cantidad) / cuotasSeleccionadas;
            alert(`Vas a pagar 3 cuotas de $${montoCuota.toFixed(2)}`);
        } else if (cuotasSeleccionadas === 6) {
            let montoCuota = (precio * cantidad * 1.10) / cuotasSeleccionadas;
            alert(`Vas a pagar 6 cuotas de $${montoCuota.toFixed(2)}`);
        } else if (cuotasSeleccionadas === 12) {
            let montoCuota = (precio * cantidad * 1.20) / cuotasSeleccionadas;
            alert(`Vas a pagar 12 cuotas de $${montoCuota.toFixed(2)}`);
        }
    }
    let confirmarCompra;
    while (true) {
        switch (prompt("¿Deseas confirmar la compra?\n1- Si\n2- No")) {
            case "1":
                confirmarCompra = true;
                break;
            case "2":
                confirmarCompra = false;
                alert("Tus preferencias han sido registradas.");
                break;
            default:
                alert("Opción no válida. Por favor, seleccione '1' para Si o '2' para No.");
                continue;
        }
        break;
    }

    if (confirmarCompra) {
        alert("¡Muchas gracias por su compra!");
    }
}
