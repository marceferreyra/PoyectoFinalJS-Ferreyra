const url = "./data/data.json";
let productos = []

fetch(url)
    .then(res => res.json())
    .then(data => {
        productos = data;
        mostrarProductos(productos);
        initBusqueda();
        calcularTotalCarrito();
        mostrarCarrito();
    });

const fraganciasHombre = document.querySelector(`#fraganciasHombre`);

function mostrarProductos(productos) {
    productos.forEach((producto) => {
        const cardPerfume = document.createElement("div");
        cardPerfume.innerHTML = `<div class="card" style="width: 18rem;">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
                <h5 class="card-title marca">${producto.marca}</h5>
                <p class="card-text nombre">${producto.nombre}</p>
                <h5 class="precio">$${producto.precio} - ${producto.presentacion}</h5>
                ${productoEnCarrito(producto.id) ? `<a href="#" class="btn btn-primary addCarrito" id="${producto.id}"><img src="img/bolsaBlanco.webp" alt="bolsaCompra"></a>` : `<a href="#" class="btn btn-primary addCarrito" id="${producto.id}" data-original-text="Agregar al carrito">Agregar al carrito</a>`}
            </div>
        </div>`;
        fraganciasHombre.appendChild(cardPerfume);

    });
    const botonesAgregar = document.querySelectorAll(".addCarrito");

    botonesAgregar.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            e.preventDefault();
            agregarAlCarrito(e, productos);
        });
    });

    if (!localStorage.getItem('carrito')) {
        localStorage.setItem('carrito', JSON.stringify([]));
    }

    function productoEnCarrito(id) {
        const carrito = JSON.parse(localStorage.getItem('carrito'));
        return carrito && carrito.some((producto) => producto.id === id);
    }
}

function agregarAlCarrito(e, productos) {
    const productoElegido = productos.find(el => el.id === parseInt(e.target.id));
    if (productoElegido) {
        let carrito = JSON.parse(localStorage.getItem('carrito'));

        if (!carrito) {
            carrito = [];
        }

        const productoExistente = carrito.find(p => p.id === productoElegido.id);

        if (productoExistente) {
            productoExistente.cantidad += 1;
        } else {
            productoElegido.cantidad = 1;
            carrito.push(productoElegido);
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));
        Toastify({
            text: "Item agregado al carrito",
            style: {
                background: "linear-gradient(to right, #2e2e2e, #151515)",
            },
            offset: {
                x: 0,
                y: 60,
            },
            duration: 1500
        }).showToast();
        const boton = e.target;
        boton.innerHTML = `<img src="img/bolsaBlanco.webp" alt="bolsaCompra">`;
    }
    mostrarCarrito();
    return;
}


function mostrarCarrito() {
    const carritoContainer = document.getElementById('carrito');
    if (!carritoContainer) {
        return;
    }

    carritoContainer.innerHTML = '';
    const carrito = JSON.parse(localStorage.getItem('carrito'));

    if (!carrito) {
        return;
    }

    const carritoFiltrado = carrito.filter((producto) => producto.cantidad > 0);

    carritoFiltrado.forEach((producto) => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');
        productoDiv.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <p id="pNombre">${producto.marca} - ${producto.nombre}</p>
        <p id="pPrecio">Precio: $${producto.precio * producto.cantidad}</p>
        <div class="cantidad-container">
            <button class="btn btn-primary menosCantidad" data-id="${producto.id}">-</button>
                        <input type="number" class="cantidad" value="${producto.cantidad}" min="1">
            <button class="btn btn-primary masCantidad" data-id="${producto.id}">+</button>
        </div>
        <button class="btn btn-primary quitarProducto" id="${producto.id}">Quitar</button>
    `;

        const menosCantidadButton = productoDiv.querySelector('.menosCantidad');
        menosCantidadButton.addEventListener('click', (e) => {
            modificarCantidad(e, carrito, -1);
            mostrarCarrito();
        });

        const masCantidadButton = productoDiv.querySelector('.masCantidad');
        masCantidadButton.addEventListener('click', (e) => {
            modificarCantidad(e, carrito, 1);
            mostrarCarrito();
        });

        const cantidadInput = productoDiv.querySelector('.cantidad');
        cantidadInput.addEventListener('change', (e) => {
            modificarCantidadDesdeInput(e, carrito);
        });

        const quitarButton = productoDiv.querySelector('.quitarProducto');
        quitarButton.addEventListener('click', (e) => {
            quitarProducto(e, carrito);
            mostrarCarrito();
        });

        carritoContainer.appendChild(productoDiv);
    });

    const totalCarrito = document.createElement("p");
    totalCarrito.textContent = `Total: $${calcularTotalCarrito()}`;
    carritoContainer.appendChild(totalCarrito);
}


function modificarCantidad(e, carrito, cambio) {
    const productoId = e.target.getAttribute('data-id');
    const producto = carrito.find((p) => p.id === parseInt(productoId));

    if (producto) {
        const nuevaCantidad = producto.cantidad + cambio;

        if (nuevaCantidad >= 1) {
            producto.cantidad = nuevaCantidad;
            localStorage.setItem('carrito', JSON.stringify(carrito));
            mostrarCarrito();
        }
    }
}

function modificarCantidadDesdeInput(e, carrito) {
    const productoId = e.target.parentElement.querySelector('.menosCantidad').getAttribute('data-id');
    const nuevaCantidad = parseInt(e.target.value);

    const producto = carrito.find((p) => p.id === parseInt(productoId));

    if (producto) {
        if (nuevaCantidad < 0) {
            e.target.value = 0;
        } else {
            producto.cantidad = nuevaCantidad;
            localStorage.setItem('carrito', JSON.stringify(carrito));
            mostrarCarrito();
        }
    }
}

function restaurarTextoBoton(productoId) {
    const boton = document.getElementById(productoId);
    const originalText = boton.getAttribute('data-original-text');
    boton.textContent = originalText;
}

function quitarProducto(e, carrito) {
    const productoId = parseInt(e.target.id);
    const nuevoCarrito = carrito.filter((producto) => producto.id !== productoId);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    mostrarCarrito();

    restaurarTextoBoton(productoId);

    Toastify({
        text: "Item removido del carrito",
        style: {
            background: "linear-gradient(to right, #2e2e2e, #151515)",
        },
        offset: {
            x: 0,
            y: 20,
        },
        duration: 1500
    }).showToast();
}



function calcularTotalCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let total = 0;

    carrito.forEach((producto) => {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;
    });

    return total;
}

const botonFinalizarCompraContainer = document.getElementById("botonFinalizarCompra");

const botonFinalizarCompra = document.createElement("button");
botonFinalizarCompra.id = "finalizarCompra";
botonFinalizarCompra.classList.add("btn", "btn-primary");
botonFinalizarCompra.textContent = "Finalizar Compra";
botonFinalizarCompraContainer.appendChild(botonFinalizarCompra);

botonFinalizarCompra.addEventListener("click", () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length === 0) {
        Swal.fire({
            title: "El carrito está vacío. Agregue productos.",
            confirmButtonText: "Aceptar",
            customClass: {
                confirmButton: "my-confirm-button",
            },
        });
    } else {
        const productoIds = carrito.map((producto) => producto.id);
        localStorage.removeItem("carrito");
        productos = [...productos];
        Swal.fire({
            title: 'Su compra fue realizada con éxito',
            icon: 'success',
            confirmButtonText: "Aceptar",
            customClass: {
                confirmButton: 'my-confirm-button',
            }
        });
        mostrarCarrito();

        productoIds.forEach((productoId) => {
            restaurarTextoBoton(productoId);
        });
    }
});

botonFinalizarCompraContainer.appendChild(botonFinalizarCompra);

//buqueda

const inputBuscar = document.getElementById("inputBuscar");

function initBusqueda() {
    const inputBuscar = document.getElementById("inputBuscar");
    const sinResultados = document.getElementById("sinResultados")
    let mensajeAgregado = false;

    inputBuscar.addEventListener("input", function () {
        const valorBusqueda = inputBuscar.value.toLowerCase();
        const productosFiltrados = productos.filter((producto) => {
            const nombreProducto = producto.nombre.toLowerCase();
            const marcaProducto = producto.marca.toLowerCase();
            return nombreProducto.includes(valorBusqueda) || marcaProducto.includes(valorBusqueda);
        });

        mostrarResultadosFiltrados(productosFiltrados);

        if (productosFiltrados.length === 0 && !mensajeAgregado) {
            const mensajeSinResultados = document.createElement("p");
            mensajeSinResultados.innerText = "No hay coincidencias";
            sinResultados.appendChild(mensajeSinResultados);
            mensajeAgregado = true;
        } else if (productosFiltrados.length > 0 && mensajeAgregado) {
            sinResultados.innerHTML = "";
            mensajeAgregado = false;
        }
    });
}

function mostrarResultadosFiltrados(productosFiltrados) {
    fraganciasHombre.innerHTML = '';

    productosFiltrados.forEach((producto) => {
        const cardPerfume = document.createElement("div");
        cardPerfume.innerHTML = `<div class="card" style="width: 18rem;">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
                <h5 class="card-title marca">${producto.marca}</h5>
                <p class="card-text nombre">${producto.nombre}</p>
                <h5 class="precio">$${producto.precio} - ${producto.presentacion}</h5>
                <a href="#" class="btn btn-primary addCarrito" id="${producto.id}">Agregar al carrito</a>
            </div>
        </div>`;
        fraganciasHombre.appendChild(cardPerfume);
    });

    const botonesAgregar = document.querySelectorAll(".addCarrito");

    botonesAgregar.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            e.preventDefault();
            agregarAlCarrito(e, productosFiltrados);
        });
    });
}

const marcaItems = document.querySelectorAll(".marca-item");
marcaItems.forEach((marcaItem) => {
    marcaItem.addEventListener("click", (e) => {
        e.preventDefault();
        const marcaSeleccionada = e.target.innerText;
        const productosFiltrados = productos.filter((producto) =>
            producto.marca.toLowerCase() === marcaSeleccionada.toLowerCase()
        );
        mostrarResultadosFiltrados(productosFiltrados);
    });
});

const presentacionItems = document.querySelectorAll(".presentacion-item");
presentacionItems.forEach((presentacionItem) => {
    presentacionItem.addEventListener("click", (e) => {
        e.preventDefault();
        const presentacionSeleccionada = e.target.innerText;
        const productosFiltrados = productos.filter((producto) =>
            producto.presentacion.toLowerCase() === presentacionSeleccionada.toLowerCase()
        );
        mostrarResultadosFiltrados(productosFiltrados);
    });
});

//login

let user = "Marce"
let contraseña = "123456"

const btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener('click', iniciarSesion);

const menuUsuario = document.querySelector('.menuUsuario');
let bienvenidaUsuario;
let sesionActiva = false;

function iniciarSesion() {
    if (sesionActiva) {
        Swal.fire({
            icon: 'warning',
            title: 'Sesión activa',
            text: 'Ya hay una sesión activa. Cierra la sesión actual para iniciar con otra cuenta.',
            confirmButtonText: 'Aceptar',
            customClass: {
                confirmButton: 'my-confirm-button',
            }
        });
        return;
    }

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username === user && password === contraseña) {
        Swal.fire({
            icon: 'success',
            title: 'Has iniciado sesión',
            text: `¡Bienvenido, ${username}!`,
            confirmButtonText: 'Aceptar',
            customClass: {
                confirmButton: 'my-confirm-button',
            }
        });
        const userData = {
            username: username,
            password: password,

        };

        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password);

        bienvenidaUsuario = document.createElement('span');
        bienvenidaUsuario.innerHTML = `
        ¡Bienvenido, ${username}! <button type="button" class="btn btn-primary" id="btnCierreDeSesion"><img src="./img/cerrarSesion.png" alt="cerrar sesion" id="cierreDeSesion"></button>`;
        menuUsuario.appendChild(bienvenidaUsuario);

        const btnSalir = document.getElementById('cierreDeSesion');
        btnSalir.addEventListener('click', cerrarSesion);

        sesionActiva = true;
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Ups!',
            text: 'Usuario o contraseña incorrectas.',
            confirmButtonText: 'Aceptar',
            customClass: {
                confirmButton: 'my-confirm-button',
            }
        });
    }
}

function cerrarSesion() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
    bienvenidaUsuario.innerHTML = '';
    Swal.fire({
        icon: 'info',
        title: 'Sesión cerrada',
        text: 'Hasta luego.',
        confirmButtonText: 'Aceptar',
        customClass: {
            confirmButton: 'my-confirm-button',
        }
    });
    sesionActiva = false;
}

