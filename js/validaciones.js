const form = document.getElementById('formulario');

const nombre = document.getElementById('nombre');
const message1 = document.getElementById('message1');

const correo = document.getElementById('correo');
const message2 = document.getElementById('message2');

const numero = document.getElementById('numero');
const message3 = document.getElementById('message3');

const contra1 = document.getElementById('contra1');
const message4 = document.getElementById('message4');

const contra2 = document.getElementById('contra2');
const message5 = document.getElementById('message5');

function validar(){
	var todoCorrecto = true;	
	//VALIDACION DEL NOMBRE
	var validarNombre = [];
    if(/^([A-Z,a-z])+$/.test(nombre.value)){
		nombre.style.borderColor="green";
		todoCorrecto = true;
    }else{
		message1.style.color='red';
		validarNombre.push('Nombre invalido o vacio');
		nombre.style.borderColor="red";
		todoCorrecto = false;
    }
	message1.innerHTML = validarNombre;

	//VALIDACION DEL CORREO
	var validarCorreo = [];
    if(/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(correo.value)){
		correo.style.borderColor="green";
		todoCorrecto = true;
    }else{
		message2.style.color='red';
		validarCorreo.push('Correo invalido o vacio');
		correo.style.borderColor="red";
		todoCorrecto = false;
    }
	message2.innerHTML = validarCorreo;

	//VALIDACION DEL NUMERO
	var validarNumero = [];
    if(/^[0-9]{10}$/.test(numero.value)){
		numero.style.borderColor="green";
		todoCorrecto = true;
    }else{
		message3.style.color='red';
		validarNumero.push('Numero invalido o vacio');
		numero.style.borderColor="red";
		todoCorrecto = false;
    }
	message3.innerHTML = validarNumero;

	//VALIDACION DE LA CONTRASEÑA
	var validarContra1 = [];
	var validarContra2 = [];
	var foco =false;
	if(/^([A-Z,a-z], [0-9])*$/.test(contra1.value)){
		message4.style.color='red';
		validarContra1.push('Contraseña invalida o vacia');
		contra1.style.borderColor="red";
		todoCorrecto = false;
    }else{
		contra1.style.borderColor="green";
		todoCorrecto = true;
		foco = true;
		if(foco === true){
			if(/^([A-Z,a-z], [0-9])*$/.test(contra2.value)){
				message4.style.color='red';
				validarContra2.push('Confirma tu contraseña');
				contra2.style.borderColor="red";
				todoCorrecto = false;
			}else{
				if(contra1.value == contra2.value){
					contra1.style.borderColor="green";
					contra2.style.borderColor="green";
					todoCorrecto = true;
				}else{
					message4.style.color='red';
					validarContra2.push('Verifica tu contraseña que sean las mismas');
					contra2.style.borderColor="red";
					todoCorrecto = false;
				}
			}
		}
    }
	message4.innerHTML = validarContra1;
	message5.innerHTML = validarContra2;

	//VALIDACION DE LA SEGUNDA CONTRASEÑA
	if(foco === false){
		if(/^([A-Z,a-z], [0-9])*$/.test(contra2.value)){
			message5.style.color='red';
			validarContra2.push('Necesario llenar el primer campo');
			contra2.style.borderColor="red";
			todoCorrecto = false;
		}else{
			contra2.style.borderColor="green";
			todoCorrecto = true;
		}
		message5.innerHTML = validarContra2;
	}

	//VALIDACION DE POLITICAS
	if (document.getElementById('politicas').checked && todoCorrecto === true){
		alert('Tu formulario se ha enviado satisfactoriamente');
	}
}

