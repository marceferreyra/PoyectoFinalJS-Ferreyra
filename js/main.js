/*let ingreso;
let contador = 0;
let seleccionFlorales = false
let seleccionAmaderadas = false
let seleccionFrutales = false
let seleccionCítricas = false
let seleccionRefrescante = false
let seleccionAhumadas = false
let seleccionListo = false
let seRealizoSeleccion = false;

for (let contador = 1; contador <= 3;) {
    ingreso = prompt(`Selecciona tus fragancias (puedes elegir hasta tres):\n1- Florales\n2- Amaderadas\n3- Frutales\n4- Cítricas\n5- Refrescantes\n6- Ahumadas\n0- Listo`);

    switch (ingreso) {
        case "1":
            alert("Seleccionaste Florales");
            seleccionFlorales = true;
            contador++;
            seRealizoSeleccion = true;
            break;
        case "2":
            alert("Seleccionaste Amaderadas");
            seleccionAmaderadas = true;
            contador++;
            seRealizoSeleccion = true;
            break;
        case "3":
            alert("Seleccionaste Frutales");
            seleccionFrutales = true;
            contador++;
            seRealizoSeleccion = true;
            break;
        case "4":
            alert("Seleccionaste Cítricas");
            seleccionCítricas = true;
            contador++;
            seRealizoSeleccion = true;
            break;
        case "5":
            alert("Seleccionaste Refrescantes");
            seleccionRefrescante = true;
            contador++;
            seRealizoSeleccion = true;
            break;
        case "6":
            alert("Seleccionaste Ahumadas");
            seleccionAhumadas = true;
            contador++;
            seRealizoSeleccion = true;
            break;
        case "0":
            alert("Listo");
            seleccionListo = true;
            contador++;
            break;
        default:
            alert("Opción no válida");
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
} else if (seleccionAmaderadas && seleccionFlorales && seleccionRefrescante) {
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
} else if (seRealizoSeleccion === false && ingreso === "0") {
    alert("No has seleccionado ninguna fragancia. Refresca la página si quieres completar tus preferencias.");
} else {
    alert("Lo senitmos!! \nNo tenemos fragancias con tus preferencias en estos momentos");
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
                alert("Gracias, tus preferencias han sido registradas. ");
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
                alert("Gracias, puedes finalizar tu compra en otro momento.");
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
*/

const perfumes = [
    { nombre: "EDP Sauvage Dior", precio: 67000 },
    { nombre: "EDP Boss Bottled Boss", precio: 63000 },
    { nombre: "L.12.12 Blanc Lacoste", precio: 35435 },
    { nombre: "Gentleman Gentleman", precio: 66200 },
    { nombre: "Light Blue Pour Homme Dolce & Gabbana", precio: 60750 },
    { nombre: "L´Homme Yves Saint Laurent", precio: 54915 },
    { nombre: "Polo Blue Ralph Lauren", precio: 54315 },
    { nombre: "L´eau D´Issey Pour Homme Issey Miyake", precio: 58850 },
];

perfumes.push({ nombre: "One Million Paco Rabbane", precio: 52550 });
perfumes.push({ nombre: "Phantom Paco Rabbane", precio: 54650 });

const carrito = [];

while (true) {
    const opcion = parseInt(prompt("Bienvenido a tu tienda de perfumes online.\nSelecciona una opción:\n\n1- Ver catálogo de perfumes\n2- Buscar un perfume\n3- Ver carrito de compras\n4- Finalizar compra\n5- Salir"));

    if (opcion === 1) {
        let catalogo = "Catálogo de Perfumes:\n\n";
        for (let i = 0; i < perfumes.length; i++) {
            catalogo += `${i}- ${perfumes[i].nombre}\n`;
        }

        let seleccion;
        while (true) {
            seleccion = parseInt(prompt(catalogo));
            if (seleccion >= 0 && seleccion < perfumes.length) {
                break;
            } else {
                alert("Opción no válida. Por favor, inténtalo de nuevo.");
            }
        }

        while (true) {
            const confirmacion = prompt(`Has seleccionado: ${perfumes[seleccion].nombre} a $${perfumes[seleccion].precio}\n¿Deseas agregarlo al carrito?\n\n1- Si\n2- No`);

            switch (confirmacion) {
                case "1":
                    carrito.push(perfumes[seleccion]);
                    alert("Producto agregado al carrito.");
                    break;
                case "2":
                    alert("Producto no agregado al carrito.");
                    break;
                default:
                    alert("Opción no válida. Por favor, selecciona 'Si' o 'No'.");
                    break;
            } if (confirmacion === "1" || confirmacion === "2") {
                break;
            }
        }
    } else if (opcion === 2) {
        let filtro;
        let resultados;

        while (true) {
            filtro = prompt("Ingresa el término de búsqueda:");
            resultados = perfumes.filter(perfume => perfume.nombre.toLowerCase().includes(filtro.toLowerCase()));

            if (resultados.length > 0) {
                break;
            } else {
                alert("No se encontraron resultados para el término de búsqueda. Inténtalo nuevamente.");
            }
        }

        let catalogoFiltrado = "Resultados de la Búsqueda:\n\n";
        for (let i = 0; i < resultados.length; i++) {
            catalogoFiltrado += `${i}- ${resultados[i].nombre}\n`;
        }

        let seleccion;
        while (true) {
            seleccion = parseInt(prompt(catalogoFiltrado));
            if (seleccion >= 0 && seleccion < resultados.length) {
                break;
            } else {
                alert("Opción no válida. Por favor, selecciona una opción válida.");
            }
        }
        while (true) {
            const confirmacion = prompt(`Has seleccionado: ${resultados[seleccion].nombre} a $${resultados[seleccion].precio}\n¿Deseas agregarlo al carrito?\n\n1- Si\n2- No`);

            switch (confirmacion) {
                case "1":
                    carrito.push(resultados[seleccion]);
                    alert("Producto agregado al carrito.");
                    break;
                case "2":
                    alert("Producto no agregado al carrito.");
                    break;
                default:
                    alert("Opción no válida. Por favor, selecciona 'Si' o 'No'.");
                    break;
            }
            if (confirmacion === "1" || confirmacion === "2") {
                break
            }
        }

    } else if (opcion === 3) {
        if (carrito.length > 0) {
            let detallesCarrito = "Productos en el carrito:\n";
            for (const producto of carrito) {
                detallesCarrito += `${producto.nombre} - $${producto.precio}\n`;
            }
            const total = carrito.reduce((acc, el) => acc + el.precio, 0);
            detallesCarrito += `\nTotal: $${total}`;
            alert(detallesCarrito);
        } else {
            alert("El carrito está vacío.");
        }
    } else if (opcion === 4) {
        if (carrito.length > 0) {
            const total = carrito.reduce((acc, el) => acc + el.precio, 0);
            let detallesCarrito = "Productos en el carrito:\n";
            for (const producto of carrito) {
                detallesCarrito += `${producto.nombre} - $${producto.precio}\n`;
            }
            detallesCarrito += `\nTotal: $${total}`;

            while (true) {
                const confirmacionFinalizar = prompt(`${detallesCarrito}\n\n¿Deseas finalizar la compra?\n\n1- Si\n2- No`);

                switch (confirmacionFinalizar) {
                    case "1":
                        alert("¡Compra finalizada! Gracias por tu compra.");
                        carrito = [];
                        break;
                    case "2":
                        alert("No has finalizado la compra. Todavía hay productos en tu carrito.");
                        break;
                    default:
                        alert("Opción no válida. Por favor, selecciona 'Si' o 'No'.");
                        break;
                }

                if (confirmacionFinalizar === "1" || confirmacionFinalizar === "2") {
                    break;
                }
            }
        } else {
            alert("El carrito está vacío. Selecciona un producto");
        }
    } else if (opcion === 5) {
        alert("¡Gracias por visitarnos! ¡Hasta luego!");
        break;
    } else {
        alert("Opción no válida. Por favor, selecciona una opción válida.");
    }
}
