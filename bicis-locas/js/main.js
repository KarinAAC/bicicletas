function validateForm(){
	/* Escribe tú código aquí */
  var nombre     = document.getElementById('name');
  var apellido   = document.getElementById('lastname');
  var email      = document.getElementById('input-email');
  var contraseña = document.getElementById('input-password');
  var bicicleta  = document.getElementsByTagName('select')[0];

  if(nombre.value == ""){
    alert("Falta completar la sección NOMBRE");
  }
  else if( !(/[a-zA-Z]/.test(nombre.value))){
    alert("Error sólo letras de la A-Z");
  }
  else if( !(/[A-Z]{1}/.test(nombre.value))){
    alert("Error la primera letra debe ser MAYUSCULA");
  }
  else if(apellido.value == ""){
    alert("Falta completar la sección LASTNAME");
  }
  else if( !(/[a-zA-Z]/.test(apellido.value))){
    alert("Error sólo letras de la A-Z");
  }
  else if( !(/[A-Z]{1}/.test(apellido.value))){
    alert("Error la primera letra debe ser MAYUSCULA");
  }
  else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email.value))){
    alert("Ingrese un EMAIL válido");
  }
  else if(contraseña.value == ""){
    alert("Falta completar la sección CONTRASEÑA");
  }
  else if((contraseña.value).length <6){
    alert("La contraseña debe tener al menos 6 caracteres");
  }
  else if(contraseña.value == "password" || contraseña.value == "123456" || contraseña.value == "098754"){
    alert("Introduzca una contraseña válida");
  }
  else if(bicicleta.value == "0"){
    alert("No seleccionaste tu BICICLETA");
  }
}
