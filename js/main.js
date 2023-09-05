const perfumes = [
    { marca: "Dior", nombre: "EDP Sauvage", precio: 67.000, imagen: "./img/sauvage.webp" },
    { marca: "Boss", nombre: "EDP Boss Bottled", precio: 63.000, imagen: "./img/boss-bottle.jpg" },
    { marca: "Lacoste", nombre: "L.12.12 Blanc", precio: 35.435, imagen: "./img/L.12.12-blanc.jpg" },
    { marca: "Givenchy", nombre: "Gentleman", precio: 66.200, imagen: "./img/gentleman.jpg" },
    { marca: "Dolce & Gabbana", nombre: "Light Blue Pour Homme", precio: 60.750, imagen: "./img/light-blue.jpg" },
    { marca: "Yves Saint Laurent", nombre: "L´Homme", precio: 54.915, imagen: "./img/L´homme.jpg" },
    { marca: "Ralph Lauren", nombre: "Polo Blue", precio: 54.315, imagen: "./img/polo-blue.webp" },
    { marca: "Issey Miyake", nombre: "L´eau D´issey Pour Homme", precio: 58.850, imagen: "./img/L´eau-D´issey.webp" },
    { marca: "Paco Rabbane", nombre: "One Million", precio: 52.550, imagen: "./img/one-million.webp" },
    { marca: "Paco Rabbane", nombre: "Phantom", precio: 54.650, imagen: "./img/phantom.jpg" },
];

const fraganciasHombre = document.getElementById("fraganciasHombre");

perfumes.forEach((producto, index) => {
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
});

function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
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
                <p>${producto.marca} - ${producto.nombre}</p>
                <p>Precio: $${producto.precio.toFixed(3)}</p>
                <button class="btn btn-primary quitarProducto" data-index="${index}">Quitar producto</button>
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

mostrarCarrito();

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








