const perfumes = [
    { marca: "Armani", nombre: "Armani Code EDT", precio: 74900, imagen: "./img/armaniCodeEDT.jpg", presentacion: "75ml" },
    { marca: "Armani", nombre: "Armani Code Parfum", precio: 88900, imagen: "./img/armaniCodeParfum.jpg", presentacion: "75ml" },
    { marca: "Armani", nombre: "Acqua di Gio Homme Parfum", precio: 86900, imagen: "./img/armaniAcqua.webp", presentacion: "75ml" },
    { marca: "Carolina Herrera", nombre: "212 VIP Black LOVE NY EDP", precio: 61500, imagen: "img/CH212VipNY.jpg", presentacion: "100ml" },
    { marca: "Carolina Herrera", nombre: "212 VIP black EDP", precio: 68350, imagen: "./img/CH212VipEDP.jpg", presentacion: "100ml" },
    { marca: "Carolina Herrera", nombre: "Bad Boy Le Parfum", precio: 79800, imagen: "./img/CHBadBoy.jpg", presentacion: "100ml" },
    { marca: "Dior", nombre: "Sauvage", precio: 79100, imagen: "img/diorSauvage.webp", presentacion: "100ml" },
    { marca: "Dior", nombre: "Fahrenheit EDT", precio: 79000, imagen: "img/diorFahrenheit.jpg", presentacion: "100ml" },
    { marca: "Dior", nombre: "Dior Homme Intense EDP", precio: 92900, imagen: "img/diorHommeIntense.jpg", presentacion: "100ml" },
    { marca: "Dolce & Gabbana", nombre: "Light Blue EDT", precio: 85060, imagen: "img/D&GLightBlue.webp", presentacion: "125ml" },
    { marca: "Dolce & Gabbana", nombre: "K by D&G EDP", precio: 107150, imagen: "img/D&GKing.jpg", presentacion: "100ml" },
    { marca: "Dolce & Gabbana", nombre: "Dolce Pour Homme EDT", precio: 85060, imagen: "img/D&GDolce.jpg", presentacion: "125ml" },
    { marca: "Givenchy", nombre: "Gentleman Society", precio: 91400, imagen: "img/givenchyGentlemanSociety.jpg", presentacion: "100ml" },
    { marca: "Givenchy", nombre: "Gentleman EDP", precio: 87000, imagen: "img/givenchyGentleman.jpg", presentacion: "100ml" },
    { marca: "Givenchy", nombre: "Blue Label EDT", precio: 75600, imagen: "img/givenchyBlueLabel.jpg", presentacion: "100ml" },
    { marca: "Hugo Boss", nombre: "BOSS Bottled EDT", precio: 72400, imagen: "img/bossBottledEDT.jpg", presentacion: "100ml" },
    { marca: "Hugo Boss", nombre: "BOSS Bottled Parfum", precio: 87000, imagen: "img/bossBottledParfum.jpg", presentacion: "100ml" },
    { marca: "Hugo Boss", nombre: "BOSS The Scent EDT", precio: 83400, imagen: "img/bossScent.jpg", presentacion: "100ml" },
    { marca: "Issey Miyake", nombre: "L´Eau D´Issey EDT", precio: 82400, imagen: "img/miyakeLeauDissey.webp", presentacion: "75ml" },
    { marca: "Issey Miyake", nombre: "L´Eau D´Issey Eau & Cedre EDT", precio: 106600, imagen: "img/miyakeLeauDisseyEau&Cedre.jpg", presentacion: "100ml" },
    { marca: "Issey Miyake", nombre: "Fusion D´Issey EDT", precio: 73690, imagen: "img/miyakeFusion.jpg", presentacion: "50ml" },
    { marca: "Lacoste", nombre: "L.12.12 Blanc EDP", precio: 42525, imagen: "img/lacosteL1212.jpg", presentacion: "100ml" },
    { marca: "Lacoste", nombre: "L´Homme EDT", precio: 37530, imagen: "img/lacosteLhomme.jpg", presentacion: "100ml" },
    { marca: "Lacoste", nombre: "Matchpoint EDT", precio: 38740, imagen: "img/lacosteMatchPoint.webp", presentacion: "100ml" },
    { marca: "Paco Rabanne", nombre: "One MIllion EDT", precio: 70950, imagen: "img/PacoOneMillion.webp", presentacion: "100ml" },
    { marca: "Paco Rabanne", nombre: "Phantom EDT", precio: 73800, imagen: "img/PacoPhantom.jpg", presentacion: "100ml" },
    { marca: "Paco Rabanne", nombre: "Invictus EDT", precio: 70950, imagen: "img/pacoInvictus.jpg", presentacion: "100ml" },
    { marca: "Ralph Lauren", nombre: "Polo Blue EDT", precio: 79900, imagen: "img/ralphLaurenBlue.webp", presentacion: "125ml" },
    { marca: "Ralph Lauren", nombre: "Polo Red EDT", precio: 79900, imagen: "img/ralphLaurenRed.jpeg", presentacion: "125ml" },
    { marca: "Ralph Lauren", nombre: "Polo EDT", precio: 79900, imagen: "img/ralphLaurenEDT.jpg", presentacion: "118ml" },
    { marca: "Yves Saint Laurent", nombre: "Opium EDT", precio: 92900, imagen: "img/YSLOpium.jpg", presentacion: "100ml" },
    { marca: "Yves Saint Laurent", nombre: "Y Men Intense EDP", precio: 99900, imagen: "img/YSLYIntense.jpg", presentacion: "100ml" },
    { marca: "Yves Saint Laurent", nombre: "L´Homme", precio: 80900, imagen: "img/YSLLhomme.jpg", presentacion: "100ml" },


];

const fraganciasHombre = document.getElementById("fraganciasHombre");

mostrarCarrito()

perfumes.forEach((producto, index) => {
    const cardHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
            <h5 class="card-title marca">${producto.marca}</h5>
            <p class="card-text nombre">${producto.nombre}</p>
            <h5 class="precio">$${producto.precio} - ${producto.presentacion}</h5>
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

    return total;
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
                <p id="pPrecio">Precio: $${producto.precio}</p>
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






