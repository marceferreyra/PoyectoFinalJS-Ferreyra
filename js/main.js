const url = "./data/data.json";
let productos = []

fetch(url)
    .then(res => res.json())
    .then(data => {
        productos = data;
        mostrarProductos(productos);
        mostrarCarrito();
        initBusqueda(); 
    });

const fraganciasHombre = document.querySelector(`#fraganciasHombre`);

mostrarCarrito()

function mostrarProductos(productos) {
    productos.forEach((producto) => {
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
            agregarAlCarrito(e, productos);
        });
    });

    if (!localStorage.getItem('carrito')) {
        localStorage.setItem('carrito', JSON.stringify([]));
    }
}

    function agregarAlCarrito(e, productos) {
        const productoElegido = productos.find(el => el.id === parseInt(e.target.id));
        if (productoElegido) {
            const carrito = JSON.parse(localStorage.getItem('carrito'));
            carrito.push(productoElegido);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            alert('Producto agregado al carrito');
        }
        mostrarCarrito()
    }


    function mostrarCarrito() {
        const carritoContainer = document.getElementById('carrito');
        carritoContainer.innerHTML = '';
        const carrito = JSON.parse(localStorage.getItem('carrito'));

        carrito.forEach((producto) => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto');
            productoDiv.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <p id="pNombre">${producto.marca} - ${producto.nombre}</p>
                    <p id="pPrecio">Precio: $${producto.precio}</p>
                    <button class="btn btn-primary quitarProducto" id="${producto.id}">Quitar</button>
                `;

            const quitarButton = productoDiv.querySelector('.quitarProducto');
            quitarButton.addEventListener('click', (e) => {
                quitarProducto(e, carrito);
            });

            carritoContainer.appendChild(productoDiv);
        });

        const totalCarrito = document.createElement("p");
        totalCarrito.textContent = `Total: $${calcularTotalCarrito()}`;
        carritoContainer.appendChild(totalCarrito);
    }

    function quitarProducto(e, carrito) {
        const productoId = parseInt(e.target.id);
        const nuevoCarrito = carrito.filter((producto) => producto.id !== productoId);
        localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
        e.target.parentElement.remove();
        mostrarCarrito();
    }

    mostrarCarrito();

    function calcularTotalCarrito() {
        const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        let total = 0;

        carrito.forEach((producto) => {
            total += producto.precio;
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

        if (carrito.length > 0) {

            localStorage.setItem("carrito", JSON.stringify([]));
            alert("Gracias por tu compra");
        } else {
            alert("El carrito está vacío. Agrega productos antes de finalizar la compra.");
        }

        mostrarCarrito();
    });

    botonFinalizarCompraContainer.appendChild(botonFinalizarCompra);

    //buqueda

    const inputBuscar = document.getElementById("inputBuscar");
    const botonBuscar = document.getElementById("btnBuscar");

    function initBusqueda() {
        const inputBuscar = document.getElementById("inputBuscar");
        const botonBuscar = document.getElementById("btnBuscar");
    
        inputBuscar.addEventListener("input", function () {
            const valorBusqueda = inputBuscar.value.toLowerCase();
            const productosFiltrados = productos.filter((producto) => {
                const nombreProducto = producto.nombre.toLowerCase();
                const marcaProducto = producto.marca.toLowerCase();
                return nombreProducto.includes(valorBusqueda) || marcaProducto.includes(valorBusqueda);
            });
    
            mostrarResultadosFiltrados(productosFiltrados);
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

    /*function mostrarResultadosFiltrados(resultados) {
        const fraganciasHombre = document.getElementById("fraganciasHombre");
        fraganciasHombre.innerHTML = "";

        resultados.forEach((producto) => {
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


            const botonAgregar = cardPerfume.querySelector(".addCarrito");
            botonAgregar.addEventListener("click", () => {
                event.preventDefault()
                const productoIndex = parseInt(botonAgregar.getAttribute("data-producto-index"));
                const producto = resultados[productoIndex];
                agregarAlCarrito(producto);
                mostrarCarrito();
            });
        });
    }*/
