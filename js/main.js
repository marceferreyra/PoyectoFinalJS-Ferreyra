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

function mostrarCatalogoPerfumes() {
    let catalogo = "Catálogo de Perfumes:\n\n";
    for (let i = 0; i < perfumes.length; i++) {
        catalogo += `${i}- ${perfumes[i].nombre}\n`;
    }
    return catalogo;
}

function seleccionarProducto(catalogo) {
    while (true) {
        const seleccion = parseInt(prompt(catalogo));
        if (seleccion >= 0 && seleccion < perfumes.length) {
            return seleccion;
        } else {
            alert("Opción no válida. Por favor, inténtalo de nuevo.");
        }
    }
}

function confirmarAgregarAlCarrito(producto) {
    while (true) {
        const confirmacion = prompt(`Has seleccionado: ${producto.nombre} a $${producto.precio}\n¿Deseas agregarlo al carrito?\n\n1- Si\n2- No`);
        if (confirmacion === "1") {
            return true;
        } else if (confirmacion === "2") {
            return false;
        } else {
            alert("Opción no válida. Por favor, selecciona 'Si' o 'No'.");
        }
    }
}

function agregarAlCarrito(producto) {
    carrito.push(producto);
    alert("Producto agregado al carrito.");
}
function buscarPerfume() {
    let filtro;
    let resultados;

    while (true) {
        filtro = prompt("Ingresa el término de búsqueda (al menos 3 caracteres):");

        if (filtro.length < 3) {
            alert("Ingresa al menos 3 caracteres.");
            continue;
        }

        resultados = perfumes.filter(perfume => perfume.nombre.toLowerCase().includes(filtro.toLowerCase()));

        if (resultados.length > 0) {
            break;
        } else {
            alert("No se encontraron resultados para el término de búsqueda. Inténtalo nuevamente.");
        }
    }

    return resultados;
}
function mostrarCatalogoFiltrado(resultados) {
    let catalogoFiltrado = "Resultados de la Búsqueda:\n\n";
    for (let i = 0; i < resultados.length; i++) {
        catalogoFiltrado += `${i}- ${resultados[i].nombre}\n`;
    }
    return catalogoFiltrado;
}

function seleccionarProductoFiltrado(resultados, catalogoFiltrado) {
    let seleccion;
    while (true) {
        seleccion = parseInt(prompt(catalogoFiltrado));
        if (seleccion >= 0 && seleccion < resultados.length) {
            break;
        } else {
            alert("Opción no válida. Por favor, selecciona una opción válida.");
        }
    }
    return seleccion;
}

function confirmarAgregarAlCarritoFiltrado(productoSeleccionado) {
    let confirmacion;
    while (true) {
        confirmacion = prompt(`Has seleccionado: ${productoSeleccionado.nombre} a $${productoSeleccionado.precio}\n¿Deseas agregarlo al carrito?\n\n1- Si\n2- No`);
        if (confirmacion === "1" || confirmacion === "2") {
            break;
        } else {
            alert("Opción no válida. Por favor, selecciona 'Si' o 'No'.");
        }
    }
    return confirmacion;
}

function mostrarDetallesCarrito(carrito) {
    let detallesCarrito = "Productos en el carrito:\n";
    for (let i = 0; i < carrito.length; i++) {
        detallesCarrito += `${i + 1}- ${carrito[i].nombre} - $${carrito[i].precio}\n`;
    }
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
    detallesCarrito += `\nTotal: $${total}\n\nSelecciona una opción:\n1- Volver al menú principal\n2- Quitar producto del carrito`;
    return detallesCarrito;
}

function comprarDetallesCarrito(carrito) {
    if (carrito.length > 0) {
        const total = carrito.reduce((acc, el) => acc + el.precio, 0);
        let detallesCarrito = "Productos en el carrito:\n";

        for (let i = 0; i < carrito.length; i++) {
            detallesCarrito += `${i + 1}- ${carrito[i].nombre} - $${carrito[i].precio}\n`;
        }

        detallesCarrito += `\nTotal: $${total}\n\nSelecciona una opción:\n1- Finalizar compra\n2- Volver al menú principal\n3- Quitar producto del carrito`;

        return detallesCarrito;
    } else {
        return "El carrito está vacío.";
    }
}

function quitarProductoDelCarrito(carrito) {
    while (true) {
        let productosParaQuitar = "Selecciona el producto que deseas quitar:\n";
        for (let i = 0; i < carrito.length; i++) {
            productosParaQuitar += `${i + 1}- ${carrito[i].nombre} - $${carrito[i].precio}\n`;
        }
        productosParaQuitar += `${carrito.length + 1}- Volver`;

        const productoAQuitar = parseInt(prompt(productosParaQuitar)) - 1;
        if (productoAQuitar >= 0 && productoAQuitar < carrito.length) {
            const productoQuitado = carrito.splice(productoAQuitar, 1);
            alert(`Producto ${productoQuitado[0].nombre} ha sido quitado del carrito.`);
            break;
        } else if (productoAQuitar === carrito.length) {
            break;
        } else {
            alert("Opción no válida. Por favor, selecciona una opción válida.");
        }
    }
}

while (true) {
    const opcion = parseInt(prompt("Bienvenido a tu tienda de perfumes online.\nSelecciona una opción:\n\n1- Ver catálogo de perfumes\n2- Buscar un perfume\n3- Ver carrito de compras\n4- Finalizar compra\n5- Salir"));

    if (opcion === 1) {
        const catalogo = mostrarCatalogoPerfumes();
        const seleccion = seleccionarProducto(catalogo);
        const productoSeleccionado = perfumes[seleccion];

        const confirmacion = confirmarAgregarAlCarrito(productoSeleccionado);
        if (confirmacion) {
            agregarAlCarrito(productoSeleccionado);
        } else {
            alert("Producto no agregado al carrito.");
        }


    } else if (opcion === 2) {
        const resultadosBusqueda = buscarPerfume();
        if (resultadosBusqueda.length > 0) {
            const catalogoFiltrado = mostrarCatalogoFiltrado(resultadosBusqueda);
            const seleccion = seleccionarProductoFiltrado(resultadosBusqueda, catalogoFiltrado);
            const productoSeleccionado = resultadosBusqueda[seleccion];

            const confirmacion = confirmarAgregarAlCarritoFiltrado(productoSeleccionado);
            if (confirmacion === "1") {
                carrito.push(productoSeleccionado);
                alert("Producto agregado al carrito.");
            } else {
                alert("Producto no agregado al carrito.");
            }
        }

    } else if (opcion === 3) {
        if (carrito.length > 0) {
            const detallesCarrito = mostrarDetallesCarrito(carrito);

            while (true) {
                const confirmacionCarrito = parseInt(prompt(detallesCarrito));

                switch (confirmacionCarrito) {
                    case 1:
                        break;
                    case 2:
                        quitarProductoDelCarrito(carrito);
                        break;
                    default:
                        alert("Opción no válida. Por favor, selecciona una opción válida.");
                        break;
                }

                if (confirmacionCarrito === 1 || confirmacionCarrito === 2) {
                    break;
                }
            }
        } else {
            alert("El carrito está vacío.");
        }
    } else if (opcion === 4) {
        const detallesCarrito = comprarDetallesCarrito(carrito);

        while (true) {
            const confirmacionFinalizar = parseInt(prompt(detallesCarrito));

            switch (confirmacionFinalizar) {
                case 1:
                    alert("¡Compra finalizada! Gracias por tu compra.");
                    carrito = [];
                    break;
                case 2:
                    alert("No has finalizado la compra. Todavía hay productos en tu carrito.");
                    break;
                case 3:
                    quitarProductoDelCarrito(carrito);
                    break;
                default:
                    alert("Opción no válida. Por favor, selecciona una opción válida.");
                    break;
            }

            if (confirmacionFinalizar === 1 || confirmacionFinalizar === 2) {
                break;
            }
        }

    } else if (opcion === 5) {
        alert("¡Gracias por visitarnos! ¡Hasta luego!");
        break;
    } else {
        alert("Opción no válida. Por favor, selecciona una opción válida.");
    }
}
