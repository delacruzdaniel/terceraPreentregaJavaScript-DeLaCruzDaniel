// PRODUCTOS
const productos = [
    // Gorras CapsLabs
    {
        id: "gorra-capslab-01",
        titulo: "Gorra Capslab Super Saiyan Gokú",
        imagen: "./img/capslab/01.jpeg",
        categoria: {
            nombre: "CapsLab",
            id: "capslab"
        },
        precio: 1000
    },
    {
        id: "gorra-capslab-02",
        titulo: "Gorra Capslab Daffy duck",
        imagen: "./img/capslab/02.jpeg",
        categoria: {
            nombre: "CapsLab",
            id: "capslab"
        },
        precio: 1000
    },
    {
        id: "gorra-capslab-03",
        titulo: "Gorra Capslab Majin Vegeta",
        imagen: "./img/capslab/03.jpeg",
        categoria: {
            nombre: "CapsLab",
            id: "capslab"
        },
        precio: 1000
    },
    {
        id: "gorra-capslab-04",
        titulo: "Gorra Capslab Looney Toones Bugs Bunny",
        imagen: "./img/capslab/04.jpeg",
        categoria: {
            nombre: "CapsLab",
            id: "capslab"
        },
        precio: 1000
    },
    {
        id: "gorra-capslab-05",
        titulo: "Gorra Capslab Looney Toones Tweety",
        imagen: "./img/capslab/05.jpeg",
        categoria: {
            nombre: "CapsLab",
            id: "capslab"
        },
        precio: 1000
    },
    {
        id: "gorra-capslab-06",
        titulo: "Gorra Capslab Looney Toones Taz",
        imagen: "./img/capslab/06.jpeg",
        categoria: {
            nombre: "CapsLab",
            id: "capslab"
        },
        precio: 1000
    },
    {
        id: "gorra-capslab-07",
        titulo: "Gorra Capslab Itachi",
        imagen: "./img/capslab/07.jpeg",
        categoria: {
            nombre: "CapsLab",
            id: "capslab"
        },
        precio: 1000
    },
    {
        id: "gorra-capslab-08",
        titulo: "Gorra Capslab Looney Toones",
        imagen: "./img/capslab/08.jpeg",
        categoria: {
            nombre: "CapsLab",
            id: "capslab"
        },
        precio: 1000
    },

    // Gorras Goorin Broos
    {
        id: "gorra-gorin-broos-01",
        titulo: "Gorra Gorin Broos Fox",
        imagen: "./img/goorinBros/01.jpeg",
        categoria: {
            nombre: "Gorin Broos",
            id: "gorinbroos"
        },
        precio: 1000
    },
    {
        id: "gorra-gorin-broos-02",
        titulo: "Gorra Gorin Broos Fox Black",
        imagen: "./img/goorinBros/02.jpeg",
        categoria: {
            nombre: "Gorin Broos",
            id: "gorinbroos"
        },
        precio: 1000
    },
    {
        id: "gorra-gorin-broos-03",
        titulo: "Gorra Gorin Broos High Giraffe",
        imagen: "./img/goorinBros/03.jpeg",
        categoria: {
            nombre: "Gorin Broos",
            id: "gorinbroos"
        },
        precio: 1000
    },
    {
        id: "gorra-gorin-broos-04",
        titulo: "Gorra Gorin Broos Extra Large Elepanth",
        imagen: "./img/goorinBros/04.jpeg",
        categoria: {
            nombre: "Gorin Broos",
            id: "gorinbroos"
        },
        precio: 1000
    },
    {
        id: "gorra-gorin-broos-05",
        titulo: "Gorra Gorin Broos Bee Queen",
        imagen: "./img/goorinBros/05.jpeg",
        categoria: {
            nombre: "Gorin Broos",
            id: "gorinbroos"
        },
        precio: 1000
    },
    {
        id: "gorra-gorin-broos-06",
        titulo: "Gorra Gorin Broos Alacrán",
        imagen: "./img/goorinBros/06.jpeg",
        categoria: {
            nombre: "Gorin Broos",
            id: "gorinbroos"
        },
        precio: 1000
    },
    {
        id: "gorra-gorin-broos-07",
        titulo: "Gorra Gorin Broos Gorilla Boss",
        imagen: "./img/goorinBros/07.jpeg",
        categoria: {
            nombre: "Gorin Broos",
            id: "gorinbroos"
        },
        precio: 1000
    },
    {
        id: "gorra-gorin-broos-08",
        titulo: "Gorra Gorin Broos Panter",
        imagen: "./img/goorinBros/08.jpeg",
        categoria: {
            nombre: "Gorin Broos",
            id: "gorinbroos"
        },
        precio: 1000
    },
    
    // Gorras de marcas reconocidas
    // Adidas
    {
        id: "gorra-adidas-01",
        titulo: "Gorra Adidas Gray Camouflage",
        imagen: "./img/marcasReconocidas/adidas/01.jpeg",
        categoria: {
            nombre: "Adidas",
            id: "marcasreconocidas"
        },
        precio: 1000
    },
    {
        id: "gorra-adidas-02",
        titulo: "Gorra Adidas Black",
        imagen: "./img/marcasReconocidas/adidas/02.jpeg",
        categoria: {
            nombre: "Adidas",
            id: "marcasreconocidas"
        },
        precio: 1000
    },
    {
        id: "gorra-adidas-03",
        titulo: "Gorra Adidas Camouflage jungle",
        imagen: "./img/marcasReconocidas/adidas/03.jpeg",
        categoria: {
            nombre: "Adidas",
            id: "marcasreconocidas"
        },
        precio: 1000
    },

    // Gorras Jordan
    {
        id: "gorra-jordan-01",
        titulo: "Gorra Jordan Red",
        imagen: "./img/marcasReconocidas/jordan/01.jpeg",
        categoria: {
            nombre: "Jordan",
            id: "marcasreconocidas"
        },
        precio: 1000
    },
    {
        id: "gorra-jordan-02",
        titulo: "Gorra Jordan Black",
        imagen: "./img/marcasReconocidas/jordan/02.jpeg",
        categoria: {
            nombre: "Jordan",
            id: "marcasreconocidas"
        },
        precio: 1000
    },

    // Gorras Nike
    {
        id: "gorra-nike-01",
        titulo: "Gorra Nike Blue",
        imagen: "./img/marcasReconocidas/nike/01.jpeg",
        categoria: {
            nombre: "Nike",
            id: "marcasreconocidas"
        },
        precio: 1000
    },

    // Gorras Puma
    {
        id: "gorra-puma-01",
        titulo: "Gorra Puma Classic",
        imagen: "./img/marcasReconocidas/puma/01.jpeg",
        categoria: {
            nombre: "Puma",
            id: "marcasreconocidas"
        },
        precio: 1000
    },
    {
        id: "gorra-puma-02",
        titulo: "Gorra Puma Black",
        imagen: "./img/marcasReconocidas/puma/02.jpeg",
        categoria: {
            nombre: "Puma",
            id: "marcasreconocidas"
        },
        precio: 1000
    },
];



const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector(".titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");

let contadorCarrito = 0;
const numerito = document.querySelector(".numerito");

let productosEnCarrito = [];

function cargarProductos(gorrasElegidas) {
    contenedorProductos.innerHTML = "";
    gorrasElegidas.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.append(div);
    });
    actualizarBotonesAgregar();
}

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        const categoriaSeleccionada = e.currentTarget.id;
        const textoCategoria = e.currentTarget.textContent;
        tituloPrincipal.textContent = `Productos de ${textoCategoria}`;

        if (categoriaSeleccionada !== "todos") {
            const productosBoton = productos.filter(producto => producto.categoria.id === categoriaSeleccionada);
            cargarProductos(productosBoton);
        } else {
            cargarProductos(productos);
        }
    });
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click" , agregarAlCarrito);
    })
}

function actualizarCarrito() {
    numerito.textContent = contadorCarrito;
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (!productosEnCarrito.some(producto => producto.id === idBoton)) {
        productosEnCarrito.push(productoAgregado);
    }

    contadorCarrito++;
    actualizarCarrito();
    guardarCarrito();
}

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
}

function cargarCarrito() {
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
    contadorCarrito = productosEnCarrito.length;
    actualizarCarrito();
}

function cargarProductosCarrito() {
    const contenedorCarrito = document.querySelector(".contenedor-carrito");
    contenedorCarrito.innerHTML = "";

    productosEnCarrito.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto-carrito");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${producto.precio}</p>
            </div>
        `;
        contenedorCarrito.append(div);
    });
}
