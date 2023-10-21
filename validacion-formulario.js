let formulario = document.querySelector("#formulario-contacto");

//Coleccion -> elementos del formulario
let elementos = formulario.elements;
console.log(elementos);

function validarForm(e){
    validarNombre(e);
    validarEmail(e);
    validarCheckbox(e);
}


let validarNombre = function(e){
    if(elementos[0].value.lenght < 4){
        document.formulario.nombre.focus();
        alert("Nombre invalido");
        e.preventDefault();
    }
}

let validarEmail = function(e){
    let re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	let valor = elementos[1].value;
    if(!re.exec(valor)){
		alert('email no valido');
        e.preventDefault();
	}

}

let validarCheckbox = function(e){
    if(elementos[2].checked == false && elementos[3].checked == false && elementos[4].checked == false){
        alert("Elegir al menos una preferencia");
        e.preventDefault();
    }
}