//Funcion para crear la Galeria de Productos

//Funcion para crear TARJETA de PRODUCTO --> CATALOGO
let galeria = document.querySelector('.contenedor-galeria');

function tarjetaProducto(urlFoto, nombre, precio, bajada){
    let contenedor = document.querySelector('.contenedor-productos');

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
    precioProducto.innerHTML = "$" + precio;

    cabecera.append(nombreProducto,precioProducto);

    //Seccion con la bajada o detalle del producto
    let detalle = document.createElement('p');
    detalle.classList.add("detalle");
    detalle.innerHTML = bajada;

    descripcionContainer.append(cabecera, detalle);

    tarjeta.append(fotoProducto, descripcionContainer);
    contenedor.appendChild(tarjeta);
    galeria.appendChild(contenedor);
}


tarjetaProducto('https://www.1999.co.jp/itbig24/10249088.jpg', 'Buzo Caps Corp', 15000, 'descripción del buzo');

tarjetaProducto('https://www.1999.co.jp/itbig24/10249088.jpg', 'Buzo Caps Corp', 15000, 'descripción del buzo');

tarjetaProducto('https://www.1999.co.jp/itbig24/10249088.jpg', 'Buzo Caps Corp', 15000, 'descripción del buzo');

tarjetaProducto('https://www.1999.co.jp/itbig24/10249088.jpg', 'Buzo Caps Corp', 15000, 'descripción del buzo');

tarjetaProducto('https://www.1999.co.jp/itbig24/10249088.jpg', 'Buzo Caps Corp', 15000, 'descripción del buzo');

tarjetaProducto('https://www.1999.co.jp/itbig24/10249088.jpg', 'Buzo Caps Corp', 15000, 'descripción del buzo');
