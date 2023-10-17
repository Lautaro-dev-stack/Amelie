//
document.querySelector("button.button-menu-toggle").addEventListener("click", 
    function() {
        document.querySelector(".nav-links").classList.toggle("nav-links-responsive");
        }
    )



// Función para cambiar la imagen al pasar el mouse en porcelana:
function cambiarImagenAlPasarMouse1(imagenElemento) {
    const listaDeImagenes = [
        'imagenes/porcelana1.jpg.jpeg',
        'imagenes/porcelana.jpg.jpeg',
        'imagenes/porcelana2.jpg.jpeg'
    ];

    // Escoge una imagen diferente al azar
    let nuevaImagen;
    do {
        nuevaImagen = listaDeImagenes[Math.floor(Math.random() * listaDeImagenes.length)];
    } while (nuevaImagen === imagenElemento.src); // Asegura que la nueva imagen sea diferente a la actual

    // Cambia la imagen
    imagenElemento.src = nuevaImagen;
}

// Agrega eventos mouseover a las imágenes
const listaDeImagenes = document.querySelectorAll('.gridPorcelana ul li img');
listaDeImagenes.forEach((imagen) => {
    imagen.addEventListener('mouseover', function() {
        cambiarImagenAlPasarMouse1(imagen);
    });
});

// Función para cambiar la imagen al pasar el mouse en tejidos:
function cambiarImagenAlPasarMouse2(imagenElemento) {
    const listaDeImagenes2 = [
        'imagenes/crochet1.jpeg',
        'imagenes/crochet2.jpeg',
        'imagenes/crochet.jpeg'
    ];

    // Escoge una imagen diferente al azar
    let nuevaImagen2;
    do {
        nuevaImagen2 = listaDeImagenes2[Math.floor(Math.random() * listaDeImagenes2.length)];
    } while (nuevaImagen2 === imagenElemento.src); // Asegura que la nueva imagen sea diferente a la actual

    // Cambia la imagen
    imagenElemento.src = nuevaImagen2;
}

// Agrega eventos mouseover a las imágenes
const listaDeImagenes2 = document.querySelectorAll('.gridCrochet img');
listaDeImagenes2.forEach((imagen) => {
    imagen.addEventListener('mouseover', function() {
        cambiarImagenAlPasarMouse2(imagen);
    });
});
// Función para cambiar la imagen al pasar el mouse en Acsesorios:
function cambiarImagenAlPasarMouse3(imagenElemento) {
    const listaDeImagenes3 = [
        'imagenes/Acsesorio3.png.jpeg',
        'imagenes/Acsesorio4.png.jpeg',
    ];

    // Escoge una imagen diferente al azar
    let nuevaImagen3;
    do {
        nuevaImagen3 = listaDeImagenes3[Math.floor(Math.random() * listaDeImagenes3.length)];
    } while (nuevaImagen3 === imagenElemento.src); // Asegura que la nueva imagen sea diferente a la actual

    // Cambia la imagen
    imagenElemento.src = nuevaImagen3;
}

// Agrega eventos mouseover a las imágenes
const listaDeImagenes3 = document.querySelectorAll('.gridCrochet img');
listaDeImagenes3.forEach((imagen) => {
    imagen.addEventListener('mouseover', function() {
        cambiarImagenAlPasarMouse3(imagen);
    });
});


// Función para PREGUNTAS FRECUENTES //

let pregunta = document.querySelectorAll('.pregunta');
let btndropdown = document.querySelectorAll('.pregunta .more');
let respuesta = document.querySelectorAll('.respuesta');
let parrafo = document.querySelectorAll('.respuesta p');

for (let i = 0; i < btndropdown.length; i++) {
    let altoparrafo = parrafo[i].clientHeight;
    let switchc = 0;

    btndropdown[i].addEventListener('click', () => {
        if (switchc == 0) {
            respuesta[i].style.height = `${altoparrafo}px`;
            pregunta[i].style.marginBottom = '30px';
            btndropdown[i].innerHTML = '<i>-</i>';
            switchc++;
        } else if (switchc == 1) {
            respuesta[i].style.height = '0';
            pregunta[i].style.marginBottom = '0';
            btndropdown[i].innerHTML = '<i>+</i>';
            switchc--;
        }
    });
}