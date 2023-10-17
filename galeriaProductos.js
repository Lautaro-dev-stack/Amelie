//Funcion para crear la Galeria de Productos

//Funcion para crear TARJETA de PRODUCTO --> CATALOGO
/*
let galeria = document.querySelector('.contenedor-galeria');
*/
function tarjetaProducto(urlFoto, nombre, precio, bajada){

    //Tarjeta que contiene al producto
    let tarjeta = document.createElement('div');
    tarjeta.classList.add("tarjeta");

    //Foto del producto
    let fotoProducto = document.createElement('div');
    fotoProducto.classList.add("foto-producto");

    let foto = document.createElement('img');
    foto.setAttribute('src', urlFoto);
    foto.setAttribute('alt', nombre);
    
    fotoProducto.appendChild(foto);

    //Descripcion del producto
    let descripcionContainer = document.createElement('div');
    descripcionContainer.classList.add("descripcion-producto");

    //Seccion que contiene nombre y precio
    let cabecera = document.createElement('div');
    cabecera.classList.add("cabecera");

    let nombreProducto = document.createElement('h3');
    nombreProducto.classList.add("nombre-producto");
    nombreProducto.innerHTML = nombre;

    let precioProducto = document.createElement('span');
    precioProducto.classList.add("precio");
    precioProducto.innerHTML = precio;

    cabecera.append(nombreProducto,precioProducto);

    //Seccion con la bajada o detalle del producto
    let detalle = document.createElement('p');
    detalle.classList.add("detalle");
    detalle.innerHTML = bajada;

    descripcionContainer.append(cabecera, detalle);

    tarjeta.append(fotoProducto, descripcionContainer);
    /*
    contenedor.appendChild(tarjeta);
    galeria.appendChild(contenedor);
    */
    return tarjeta;
}

/*
tarjetaProducto('https://www.1999.co.jp/itbig24/10249088.jpg', 'Buzo Caps Corp', 15000, 'descripción del buzo');
tarjetaProducto('https://www.1999.co.jp/itbig24/10249088.jpg', 'Buzo Caps Corp', 15000, 'descripción del buzo');
tarjetaProducto('https://www.1999.co.jp/itbig24/10249088.jpg', 'Buzo Caps Corp', 15000, 'descripción del buzo');
tarjetaProducto('https://www.1999.co.jp/itbig24/10249088.jpg', 'Buzo Caps Corp', 15000, 'descripción del buzo');
tarjetaProducto('https://www.1999.co.jp/itbig24/10249088.jpg', 'Buzo Caps Corp', 15000, 'descripción del buzo');
tarjetaProducto('https://www.1999.co.jp/itbig24/10249088.jpg', 'Buzo Caps Corp', 15000, 'descripción del buzo');
*/


/*Cargar Productos al CATALOGO*/

/*Cargar Productos de Porcelana Fria*/
// Cargar el archivo JSON
var listaAccesorios;
var listaTejidos;
var listaPorcelanaFria;

var rutaCatalogoAccesorios = './catalogo-accesorios.json';
var galeriaAccesorios = document.querySelector('.contenedor-galeria-accesorios');
var contenedorAccesorios = document.querySelector('.contenedor-accesorios');

var rutaCatalogoTejido = './catalogo-tejido.json';
var galeriaTejido = document.querySelector('.contenedor-galeria-tejido');
var contenedorTejido = document.querySelector('.contenedor-tejido');

var rutaCatalogoPorcelanaFria = './catalogo-porcelana-fria.json';
var galeriaPorcelanaFria = document.querySelector('.contenedor-galeria-porcelana-fria');
var contenedorPorcelanaFria = document.querySelector('.contenedor-porcelana-fria');


document.addEventListener('DOMContentLoaded', function () {    
    catalogoTejido(rutaCatalogoTejido);
    catalogoPorcelanaFria(rutaCatalogoPorcelanaFria);
    catalogoAccesorios(rutaCatalogoAccesorios);      
});  


function catalogoAccesorios(ruta){
    fetch(ruta)
        .then(response => response.json())
        .then(data => {
            listaAccesorios = data; // Asignamos el contenido a la variable 
            listaAccesorios.forEach(producto => {
                /*console.log(producto);*/
                cargarAccesorios(producto);
            });
    })
    .catch(error => {
        console.error('Error al cargar el archivo catalogo-accesorios.json:', error);
    });
}

function catalogoPorcelanaFria(ruta){
    fetch(ruta)
        .then(response => response.json())
        .then(data => {
            listaPorcelanaFria = data; // Asignamos el contenido a la variable 
            listaPorcelanaFria.forEach(producto => {
                /*console.log(producto);*/
                cargarPorcelanaFria(producto);
            });
    })
    .catch(error => {
        console.error('Error al cargar el archivo catalogo-porcelana-fria.json:', error);
    });
}

function catalogoTejido(ruta){
    fetch(ruta)
        .then(response => response.json())
        .then(data => {
            listaTejidos = data; // Asignamos el contenido a la variable 
            listaTejidos.forEach(producto => {
                /*console.log(producto);*/
                cargarTejidos(producto);
            });
    })
    .catch(error => {
        console.error('Error al cargar el archivo catalogo-tejido.json:', error);
    });
}

function cargarAccesorios(producto){
    let url = './productos/' + producto.PRODUCTOS;
    /* tarjetaProducto(urlFoto, nombre, precio, descripcion) */
    let tarjeta = tarjetaProducto(url, producto.NOMBRE, producto.PRECIO, producto.DESCRIPCION);
    contenedorAccesorios.appendChild(tarjeta);
    galeriaAccesorios.appendChild(contenedorAccesorios);
}

function cargarTejidos(producto){
    let url = './productos/' + producto.PRODUCTOS;
    /* tarjetaProducto(urlFoto, nombre, precio, descripcion) */
    let tarjeta = tarjetaProducto(url, producto.NOMBRE, producto.PRECIO, producto.DESCRIPCION);
    contenedorTejido.appendChild(tarjeta);
    galeriaTejido.appendChild(contenedorTejido);
}

function cargarPorcelanaFria(producto){
    let url = './productos/' + producto.PRODUCTOS;
    /* tarjetaProducto(urlFoto, nombre, precio, descripcion) */
    let tarjeta = tarjetaProducto(url, producto.NOMBRE, producto.PRECIO, producto.DESCRIPCION);
    contenedorPorcelanaFria.appendChild(tarjeta);
    galeriaPorcelanaFria.appendChild(contenedorPorcelanaFria);
}