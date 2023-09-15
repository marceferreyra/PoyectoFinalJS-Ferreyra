const perfumes = [
    { marca: "Armani", nombre: "Armani Code EDT", precio: 75000 , imagen: "./img/armaniCodeEDT.jpg" , presentacion: "75ml" },
    { marca: "Armani", nombre: "Armani Code Parfum", precio: 88900 , imagen: "./img/armaniCodeParfum.jpg" , presentacion: "75ml" },
    { marca: "Armani", nombre: "Acqua di Gio Homme Parfum", precio: 86900 , imagen: "./img/armaniAcqua.webp" , presentacion: "75ml" },
];

const fraganciasHombre = document.getElementById("fraganciasHombre");

mostrarCarrito()

perfumes.forEach((producto, index) => {
    const cardHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
            <h5 class="card-title marca">${producto.marca}</h5>
            <p class="card-text nombre">${producto.nombre} - ${producto.presentacion}ml</p>
            <h5 class="precio">$${producto.precio}</h5>
            <a href="#" class="btn btn-primary addCarrito" data-producto-index="${index}">Agregar al carrito</a>
        </div>
    </div>
    `;

    const cardPerfume = document.createElement("div");
    cardPerfume.innerHTML = cardHTML;

    fraganciasHombre.appendChild(cardPerfume);
});

function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    Swal.fire({
        title: "Producto agregado al carrito",
        confirmButtonText: "Aceptar", 
        customClass: {
          confirmButton: "my-confirm-button", 
        },
      });
    
}

function calcularTotalCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let total = 0;

    carrito.forEach((producto) => {
        total += producto.precio;
    });

    return total.toFixed(3);
}

function mostrarCarrito() {
    const carritoContainer = document.getElementById("carrito");
    carritoContainer.innerHTML = "";
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.forEach((producto, index) => {
        const itemCarrito = document.createElement("div");
        itemCarrito.classList.add("item-carrito");
        itemCarrito.innerHTML = `
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <p id="pNombre">${producto.marca} - ${producto.nombre}</p>
                <p id="pPrecio">Precio: $${producto.precio.toFixed(3)}</p>
                <button class="btn btn-primary quitarProducto" data-index="${index}">Quitar</button>
            </div>        
        `;
        carritoContainer.appendChild(itemCarrito);
        const botonQuitar = itemCarrito.querySelector(".quitarProducto");
        botonQuitar.addEventListener("click", () => {
            event.preventDefault()
            quitarDelCarrito(index);
        });
    });

    const totalCarrito = document.createElement("p");
    totalCarrito.textContent = `Total: $${calcularTotalCarrito()}`;
    carritoContainer.appendChild(totalCarrito);
}


const botonesAgregar = document.querySelectorAll(".addCarrito");
botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", () => {
        event.preventDefault()
        const productoIndex = parseInt(boton.getAttribute("data-producto-index"));
        const producto = perfumes[productoIndex];
        agregarAlCarrito(producto);
        mostrarCarrito();
    });
});

function quitarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito(); 
}

const botonFinalizarCompraContainer = document.getElementById("botonFinalizarCompra");

const botonFinalizarCompra = document.createElement("button");
botonFinalizarCompra.id = "finalizarCompra";
botonFinalizarCompra.classList.add("btn", "btn-primary");
botonFinalizarCompra.textContent = "Finalizar Compra";

botonFinalizarCompra.addEventListener("click", () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length === 0) {
        Swal.fire({
            title: "El carrito esta vacío. Agregue productos.",
            confirmButtonText: "Aceptar", 
            customClass: {
              confirmButton: "my-confirm-button", 
            },
          });
    } else {        
        localStorage.removeItem("carrito");
        Swal.fire({
            title: 'Su compra fue realizada con éxito',
            icon: 'success',
            confirmButtonText: "Aceptar", 
            customClass: {
              confirmButton: 'my-confirm-button',
            }
          });
    mostrarCarrito();
    }
});

botonFinalizarCompraContainer.appendChild(botonFinalizarCompra);

//buqueda

const inputBuscar = document.getElementById("inputBuscar");
const formularioBuscar = document.getElementById("btnBuscar");

formularioBuscar.addEventListener("click", function (event) {
    event.preventDefault(); 
    const valorBusqueda = inputBuscar.value.toLowerCase(); 
    const productosFiltrados = perfumes.filter((producto) => {
        const nombreProducto = producto.nombre.toLowerCase();
        const marcaProducto = producto.marca.toLowerCase();
        return nombreProducto.includes(valorBusqueda) || marcaProducto.includes(valorBusqueda);
    });

    mostrarResultadosFiltrados(productosFiltrados);
});


function mostrarResultadosFiltrados(resultados) {
    const fraganciasHombre = document.getElementById("fraganciasHombre");
    fraganciasHombre.innerHTML = "";

    resultados.forEach((producto, index) => {
        const cardHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
                <h5 class="card-title marca">${producto.marca}</h5>
                <p class="card-text nombre">${producto.nombre}</p>
                <h5 class="precio">$${producto.precio.toFixed(3)}</h5>
                <a href="#" class="btn btn-primary addCarrito" data-producto-index="${index}">Agregar al carrito</a>
            </div>
        </div>
        `;

        const cardPerfume = document.createElement("div");
        cardPerfume.innerHTML = cardHTML;
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
}






