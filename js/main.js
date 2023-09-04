const perfumes = [
    { marca: "dior", nombre: "edp sauvage", precio: 67000, imagen: "./img/sauvage.webp" },
    { marca: "boss", nombre: "edp boss bottled", precio: 63000, imagen: "./img/boss-bottle.jpg" },
    { marca: "lacoste", nombre: "l.12.12 blanc", precio: 35435, imagen: "./img/L.12.12-blanc.jpg" },
    { marca: "givenchy", nombre: "gentleman", precio: 66200, imagen: "./img/gentleman.jpg" },
    { marca: "dolce & Gabbana", nombre: "light blue pour homme", precio: 60750, imagen: "./img/light-blue.jpg" },
    { marca: "yves Saint Laurent", nombre: "l´homme", precio: 54915, imagen: "./img/L´homme.jpg" },
    { marca: "ralph Lauren", nombre: "polo blue", precio: 54315, imagen: "./img/polo-blue.webp" },
    { marca: "issey Miyake", nombre: "l´eau d´issey pour homme", precio: 58850, imagen: "./img/L´eau-D´issey.webp" },
    { marca: "paco Rabbane", nombre: "one million", precio: 52550, imagen: "./img/one-million.webp" },
    { marca: "paco Rabbane", nombre: "phantom", precio: 54650, imagen: "./img/phantom.jpg" },
];

const carrito = [];

function buscarPerfumes(busqueda) {
    busqueda = busqueda.toLowerCase();
    return perfumes.filter(perfume =>
        perfume.nombre.toLowerCase().includes(busqueda) ||
        perfume.marca.toLowerCase().includes(busqueda)
    );
}

const formBuscar = document.querySelector("form");

formBuscar.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputBuscar = document.getElementById("inputBuscar");
    const busqueda = inputBuscar.value;
    const resultados = buscarPerfumes(busqueda);
    mostrarResultados(resultados);
});

function mostrarResultados(resultados) {
    const resultadosFragancias = document.getElementById("fraganciasHombre");
    resultadosFragancias.innerHTML = "";

    if (resultados.length > 0) {
        for (const el of resultados) {
            const cardHTML = `
                <div class="card" style="width: 18rem;">
                    <img src="${el.imagen}" class="card-img-top" alt="${el.nombre}">
                    <div class="card-body">
                        <h5 class="card-title marca">${el.marca}</h5>
                        <p class="card-text nombre">${el.nombre}</p>
                        <h5 class="precio">$${el.precio}</h5>
                        <a href="#" class="btn btn-primary addCarrito">Agregar al carrito</a>
                    </div>
                </div>
            `;

            resultadosFragancias.innerHTML += cardHTML;
        };
    } else {
        resultadosFragancias.innerHTML = "<p>No se encontraron resultados.</p>";
    }
}



